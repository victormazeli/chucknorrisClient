import React from "react";
import {
  Card,
  CardText,
  CardTitle,
  StatBox,
  StatImg,
  StatText,
} from "./mainCard.element";
import arrow from "../../../assets/images/path.png";
import lighting from "../../../assets/images/green-light-copy-2.png";
import { Link } from "react-router-dom";

export default function MainCard({ data }) {
  return (
    <>
      {data.map((data) => (
        <Link to={`/second/${data.id}`} key={data.id}>
          <Card key={data.id}>
            <CardTitle>
              <StatImg primary src={lighting} /> {data.id}
            </CardTitle>
            <CardText>{data.value}</CardText>
            <StatBox>
              <StatText>see stat</StatText>
              <StatImg src={arrow} />
            </StatBox>
          </Card>
        </Link>
      ))}
    </>
  );
}
