import { test, expect } from '../support/fixtures';
import { generateOrderCode } from '../support/helpers';
import type { OrderDetails } from '../support/actions/orderLookupActions';

test.describe('Consulta de Pedido', () => {
  test.beforeEach(async ({ app }) => {
    await app.orderLookup.open();
  });

  test('deve consultar um pedido aprovado', async ({ app }) => {
    const order: OrderDetails = {
      number: 'VLO-QNE15F',
      status: 'APROVADO',
      color: 'Midnight Black',
      wheels: 'sport Wheels',
      customer: {
        name: 'FILIPE SANTOS',
        email: 'filipeqa@gmail.com'
      },
      payment: 'À Vista'
    };

    await app.orderLookup.searchOrder(order.number);
    await app.orderLookup.validateOrderDetails(order);
    await app.orderLookup.validateStatusBadge(order.status);
  });

  test('deve consultar um pedido reprovado', async ({ app }) => {
    const order: OrderDetails = {
      number: 'VLO-8XRTQ1',
      status: 'REPROVADO',
      color: 'Midnight Black',
      wheels: 'sport Wheels',
      customer: {
        name: 'Steve Jobs',
        email: 'jobs@apple.com'
      },
      payment: 'À Vista'
    };

    await app.orderLookup.searchOrder(order.number);
    await app.orderLookup.validateOrderDetails(order);
    await app.orderLookup.validateStatusBadge(order.status);
  });

  test('deve consultar um pedido em analise', async ({ app }) => {
    const order: OrderDetails = {
      number: 'VLO-P13BFS',
      status: 'EM_ANALISE',
      color: 'Glacier Blue',
      wheels: 'aero Wheels',
      customer: {
        name: 'João da Silva',
        email: 'joao@velo.dev'
      },
      payment: 'À Vista'
    };

    await app.orderLookup.searchOrder(order.number);
    await app.orderLookup.validateOrderDetails(order);
    await app.orderLookup.validateStatusBadge(order.status);
  });

  test('deve exibir mensagem quando o pedido não é encontrado', async ({ app }) => {
    const order = generateOrderCode();

    await app.orderLookup.searchOrder(order);
    await app.orderLookup.validateOrderNotFound();
  });

  test('deve exibir mensagem quando o código do pedido está fora do padrão', async ({ app }) => {
    const order = 'ABC-123';

    await app.orderLookup.searchOrder(order);
    await app.orderLookup.validateOrderNotFound();
  });
});
