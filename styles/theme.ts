import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  basicWidth: "320px",
  palette: {
    main: "#7b9acc",
    sub: "#FCF6F5",
    primary: "blue",
    secondary: "grey",
    success: "green",
    warning: "yellow",
    danger: "red",
    info: "blueish",
    light: "white",
    dark: "black",
  },
  fontColor: {
    primary: "white",
    secondary: "black",
    success: "white",
    warning: "black",
    danger: "white",
    info: "white",
    light: "black",
    dark: "white",
  },
};

const nextTheme: DefaultTheme = {
  basicWidth: "320px",

  color: {
    main: "#1c1f25",
    sub: "#fff"
  }
};

export { theme, nextTheme };