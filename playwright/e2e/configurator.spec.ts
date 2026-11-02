import { test, expect } from '../support/fixtures'


test.describe('Configuração do Veículo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/configure')
  })

  test('deve atualizar o preview do veículo e manter o preço base ao trocar a cor', async ({ page }) => {
    const priceElement = page.getByTestId('total-price')
    const car = page.locator('img[alt^="Velô Sprint"]')

    await expect(priceElement).toBeVisible()
    await expect(priceElement).toHaveText('R$ 40.000,00')

    await page.getByRole('button', { name: 'Midnight Black' }).click()
    await expect(priceElement).toHaveText('R$ 40.000,00')

    await expect(car).toHaveAttribute('src', '/src/assets/midnight-black-aero-wheels.png')
  })

  test('deve atualizar o preview do veículo e o preço dinâmico ao alternar entre as rodas Sport e Aero', async ({ page }) => {
    const priceElement = page.getByTestId('total-price')
    const car = page.locator('img[alt^="Velô Sprint"]')

    await expect(priceElement).toBeVisible()
    await expect(priceElement).toHaveText('R$ 40.000,00')

    await page.getByRole('button', { name: /Sport Wheels/ }).click()
    await expect(priceElement).toHaveText('R$ 42.000,00')

    await expect(car).toHaveAttribute('src', '/src/assets/glacier-blue-sport-wheels.png')

    await page.getByRole('button', { name: /Aero Wheels/ }).click()
    await expect(priceElement).toHaveText('R$ 40.000,00')

    await expect(car).toHaveAttribute('src', '/src/assets/glacier-blue-aero-wheels.png')
  })
})
