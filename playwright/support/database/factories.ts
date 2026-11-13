import { generateOrderCode } from '../helpers';
import type { OrderDetails } from '../actions/orderLookupActions';
import type { NewOrder, OrderStatus } from './types';

export interface OrderSeedResult {
  dbOrder: NewOrder;
  uiOrder: OrderDetails;
}

const COLOR_MAP: Record<string, string> = {
  'midnight-black': 'Midnight Black',
  'glacier-blue': 'Glacier Blue',
  'lunar-white': 'Lunar White',
};

const WHEEL_MAP: Record<string, string> = {
  sport: 'sport Wheels',
  aero: 'aero Wheels',
};

const PAYMENT_MAP: Record<string, string> = {
  avista: 'À Vista',
  financiamento: 'Financiamento 12x',
};

/**
 * Converte dados de banco para a representação esperada pelo OrderDetails da UI
 */
export function mapDbOrderToUiDetails(dbOrder: NewOrder): OrderDetails {
  const colorLabel = COLOR_MAP[dbOrder.color] || dbOrder.color;
  const wheelLabel = WHEEL_MAP[dbOrder.wheel_type] || `${dbOrder.wheel_type} Wheels`;
  const paymentLabel = PAYMENT_MAP[dbOrder.payment_method] || dbOrder.payment_method;

  return {
    number: dbOrder.order_number,
    status: dbOrder.status as OrderStatus,
    color: colorLabel,
    wheels: wheelLabel,
    customer: {
      name: dbOrder.customer_name,
      email: dbOrder.customer_email,
      document: dbOrder.customer_cpf,
      phone: dbOrder.customer_phone,
    },
    payment: paymentLabel,
    total_price: String(dbOrder.total_price),
  };
}

/**
 * Gera os dados de um pedido pronto para inserção no banco e mapeado para a UI
 */
export function buildOrder(
  status: OrderStatus,
  overrides?: Partial<NewOrder>
): OrderSeedResult {
  const orderNumber = overrides?.order_number || generateOrderCode();
  const color = overrides?.color || 'midnight-black';
  const wheelType = overrides?.wheel_type || 'sport';
  const customerName = overrides?.customer_name || 'QA Automator';
  const customerEmail = overrides?.customer_email || 'qa@velo.dev';
  const customerPhone = overrides?.customer_phone || '(11) 99999-9999';
  const customerCpf = overrides?.customer_cpf || '000.000.141-41';
  const paymentMethod = overrides?.payment_method || 'avista';
  const totalPrice = overrides?.total_price || 52500;
  const optionals = overrides?.optionals || ['precision-park', 'flux-capacitor'];

  const dbOrder: NewOrder = {
    order_number: orderNumber,
    color,
    wheel_type: wheelType,
    customer_name: customerName,
    customer_email: customerEmail,
    customer_phone: customerPhone,
    customer_cpf: customerCpf,
    payment_method: paymentMethod,
    total_price: totalPrice,
    status,
    optionals,
    ...overrides,
  };

  const uiOrder = mapDbOrderToUiDetails(dbOrder);

  return { dbOrder, uiOrder };
}

