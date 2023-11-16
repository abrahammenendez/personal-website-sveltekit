import { expect, test } from '@playwright/test';

test('Description is correct.', async ({ page }) => {
	await page.goto('/');
	const actual = await page.locator('meta[name="description"]').getAttribute('content');
	expect(actual).toEqual(
		'Abraham Menéndez is a Spanish software developer based in Amsterdam (Netherlands).'
	);
});

test('Author is correct.', async ({ page }) => {
	await page.goto('/');
	const actual = await page.locator('meta[name="author"]').getAttribute('content');
	expect(actual).toEqual('Abraham Menéndez');
});

test('Header title is correct.', async ({ page }) => {
	await page.goto('/');
	const actual = await page.locator('#title').textContent();
	expect(actual).toEqual('Hi!');
});

test('Mode switch is correct.', async ({ page }) => {
	await page.goto('/');
	const modeToggler = await page.locator('#modeToggle');
	const modeTogglerEmoji = await modeToggler.textContent();
	expect(modeTogglerEmoji).toEqual('🌕');
	const body = await page.locator('body');
	const bodyClass = await body.getAttribute('class');
	expect(bodyClass).toEqual('dark-mode');
});

test('Mode switch works without reload.', async ({ page }) => {
	await page.goto('/');
	await page.locator('#modeToggle').click();
	const modeToggler = await page.locator('#modeToggle');
	const modeTogglerEmoji = await modeToggler.textContent();
	expect(modeTogglerEmoji).toEqual('🌑');
	const body = await page.locator('body');
	const bodyClass = await body.getAttribute('class');
	expect(bodyClass).toEqual('light-mode');
});

test('Mode switch works after reload.', async ({ page }) => {
	await page.goto('/');
	await page.locator('#modeToggle').click();
	await page.reload();
	const modeToggler = await page.locator('#modeToggle');
	const modeTogglerEmoji = await modeToggler.textContent();
	expect(modeTogglerEmoji).toEqual('🌑');
	const body = await page.locator('body');
	const bodyClass = await body.getAttribute('class');
	expect(bodyClass).toEqual('light-mode');
});

test('Content is correct.', async ({ page }) => {
	await page.goto('/');
	const actual = await page.locator('p').first().textContent();
	expect(actual).toEqual(
		"I'm Abraham Menéndez, a 30-year-old Spanish software developer based in Amsterdam (Netherlands)."
	);
});
