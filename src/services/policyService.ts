import Client from '../models/clientModel';
import Policy from '../models/policyModel';
import axiosClient from '../utils/axiosClient';
import clientService from './clientService';

class ClientService {
    async getAll(): Promise<Policy[]> {
        const response = await axiosClient.get('/v2/580891a4100000e8242b75c5');
        return response.data.policies as Policy[];
    }

    async getByName(name: string): Promise<Policy[]> {
        const client = await clientService.getByName(name);
        const policies = await this.getAll();
        return policies.filter((p) => p.email === client.email);
    }
}

export default new ClientService();
