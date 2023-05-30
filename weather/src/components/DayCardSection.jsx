import WeatherCard from "./WeatherCard";
import styled from "styled-components";

import { useNavigate, useParams } from "react-router-dom";
import SkeletonCard from "./SkeletonCard";
import useGetWeatherInfo from "../hooks/useGetWeatherInfo";

const DayCardSection = () => {
  const { area } = useParams();

  const navigate = useNavigate();

  const {
    isLoading,
    data: weatherData,
    isError,
  } = useGetWeatherInfo("day", area);

  if (isError) {
    navigate(`/error`);
  }

  return (
    <St.CardContainer>
      {isLoading ? <SkeletonCard /> : <WeatherCard data={weatherData} />}
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
