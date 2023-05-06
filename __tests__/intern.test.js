const { default: test } = require("node:test");
const Intern = require("../lib/intern");

test("get school", () => {
	const testValue = "Harvard";
	const e = new Intern("Foo", 1, "test@email.com", testValue);
	expect(e.school).toEqual(testValue);
});

test('getRole() ahoudl return " Intern"', () => {
	const testValue = "Intern";
	const e = new Intern("Foo", 1, "test@email.com", "Harvard");
	expect(e.getRole()).toEqual(testValue);
});

test("get school via getSchool()", () => {
	const testValue = "Harvard";
	const e = new Intern("Foo", 1, "test@email.com", testValue);
	expect(e.getSChool()).toEqual(testValue);
});
