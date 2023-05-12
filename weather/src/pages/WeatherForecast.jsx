import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const WeatherForecast = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default WeatherForecast;
