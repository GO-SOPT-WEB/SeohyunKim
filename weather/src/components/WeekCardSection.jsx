import styled from "styled-components";
import WeatherCard from "./WeatherCard";

const WeekCardSection = () => {
  return (
    <St.CardContainer>
      <WeatherCard />
      <WeatherCard />
    </St.CardContainer>
  );
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
