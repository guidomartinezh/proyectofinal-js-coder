const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Buenos%20Aires';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '11a99c94b3msh35e425e40664f01p123799jsn7af79690f12e',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

async function fetchWeatherData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const temperature = result.current.temp_c;
        document.getElementById("clima").innerText = `Temperatura en Buenos Aires: ${temperature}°C`;
    } catch (error) {
        document.getElementById("clima").innerText = "Error al obtener el clima";
        console.error('Error al obtener el clima:', error);
    }
}

window.addEventListener('load', fetchWeatherData);


