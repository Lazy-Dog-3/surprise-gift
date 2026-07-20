// pages/Letter.jsx
import { useEffect, useState } from "react";
import Title from "../components/UI/Title";
import Button from "../components/UI/Button";
import useSound from "../hooks/useSound";
import "../styles/Letter.css";

function Letter({ next }) {
  const { playSound } = useSound();

  const message = `Never forget this: 
I hope life always reminds you of something I never want you to forget that you are beautiful, capable, deeply valued, and more special than you probably realize. 
  - Just keep being you that's more than enough.
  - Never let anyone make you doubt your worth.
  - You are the C.O.A.T`;

  const [opened, setOpened] = useState(false);
  const [text, setText] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (!opened) return;

    let index = 0;
    const typing = setInterval(() => {
      setText(message.slice(0, index));
      index++;

      if (index > message.length) {
        clearInterval(typing);
        setTimeout(() => setShowButton(true), 800);
      }
    }, 35);

    return () => clearInterval(typing);
  }, [opened]);

  const handleEnvelopeClick = () => {
    playSound("envelope");
    setOpened(true);
  };

  const handleContinue = () => {
    // sound="surprise" on the Button below plays the audio - no need
    // to also call playSound here.
    setTimeout(() => {
      next();
    }, 800);
  };

  return (
    <div className="letter-page">
      <Title>❤️🫶🫶❤️ <br /> For Hajur <br /> ❤️🫶🫶❤️</Title>

      {!opened ? (
        <div className="envelope-container" onClick={handleEnvelopeClick}>
          <div className="envelope">💌</div>
          <p className="click-text">A Letter 👆 Your Grace</p>
        </div>
      ) : (
        <>
          <div className="letter-card">
            <p>{text}</p>
          </div>

          {showButton && (
            <div className="letter-next">
              <Button onClick={handleContinue} sound="surprise">
                ✨Now Here Hajur✨
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Letter;