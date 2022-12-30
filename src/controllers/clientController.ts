import { Router } from 'express';
import parseErr from '../utils/parseErr';
import clientService from '../services/clientService';
import { authMiddleware } from './authController';

const router = Router();

router.get('/id/:id', authMiddleware, async (req, res) => {
    try {
        if (req.body.client.role !== 'admin' && req.body.client.role !== 'user')
            throw new Error('Unauthorized');
        const data = await clientService.getById(req.params.id);
        res.status(200).send(data);
    } catch (err: any) {
        const { status, message } = parseErr(err);
        res.status(status).send(message);
    }
});

router.get('/name/:name', authMiddleware, async (req, res) => {
    try {
        if (req.body.client.role !== 'admin' && req.body.client.role !== 'user')
            throw new Error('Unauthorized');
        const data = await clientService.getByName(req.params.name);
        res.status(200).send(data);
    } catch (err: any) {
        const { status, message } = parseErr(err);
        res.status(status).send(message);
    }
});

export default router;
