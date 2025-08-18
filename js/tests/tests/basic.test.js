import { add, divide } from '../fns/basic.fns.js'

// basic functions tests

import { describe, it, test } from 'node:test';
import assert from 'node:assert';

// run with node --test from root folder. looking for test folder and files with "test" inside

// basic test - function with assertions

test("testing add with correct input", () => {
    assert.strictEqual(add(2, 3), 5)
    assert.strictEqual(add(0, 0), 0)
    assert.strictEqual(add(-3, -6), -9)
})

// group multiple tests together in a test suite

describe("add tests with wrong input", () => {
    // try to break the code!
    test("wrong numbers", () => {
        assert.notStrictEqual(add(3, 4), 8)
        assert.notStrictEqual(add(0, -1), -4)
    })
    test("non number inputs", () => {
        assert.strictEqual(add("2", "3"), "23")
        assert.strictEqual(add([], {}), '[object Object]')
        assert.strictEqual(add(true, false), 1)
    })
})

// skip and only

// test just this test - remove .only to run all tests - use  node --test --test-only in cli
describe.only("testing devide", () => {
    test.only("corrct input", () => {
        assert.strictEqual(divide(4, 2), 2)
    })
    // use .skip to ignore specifc tests
    test("wrong inputs - 0 as 2 arg", () => {
        assert.throws(() => {
            divide(2, 0)
        })
    })
})
