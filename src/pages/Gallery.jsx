// pages/Gallery.jsx
import "../styles/Gallery.css";
import useSound from "../hooks/useSound";

import rose from "../assets/images/Rose.png";
import sunflower from "../assets/images/Sunflower.png";
import daisy from "../assets/images/Daisy.png";
import lavender from "../assets/images/Lavender.png";
import hibiscus from "../assets/images/hibiscus.png";
import lily from "../assets/images/lily.png";
import tulip2 from "../assets/images/Tulip2.png";

import bouquet1 from "../assets/images/bouquet1.png";
import bouquet2 from "../assets/images/bouquet2.png";
import bouquet3 from "../assets/images/bouquet3.png";
import bouquet4 from "../assets/images/bouquet4.png";
import bouquet5 from "../assets/images/bouquet5.png";

const flowers = [
  {
    image: rose,
    title: "Rose 🌹",
    text: "💠Your eyes are more beautiful💠"
  },
  {
    image: sunflower,
    title: "Sunflower 🌻",
    text: "💠Your smile brightens the day💠"
  },
  {
    image: daisy,
    title: "Daisy 🌼",
    text: "💠Your innocence is truly precious💠"
  },
  {
    image: lavender,
    title: "Lavender 💜",
    text: "💠Your presence brings peace💠"
  },
  {
    image: hibiscus,
    title: "Hibiscus 🌺",
    text: "💠You bloom with confidence and grace💠"
  },
  {
    image: lily,
    title: "Lily 🩷",
    text: "💠Your soul is as pure as a lily💠"
  },
  {
    image: tulip2,
    title: "Tulip 🌷",
    text: "💠Your sweetness shines like a tulip💠"
  },
  {
    image: bouquet1,
    title: "Bouquet of Grace 💐",
    text: "💠Elegance follows you everywhere💠"
  },
  {
    image: bouquet2,
    title: "Bouquet of Joy 💐",
    text: "💠Your laughter is pure happiness💠"
  },
  {
    image: bouquet3,
    title: "Bouquet of Beauty 💐",
text: (
    <>
      💠Your beauty is more than
      <br />
      what the eyes can see💠
    </>
  )  },
  {
    image: bouquet4,
    title: "Bouquet of Uniqueness 💐",
    text: "💠There has never been another you💠"
  },
  {
    image: bouquet5,
    title: "Bouquet of Perfection 💐",
    text: "💠Exactly, You are unforgettable💠"
  }
];

function Gallery({ next }) {
  const { playSound } = useSound();

  const handleFlowerClick = () => {
    playSound("flower");
  };

  const handleNextClick = () => {
    next();
  };

  return (
    <div className="gallery-page">
      <div className="floating-hearts"></div>

      <h1 className="gallery-title">
        🌸Flowers Tales🌸
      </h1>

      <p className="gallery-subtitle">
Every flower reflects something <br></br> beautiful about you.      </p>

      <div className="flower-grid">
        {flowers.map((flower, index) => (
          <div
            className="flower-card"
            key={index}
            style={{ animationDelay: `${index * 0.15}s` }}
            onClick={handleFlowerClick}
          >
            <img
              src={flower.image}
              alt={flower.title}
              className="flower-image"
            />
            <h2>{flower.title}</h2>
            <p>{flower.text}</p>
          </div>
        ))}
      </div>

      <div className="gallery-ending">
        🌟✨💎🫶👑❤️❤️❤️👑🫶💎✨🌟
        <h2>Flowers may steal a glance.</h2>
        <p>But I'll always be your biggest fan.</p>
      </div>

      <button
        className="next-button"
        onClick={handleNextClick}
      >
        🤍Hajur Yeta Ni🤍
      </button>
    </div>
  );
}

export default Gallery;