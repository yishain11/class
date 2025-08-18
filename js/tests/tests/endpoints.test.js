import assert from "node:assert";
import { describe, test } from "node:test";
describe("endpoint tests", () => {
  test("get /", async () => {
    const res = await fetch("http://localhost:4545/").then((res) => res.text());
    assert.strictEqual(res, "hi from /");
  });
});
