//bd.js
import pkg from "pg";
const { Pool } = pkg;

async function Connect() {
  const pool = new Pool({
    connectionString: process.env.URL_BD,
  });
  return pool.connect();
}

async function selectUsuarios() {
  const client = await Connect();
  const res = await client.query("SELECT * FROM usuario");
	  client.release();
  return res.rows;
}

export { selectUsuarios };