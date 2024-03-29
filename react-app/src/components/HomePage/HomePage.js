import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { ReactComponent as PlaySVG } from "../../assets/playSvg.svg";
import { ReactComponent as LightBlur } from "../../assets/homePageLightBlur.svg";
import landingPagePic from "../../assets/landingPagePic.png";
import phoneLandingPagePic from "../../assets/landingPagePic2.png";
import Footer from "./Footer";
import "./HomePage.css";

function HomePage() {
  const user = useSelector((state) => state.session.user);

  // Redirect to dashboard if user is logged in
  if (user) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home-page-container">
      <div className="home-page-content-container">
        <Navbar />
        <LightBlur className="light-blur-1" />

        <div className="home-page-content">
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

            {/* Video Container */}
            <div className="home-page-video-container">
              <div className="home-page-video">
                <a
                  href="https://www.youtube.com/watch?v=ML8jp7Q0cAI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PlaySVG className="play-svg" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=ML8jp7Q0cAI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p id="watch-demo">Watch Demo</p>
                </a>
              </div>
            </div>
          </div>

          {/* Image container */}
          <div className="home-page-image-container">
            <img
              src={landingPagePic}
              alt="home page image"
              className="landing-img"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
