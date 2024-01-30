import React, { useRef, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Video from "../../images/video.mp4";
import "./Explore.css";
import Explore1 from "../../images/expore1.png";
import Explore2 from "../../images/expore2.png";
import Explore3 from "../../images/expore3.png";

const Explore = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Layout>
      <>
        <div className="explore-main">
          <video
            ref={videoRef}
            width="100%"
            height="100%"
            controls={false}
            onClick={handlePlayPause}
            muted
            volume={0}
          >
            <source src={Video} type="video/mp4" />
          </video>

          <button
            onClick={handlePlayPause}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "transparent",
              border: "none",
              fontSize: "2.5em",
              cursor: "pointer",
            }}
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>
        </div>
        <h1 className="explore-take">Take a tour</h1>
        <div className="explore-text1">
          <img src={Explore1} alt="" />
          <div className="explore-text1-data">
            <h2>Luxurious rooms</h2>
            <p>
              The elegant luxury bedrooms in this gallery showcase custom
              interior designs & decorating ideas. View pictures and find your
              perfect luxury bedroom design.Luxurious bedrooms that will make
              you never want to leave your room again. See more ideas about
              luxurious bedrooms, bedroom design
            </p>
          </div>
        </div>
        <div className="explore-text1">
          <img src={Explore2} alt="" />
          <div className="explore-text1-data">
            <h2>Gym center</h2>
            <p>
              The elegant luxury bedrooms in this gallery showcase custom
              interior designs & decorating ideas. View pictures and find your
              perfect luxury bedroom design.Luxurious bedrooms that will make
              you never want to leave your room again. See more ideas about
              luxurious bedrooms, bedroom design
            </p>
          </div>
        </div>
        <div className="explore-text1">
          <img src={Explore3} alt="" />
          <div className="explore-text1-data">
            <h2>Restaurant</h2>
            <p>
              The elegant luxury bedrooms in this gallery showcase custom
              interior designs & decorating ideas. View pictures and find your
              perfect luxury bedroom design.Luxurious bedrooms that will make
              you never want to leave your room again. See more ideas about
              luxurious bedrooms, bedroom design
            </p>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Explore;
