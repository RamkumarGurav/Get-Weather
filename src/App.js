import React, { useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import { useDispatch, useSelector } from "react-redux";
import { recieveData } from "./store/weatherSlice";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.weather.search);
  console.log(search);

  useEffect(() => {
    dispatch(recieveData(search))
  }, [search,dispatch]);

  return (
    <div >
      <WeatherCard />
      <Footer/>
    </div>
  );
};

export default App;
