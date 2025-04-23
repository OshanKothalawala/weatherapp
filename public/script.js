async function getWeather() {
    const city = document.getElementById('cityInput').value;
  
    const res = await fetch(`/weather?city=${city}`);
    const data = await res.json();
  
    if (data.error) {
      document.getElementById('weatherResult').innerHTML = `<p>${data.error}</p>`;
    } else {
      document.getElementById('weatherResult').innerHTML = `
        <h2>${data.name}, ${data.country}</h2>
        <img src="https://openweathermap.org/img/wn/${data.icon}@2x.png" />
        <p><strong>${data.temp}°C</strong> - ${data.description}</p>
      `;
    }
  }