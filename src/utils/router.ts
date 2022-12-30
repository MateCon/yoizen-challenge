import express, { Application, RequestHandler } from 'express';
import { readdirSync } from 'fs';
import { join } from 'path';

const controllerFolder = join(__dirname, '..', 'controllers');

const router = (...middlewares: RequestHandler[]): Application => {
    const app: Application = express();
    for (let middleware of middlewares) app.use(middleware);
    readdirSync(controllerFolder).forEach((file: string) => {
        if (!/Controller/.test(file)) return;
        const path = file.split('Controller')[0];
        app.use(
            `/${path === 'index' ? '' : path}`,
            require(join(controllerFolder, file)).default
        );
    });
    return app;
};

export default router;
