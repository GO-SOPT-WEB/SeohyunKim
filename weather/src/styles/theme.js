import { css } from "styled-components";

const colors = {
  SkyBlue: "#8ecae6",
  Blue: "#219ebc",
  DarkBlue: "#023047",
  Yellow: "#ffb703",
  Orange: "#fb8500",
};

const fonts = {
  Title: css`
    font-family: "omyu_pretty";
    font-style: normal;
    font-weight: 700;
    font-size: 4rem;
  `,
  Sub_Title: css`
    font-family: "omyu_pretty";
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
  `,
  Main: css`
    font-family: "omyu_pretty";
    font-style: normal;
    font-size: 2rem;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
