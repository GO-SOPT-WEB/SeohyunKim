import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      darkPink: string;
      lightPink: string;
      beige: string;
      brown: string;
    };
  }
}
