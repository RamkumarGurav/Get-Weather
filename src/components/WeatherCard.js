import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weatherActions } from "../store/weatherSlice";
import "./weatherCard.css";

const WeatherCard = ({ call }) => {
  const [search, setSearch] = useState("Bengaluru");
  const { temp, imgCode, wind, pressure, humidity, desc } = useSelector(
    (state) => state.weather.status
  );
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearch(event.target.value);
   
  
        

  };

  setTimeout(() => {
    dispatch(weatherActions.setSearch(search));
  }, 400);

  const currentDate = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="weather-container">
      <div id="weather">
        <div className="search input-group rounded">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search by City Name"
            aria-describedby="search-addon"
            onChange={handleChange}
            value={search}
          />
        </div>
        <div className="cityName">
          <i className="fa-solid fa-street-view mt-4"></i>
          <h1>{search.toUpperCase()}</h1>
        </div>

        <div className="weather-data">
          <p>{currentDate}</p>
          <h2>{desc}</h2>
          <div className="img-temp">
            <div className="img-div">
              <img
                src={`http://openweathermap.org/img/wn/${imgCode}@2x.png`}
                alt="weather"
              />
            </div>
            <h1>{temp}°C</h1>
          </div>
          <div className="prop">
            <div>
              <p>Wind </p>
            </div>

            <p>{wind} m/s</p>
          </div>

          <div className="prop">
            <div>
              <p>Humidity </p>
            </div>
            <p>{humidity} %</p>
          </div>

          <div className="prop">
            <div>
              <p>Pressure </p>
            </div>
            <p>{pressure} hPa</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
