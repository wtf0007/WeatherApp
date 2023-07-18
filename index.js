function search() {

    const data = [
        {
            city: "Kolkata", 
            temp: 28,
            weather: "Stormy"
        },
        {
            city: "Mumbai",
            temp: 27,
            weather: "Haze"
        },
        {
            city: "Delhi",
            temp: 25,
            weather: "Cloudy"
        },
        {
            city: "Bangalore",
            temp: 20,
            weather: "Rainy"
        },
    ]

    const searchCity = document.getElementById("search-city").value;
    let cityName;
    let temperature;
    for (let i = 0; i < data.length; i++) {
        const cityData = data[i];
        if (cityData.city.toLowerCase() === searchCity.toLowerCase()) {
            cityName = cityData.city;
            temperature = cityData.temp;
        }
    }
    const city = document.getElementById("city");
    city.innerText = cityName;

    const temp = document.getElementById("temperature");
    temp.innerText = temperature;

    const today = new Date();
    const time = document.getElementById("time");
    time.innerText = today.getHours() + ":" + today.getMinutes()

}