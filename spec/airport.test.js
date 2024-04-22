import Airport from '../src/airport.js';
import { assertEquals } from './framework/test-framework.js';
import Weather from '../src/weather.js';

// ## User Story 1 Test 1 ##
//* Return maxCapacity of airport as 10
// Arrange
const dfAirport = new Airport;
let expected = 10;
let testAmount = 0;
let actual, result;

//-- Housekeeping --//
//* Clear variables
const afterEach = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testAmount = 0;
    dfAirport.airportCapacity = 10;
    dfAirport.airportPlanes = [];
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
console.log(`Test 2.1`);
console.log(`==================`);
console.log("isAirportFull returns false when airport is not full");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 2 Test 2.2 ##
//* isAirportFull returns true when airport is full
// Arrange
// Add max amount of planes to airport
testAmount = 10;
for (let i = 0; dfAirport.airportPlanes.length < testAmount; i++) {
  dfAirport.airportPlanes.push(`Plane${[i]}`);
}
expected = true;

// Act
actual = dfAirport.isAirportFull();

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 2.2`);
console.log(`==================`);
console.log("isAirportFull returns true when airport is full");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 3 Test 3.1 ##
//* Change the airportCapacity to the number passed through by changeAirportCapacityTo
// Arrange
testAmount = 13;
expected = true;

// Act
actual = dfAirport.changeAirportCapacityTo(testAmount);

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 3.1`);
console.log(`==================`);
console.log("Change the airportCapacity to the number passed through by changeAirportCapacityTo");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 3 Test 3.2 ##
//* airportCapacity should not decrease pass the amount of planes currently at airport
// Arrange
testAmount = 3;
// Add 5 planes to airport
for (let i = 0; dfAirport.airportPlanes.length < 5; i++) {
  dfAirport.airportPlanes.push(`Plane${[i]}`);
}
expected = false;

// Act
actual = dfAirport.changeAirportCapacityTo(testAmount);

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 3.1`);
console.log(`==================`);
console.log("airportCapacity should not decrease pass the amount of planes currently at airport");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 4 Test 4.1 ##
//* Add plane to airportPlanes using landPlane and expect array (airportPlanes) has increased in length by 1
// Arrange
expected = 1;

// Act
dfAirport.landPlane('Plane 1');
actual = dfAirport.airportPlanes.length;

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 4.1`);
console.log(`==================`);
console.log("Add plane to airportPlanes using landPlane and expect array (airportPlanes) has increased in length by 1");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 4 Test 4.2 ##
//* airportPlanes length should not increase by 1 if airport is full
// Arrange
expected = 10;
// Add 10 planes to airport which would make it full
for (let i = 0; dfAirport.airportPlanes.length < 10; i++) {
  dfAirport.landPlane(`Plane ${[i]}`);
}

// Act
dfAirport.landPlane('Plane 11');
actual = dfAirport.airportPlanes.length;

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 4.2`);
console.log(`==================`);
console.log("airportPlanes length should not increase by 1 if airport is full");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 4 Test 4.3 ##
//* Test that plane passed to landPlane is actually added to the airport
// Arrange
expected = ['Plane 1'].toString();

// Act
dfAirport.landPlane('Plane 1');
actual = dfAirport.airportPlanes.toString();

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 4.3`);
console.log(`==================`);
console.log("Test that plane passed to landPlane is actually added to the airport");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 4 Test 4.4 ##
//* You are able to land a plane with other planes at airport
// Arrange
expected = 2;
// Add a plane to airport so it isn't empty
dfAirport.landPlane('Plane 1');

// Act
dfAirport.landPlane('Plane 11');
actual = dfAirport.airportPlanes.length;

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 4.4`);
console.log(`==================`);
console.log("You are able to land a plane with other planes at airport");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 4 Test 4.5 ##
//* Plane of null is not added to the airport
// Arrange
expected = 0;

// Act
dfAirport.landPlane(null);
actual = dfAirport.airportPlanes.length;

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 4.5`);
console.log(`==================`);
console.log("Plane of null is not added to the airport");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 5 Test 5.1 ##
//* Remove plane from airport and reduce airportPlanes length by 1
// Arrange
expected = 1;
dfAirport.landPlane('Plane 1');
dfAirport.landPlane('Plane 2');

