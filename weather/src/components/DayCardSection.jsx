import WeatherCard from "./WeatherCard";
import styled from "styled-components";

import axios from "axios";

import { useParams } from "react-router-dom";

const DayCardSection = () => {
  const { area } = useParams();
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
    import.meta.env.VITE_APP_WEATHER
  }&units=metric`;

  const getWeatherInfo = async () => {
    axios
      .get(WEATHER_URL)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { data } = getWeatherInfo();

  return (
    <St.CardContainer>
      <WeatherCard data={data} />
    </St.CardContainer>
  );
};

export default DayCardSection;

const St = {
  CardContainer: styled.section`
    display: flex;
    justify-content: center;
  `,
};
