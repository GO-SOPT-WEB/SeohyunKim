import styled from "styled-components";

const ErrorPage = () => {
  return (
    <St.ErrorMsg>
      ❗Error❗
      <br />
      정상적으로 불러오지 못했습니다.
    </St.ErrorMsg>
  );
};

export default ErrorPage;

const St = {
  ErrorMsg: styled.p`
    text-align: center;

    ${({ theme }) => theme.fonts.Sub_Title};
  `,
};
