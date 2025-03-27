import { env } from 'node:process';
import pg from 'pg';

const pool = new pg.Pool({
  connectionString: env.DATABASE_URL,
});

export async function query(text: string, params?: any) {
  return pool.query(text, params);
}
