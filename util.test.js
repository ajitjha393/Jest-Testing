const { generateText } = require('./util')

test('should op a name and age', () => {
	const text = generateText('Bisu', 20)
	expect(text).toBe('Bisu (20 years old)')
})
