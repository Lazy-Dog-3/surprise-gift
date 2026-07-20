// pages/Intro.jsx
import { useState } from "react";

import Stars from "../components/Stars/Stars";
import Particles from "../components/Particles/Particles";
import Gift from "../components/Gift/Gift";
import Camera from "../components/Camera/Camera";
import Button from "../components/UI/Button";
import Title from "../components/UI/Title";
import "../styles/Intro.css";

function Intro({ next }) {

  const [zoom, setZoom] = useState(false);

  const handleGift = () => {
    setZoom(true);

    setTimeout(() => {
      next();
    }, 1800);
  };

  return (
    <Camera zoom={zoom}>

      <div className="page">

        <Stars />

        <Particles />

        <div className="intro-content">

          <Gift next={handleGift} />

          <Title>
            A simple gift for a beautiful soul <br />
          </Title>

          <Button onClick={handleGift} sound="giftBox">
            ✨ Here You Go ✨
          </Button>

        </div>

      </div>

    </Camera>
  );
}

export default Intro;