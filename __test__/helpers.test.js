const { format_name } = require('../utils/helpers');

test('Name is Formatted', () => {
    const name = "  jOHn";
    expect(format_name(name)).toEqual('John');
});

