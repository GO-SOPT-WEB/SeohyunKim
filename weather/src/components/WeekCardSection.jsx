import WeatherCard from "./WeatherCard";
import styled from "styled-components";

import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const WeekCardSection = () => {
  const { area } = useParams();
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${
    import.meta.env.VITE_APP_WEATHER
  }&units=metric`;

  const navigate = useNavigate();
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherInfo = async () => {
    axios
      .get(WEATHER_URL)
      .then((res) => {
        const {
          data: { list },
        } = res;
        setWeatherData(list);
      })
      .catch((e) => {
        navigate(`/error`);
      });
  };

  // area 바뀌면 검색
  useEffect(() => {
    getWeatherInfo();
  }, [area]);

  // 각 날짜별로 21시에 해당하는 정보만 필터링
  const renderData = weatherData?.filter((data) => {
    const dateTime = data.dt_txt.split(" ");
    if (dateTime[1] === "21:00:00") {
      return true;
    }
  });

  // 날씨 카드 렌더링
  const WeatherCardList = renderData?.map((data) => {
    return <WeatherCard key={data.dt_txt} data={data} />;
  });

  return <St.CardContainer>{WeatherCardList}</St.CardContainer>;
};

export default WeekCardSection;

const St = {
  CardContainer: styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  `,
};
