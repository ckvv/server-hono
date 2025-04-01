import { env } from 'node:process';
import pg from 'pg';

const pool = new pg.Pool({
  connectionString: env.DATABASE_URL,
});

async function query(text: string, params?: any) {
  return pool.query(text, params);
}

export default {
  fetch: async () => {
    return Response.json(await query('SELECT $1::text as message', ['Hello world!']))
  }
}