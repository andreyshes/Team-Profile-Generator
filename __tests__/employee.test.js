const Employee = require("../lib/employee");

test("employee", () => {
	const e = new Employee();
	expect(typeof (e)).toEqual("object");
});

test("set name via constructor", () => {
	const name = "Jenny";
	const e = new Employee(name);
	expect(e.name).toEqual(name);
});

test("set id via constructor argument", () => {
	const testValue = 55;
	const e = new Employee("Foo", testValue);
	expect(e.id).toEqual(testValue);
});

test("set email via constructor argument", () => {
	const testEmail = "test@email.com";
	const e = new Employee("Foo", 1, testEmail);
	expect(e.email).toEqual(testEmail);
});

test("get name via getName()", () => {
	const testValue = "Jenny";
	const e = new Employee(testValue);
	expect(e.getName()).toEqual(testValue);
});

test("get id via getID()", () => {
	const testValue = 55;
	const e = new Employee("Foo", testValue);
	expect(e.getID()).toEqual(testValue);
});

test("get email via getEmail()", () => {
	const testEmail = "test@email.com";
	const e = new Employee("Foo", 1, testEmail);
	expect(e.getEmail()).toEqual(testEmail);
});

test('getRole() should return "Employee" ', () => {
	const testValue = "Employee";
	const e = new Employee("Jenny", 1, "test@email.com");
	expect(e.getRole()).toEqual(testValue);
});
