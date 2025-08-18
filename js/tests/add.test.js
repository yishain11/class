import { describe, test } from "node:test";
import assert from "node:assert";

import { add } from "./add.fn.js";

describe("testing add function numbers", () => {
  test("add with number inputs", () => {
    assert.strictEqual(add(3, 4), 7);
  });
  test("add with zero", () => {
    assert.strictEqual(add(0, 0), 0);
  });
});

describe("add with string number", () => {
  test("zero string number", () => {
    assert.strictEqual(add("0", "0"), 0);
  });
});
