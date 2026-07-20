import { useState } from "react";

export default function useScene() {
  const [scene, setScene] = useState("intro");

  return {
    scene,
    setScene,
  };
}