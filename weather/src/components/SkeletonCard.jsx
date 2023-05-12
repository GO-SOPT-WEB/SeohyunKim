import { useLocation } from "react-router-dom";
import styled from "styled-components";

const SkeletonCard = () => {
  const location = useLocation();
  return (
    <St.CardContainer>
      {location.pathname.startsWith("/week/") && (
        <header>
          <St.Skeleton />
        </header>
      )}
      <div>
        <St.Skeleton />
      </div>
      <St.WeatherInfoContainer>
        <St.Skeleton />
      </St.WeatherInfoContainer>
    </St.CardContainer>
  );
};

export default SkeletonCard;

const St = {
  CardContainer: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    width: 25rem;
    height: 40rem;

    border-radius: 2rem;

    padding: 2rem 0;

    background-color: ${({ theme }) => theme.colors.SkyBlue};

    & > header {
      position: relative;
      overflow: hidden;

      width: 10.8rem;
      height: 2.5rem;

      border-radius: 0.5rem;
      background-color: #f2f2f2;
    }
    & > div {
      position: relative;
      overflow: hidden;

      width: 17rem;
      height: 17rem;

      border-radius: 0.5rem;

      margin: 1rem 0;
      background-color: #f2f2f2;
    }
  `,
  Skeleton: styled.div`
    @keyframes loading {
      0% {
        transform: translateX(0);
      }
      50%,
      100% {
        transform: translateX(460px);
      }
    }

    position: absolute;
    top: 0;
    left: 0;

    width: 70%;
    height: 100%;

    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: loading 2s infinite linear;
  `,
  WeatherInfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1.5rem;

    width: 17rem;
    height: 15rem;

    margin-top: 0.3rem;

    border-radius: 0.5rem;

    background: #f2f2f2;
    overflow: hidden;
  `,
};
