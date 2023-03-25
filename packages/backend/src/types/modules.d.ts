declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // postgres
      PGHOST: string;
      PGUSER: string;
      PGPORT: number;
      PGPASSWORD: string;
      PGDATABASE: string;
      // server
      PORT: number;
      // other
      XOR_KEY: string;
      JWT_SECRET: string;
      JWT_EXPIRATION: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
