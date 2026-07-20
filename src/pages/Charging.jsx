import { useEffect, useState } from "react";

import Camera from "../components/Camera/Camera";
import Gift from "../components/Gift/Gift";
import Particles from "../components/Particles/Particles";
import ProgressBar from "../components/UI/ProgressBar";
import Title from "../components/UI/Title";

function Charging({ next }) {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    let value = 0;

    const timer = setInterval(() => {

      value++;
      setProgress(value);

      if (value >= 100) {
        clearInterval(timer);

        setTimeout(() => {
          next();
        }, 1200);
      }

    }, 40);

    return () => clearInterval(timer);

  }, []);

  return (
    <Camera>

      <Particles />

      <div className="page">

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "25px",
            zIndex: 10,
            width: "100%",
          }}
        >

          <Gift />

          <Title>
            There Is Something <br />
            Time To Reveal

          </Title>

          <ProgressBar value={progress} />

          <h2
            style={{
              color: "white",
              fontSize: "28px",
              textAlign: "center",
              margin: 0,
            }}
          >
            {progress}%
          </h2>

        </div>

      </div>

    </Camera>
  );
}

export default Charging;