import Airport from "./airport.js";
import chalk from 'chalk';
import Weather from "./weather.js";

console.log(`//=== BEGIN DEMO ===//`);
console.log(`Launch software and add airport to system:`);
const dfAirport = new Airport("Digital Futures Airport");
console.log(chalk.blue(`Hello and welcome to ${dfAirport.name}`));

console.log(`==================`);
console.log(`Selecting planes to land.`);
console.log(`Landing planes BA123 and BA234:`);
dfAirport.landPlane("BA123");
dfAirport.landPlane("BA234", false);
console.log(`${dfAirport.planeExistsInAirport("BA123") ? chalk.blue(`${dfAirport.planesAtAirport().slice(-1)} has landed at the airport.`) : chalk.red(`Could not land the plane BA123 due to stormy weather.`)}`);
console.log(`${dfAirport.planeExistsInAirport("BA234") ? chalk.blue(`${dfAirport.planesAtAirport().slice(-1)} has landed at the airport.`) : chalk.red(`Could not land the plane BA234 due to stormy weather.`)}`);

console.log(`==================`);
console.log(`Tell me how many planes are at the airport.`);
console.log(chalk.blue(`Currently there ${dfAirport.airportPlanes.length === 1 ? `is` : `are`} ${dfAirport.airportPlanes.length} ${dfAirport.airportPlanes.length === 1 ? `plane` : `planes`} at the airport.`));
console.log(chalk.blue(`Here are the plane IDs: ${dfAirport.planesAtAirport()}`));

console.log(`==================`);
console.log(`Take off plane BA234`);
dfAirport.takeOffPlane("BA234");
console.log(`${dfAirport.planeExistsInAirport("BA234") ? chalk.red(`Could not take off plane due to stormy weather`) : chalk.blue(`Plane taken off. There ${dfAirport.airportPlanes.length === 1 ? 'is now': 'are now'} ${dfAirport.airportPlanes.length} ${dfAirport.airportPlanes.length === 1 ? 'plane': 'planes'} at the airport.`)}`);

console.log(`==================`);
console.log(`Take off plane EJ112:`);
dfAirport.takeOffPlane("EJ112");
!dfAirport.planeExistsInAirport("EJ112") && console.log(chalk.red(`Sorry, I cannot do that. This plane isn't at the airport!`));

console.log(`==================`);
console.log(`Get airport capacity with getAirportCapacity():`);
console.log(chalk.blue(`The airport can currently hold up to ${dfAirport.getAirportCapacity()} planes.`));

console.log(`==================`);
console.log(`Landing a few more planes...`);
dfAirport.landPlane("CP333", false);
dfAirport.landPlane("BA852", false);
dfAirport.landPlane("DF678");
dfAirport.landPlane("BA888");
dfAirport.landPlane("CP333");
dfAirport.landPlane("CP321");
dfAirport.landPlane("DF635");
dfAirport.landPlane("DF888");
dfAirport.landPlane("DF228");
dfAirport.landPlane("BA256");
console.log(chalk.blue(`${dfAirport.planesAtAirport()} have landed at the airport.`));

console.log(`==================`);
console.log(`Run isAirportFull() to check to see if the airport is full:`);
console.log(dfAirport.isAirportFull() ? chalk.blue("The airport is now full.") : chalk.blue("The airport has capacity for more planes."));

console.log(`==================`);
console.log(`Land plane NX362:`);
dfAirport.landPlane("NX362");
if (dfAirport.planeExistsInAirport("NX362")) { 
    const lastPlane = dfAirport.planesAtAirport().slice(-1);
    console.log(chalk.blue(`${lastPlane} has landed at ${dfAirport.name}`));
} else {
    dfAirport.isAirportFull() && console.log(chalk.red(`The airport is now full. \n Could not land plane at airport.`));
}
console.log(chalk.blue(`Currently we have ${dfAirport.planesAtAirport().length} aircrafts at the airport.`));

console.log(`==================`);
console.log(`Increase the airport capacity to 15 with changeAirportCapacityTo():`);
dfAirport.changeAirportCapacityTo(15);
dfAirport.changeAirportCapacityTo(15) && console.log(chalk.blue(`The airport capacity is now ${dfAirport.getAirportCapacity()}.`));

console.log(`==================`);
console.log(`Land plane AL362:`);
dfAirport.landPlane("AL362");
console.log(`${dfAirport.planeExistsInAirport("AL362") ? chalk.blue(`${dfAirport.planesAtAirport().slice(-1)} has successfully landed at the airport.`) : chalk.red(`Cannot land plane at airport due to it being ${dfAirport.isAirportFull() ? `full` : `stormy`}.`)}`);

console.log(`==================`);
console.log(`Change the airport capacity to 4 with changeAirportCapacityTo():`);
dfAirport.changeAirportCapacityTo(4);
console.log(`${dfAirport.changeAirportCapacityTo(4) ? chalk.blue(`The airport capacity is now ${dfAirport.getAirportCapacity()}.`) : chalk.red(`Unable to change the airport capacity as there are more planes held at the airport currently.`)}`);

console.log(`==================`);
console.log(`Log weather forecast:`);
const weather = new Weather();
const weatherForecast = weather.weatherTypes();
const isStormy = weather.isStormy();
console.log(chalk.blue(`${isStormy? "The weather is stormy right now." : `The weather is ${weatherForecast} right now.`}`));

console.log(`==================`);
console.log(`Landing plane BA168 depending on the weather forecast:`);
dfAirport.landPlane("BA168", isStormy);
console.log(`${(dfAirport.planeExistsInAirport("BA168") && !isStormy) ? chalk.blue(`${dfAirport.planesAtAirport().slice(-1)} has successfully landed at the airport.`) : chalk.red(`Could not land the plane due to stormy weather.`)}`);

console.log(`==================`);
console.log(`Take off plane CP333 depending on the weather forecast:`);
dfAirport.takeOffPlane("CP333", isStormy);
console.log(`${(dfAirport.planeExistsInAirport("CP333") && isStormy) ? chalk.red(`Could not prepare plane for take off due to stormy weather.`) : chalk.blue(`Plane has successfully taken off from airport.`)}`);
console.log(`//=== END OF DEMO ===//`);