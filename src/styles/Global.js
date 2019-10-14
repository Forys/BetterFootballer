import { createGlobalStyle } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faCheckSquare,
  faFootballBall,
  faHome,
  faStopwatch,
  faTrophy,
  faBars,
  faMedal,
  faArrowLeft,
  faChevronLeft,
  faArrowRight,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fas,
  faCheckSquare,
  faFootballBall,
  faHome,
  faStopwatch,
  faTrophy,
  faBars,
  faMedal,
  faArrowLeft,
  faChevronLeft,
  faArrowRight,
  faChevronRight
);
const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap');
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 100%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    font-weight:500;
  }
`;

export default GlobalStyles;
