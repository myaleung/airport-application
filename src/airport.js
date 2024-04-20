class airport {
    constructor() {
        this.name = "Digital Futures Airport";
        this.airportCapacity = 10;
        this.airportPlanes = [];
    }
    
    //Get maximum number of planes airport can hold
    getAirportCapacity() { 
        return this.airportCapacity;
    }

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
        if (this.airportPlanes.length < this.airportCapacity) { 
            this.airportPlanes.push(planeId);
        }
    }

    //Remove plane from airport if it exists at the airport
    takeOffPlane(planeId) {
        const plane = this.airportPlanes.indexOf(planeId);
        this.airportPlanes.splice(plane, 1);
    }
};

export default airport;