import styled from "styled-components";
import { WEATER_TYPE } from "../constants/weather";

const WeatherCard = ({ data }) => {
  if (!data) return;

  const {
    weather: [{ description }],
    main: { temp, feels_like, temp_min, temp_max },
    clouds: { all },
    dt_txt,
  } = data;

  const WeatherImg = WEATER_TYPE.find(
    (item) => item.description === description
  );

  return (
    <St.Card>
      {dt_txt && <header>{dt_txt.split(" ")[0]}</header>}
      <img
        src={
          WeatherImg
            ? WeatherImg.imgURL
            : "https://i.pinimg.com/564x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975.jpg"
        }
        alt={description}
      />
      <St.WeatherInfoContainer>
        <p>온도</p>
        <p>{temp}</p>
      </St.WeatherInfoContainer>
      <St.WeatherInfoContainer>
        <p>체감 온도</p>
        <p>{feels_like}</p>
      </St.WeatherInfoContainer>
      <St.WeatherInfoContainer>
        <p>최저/최고</p>
        <p>
          {temp_min}/{temp_max}
        </p>
      </St.WeatherInfoContainer>
      <St.WeatherInfoContainer>
        <p>구름</p>
        <p>{all}%</p>
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
      text-align: center;

      width: 17rem;
      height: 17rem;

      border: 1px solid black;
      border-radius: 0.5rem;

      margin: 1rem 0;

      ${({ theme }) => theme.fonts.Main};
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
