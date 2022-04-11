import axios from "axios";
import React, { useEffect, useState } from "react";
import { BoxTitle, BoxTitleText, ContentBox, MainBox } from "./main.element";
import MainBtn from "./mainButton/MainBtn";
import MainCard from "./mainCard/MainCard";

export default function Main() {
  const [jokesData, setJokesData] = useState([]);
  const [jokesToShow, setJokesToShow] = useState([]);

  useEffect(() => {
    axios
      .get("http://test-task-jokes.herokuapp.com/jokes/pullJokesData")
      .then((res) => {
        setJokesData(res.data.stored);
        setJokesToShow(res.data.stored.slice(0, 6));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <MainBox>
      <ContentBox>
        <MainBtn />
      </ContentBox>
      <ContentBox>
        <BoxTitle>
          <BoxTitleText>social jokes</BoxTitleText>
        </BoxTitle>
      </ContentBox>
      <ContentBox primary>
        <MainCard data={jokesToShow} />
      </ContentBox>
    </MainBox>
  );
}
