import { db } from './database/connection';
import type { NewOrder, OrderRow } from './database/types';

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
 * Remove um pedido pelo número do pedido (order_number)
 */
export async function deleteOrderByNumber(orderNumber: string): Promise<void> {
  await db
    .deleteFrom('orders')
    .where('order_number', '=', orderNumber)
    .execute();
}

