import assert from 'node:assert';
import { describe, it, test } from 'node:test';

function toUpper(obj) {
    return obj.name.toUpperCase()
}

test('to upper', () => {
    assert.strictEqual(toUpper({}), undefined)
})


