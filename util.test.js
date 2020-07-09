const { generateText, checkAndGenerate } = require('./util')
const puppeteer = require('puppeteer')

jest.setTimeout(100000)
// Unit test
test('should op a name and age', () => {
	const text = generateText('Bisu', 20)
	expect(text).toBe('Bisu (20 years old)')
})

// Unit test for ruling out false positivity
test('should op with empty inputs', () => {
	const text = generateText('', null)
	expect(text).toBe(' (null years old)')
})

// Integration test

test('should output valid input value', () => {
	const text = checkAndGenerate('Aju', 20)
	expect(text).toBe('Aju (20 years old)')
})

test('should create an element with valid text and correct class', async () => {
	const browser = await puppeteer.launch({
		headless: true,
		// slowMo: 50,
		// args: ['--window-size=1366,768'],
	})

	const page = await browser.newPage()
	await page.goto('http://127.0.0.1:5500/index.html')

	await page.click('input#name')
	await page.type('input#name', 'Anna Gunn')
	await page.click('input#age')
	await page.type('input#age', '35')
	await page.click('#btnAddUser')
	expect(await page.$eval('.user-item', (el) => el.textContent)).toBe(
		'Anna Gunn (35 years old)'
	)
}, 10000)
