// db.js
import { PGlite } from '@electric-sql/pglite';

let db;

export async function initDb() {
  db = await PGlite.create('idb://patient-db');
  await db.exec(`
    CREATE TABLE IF NOT EXISTS patients (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      age INTEGER,
      gender TEXT,
      contact TEXT
    );
  `);
  return db;
}

export function getDb() {
  return db;
}
