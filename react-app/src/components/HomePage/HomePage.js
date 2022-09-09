import React from "react";
import Navbar from "./Navbar";
import { ReactComponent as PlaySVG } from "../../assets/playSvg.svg";
import { ReactComponent as LightBlur } from "../../assets/homePageLightBlur.svg";
import { ReactComponent as RedCircle } from "../../assets/redCircleSvg.svg";
import tempHomeImg from "../../assets/tempHomeImg.png";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-page-content-container">
        <Navbar />
        <LightBlur className="light-blur-1" />
        <RedCircle className="red-circle-home" />

        {/* Title Container */}
        <div className="home-page-title-container">
          <h1>Managing Your Money</h1>
          <h1 className="home-page-title-2">Made Easy</h1>
          <div className="home-page-subheading">
            <p>
              Helping users realize their financial goals through visual
              representations of their spending habits.
            </p>
          </div>
        </div>

        {/* Video Container */}
        <div className="home-page-video-container">
          <div className="home-page-video">
            <PlaySVG className="play-svg" />

            <p>Watch Demo</p>
          </div>
        </div>

        {/* Image Container */}
        <div className="home-page-image-container">
          <img src={tempHomeImg} alt="temp-home-img" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
