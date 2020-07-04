import React from "react";

import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyles from "../../styles/global";
import Primary from "../../styles/themes/primary";
import Secondary from "../../styles/themes/secondary";

import NavBar from "./navBar";

import usePersistedState from "../../utils/usePersistedState";
import { RoutesHome } from "../../routes";

const HomePage: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", Primary);

  const toggleTheme = () => {
    setTheme(theme.title === "Primary" ? Secondary : Primary);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar toggleTheme={toggleTheme} />
        <RoutesHome />
      </ThemeProvider>
    </>
  );
};

export default HomePage;
