import {validmail} from "../src/validmail"

describe("validmail tests", () => {
    it("should return true (valid email)", () => {
        expect(validmail("einar.martinez@student.vinci.be")).toBe(true);
    });
    it("should return false (no @)", () => {
        expect(validmail("einar.martinezstudent.vinci.be")).toBe(false);
    });
    it("should return false (no . after @)", () => {
        expect(validmail("einar.martinezstudent@vincibe")).toBe(false);
    });
    it("should return false (ends in .)", () => {
        expect(validmail("einar.martinezstudent@vincibe.")).toBe(false);
    });
    it("should return false (contains a blank space)", () => {
        expect(validmail("einar.martinez student@vinci.be")).toBe(false);
    });
    it("should return false (contains no text before @)", () => {
        expect(validmail("@vinci.be")).toBe(false);
    });
});
