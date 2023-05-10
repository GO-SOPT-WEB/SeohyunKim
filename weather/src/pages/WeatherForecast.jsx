import { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const WeatherForecast = () => {
  const [searchInfo, setSearchInfo] = useState({
    dayOrWeek: "day",
    searchWord: "",
  });
  return (
    <>
      <Header searchInfo={searchInfo} setSearchInfo={setSearchInfo} />
      <Outlet />
    </>
  );
};

export default WeatherForecast;
