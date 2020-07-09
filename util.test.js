const { generateText, checkAndGenerate } = require('./util')

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
