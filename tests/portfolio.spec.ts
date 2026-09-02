import { test, expect } from '@playwright/test';

test.describe('Immersive Portfolio E2E', () => {
  test('should navigate across pages and verify 3D canvas', async ({ page }) => {
    await page.goto('/');

    // Check if the canvas exists (from GlobalCanvas)
    const canvas = page.locator('canvas');
    await expect(canvas).toBeVisible();

    // Check Home Page content
    await expect(page.locator('h1').filter({ hasText: 'CREATIVE' })).toBeVisible();

    // Navigate to Work Page
    await page.click('text=Work');
    await expect(page.locator('h1').filter({ hasText: 'Selected Work' })).toBeVisible();

    // Navigate to About Page
    await page.click('text=About');
    await expect(page.locator('h1').filter({ hasText: 'About Me' })).toBeVisible();

    // Navigate to Contact Page
    await page.click('text=Contact');
    await expect(page.locator('h1').filter({ hasText: "Let's Connect" })).toBeVisible();

    // Form interaction
    await page.fill('input[type="text"]', 'Test User');
    await page.fill('input[type="email"]', 'test@example.com');
    await page.fill('textarea', 'Hello, this is a test message!');
    
    await page.click('button[type="submit"]');

    // Wait for the simulated Supabase success message
    await expect(page.locator('text=Thank you! Your message has been sent successfully.')).toBeVisible({ timeout: 5000 });
  });
});
