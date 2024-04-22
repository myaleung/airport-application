import Weather from "./weather.js";
class Airport {
    constructor() {
        this.name = "Digital Futures Airport";
        this.airportCapacity = 10;
        this.airportPlanes = [];
        this.isStormy = Weather.isStormy;
    }
    
    //Get maximum number of planes airport can hold
    getAirportCapacity() { 
        return this.airportCapacity;
    }

    //update airportCapacity amount to new value passed in argument
    changeAirportCapacityTo(amount) {
        if (this.airportPlanes.length <= amount) { 
            this.airportCapacity = amount;
            return true;
        }
        return false;
    }

    //Check to see if airport has reached maximum amount of planes allowed
    isAirportFull() {
        if (this.airportPlanes.length >= this.airportCapacity) { 
            return true;
        }
        return false;
    }
    
    //Add plane to airport if capacity isn't full
    landPlane(planeId) { 
        if (planeId === null || planeId === undefined) return;
        if (!this.planeExistsInAirport(planeId) && !this.isStormy) {
            if (this.airportPlanes.length < this.airportCapacity) { 
                this.airportPlanes.push(planeId);
            }
        }
    }

    //Remove plane from airport if it exists at the airport
    takeOffPlane(planeId) {
        const plane = this.airportPlanes.indexOf(planeId);

        if (plane > -1 && !this.isStormy) { 
            this.airportPlanes.splice(plane, 1);
        }
    }

    //Check if plane exists in airportPlanes array
    planeExistsInAirport(planeId) { 
        return this.airportPlanes.includes(planeId);
    }

    //Show list of planes currently at the airportPlanes array
    planesAtAirport() { 
        return this.airportPlanes;
    }
};

export default Airport;