// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

import * as functions from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// PhoneNumber
test('valid (parenthesis)', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('valid (hyphens)', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('invalid (no hyphen)', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});
test('invalid (too short)', () => {
    expect(functions.isPhoneNumber('123')).toBe(false);
});

// Email
test('valid (student email)', () => {
    expect(functions.isEmail('hande@ucsd.edu')).toBe(true);
});
test('valid (personal email)', () => {
    expect(functions.isEmail('hemendra_ande@gmail.com')).toBe(true);
});
test('invalid (no @)', () => {
    expect(functions.isEmail('handeucsd.com')).toBe(false);
});
test('invalid (no domain)', () => {
    expect(functions.isEmail('hemendra.ande@gmail')).toBe(false);
});

// strong password
test('valid (long strong)', () => {
    expect(functions.isStrongPassword('aBcDeF_12345')).toBe(true);
});
test('valid (short strong)', () => {
    expect(functions.isStrongPassword('qwerty')).toBe(true);
});
test('invalid (short)', () => {
    expect(functions.isStrongPassword('bf')).toBe(false);
});
test('invalid (starts with number)', () => {
    expect(functions.isStrongPassword('123456abcd')).toBe(false);
});

// date
test('valid (slashes)', () => {
    expect(functions.isDate('05/05/2026')).toBe(true);
});
test('valid (single-dig day/month)', () => {
    expect(functions.isDate('5/5/2026')).toBe(true);
});
test('invalid (no slashes)', () => {
    expect(functions.isDate('05052026')).toBe(false);
});
test('invalid (words)', () => {
    expect(functions.isDate('May 5th, 2026')).toBe(false);
});

// hex color
test('valid (hex format)', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});
test('valid (3-digit hex)', () => {
    expect(functions.isHexColor('ABC')).toBe(true);
});
test('invalid (wrong length)', () => {
    expect(functions.isHexColor('#FFFFF')).toBe(false);
});
test('invalid (illegal chars)', () => {
    expect(functions.isHexColor('#ZZZ')).toBe(false);
});