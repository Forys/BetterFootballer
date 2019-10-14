import React, { Component } from "react";

import GlobalStyle from "./styles/Global";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import { ThemeProvider } from "styled-components";

const theme = {
  primary: "#00C16E",
  secondary: "#114137",
  third: "#00FF91"
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <TopNavigation title="Tablica"></TopNavigation>
        <BottomNavigation></BottomNavigation>
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}

export default App;
