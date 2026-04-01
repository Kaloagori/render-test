import { test } from 'node:test'
import assert from 'node:assert'
import forTesting from '../utils/for_testing.js';

test('reverse of a', () => {
    const result = forTesting.reverse('a')

    assert.strictEqual(result, 'a')
})

test('reverse of react', () => {
    const result = forTesting.reverse('react')

    assert.strictEqual(result, 'tcaer')
})

test('reverse of saippuakauppias', () => {
    const result = forTesting.reverse('saippuakauppias')

    assert.strictEqual(result, 'saippuakauppias')
})