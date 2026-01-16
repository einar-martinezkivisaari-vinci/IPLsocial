import {validmail} from "../src/validmail"

describe("validmail tests", () => {
    it("should return true (valid email)", () => {
        expect(validmail("einar.martinez@student.vinci.be")).toBe(true);
    });
    it("should return false (no @)", () => {
        expect(validmail("einar.martinezstudent.vinci.be")).toBe(false);
    });
});
