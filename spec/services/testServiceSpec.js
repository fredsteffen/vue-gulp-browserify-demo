import TestService from "../../app/services/testService.js";
describe("Test Service", () => {
   it("adds two numbers", () => {
      let svc = new TestService();
      expect(svc.addNumbers(1, 5)).toBe(6);
   });
});