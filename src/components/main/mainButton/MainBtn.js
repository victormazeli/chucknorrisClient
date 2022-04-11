import axios from "axios";
import React, { useEffect, useState } from "react";
import { Buttons } from "./mainBtn.elements";

export default function MainBtn() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://test-task-jokes.herokuapp.com/jokes/getCategory")
      .then((res) => {
        setCategories(res.data.getCat);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {categories.map((data) => (
        <Buttons key={data.id}>{data.name}</Buttons>
      ))}
    </>
  );
}
