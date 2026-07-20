// hooks/useSound.js
//
// Thin hook that reads the shared SoundContext. All the actual audio
// logic lives in context/SoundContext.jsx, created ONCE for the whole
// app - so every component that calls useSound() shares the same
// player instances instead of creating its own.
import { useContext } from "react";
import { SoundContext } from "./SoundContext.jsx";

export default function useSound() {
  const context = useContext(SoundContext);

  if (!context) {
    throw new Error("useSound must be used within a <SoundProvider>");
  }

  return context;
}