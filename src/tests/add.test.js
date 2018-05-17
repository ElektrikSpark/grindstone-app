const add = (a, b) => a + b
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('should add two numbers', () => {
    const result = add(3, 4)    
    expect(result).toBe(7)
})

test('should say "Hello (name)!"', () => {
    const hello = generateGreeting('Trevor')
    expect(hello).toBe('Hello Trevor!')
})

test('should say "Hello Anonymous!"', () => {
    const hello = generateGreeting()
    expect(hello).toBe('Hello Anonymous!')
})
