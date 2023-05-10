import styled from "styled-components";
import { WEATER_TYPE } from "../constants/weather";

const WeatherCard = () => {
  const { imgURL, description } = WEATER_TYPE;
  return (
    <St.Card>
      <header>05-12</header>
      <img src={imgURL} alt={description} />
      <St.WeatherInfoContainer>
        <p>온도</p>
        <p>15.37</p>
      </St.WeatherInfoContainer>
      <St.WeatherInfoContainer>
        <p>체감 온도</p>
        <p>15.37</p>
      </St.WeatherInfoContainer>
      <St.WeatherInfoContainer>
        <p>최저/최고</p>
        <p>15.37</p>
      </St.WeatherInfoContainer>
      <St.WeatherInfoContainer>
        <p>구름</p>
        <p>15.37</p>
      </St.WeatherInfoContainer>
    </St.Card>
  );
};

export default WeatherCard;

const St = {
  Card: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 25rem;
    height: 40rem;

    border-radius: 2rem;

    padding: 2rem 0;

    background-color: ${({ theme }) => theme.colors.SkyBlue};

    & > header {
      ${({ theme }) => theme.fonts.Sub_Title};
    }
    & > img {
      width: 17rem;
      height: 17rem;

      border: 1px solid black;
      border-radius: 0.5rem;

      margin: 1rem 0;
    }
  `,
  WeatherInfoContainer: styled.div`
    display: flex;
    justify-content: space-between;

    width: 16rem;

    margin: 0.7rem 0;

    & > p {
      ${({ theme }) => theme.fonts.Main};
    }
  `,
};
