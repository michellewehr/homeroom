const { passwordValidator, passwordSchema } = require('../utils/password');

test('Password has at least 8 characters, one uppercase char, one lowercase char, one numeric digit, and one special char', () => {
   const password = 'brentgaines!?=';
   const password2 = 'brentGaines1';
   const password3 = 'Brent345';
   const password5 = 'brentGaines21#&';
   const password6 = 'Brent345!dffd?33434dffs#(&$';

   expect(passwordSchema.validate(password)).toBe(false);
   expect(passwordSchema.validate(password2)).toBe(false);
   expect(passwordSchema.validate(password3)).toBe(false);
   expect(passwordSchema.validate(password5)).toBe(true);
   expect(passwordSchema.validate(password6)).toBe(true);
});