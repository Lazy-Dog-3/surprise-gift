import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import useSound from "./hooks/useSound";

import Intro from "./pages/Intro";
import Charging from "./pages/Charging";
import PortalScene from "./pages/PortalScene";
import Letter from "./pages/Letter";
import BouquetScene from "./pages/BouquetScene";
import Gallery from "./pages/Gallery";
import Ending from "./pages/Ending";

function SceneWrapper({ children, scene }) {
  return (
    <motion.div
      key={scene}
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6 }}
      style={{
        width: "100%",
        height: scene === "gallery" ? "auto" : "100%",
        minHeight: scene === "gallery" ? "100vh" : "100%",
        overflowY: scene === "gallery" ? "auto" : "hidden",
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [scene, setScene] = useState("intro");
  
  // Destructure stopHeartbeat too
  const { isMusicPlaying, toggleMusic, playHeartbeat, stopHeartbeat } = useSound();

  let currentScene;

  switch (scene) {
    case "intro":
      currentScene = <Intro next={() => setScene("charging")} />;
      break;

    case "charging":
      currentScene = <Charging next={() => setScene("portal")} />;
      break;

    case "portal":
      currentScene = <PortalScene 
        next={() => setScene("letter")} 
        playHeartbeat={playHeartbeat}
        stopHeartbeat={stopHeartbeat} 
      />;
      break;

    case "letter":
  currentScene = <Letter next={() => setScene("bouquet")} />;
  break;

  case "bouquet":
  currentScene = <BouquetScene next={() => setScene("gallery")} />;
  break;

    case "gallery":
      currentScene = <Gallery next={() => setScene("ending")} />;
      break;

    case "ending":
      currentScene = <Ending restart={() => setScene("intro")} />;
      break;

    default:
      currentScene = null;
  }

  return (
    <>
      {/* Global Music Toggle Button */}
      <motion.button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 10000,
          background: "rgba(0, 0, 0, 0.7)",
          border: "none",
          borderRadius: "50%",
          width: "55px",
          height: "55px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "26px",
          cursor: "pointer",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMusicPlaying ? "🔊" : "🔇"}
      </motion.button>

      <AnimatePresence mode="wait">
        <SceneWrapper scene={scene}>
          {currentScene}
        </SceneWrapper>
      </AnimatePresence>
    </>
  );
}

export default App;