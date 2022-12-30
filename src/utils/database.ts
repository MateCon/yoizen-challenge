import 'reflect-metadata';
import { DataSource } from 'typeorm';
import WebServiceLog from '../models/webServiceLogModel';
import WebService from '../models/clientModel';
require('dotenv').config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DB_NAME,
    entities: [WebServiceLog, WebService],
    migrations: [],
    subscribers: [],
    synchronize: false,
    migrationsRun: false,
    dropSchema: false,
    logging: false,
    // options: {
    //     readOnlyIntent: true,
    // },
});

const db = AppDataSource.manager;

export default db;
