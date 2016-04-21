/**
 * Created by Tshepo on 4/19/2016.
 */
describe("Test spec for calculator functions", function () {
    it("Should return Zero '0' if input is empty", function () {
        expect(calculator.add("")).toBe(0);
    })
    it("should return any input number string ", function () {
        expect(calculator.add("1")).toBe(1);
        expect(calculator.add("2")).toBe(2);
    })
    it("Should add multiple numbers", function () {
        expect(calculator.add("1,2,3")).toBe(6);
    })
    it("Should handle new lnes between numbers", function () {
        expect(calculator.add("1\n2,3")).toBe(6);

    })
})