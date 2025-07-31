.DEFAULT_GOAL := help

.PHONY: help testwatch testcase new

help:
	@echo "Available make commands:"
	@echo " make new name=<challenge-folder> # Scaffold a new challenge folder with template files"
	@echo " make testwatch name=<challenge-folder> # Run jest watch on a challenge folder"
	@echo " make testcase name=<challenge-folder> test=<test-name> # Run jest watch for a specific test case"

testwatch:
	npx jest --watch --testPathPatterns=$(name)

testcase:
	npx jest --watch --testPathPatterns=$(name) --testNamePatterns="$(test)"

new:
	mkdir -p src/$(name)
	echo "export function solve() {\n\n}" > src/$(name)/index.ts
	echo "import { solve } from './index.js';\n\ndescribe('$(name)', () => {\n  it('basic case', () => {\n    expect(solve()).toBe(undefined);\n  });\n});" > src/$(name)/index.test.ts
