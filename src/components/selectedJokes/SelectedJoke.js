import React, { useState } from "react";
import {
  Another,
  Box,
  Button,
  ImageSpan,
  ImageThumb,
  ImageThumbBox,
  MainBox,
  MainBoxBigText,
  MainBoxContent,
  MainBoxSmallText,
  MainCardBox,
  MainContainer,
  MainFlex,
  MainFlexBtn,
} from "./selectedJokes.elements";
import like from "../../assets/images/hand@2x.png";
import unlike from "../../assets/images/hand-copy@2x.png";
import leftArrow from "../../assets/images2/arrow-left.png";
import rightArrow from "../../assets/images2/arrow-left-copy.png";

export default function SelectedJoke({ data }) {
  const [likedJokes, setLikedJokes] = useState();

  const likeJoke = (id) => {
    // if (likedJokes.find((j) => j.id === id)) return;
    // const likedJoke = data.find((j) => j.id === id);
    // setLikedJokes(likedJoke, ...likedJokes);
    console.log("liked");
  };
  const unlikeJoke = (id) => {
    // const newLikeJokes = likedJokes.filter((j) => j.id !== id);
    // setLikedJokes(newLikeJokes);
    console.log("unlike");
  };
  return (
    <MainBox>
      <MainContainer>
        <MainCardBox>
          <MainFlex>
            <MainFlexBtn>.chuck</MainFlexBtn>
            <MainFlexBtn primary>.trending</MainFlexBtn>
          </MainFlex>
          <MainBoxContent>
            <MainBoxBigText>chunk norris jokes</MainBoxBigText>
            <MainBoxSmallText>{data.value}</MainBoxSmallText>
          </MainBoxContent>
        </MainCardBox>
        <Box>
          <Another>
            <Another primary onClick={() => likeJoke(data.id)}>
              <ImageThumbBox>
                <ImageThumb src={like} />
              </ImageThumbBox>
              <ImageSpan>{data.likes}</ImageSpan>
            </Another>
            <Another primary onClick={() => unlikeJoke(data.id)}>
              <ImageThumbBox primary>
                <ImageThumb src={unlike} />
              </ImageThumbBox>
              <ImageSpan>{data.dislikes}</ImageSpan>
            </Another>
          </Another>
          <Another>
            <Button>
              <ImageThumb src={leftArrow} /> prev joke
            </Button>
            <Button on>
              next joke
              <ImageThumb src={rightArrow} />
            </Button>
          </Another>
        </Box>
      </MainContainer>
    </MainBox>
  );
}
