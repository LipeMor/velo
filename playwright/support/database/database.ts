import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import type { Database } from './schema';

try {
  process.loadEnvFile();
} catch {
  // Ignora se o arquivo .env não for encontrado
}

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

export const db = new Kysely<Database>({
  dialect: new PostgresDialect({ pool }),
});

