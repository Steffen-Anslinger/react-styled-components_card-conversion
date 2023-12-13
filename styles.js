import { createGlobalStyle } from "styled-components";
import { Silkscreen } from "next/font/google";

const silkScreen = Silkscreen({ subsets: ["latin"], weight: "400" });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${silkScreen.style.fontFamily};
    line-height: 1.5;
  }

  main {
    max-width: 480px;
    margin: 0 auto;
    padding: 8px;
  }
`;
