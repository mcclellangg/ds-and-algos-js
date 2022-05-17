hasOneEdit = require("./q1.5-hasOneEdit");

// 1.5 One Away
describe("hasOneEdit", () => {
    test("pale, ple //has one removal returns true", () => {
        expect(hasOneEdit("pale", "ple")).toBe(true);
    });

    test("pales, pale //has one insertion returns true", () => {
        expect(hasOneEdit("pales", "pale")).toBe(true);
    });

    test("pale, bale //has one replacement returns true", () => {
        expect(hasOneEdit("pale", "bale")).toBe(true);
    });

    test("pale, bake //has multiple edits returns false", () => {
        expect(hasOneEdit("pale", "bake")).toBe(false);
    });
});
