const { default: test } = require("node:test");
const Engineer = require("../lib/engineer");

test("get github", () => {
	const testValue = "GitHubUser";
	const e = new Engineer("Foo", 1, "test@email.com", testValue);
	expect(e.github).toEqual(testValue);
});

test('getRole() should return "Engineer"', () => {
	const testValue = "Engineer";
	const e = new Engineer("Foo", "test@email.com", "GitHubUser");
	expect(e.getRole()).toEqual(testValue);
});

test("Get GitHub username via getGitHub()", () => {
	const testValue = "GitHubUser";
	const e = new Engineer("Foo", 1, "test@email.com", testValue);
	expect(e.getGitHub).toEqual(testValue);
});
