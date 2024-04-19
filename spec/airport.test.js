import { assertEquals } from './framework/test-framework.js';
import airport from '../src/airport.js';

// ## User Story 1 Test 1 ##
//* Return maxCapacity of airport as 10
// Arrange
const dfAirport = new airport;
let expected = 10;
let actual, result;

//-- Housekeeping --//
//* Clear variables
const afterEach = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    airport.capacity = 10;
};

// Act
actual = dfAirport.getAirportCapacity();

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 1`);
console.log(`==================`);
console.log("Return maxCapacity of airport as 10");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 2 Test 2.1 ##
//* isAirportFull returns false when airport is not full
// Arrange
expected = false;

// Act
actual = dfAirport.isAirportFull();

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 1`);
console.log(`==================`);
console.log("isAirportFull returns false when airport is not full");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();