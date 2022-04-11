import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import SelectedJoke from "../components/selectedJokes/SelectedJoke";
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

export default function Second(props) {
  const [jokeData, setJokesData] = useState({});
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://test-task-jokes.herokuapp.com/jokes/getJoke/${id}`)
      .then((res) => {
        setJokesData(res.data.docs[0]);
        console.log(res.data.docs[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Hero />
      <SelectedJoke data={jokeData} />
      <Footer />
    </ThemeProvider>
  );
}
