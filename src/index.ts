import { App } from './app';
import { AppDataSource } from './utils/dataSource';

AppDataSource.initialize()
  .then(async () => {
    console.log('Connected to the database.');
    App();
  });