// Act
dfAirport.takeOffPlane('Plane 1');
actual = dfAirport.airportPlanes.length;

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 5.1`);
console.log(`==================`);
console.log("Remove plane from airport and reduce airportPlanes length by 1");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 5 Test 5.2 ##
//* Cannot remove a plane from airport that doesn't exist in airportPlanes array
// Arrange
expected = 2;
dfAirport.landPlane('Plane 1');
dfAirport.landPlane('Plane 2');

// Act
dfAirport.takeOffPlane('Plane 3');
actual = dfAirport.airportPlanes.length;

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 5.2`);
console.log(`==================`);
console.log("Cannot remove a plane from airport that doesn't exist in airportPlanes array");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 6 Test 6.1 ##
//* Check if planeExistsInAirport returns true if plane is currently at airport
// Arrange
expected = true;
dfAirport.landPlane('Plane 1');
dfAirport.landPlane('Plane 2');

// Act
actual = dfAirport.planeExistsInAirport('Plane 2');

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 6.1`);
console.log(`==================`);
console.log("Check if planeExistsInAirport returns true if plane is currently at airport");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 6 Test 6.2 ##
//* Check if planeExistsInAirport returns false if plane is not at airport
// Arrange
expected = false;
dfAirport.landPlane('Plane 1');
dfAirport.landPlane('Plane 2');

// Act
actual = dfAirport.planeExistsInAirport('Plane 3');

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 6.2`);
console.log(`==================`);
console.log("Check if planeExistsInAirport returns false if plane is not at airport");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 6 Test 6.3 ##
//* If planeExistsInAirport returns true, don't land the plane
// Arrange
expected = 2;
dfAirport.landPlane('Plane 1');
dfAirport.landPlane('Plane 2');

// Act
dfAirport.landPlane('Plane 1');
actual = dfAirport.airportPlanes.length;

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 6.3`);
console.log(`==================`);
console.log("If planeExistsInAirport returns true, don't land the plane");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 7 Test 7 ##
//* planesAtAirport returns correct array of planes at airport
// Arrange
expected = ['Plane 1','Plane 3','Plane 4'].toString();
dfAirport.landPlane('Plane 1');
dfAirport.landPlane('Plane 2');
dfAirport.landPlane('Plane 3');
dfAirport.landPlane('Plane 4');

// Act
dfAirport.takeOffPlane('Plane 2');
actual = dfAirport.planesAtAirport().toString();

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 7`);
console.log(`==================`);
console.log("planesAtAirport returns correct array of planes at airport");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 8 Test 8.1 ##
//* Check if weather isStormy returns a boolean for each scenario
// Arrange
let weather = new Weather;
expected = typeof(true);

// Act
actual = typeof(weather.isStormy());

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 8.1`);
console.log(`==================`);
console.log("Check if weather isStormy returns a boolean for each scenario");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 9 Test 9.1 ##
//* If isStormy returns true, landPlane should not add plane to airportPlanes
// Arrange
expected = 2;
dfAirport.airportPlanes = ["Plane A", "Plane B"];
dfAirport.isStormy = true;

// Act
dfAirport.landPlane("Plane C");
actual = dfAirport.airportPlanes.length;

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 9.1`);
console.log(`==================`);
console.log("If isStormy returns true, landPlane should not add plane to airportPlanes");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

// ## User Story 9 Test 9.2 ##
//* If isStormy returns false, landPlane should add plane to airportPlanes
// Arrange
expected = 3;
dfAirport.airportPlanes = ["Plane A", "Plane B"];
dfAirport.isStormy = false;

// Act
dfAirport.landPlane("Plane C");
actual = dfAirport.airportPlanes.length;

// Assert
result = assertEquals(actual, expected);

//report
console.log(`Test 9.2`);
console.log(`==================`);
console.log("If isStormy returns false, landPlane should add plane to airportPlanes");
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();