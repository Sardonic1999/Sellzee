import React from "react";
import { CardPixel, Pixel, Wrapper, WrapPixel } from "./Card_Style";
import lamp from "../assets/icons/lamp.svg";
import blog from "../assets/icons/blog.svg";
import social from "../assets/icons/social.svg";
import setting from "../assets/icons/setting.svg";
import point from "../assets/icons/point.svg";

const Card = () => {
  return (
    <Wrapper>
      <WrapPixel>
        <Pixel>
          <h4>Your Vision, Our Future.</h4>
          <h1>
            Committed to People, <br /> Committed{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.{" "}
          </p>
        </Pixel>
        <CardPixel blue white>
          <img src={lamp} alt="" />
          <h1>Creative Ideas</h1>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Sed{" "}
            <br /> donec gravida{" "}
          </p>
        </CardPixel>
        <CardPixel>
          <img src={blog} alt="" />
          <h1>Beautiful Blog</h1>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Sed{" "}
            <br /> donec gravida{" "}
          </p>
        </CardPixel>
      </WrapPixel>
      <WrapPixel>
        <CardPixel>
          <img src={social} alt="" />
          <h1>User Friendly</h1>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Sed{" "}
            <br /> donec gravida{" "}
          </p>
        </CardPixel>
        <CardPixel>
          <img src={setting} alt="" />
          <h1>Perfect Showcase</h1>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Sed{" "}
            <br /> donec gravida{" "}
          </p>
        </CardPixel>
        <CardPixel>
          <img src={point} alt="" />
          <h1>Easy to Use</h1>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Sed{" "}
            <br /> donec gravida{" "}
          </p>
        </CardPixel>
      </WrapPixel>
    </Wrapper>
  );
};

export default Card;
