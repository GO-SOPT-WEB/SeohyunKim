import WeatherCard from "./WeatherCard";
import styled from "styled-components";

const DayCardSection = () => {
  return (
    <St.CardContainer>
      <WeatherCard />
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
