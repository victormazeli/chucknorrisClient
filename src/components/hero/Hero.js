import React, { useEffect, useState } from "react";
import {
  HeroBigText,
  HeroBox,
  HeroCon,
  HeroSearchBox,
  HeroSearchIcon,
  HeroSearchInput,
  HeroSearchItem,
  HeroSearchItemImg,
  HeroSearchItems,
  HeroSearchItemText,
  HeroSmallText,
  HeroTextBox,
} from "./hero.elements";
import search from "../../assets/images/search-copy.png";
import axios from "axios";

export default function Hero({ data }) {
  const [searchJokes, setSearchJokes] = useState([]);

  useEffect(() => {
    axios
      .get("http://test-task-jokes.herokuapp.com/jokes/searchJokes?query=cele")
      .then((res) => {
        setSearchJokes(res.data.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = setSearchJokes.filter((value) => {
      return value.categories.includes(searchWord);
    });
    setFilteredData(newFilter);
  };

  return (
    <HeroBox>
      <HeroTextBox>
        <HeroBigText>the joke bible</HeroBigText>
        <HeroSmallText>Daily laughs for you and yours..</HeroSmallText>
      </HeroTextBox>
      <HeroSearchBox>
        <HeroSearchInput
          placeholder="How can we make you laugh today?"
          data={searchJokes}
          onChange={handleFilter}
        />
        <HeroSearchIcon src={search} />
        {filteredData.length !== 0 && (
          <HeroSearchItems>
            {searchJokes.map((value, key) => {
              return (
                <HeroSearchItem key={value.id}>
                  <HeroCon>
                    {/* <HeroSearchItemImg src={value.icon_url} alt="icon" /> */}
                    <HeroSearchItemText>{value.categories}</HeroSearchItemText>
                  </HeroCon>
                  <HeroCon></HeroCon>
                </HeroSearchItem>
              );
            })}
          </HeroSearchItems>
        )}
      </HeroSearchBox>
    </HeroBox>
  );
}
