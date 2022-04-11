import React from "react";
import { ThemeProvider } from "styled-components";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Main from "../components/main/Main";
import GlobalStyles from "../Global";

const theme = {
  colors: {
    dark: "#303030",
    subMain: "#020232",
    white: "#fff",
    secondWhite: "#ecebe9",
    lightBrown: "#CFB995",
    gray: "#666",
    black: "#000",
    body: "#d0ba93",
  },
  sizes: {
    tablet: "600px",
    ipad: "850px",
    smDesktop: "1150px",
  },
};

export default function Home({ data }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Hero />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}
