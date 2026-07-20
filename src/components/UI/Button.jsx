// components/UI/Button.jsx
import "./Button.css";

// Sound is handled globally by SoundContext - every <button> click
// automatically plays a sound, so this component doesn't need to call
// useSound() itself. Pass `sound="giftBox"` (etc.) to play something
// other than the default click sound.
function Button({ children, onClick, sound = "click" }) {
  return (
    <button
      className="magic-btn"
      data-sound={sound}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;