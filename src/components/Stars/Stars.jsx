import "./Stars.css";

function Stars() {
  const stars = Array.from({ length: 180 });

  return (
    <div className="stars">
      {stars.map((_, index) => (
        <span
          key={index}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            opacity: Math.random(),
            transform: `scale(${0.5 + Math.random()})`,
          }}
        />
      ))}
    </div>
  );
}

export default Stars;