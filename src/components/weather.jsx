import { useState, useEffect } from "react";

function App() {
  const [weather, setWeather] = useState(null);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "b03a2cfad336d11bd9140ffd92074504";
    const city = "Phnom Penh";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Can not load data from BackEnd!");
        }
        return res.json();
      })
      .then((data) => {
        // get tomorrow date
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const tomorrowDate = tomorrow.toISOString().split("T")[0];

        // get all forecast data for tomorrow
        const tomorrowData = data.list.filter(item =>
          item.dt_txt.startsWith(tomorrowDate)
        );

        if (tomorrowData.length === 0) {
          throw new Error("No weather data for tomorrow");
        }

        // calculate min & max temp
        let minTemp = Infinity;
        let maxTemp = -Infinity;
        let humidity = 0;

        tomorrowData.forEach(item => {
          minTemp = Math.min(minTemp, item.main.temp_min);
          maxTemp = Math.max(maxTemp, item.main.temp_max);
          humidity += item.main.humidity;
        });

        humidity = Math.round(humidity / tomorrowData.length);

        setWeather({
          city: data.city.name,
          minTemp,
          maxTemp,
          humidity,
          condition: tomorrowData[0].weather[0].description
        });

        setLoad(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(false);
      });
  }, []);

  if (load) return <p>Loading API data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Tomorrow Weather in {weather.city}</h1>
      <p>🌡 Min Temp: {weather.minTemp.toFixed(1)} °C</p>
      <p>🌡 Max Temp: {weather.maxTemp.toFixed(1)} °C</p>
      <p>💧 Humidity: {weather.humidity}%</p>
      <p>☁ Condition: {weather.condition}</p>
    </div>
  );
}

export default App;
