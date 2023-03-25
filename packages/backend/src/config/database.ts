/* eslint-disable no-console */
import { Pool } from 'pg';

const connectDB = () => {
  try {
    const pool = new Pool();

    console.info('Postgres Connected...');
    return pool;
  } catch (err) {
    console.error(String(err));

    process.exit(1);
  }
};

const dbConnection = connectDB();

export default dbConnection;
