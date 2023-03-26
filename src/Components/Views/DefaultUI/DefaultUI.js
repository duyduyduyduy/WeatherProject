import React, { useState } from "react";
import "./../Common.css";
export default function DefaultUI() {
  return (
    <div className="defaultUIcontainer">
      <div className="defautMainsize">
        <h1>Weather</h1>
        <h1>Forecast</h1>
        <p>UI Screens</p>
        <div className="iconContainer">
          <div>
            <img src="https://teachingserver.onrender.com/weather/weatherIcon/04d"></img>
            <p>Overcast</p>
          </div>
          <div>
            <img src="https://teachingserver.onrender.com/weather/weatherIcon/10d"></img>
            <p>Rainy</p>
          </div>
          <div>
            <img src="https://teachingserver.onrender.com/weather/weatherIcon/01d"></img>
            <p>Sunny</p>
          </div>
          <div>
            <img src="https://teachingserver.onrender.com/weather/weatherIcon/02d"></img>
            <p>Mild</p>
          </div>
          <div>
            <img src="https://teachingserver.onrender.com/weather/weatherIcon/13d"></img>
            <p>Snowy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
