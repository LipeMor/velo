import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import type { Database } from './types';

// Garante o carregamento do .env caso ainda não tenha sido carregado pelo test runner
try {
  process.loadEnvFile();
} catch {
  // Ignora se arquivo não existir
}

let poolInstance: Pool | null = null;
let dbInstance: Kysely<Database> | null = null;

export function getPool(): Pool {
  if (!poolInstance) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error(
        'DATABASE_URL não configurada nas variáveis de ambiente. Verifique seu arquivo .env'
      );
    }

    poolInstance = new Pool({
      connectionString,
      ssl: { rejectUnauthorized: false },
      max: 10,
      idleTimeoutMillis: 30000,
    });
  }
  return poolInstance;
}

export function getDb(): Kysely<Database> {
  if (!dbInstance) {
    dbInstance = new Kysely<Database>({
      dialect: new PostgresDialect({
        pool: getPool(),
      }),
    });
  }
  return dbInstance;
}

export async function closeDb(): Promise<void> {
  if (dbInstance) {
    await dbInstance.destroy();
    dbInstance = null;
    poolInstance = null;
  }
}

export const db = getDb();

