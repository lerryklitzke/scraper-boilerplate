declare namespace NodeJS {
  interface ProcessEnv {
    DB_TYPE: 'postgres'; // change if you want to connect to a different database (if you do that run `npm uninstall pg`)
    DB_HOST: string;
    DB_PORT: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
  }
}