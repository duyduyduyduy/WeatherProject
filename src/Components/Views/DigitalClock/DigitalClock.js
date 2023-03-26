import React, { useEffect, useState } from "react";
import "../Content/Content.css";
import handleTimeAll from "../../FunctionHandle/HandleTimeAll";
export default function DigitalClock() {
  const [Info, setInfo] = useState("");
  const handleTime = () => {
    setInfo(handleTimeAll(new Date()));
  };

  useEffect(() => {
    setInterval(handleTime, 1000);
  }, []);
  return (
    <div className="digitalClock">
      <h1 style={{ fontSize: "50px" }}>
        {Info.hour < 10 ? "0" + Info.hour : Info.hour}:
        {Info.minute < 10 ? "0" + Info.minute : Info.minute}:
        {Info.second < 10 ? "0" + Info.second : Info.second}
      </h1>
      <p>
        {Info.day}, {Info.date} {Info.month}, {Info.year}
      </p>
    </div>
  );
}
