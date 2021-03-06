import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Flowbite Blocks - Tailwind UI components');
});

test('examples page has expected h1', async ({ page }) => {
	await page.goto('/examples');
	expect(await page.textContent('h1')).toBe('Payments tool for software companies');
});

test('page404 page has expected h1', async ({ page }) => {
	await page.goto('/blocks/404');
	expect(await page.textContent('h1')).toBe('Tailwind CSS 404 Page - Flowbite-Svelte-Blocks');
});

test('page500 page has expected h1', async ({ page }) => {
	await page.goto('/blocks/500');
	expect(await page.textContent('h1')).toBe('Tailwind CSS 500 Page - Flowbite-Svelte-Blocks');
});

test('blog page has expected h1', async ({ page }) => {
	await page.goto('/blocks/blog');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Blog Sections - Flowbite-Svelte-Blocks');
});

test('content page has expected h1', async ({ page }) => {
	await page.goto('/blocks/content');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Content Sections - Flowbite-Svelte-Blocks');
});

test('cta page has expected h1', async ({ page }) => {
	await page.goto('/blocks/cta');
	expect(await page.textContent('h1')).toBe('Tailwind CSS CTA Sections - Flowbite-Svelte-Blocks');
});

test('customer-logo page has expected h1', async ({ page }) => {
	await page.goto('/blocks/customer-logos');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Customer Logos - Flowbite-Svelte-Blocks');
});

test('feature page has expected h1', async ({ page }) => {
	await page.goto('/blocks/feature');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Feature Sections - Flowbite-Svelte-Blocks');
});

test('footer page has expected h1', async ({ page }) => {
	await page.goto('/blocks/footer');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Footer Sections - Flowbite-Svelte-Blocks');
});

test('header page has expected h1', async ({ page }) => {
	await page.goto('/blocks/header');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Header - Flowbite-Svelte-Blocks');
});

test('hero page has expected h1', async ({ page }) => {
	await page.goto('/blocks/hero');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Hero Sections - Flowbite-Svelte-Blocks');
});

test('maintenance page has expected h1', async ({ page }) => {
	await page.goto('/blocks/maintenance');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Maintenance Pages - Flowbite-Svelte-Blocks');
});

