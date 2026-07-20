import "./Portal.css";
import { useMemo } from "react";

export default function Portal() {

  // Generate sparkle positions only once
  const sparkles = useMemo(
    () =>
      Array.from({ length: 18 }, () => ({
        left: `${10 + Math.random() * 80}%`,
        top: `${10 + Math.random() * 80}%`,
        delay: `${Math.random() * 4}s`,
        duration: `${3 + Math.random() * 3}s`,
      })),
    []
  );

  return (
    <div className="portal">

      {/* Background Glow */}
      <div className="portal-bg-glow"></div>

      {/* Sparkles */}
      {sparkles.map((spark, index) => (
        <span
          key={index}
          className="spark"
          style={{
            left: spark.left,
            top: spark.top,
            animationDelay: spark.delay,
            animationDuration: spark.duration,
          }}
        />
      ))}

      {/* Floating Hearts */}
      <div className="floating-hearts">
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
      </div>

      {/* Heart */}
      <div className="heart-wrapper">

        <svg
          className="heart-svg"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >

          <defs>

            <linearGradient
              id="glassGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity=".95" />
              <stop offset="20%" stopColor="#ffd4ea" />
              <stop offset="55%" stopColor="#ff78ba" />
              <stop offset="100%" stopColor="#ff2d95" />
            </linearGradient>

            <clipPath id="heartClip">
              <path
                d="
M256 472
C190 418 118 351 76 287
C42 236 32 194 32 150
C32 76 88 32 152 32
C200 32 236 56 256 94
C276 56 312 32 360 32
C424 32 480 76 480 150
C480 194 470 236 436 287
C394 351 322 418 256 472Z
"
              />
            </clipPath>

          </defs>

          <path
            className="heart-fill"
            fill="url(#glassGradient)"
            d="
M256 472
C190 418 118 351 76 287
C42 236 32 194 32 150
C32 76 88 32 152 32
C200 32 236 56 256 94
C276 56 312 32 360 32
C424 32 480 76 480 150
C480 194 470 236 436 287
C394 351 322 418 256 472Z
"
          />

          <g clipPath="url(#heartClip)">
            <ellipse
              className="glass-shine"
              cx="175"
              cy="155"
              rx="55"
              ry="170"
              transform="rotate(-25 175 155)"
            />
          </g>

          <path
            className="inner-glow"
            d="
M256 472
C190 418 118 351 76 287
C42 236 32 194 32 150
C32 76 88 32 152 32
C200 32 236 56 256 94
C276 56 312 32 360 32
C424 32 480 76 480 150
C480 194 470 236 436 287
C394 351 322 418 256 472Z
"
          />

        </svg>

      </div>

    </div>
  );
}