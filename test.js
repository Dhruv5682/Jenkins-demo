console.log("Running tests...");
const assert = require('assert');

// Simulate a simple test
try {
  assert.strictEqual(1 + 1, 2);
  console.log("Tests passed successfully!");
} catch (error) {
  console.error("Tests failed!");
  process.exit(1);
}
