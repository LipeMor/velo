import { test, expect } from '../support/fixtures';

test.describe('Configuração do Veículo', () => {
  test.beforeEach(async ({ app }) => {
    await app.configurator.open();
  });

  test('deve atualizar a imagem e manter o preço base ao trocar a cor do veículo', async ({ app }) => {
    await app.configurator.expectPrice('R$ 40.000,00');

    await app.configurator.selectColor('Midnight Black');
    await app.configurator.expectPrice('R$ 40.000,00');

    await app.configurator.expectCarImageSrc('/src/assets/midnight-black-aero-wheels.png');
  });

  test('deve atualizar o preço e a imagem ao alternar entre as rodas, restaurar os valores padrão', async ({ app }) => {
    await app.configurator.expectPrice('R$ 40.000,00');

    await app.configurator.selectWheels(/Sport Wheels/);
    await app.configurator.expectPrice('R$ 42.000,00');

    await app.configurator.expectCarImageSrc('/src/assets/glacier-blue-sport-wheels.png');

    await app.configurator.selectWheels(/Aero Wheels/);
    await app.configurator.expectPrice('R$ 40.000,00');

    await app.configurator.expectCarImageSrc('/src/assets/glacier-blue-aero-wheels.png');
  });

  // CT03 - Configuração do Veículo (Adição de Opcionais) e Cálculo de Preço
  test('CT03 - deve atualizar o preço ao selecionar e desmarcar opcionais e redirecionar para o checkout', async ({ app, page }) => {
    // Arrange: verificar preço inicial sem opcionais
    await app.configurator.expectPrice('R$ 40.000,00');

    // Act/Assert passo 1: marcar "Precision Park" → +R$ 5.500,00
    await app.configurator.toggleOptional(/Precision Park/);
    await app.configurator.expectOptionalChecked(/Precision Park/);
    await app.configurator.expectPrice('R$ 45.500,00');

    // Act/Assert passo 2: marcar "Flux Capacitor" → +R$ 5.000,00
    await app.configurator.toggleOptional(/Flux Capacitor/);
    await app.configurator.expectOptionalChecked(/Flux Capacitor/);
    await app.configurator.expectPrice('R$ 50.500,00');

    // Act/Assert passo 3: desmarcar ambos os opcionais → preço volta a R$ 40.000,00
    await app.configurator.toggleOptional(/Precision Park/);
    await app.configurator.expectOptionalUnchecked(/Precision Park/);

    await app.configurator.toggleOptional(/Flux Capacitor/);
    await app.configurator.expectOptionalUnchecked(/Flux Capacitor/);

    await app.configurator.expectPrice('R$ 40.000,00');

    // Act/Assert passo 4: clicar em "Monte o Seu" → redireciona para /order
    await app.configurator.goToCheckout();
    await expect(page).toHaveURL('/order');
  });
});
