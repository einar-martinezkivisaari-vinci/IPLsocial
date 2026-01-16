import {validmail} from "../src/validmail"

describe("validmail tests", () => {
    it("should return true", () => {
        expect(validmail("einar.martinez@student.vinci.be")).toBe(true);
    });
});
