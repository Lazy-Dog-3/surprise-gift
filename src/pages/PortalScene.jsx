// pages/PortalScene.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Camera from "../components/Camera/Camera";
import Portal from "../components/Portal/Portal";
import Particles from "../components/Particles/Particles";
import Title from "../components/UI/Title";
import Button from "../components/UI/Button";

function PortalScene({ next, playHeartbeat, stopHeartbeat }) {

  const [entering, setEntering] = useState(false);

  useEffect(() => {

    if (!playHeartbeat || !stopHeartbeat) return;

    // heart-beat.mp3 is a full continuous heartbeat rhythm and loops
    // on its own (see SoundContext), so it just starts once here and
    // stops on unmount - no interval needed.
    playHeartbeat();

    return () => {
      stopHeartbeat();
    };

  }, [playHeartbeat, stopHeartbeat]);

  const handleEnter = () => {

    setEntering(true);

    playHeartbeat?.();

    setTimeout(() => {

      next();

    }, 1500);

  };

  return (

    <Camera zoom>

      <Particles />

      <motion.div
        className="portal-scene"
        initial={{ opacity: 0 }}
        animate={{
          opacity: entering ? 0 : 1,
          scale: entering ? 1.25 : 1,
        }}
        transition={{ duration: 1.3 }}
      >

        <Portal />

        <motion.div
          className="portal-ui"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: .8,
          }}
        >

          <Title>Something's Behind </Title>

          <motion.div
            initial={{
              opacity: 0,
              scale: .7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 1.5,
              type: "spring",
              stiffness: 130,
            }}
          >

            <Button onClick={handleEnter}>
              💌 Postman Arrived 💌
            </Button>

          </motion.div>

        </motion.div>

      </motion.div>

    </Camera>

  );

}

export default PortalScene;