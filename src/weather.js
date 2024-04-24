class Weather {
    constructor() { 
        //List of weather types
        this.weatherList = ['stormy', 'sunny', 'clear', 'rainy', 'snowy', 'cloudy', 'foggy'];
    }
    //Shuffle weather array and show first in list
    weatherTypes() { 
        //Shuffle array
        for (let i = this.weatherList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.weatherList[i], this.weatherList[j]] = [this.weatherList[j], this.weatherList[i]];
        }
        return this.weatherList[0];
    }

    //Check if the weather is stormy
    isStormy() {
        //Grab random weather from first of weather array
        //If stormy, return true
        if (this.weatherTypes() === 'stormy') return true;
        //Otherwise return false as it's not stormy
        return false;
    }
}

export default Weather;