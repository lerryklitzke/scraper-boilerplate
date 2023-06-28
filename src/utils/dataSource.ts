import 'reflect-metadata';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
// import your entities here and add them to the entities array below
// import { Data } from '../entity/example';

config();
const entities: any[] = [/* Add entities here */];

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities
})