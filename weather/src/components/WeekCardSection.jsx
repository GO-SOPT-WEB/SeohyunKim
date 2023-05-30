import WeatherCard from "./WeatherCard";
import styled from "styled-components";

import { useNavigate, useParams } from "react-router-dom";
import SkeletonCard from "./SkeletonCard";
import useGetWeatherInfo from "../hooks/useGetWeatherInfo";

const WeekCardSection = () => {
  const { area } = useParams();

  const navigate = useNavigate();

  const { isLoading, data, isError } = useGetWeatherInfo("week", area);

  if (isError) navigate(`/error`);

  let WeatherCardList;
  if (isLoading)
    WeatherCardList = [1, 2, 3, 4, 5].map((idx) => {
      return <SkeletonCard key={idx} />;
    });
  else {
    // 각 날짜별로 21시에 해당하는 정보만 필터링
    const renderData = data?.list.filter((data) => {
      const dateTime = data.dt_txt.split(" ");
      if (dateTime[1] === "21:00:00") {
        return true;
      }
    });

    // 날씨 카드 렌더링
    WeatherCardList = renderData?.map((data) => {
      return <WeatherCard key={data.dt_txt} data={data} />;
    });
  }

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
