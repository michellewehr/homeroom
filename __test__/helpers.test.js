const { nameFormatting, validatePassword } = require('../utils/helpers');

test('Name is Formatted', () => {
    const name = "  jOHn";
    expect(formatName(name)).toEqual('John');
});

test('Password has at least 8 characters, one uppercase char, one lowercase char, one numeric digit, and one special char', () => {
    const password = 'brentgaines!?=';
    const password2 = 'brentGaines1';
    const password3 = 'Brent345';
    const password5 = 'brentGaines21#&';
    const password6 = 'Brent345!dffd?33434dffs#(&$';

    expect(validatePasswordConstraints(password)).toBe(false);
    expect(validatePasswordConstraints(password2)).toBe(false);
    expect(validatePasswordConstraints(password3)).toBe(false);
    expect(validatePasswordConstraints(password5)).toBe(true);
    expect(validatePasswordConstraints(password6)).toBe(true);
});
