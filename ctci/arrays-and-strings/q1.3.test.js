makeURL = require("./q1.3-makeURL");

// 1.3 URLify
describe("makeURL function", () => {
    test("Adds %20 to Mr. John Smith white spaces", () => {
        expect(makeURL("Mr. John Smith")).toBe("Mr.%20John%20Smith");
    });

    test("Returns foo given foo with no white space", () => {
        expect(makeURL("foo")).toBe("foo");
    });
});
