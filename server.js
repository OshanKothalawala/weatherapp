const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;

// Replace with your OpenWeatherMap API key
const API_KEY = 'c38077d8a6ca76fb7034111211f74206';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.json({ error: 'City name required!' });

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = response.data;
    res.json({
      name: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon
    });
  } catch (err) {
    res.json({ error: 'City not found or error fetching data.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});