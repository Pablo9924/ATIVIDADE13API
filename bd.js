//bd.js
import pkg from "pg";

const { Pool } = pkg;

async function selectUsuarios() {
  const client = await coneccao();
  const res = await client.query("SELECT * FROM usuario");
  client.release();
  return res.rows;
}

async function coneccao() {
  const pool = new Pool({
    connectionString: process.env.URL_BD,
  });
  return pool.conneccao();
}

//bd.js

export { selectUsuarios };

