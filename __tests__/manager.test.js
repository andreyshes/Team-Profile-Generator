const { default: test } = require("node:test");
const Manager = require("../lib/manager");
const Employee = require("../lib/employee");
const { exportAllDeclaration } = require("@babel/types");

test("set office number", () => {
	const testValue = 100;
	const e = new Manager("Foo", 1, "test@email.com", testValue);
	expect(e.officeNumber).toEqual(testValue);
});

test('getRole() should return" Manager"', () => {
	const testValue = "Manager";
	const e = new Manager("Foo", 1, "test@email.com", 100);
	expect(e.getRole()).toEqual(testValue);
});

test("get office number via getOffice()", () => {
	const testValue = 100;
	const e = new Manager("Foo", 1, "test@email.com", testValue);
	expect(e.getOfficeNumber()).toEqual(testValue);
});
