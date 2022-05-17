stringRotation = require("./q1.9-stringRotation");

// 1.9 String Rotation
describe("stringRotation function", () => {
    test("erbottlewat is a rotation of waterbottle", () => {
        expect(stringRotation("erbottlewat", "waterbottle")).toBe(true);
    });

    test("atewr is not a rotation of water", () => {
        expect(stringRotation("atewr", "water")).toBe(false);
    });

    test("returns false for empty strings", () => {
        expect(stringRotation("", "water")).toBe(false);
    });

    test("returns false for unequal strings", () => {
        expect(stringRotation("waters", "water")).toBe(false);
    });
});
