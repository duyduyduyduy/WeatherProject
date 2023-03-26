import React, { useEffect, useState } from "react";
import "./CityInfo.css";
export default function City(props) {
  const [Info, setInfo] = useState(undefined);
  useEffect(() => {
    setInfo(props.Data);
  }, [props.Data]);
  return (
    Info && (
      <div className="citycontainer">
        <div className="citycontent">
          <h1 style={{ fontSize: "16px" }}>
            <img
              alt="Hello"
              src={`https://openweathermap.org/images/flags/${Info.sys.country.toLowerCase()}.png`}
              style={{ marginRight: "5px" }}
            ></img>
            {Info.name}
          </h1>
          <p style={{ marginTop: "10px" }}>
            <span
              style={{
                background: "#424242",
                color: "white",
                padding: "2px 8px 2px 8px",
                borderRadius: "10px",
                marginRight: "6px",
                fontWeight: "bolder",
              }}
            >
              {Info.main.temp}°F
            </span>
            temperature from {Info.main.temp_min}°F to {Info.main.temp_max}°F
            wind {Info.wind.speed}m/s, clouds {Info.clouds.all}%.
          </p>
          <p>
            Geo coords [{Info.coord.lat},{Info.coord.lon}]
          </p>
        </div>
      </div>
    )
  );
}
