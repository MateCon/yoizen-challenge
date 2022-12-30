import { Router } from 'express';
import parseErr from '../utils/parseErr';
import { authMiddleware } from './authController';
import policyService from '../services/policyService';

const router = Router();

router.get('/name/:name', authMiddleware, async (req, res) => {
    try {
        if (req.body.client.role !== 'admin') throw new Error('Unauthorized');
        const data = await policyService.getByName(req.params.name);
        res.status(200).send(data);
    } catch (err: any) {
        const { status, message } = parseErr(err);
        res.status(status).send(message);
    }
});

export default router;
