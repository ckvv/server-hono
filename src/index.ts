import { Hono } from 'hono'
import { query } from './pg.js'
const app = new Hono()

app.get('/', async (c) => c.json(await query('SELECT $1::text as message', ['Hello world!'])))

export default app