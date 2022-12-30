import { Request, Response, Router } from 'express';
import parseErr from '../utils/parseErr';
import clientService from '../services/clientService';
import { z } from 'zod';
import Client from '../models/clientModel';

const router = Router();

const loginSchema = z.object({
    email: z.string(),
    password: z.string(),
});

const authIps: { [key: string]: Client } = {};

router.post('/login', async (req, res) => {
    try {
        loginSchema.parse(req.body);

        const { email, password } = req.body;
        const client = await clientService.getByEmail(email);

        if (client.password === password) {
            authIps[req.ip] = client;
            res.status(200).send('You logged in succesfully');
        } else {
            res.status(400).send('Incorrect password');
        }
    } catch (err: any) {
        const { status, message } = parseErr(err);
        res.status(status).send(message);
    }
});

export const authMiddleware = (req: Request, res: Response, next: Function) => {
    if (req.ip in authIps) {
        req.body.client = authIps[req.ip];
        next();
    } else {
        res.status(400).send(
            'Auth is required. Go to POST /login and pass email and password through the body.'
        );
    }
};

export default router;
