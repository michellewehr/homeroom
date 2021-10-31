const { format_name } = require('../utils/helpers');
const { validatePasswordConstraints } = require('../utils/helpers');

test('Name is Formatted', () => {
    const name = "  jOHn";
    expect(format_name(name)).toEqual('John');
});

test('Password fails to have at least 8 characters, one uppercase char, one lowercase char, one numeric digit, and one special char', () => {
    const password = 'brentgaines';
    const password2 = 'brentGaines1';
    const password3 = 'Brent345';

    const regex = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/";
    expect(validatePasswordConstraints(password)).toEqual(expect.not.stringMatching(regex));
    expect(validatePasswordConstraints(password2)).toEqual(expect.not.stringMatching(regex));
    expect(validatePasswordConstraints(password3)).toEqual(expect.not.stringMatching(regex));
});

test('Password has at least 8 characters, one uppercase char, one lowercase char, one numeric digit, and one special char', () => {
    const password = 'BrentGaines123?=/';
    const password2 = 'brentGaines21#&';
    const password3 = 'Brent345!dffd?33434dffs#(&$';

    const regex = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/";
    expect(validatePasswordConstraints(password)).toEqual(expect.not.stringMatching(regex));
    expect(validatePasswordConstraints(password2)).toEqual(expect.not.stringMatching(regex));
    expect(validatePasswordConstraints(password3)).toEqual(expect.not.stringMatching(regex));
});

// test('If id Student exists by Id', () => {
//     const id = 1

//     expect(check_Student(id)).toBeTruthy()
// })