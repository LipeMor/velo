import { db } from './connection';
import { buildOrder, type OrderSeedResult } from './factories';
import type { NewOrder, OrderRow, OrderStatus } from './types';

/**
 * Insere um novo pedido no banco de dados via Kysely
 */
export async function insertOrder(order: NewOrder): Promise<OrderRow> {
  return await db
    .insertInto('orders')
    .values(order)
    .returningAll()
    .executeTakeFirstOrThrow();
}

/**
 * Cria e insere um pedido com o status especificado e retorna os dados para banco e UI
 */
export async function insertOrderByStatus(
  status: OrderStatus,
  overrides?: Partial<NewOrder>
): Promise<OrderSeedResult> {
  const seed = buildOrder(status, overrides);
  await insertOrder(seed.dbOrder);
  return seed;
}

/**
 * Cria e insere um pedido APROVADO
 */
export async function insertApprovedOrder(
  overrides?: Partial<NewOrder>
): Promise<OrderSeedResult> {
  return insertOrderByStatus('APROVADO', {
    color: 'midnight-black',
    wheel_type: 'sport',
    customer_name: 'FILIPE SANTOS',
    customer_email: 'filipeqa@gmail.com',
    ...overrides,
  });
}

/**
 * Cria e insere um pedido REPROVADO
 */
export async function insertRejectedOrder(
  overrides?: Partial<NewOrder>
): Promise<OrderSeedResult> {
  return insertOrderByStatus('REPROVADO', {
    color: 'midnight-black',
    wheel_type: 'sport',
    customer_name: 'Steve Jobs',
    customer_email: 'jobs@apple.com',
    ...overrides,
  });
}

/**
 * Cria e insere um pedido EM_ANALISE
 */
export async function insertPendingOrder(
  overrides?: Partial<NewOrder>
): Promise<OrderSeedResult> {
  return insertOrderByStatus('EM_ANALISE', {
    color: 'glacier-blue',
    wheel_type: 'aero',
    customer_name: 'João da Silva',
    customer_email: 'joao@velo.dev',
    total_price: 40000,
    optionals: [],
    ...overrides,
  });
}

/**
 * Remove um pedido pelo número do pedido (order_number)
 */
export async function deleteOrderByNumber(orderNumber: string): Promise<void> {
  await db
    .deleteFrom('orders')
    .where('order_number', '=', orderNumber)
    .execute();
}

/**
 * Remove múltiplos pedidos pelos números informados
 */
export async function deleteOrdersByNumbers(orderNumbers: string[]): Promise<void> {
  if (orderNumbers.length === 0) return;
  await db
    .deleteFrom('orders')
    .where('order_number', 'in', orderNumbers)
    .execute();
}

/**
 * Consulta um pedido pelo número do pedido (order_number)
 */
export async function findOrderByNumber(
  orderNumber: string
): Promise<OrderRow | undefined> {
  return await db
    .selectFrom('orders')
    .selectAll()
    .where('order_number', '=', orderNumber)
    .executeTakeFirst();
}

