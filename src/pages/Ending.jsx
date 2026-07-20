// pages/Ending.jsx
import { useState } from "react";
import { useEffect } from "react";
import Lanterns from "../components/Lanterns/Lanterns";
import "../styles/Ending.css";

function Ending({ restart }) {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const [replaying, setReplaying] = useState(false);

  const handleReplay = () => {
    // The global button-click listener (SoundContext) already plays
    // the default click sound for this button automatically.
    setReplaying(true);

    setTimeout(() => {
        restart();
    }, 21000);
};

  return (
    <div className={`ending-page ${replaying ? "replaying" : ""}`}>
      {replaying && (
  <>
    <Lanterns />

    <div className="love-final-message">
      For Your Beautiful <br />❤️Smile❤️<br /> <br />
      Today <br /> Tomorrow <br /> and <br /> Forever 
    </div>
  </>
)}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="shooting-stars">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="floating-hearts">
        <span>💖</span>
        <span>💕</span>
        <span>💗</span>
        <span>💞</span>
        <span>❤️</span>
        <span>💝</span>
      </div>

      <div className="sparkles">
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
      </div>

      <div className="petals">
        <span>🌸</span><span>🌺</span><span>🌸</span><span>🌷</span>
        <span>🌸</span><span>🌺</span><span>🌷</span><span>🌸</span>
      </div>

      <div className="fireflies">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      <div className={`ending-content ${replaying ? "fade-away" : ""}`}>
       <div className="heart-container">

    <div className="heart-glow"></div>

    <div className="heart-front">❤️</div>

    <div className="pulse-ring ring1"></div>
    <div className="pulse-ring ring2"></div>

</div>

        <h1 className="title">Before We Finish</h1>

        <p className="subtitle">
          Yeah time to say something ahhh....<br />
          Ok ok do it ummm.... k vannu 😂
        </p>

        <div className="love-letter">
          <p className="romantic-message">
            Hajur, Your Grace, My Queen, Madam jii etc......... <br /><br />
            So 😅 yes, First thing first hajur is beautiful so always be you to the full. <br /> <br />
            Next hajur ko voice wahh I think its the first thing i get to know about, yes true 💯 haha. <br /> <br />
            Hajur ko smile and laugh kota kya baat I remember mammu sanga ko photo awesome 😍. <br /> <br />
            Also remember Aankho ka masla haha chura tika shari just looking like a wow 🫶. <br /> <br />
            Hajur lai vagwan le banakai is top notch, I mean number 1. But so much mystery 🥰 <br /> (Mystery ko spelling na ayera feri google gareko 🤣) <br /> <br />
            You look gorgeous every single time hernu chai sakdina but yet i see asu aai halxa idk why 😂 Hajur shine so bright tesaile may be. <br /> <br />
            Euta kura 😅 hajur is the reason myle notification on garey 😂 natra mute ma hunthyo ani phone ni silent 😅. 
            Matlab notification auda yesto khusi 😁. <br /> <br />
            Ani Hajur bata dherai chij sikyo throughout the time i have improved a lot. Thanks to you ❤️ Hajur is best. 🫡 <br /> <br />
            Ahh ajai kura lekhnu vanda ni hajur ko bare ajai hajur batai jannu thyo 👑. Tahxa hajur kasaima belive garnu hunna but 
            I hope Hajur will give me a chance, please. Ughh i am so bad at asking 😥. Tara Hajur, the main point is I am here to listen anything anytime no matter what ✨. <br /> <br />
            From my side, No complaints, No Demands. 🤗


          </p>
        </div>

        <div className="finale">
          <p className="quote">"At the end here is one more thing."</p>
        </div>

        <button
    className="replay-btn"
    onClick={handleReplay}
    disabled={replaying}
>
    {replaying ? "5201314" : "❤️ You The Best ❤️"}
</button>
      </div>
    </div>
  );
}

export default Ending;