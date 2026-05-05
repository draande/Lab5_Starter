// sum.test.js
import { sum } from '../code-to-unit-test/sum';

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

// This test will FAIL because 1 + 2 is 3, not 4
test('intentional failure for GitHub Actions', () => {
    expect(sum(1, 2)).toBe(4);
});