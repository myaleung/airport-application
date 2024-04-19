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
    
};

export default airport;