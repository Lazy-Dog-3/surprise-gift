import { useEffect, useState } from "react";
import "./Camera.css";

function Camera({ children, zoom = false, shake = false }) {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (zoom) {
      setFlash(true);

      const timer = setTimeout(() => {
        setFlash(false);
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [zoom]);

  return (
    <div
      className={`camera
      ${zoom ? "camera-zoom" : ""}
      ${shake ? "camera-shake" : ""}`}
    >
      {children}

      {flash && <div className="camera-flash"></div>}
    </div>
  );
}

export default Camera;