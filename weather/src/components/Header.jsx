import { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [dayOrWeek, setDayOrWeek] = useState("day");
  const [searchWord, setSearchWord] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // 오늘, 주간 onChange 함수
  const handleDayOrWeek = (e) => {
    const { value } = e.currentTarget;
    setDayOrWeek(value);

    // 현재 day or week 페이지면 바로 재검색
    if (location.pathname !== "/") {
      navigate(`/${value}/${searchWord}`);
    }
  };

  // 검색바 onChange 함수
  const handleSearch = (e) => {
    const { value } = e.currentTarget;
    setSearchWord(value);
  };

  return (
    <header>
      <St.Title>🌡서현이의 날씨 예보🌡</St.Title>
      <St.SearchContainer>
        <St.SelectDayOrWeek onChange={handleDayOrWeek}>
          <option className="day" value="day">
            오늘
          </option>
          <option className="week" value="week">
            주간
          </option>
        </St.SelectDayOrWeek>
        <St.SearchBar
          placeholder="영어로 도시명 ex)seoul"
          value={searchWord}
          onChange={handleSearch}
        />
        <St.SearchButton
          type="button"
          onClick={() => navigate(`/${dayOrWeek}/${searchWord}`)}
        >
          검색
        </St.SearchButton>
      </St.SearchContainer>
    </header>
  );
};

export default Header;

const St = {
  Title: styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 7rem;

    background-color: ${({ theme }) => theme.colors.Blue};

    color: white;

    ${({ theme }) => theme.fonts.Title};
  `,
  SearchContainer: styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    height: 10rem;
  `,
  SelectDayOrWeek: styled.select`
    ${({ theme }) => theme.fonts.Sub_Title};
  `,
  SearchBar: styled.input`
    width: 32rem;
    height: 4.5rem;

    padding: 0 1.5rem;

    border-radius: 1rem;
    border: none;

    ${({ theme }) => theme.fonts.Sub_Title};
    background-color: ${({ theme }) => theme.colors.SkyBlue};
  `,
  SearchButton: styled.button`
    width: 7rem;
    height: 4rem;

    border-radius: 1rem;
    border: none;

    ${({ theme }) => theme.fonts.Sub_Title};

    color: white;
    background-color: ${({ theme }) => theme.colors.DarkBlue};

    cursor: pointer;
  `,
};
