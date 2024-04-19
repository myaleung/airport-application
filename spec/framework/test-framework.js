// Matchers are functions that take an expected and actual value and
// make an assertion about the 2 values

export const assertEquals = (actual, expected) => actual === expected; //! Implicit return

export const assertTrue = (actual) => actual === true;

export const assertFalse = (actual) => actual === false;

export const assertNull = (actual) => actual === null;

export const assertUndefined = (actual) => actual === undefined;

export const assertNaN = (actual) => isNaN(actual);