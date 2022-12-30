import express, { Application } from 'express';
import cors from 'cors';
import router from './utils/router';

(async () => {
    const app: Application = router(express.json(), cors());
    const PORT = process.env.PORT || 8080;

    app.get('*', (_, res) => {
        res.status(404).send('404 error - page not found');
    });

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
})();
