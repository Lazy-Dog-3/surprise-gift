import "./Lanterns.css";

function Lanterns() {
  const lanterns = Array.from({ length: 40 });

  return (
    <div className="lantern-scene">
      {lanterns.map((_, i) => (
        <div
          key={i}
          className="lantern"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${12 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 6}s`,
            transform: `scale(${0.7 + Math.random() * 0.6})`,
          }}
        >
          <div className="lantern-glow"></div>

          <div className="lantern-body">

            <div className="lantern-top"></div>

            <div className="lantern-light"></div>

            <div className="lantern-bottom"></div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Lanterns;