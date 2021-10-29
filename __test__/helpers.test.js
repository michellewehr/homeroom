const { format_name } = require('../utils/helpers');

test('Name is Formatted', () => {
    const name = "  jOHn"
    expect(format_name(name)).toEqual('John')
})

// test('If id Student exists by Id', () => {
//     const id = 1

//     expect(check_Student(id)).toBeTruthy()
// })