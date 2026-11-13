import type { ColumnType, Generated, Insertable, Selectable, Updateable } from 'kysely';

export type OrderStatus = 'APROVADO' | 'REPROVADO' | 'EM_ANALISE';
export type PaymentMethod = 'avista' | 'financiamento';

export interface OrdersTable {
  id: Generated<string>;
  order_number: string;
  color: string;
  wheel_type: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_cpf: string;
  payment_method: PaymentMethod | string;
  total_price: number | string;
  status: OrderStatus;
  created_at: Generated<Date | string>;
  updated_at: Generated<Date | string>;
  optionals: ColumnType<string[], string[] | undefined, string[]>;
}

export interface Database {
  orders: OrdersTable;
}

export type OrderRow = Selectable<OrdersTable>;
export type NewOrder = Insertable<OrdersTable>;
export type OrderUpdate = Updateable<OrdersTable>;

