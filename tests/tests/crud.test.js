// test read

import { after, describe, test } from "node:test";
import { read, create, deleteFn } from "../fns/CRUD.fns.js"
import assert from 'node:assert/strict';

describe('crud test', () => {
    test('read basic test', () => {
        const values = read();
        assert.equal(typeof values, "object")
        assert.ok(values.length >= 0)
    })

})


describe("create tests", () => {
    // we want to test create - but without side effects!
    // we need to cleanup after - 
    test("test create", () => {
        const newUser = {
            id: 1,
            name: "yishai"
        }
        create(newUser)
        // now to test
        const users = read();
        assert.ok(users.length >= 1)

    })

    after(() => {
        deleteFn(1) // without this the db will be filled with junk - our tested user we created
    })
})