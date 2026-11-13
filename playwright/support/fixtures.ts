import { test as base } from '@playwright/test';

import { createCheckoutActions } from './actions/checkoutActions';
import { createConfiguratorActions } from './actions/configuratorActions';
import { createOrderLookupActions } from './actions/orderLookupActions';
import * as ordersDb from './database';

type App = {
  checkout: ReturnType<typeof createCheckoutActions>;
  configurator: ReturnType<typeof createConfiguratorActions>;
  orderLookup: ReturnType<typeof createOrderLookupActions>;
};

type Fixtures = {
  app: App;
  db: typeof ordersDb;
};

export const test = base.extend<Fixtures>({
  app: async ({ page }, use) => {
    const app: App = {
      checkout: createCheckoutActions(page),
      configurator: createConfiguratorActions(page),
      orderLookup: createOrderLookupActions(page),
    };
    await use(app);
  },
  db: async ({}, use) => {
    await use(ordersDb);
  },
});

export { expect } from '@playwright/test';
export type { OrderDetails } from './actions/orderLookupActions';

