import WeatherCard from "./WeatherCard";
import styled from "styled-components";

import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DayCardSection = () => {
  const { area } = useParams();
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
    import.meta.env.VITE_APP_WEATHER
  }&units=metric`;

  const navigate = useNavigate();
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherInfo = async () => {
    axios
      .get(WEATHER_URL)
      .then((res) => {
        const { data } = res;
        setWeatherData(data);
      })
      .catch(() => {
        navigate(`/error`);
      });
  };

  // area 바뀌면 검색
  useEffect(() => {
    getWeatherInfo();
  }, [area]);

  return (
    <St.CardContainer>
      <WeatherCard data={weatherData} />
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
