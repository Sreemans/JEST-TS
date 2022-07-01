import { Utils } from "../app/Utils";
import { describe, expect, test } from "@jest/globals";
describe("test suite", () => {
  test("first test", () => {
    const str = Utils.toUpperCase("abc");
    expect(str).toBe("ABC");
  });
  test("URL Parser", () => {
    const parsedUrl = Utils.URLParser("http://localhost:8080/login");
    // toBe to test primitive Datatypes (Strings, Numbers)
    expect(parsedUrl.href).toBe("http://localhost:8080/login");
    expect(parsedUrl.port).toBe("8080");
    expect(parsedUrl.protocol).toBe("http:");
    // toEqual to test objects
    // expect(parsedUrl.query).toBe({});
    // If it should pass with deep equality, replace "toBe" with "toEqual"
    // Expected: {}
    // Received: serializes to the same string
    expect(parsedUrl.query).toEqual({});
  });
  test("URL Parser with query", () => {
    const parsedUrl = Utils.URLParser(
      "http://localhost:8080/login?user=user&password=pass"
    );
    const expectedQuery = {
      user: "user",
      password: "pass",
    };

    expect(parsedUrl.query).toEqual(expectedQuery);
    expect(expectedQuery).toBe(expectedQuery);
  });
});
