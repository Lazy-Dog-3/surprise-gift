// components/Gift/Gift.jsx
import "./Gift.css";
import useSound from "../../hooks/useSound";

function Gift({ next }) {
  const { playSound } = useSound();

  const handleGiftClick = () => {
    // Sound is triggered first; `next` (the animation / scene change)
    // fires right after in the same handler, so it never runs ahead
    // of the sound starting.
    playSound("giftBox");
    if (next) next();         // Charging.jsx renders <Gift /> with no `next` -
                               // guard so tapping it there can't crash the app
  };

  return (
    <div className="gift-wrapper">
      <div className="gift-glow"></div>

      <div
        className="gift"
        onClick={handleGiftClick}
      >
        🎁
      </div>
    </div>
  );
}

export default Gift;