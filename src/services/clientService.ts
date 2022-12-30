import Client from '../models/clientModel';
import axiosClient from '../utils/axiosClient';

class ClientService {
    async getAll(): Promise<Client[]> {
        const response = await axiosClient.get(
            '/v3/d8488912-f032-43ad-b296-c3eda2b9675d'
        );
        return response.data.clients as Client[];
    }

    async getById(id: string): Promise<Client> {
        const clients = await this.getAll();
        const client = clients.find((c) => c.id === id);
        if (!client) throw new Error('client not found');
        return client;
    }

    async getByName(name: string): Promise<Client> {
        const clients = await this.getAll();
        const client = clients.find((c) => c.name === name);
        if (!client) throw new Error('client not found');
        return client;
    }

    async getByEmail(email: string): Promise<Client> {
        const clients = await this.getAll();
        const client = clients.find((c) => c.email === email);
        if (!client) throw new Error('client not found');
        return client;
    }
}

export default new ClientService();
