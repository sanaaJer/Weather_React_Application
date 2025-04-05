

import React from "react";

export default function DailyCard({ day }) {

   // inline styles
    const divStyle={ display: "flex", flexDirection: "row", gap: "8vw", justifyContent: "center", alignItems: "center" }
    // Convert date string to a day name (e.g., "Tuesday")
    const date = new Date(day.dt_txt);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

    // Get temperature
    const temperature = Math.round(day.main.temp); // Rounding temperature

    // Get weather icon URL from OpenWeatherMap
    const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

  return (
    <div style={divStyle}>
      <p>{dayName}</p> {/* Day Name */}
      <img src={iconUrl} alt="weather-icon" style={{ width: "2em", height: "2em" }} /> {/* Weather Icon */}
      <p   >{temperature}°C</p> {/* Temperature */}
    </div>
  );
}
