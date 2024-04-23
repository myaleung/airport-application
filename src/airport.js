import Weather from "./weather.js";
class Airport {
    constructor(name) {
        this.name = name;
        this.airportCapacity = 10;
        this.airportPlanes = [];
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
    landPlane(planeId, weather) { 
        let stormy;
        
        if (weather === undefined || weather === null) {
            stormy = new Weather().isStormy()
        } else { 
            stormy = weather;
        }
        if (planeId === null || planeId === undefined) return;
        if (this.planeExistsInAirport(planeId) || stormy) return;
        if (this.airportPlanes.length < this.airportCapacity) {
            this.airportPlanes.push(planeId);
        }
    }

    //Remove plane from airport if it exists at the airport
    takeOffPlane(planeId, weather) {
        const plane = this.airportPlanes.indexOf(planeId);
        let stormy;
        
        if (weather === undefined || weather === null) {
            stormy = new Weather().isStormy()
        } else { 
            stormy = weather;
        }
        if (plane > -1 && !stormy) { 
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