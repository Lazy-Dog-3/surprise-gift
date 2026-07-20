// context/SoundContext.jsx
//
// Single source of truth for every sound in the app. Created ONCE at
// the top of the tree (see main.jsx) and never unmounted, so:
//   - background music is one Audio element that keeps playing
//     smoothly across every scene change, never restarted
//   - no component ever creates its own duplicate <audio> instances
//   - a single global listener plays a sound for every <button> click
//     in the app automatically (see the "global button click sound"
//     section below) - nothing to wire up per-button
//
// Sound files are imported as modules (not string paths) so Vite
// fingerprints and bundles them correctly for production builds.

import { createContext, useEffect, useRef, useState, useCallback } from "react";

import bgMusicSrc from "../assets/sounds/gift-sound.mp3";
import heartbeatSrc from "../assets/sounds/heart-beat.mp3";
import clickSrc from "../assets/sounds/click.mp3";
import giftBoxSrc from "../assets/sounds/gift-box.mp3";
import envelopeSrc from "../assets/sounds/envelope-opening.mp3";
import flowerSrc from "../assets/sounds/flower-click.mp3";
import surpriseSrc from "../assets/sounds/surprise.mp3";

export const SoundContext = createContext(null);

// Volume levels in one place, easy to tune.
const VOLUME = {
  music: 0.5,
  heartbeat: 0.65,
  effects: 0.75,
};

export function SoundProvider({ children }) {
  const bgMusicRef = useRef(null);
  const heartbeatRef = useRef(null);
  const effectSoundsRef = useRef({});
  const hasStartedRef = useRef(false);

  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // ---- 1. Global background music - created once, plays for the
  // app's entire lifetime. Because SoundProvider wraps <App /> and
  // never unmounts, this <audio> element survives every scene change
  // untouched - it just keeps playing, never restarts.
  useEffect(() => {
    const music = new Audio(bgMusicSrc);
    music.loop = true;
    music.volume = VOLUME.music;
    bgMusicRef.current = music;

    return () => music.pause();
  }, []);

  // ---- Heartbeat (Portal page only - see playHeartbeat/stopHeartbeat
  // below). heart-beat.mp3 is itself a long continuous heartbeat
  // rhythm, so it's set to loop in case someone lingers on that scene.
  useEffect(() => {
    const heartbeat = new Audio(heartbeatSrc);
    heartbeat.volume = VOLUME.heartbeat;
    heartbeat.loop = true;
    heartbeatRef.current = heartbeat;

    return () => heartbeat.pause();
  }, []);

  // ---- One-shot effect sounds, each created exactly once and reused
  // (restarted from 0) every time they're triggered - never duplicated.
  useEffect(() => {
    effectSoundsRef.current = {
      click: new Audio(clickSrc),
      giftBox: new Audio(giftBoxSrc),
      envelope: new Audio(envelopeSrc),
      flower: new Audio(flowerSrc),
      surprise: new Audio(surpriseSrc),
    };

    Object.values(effectSoundsRef.current).forEach((sound) => {
      sound.volume = VOLUME.effects;
    });
  }, []);

  const playSound = useCallback((name) => {
    const sound = effectSoundsRef.current[name];
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
    }
  }, []);

  // ---- Autoplay handling: browsers block audio until the user has
  // interacted with the page at least once. We start the music on the
  // very first click anywhere, then this listener removes itself -
  // it only ever fires one time for the whole session.
  const startMusicOnInteraction = useCallback(() => {
    if (hasStartedRef.current || !bgMusicRef.current) return;
    hasStartedRef.current = true;
    bgMusicRef.current.play().catch(() => {});
    setIsMusicPlaying(true);
  }, []);

  useEffect(() => {
    const handleFirstClick = () => {
      startMusicOnInteraction();
      document.removeEventListener("click", handleFirstClick);
    };

    document.addEventListener("click", handleFirstClick);
    return () => document.removeEventListener("click", handleFirstClick);
  }, [startMusicOnInteraction]);

  // ---- 2. Global button click sound. This is the "apply it globally
  // so I don't need to manually add it to every button" piece: ANY
  // <button> clicked anywhere in the app plays a sound automatically,
  // forever, including buttons added later.
  //
  //   - No attribute            -> plays the default "click" sound
  //   - data-sound="giftBox"    -> plays that effect instead
  //
  // This only matches real <button> elements, so it never interferes
  // with the gift icon / envelope / flower cards - those are <div>s
  // with their own specific sound + animation logic (points 3-5 of
  // the spec), left exactly as they are.
  useEffect(() => {
    const handleButtonClick = (e) => {
      const btn = e.target.closest("button");
      if (!btn || btn.disabled) return;
      playSound(btn.dataset.sound || "click");
    };

    document.addEventListener("click", handleButtonClick);
    return () => document.removeEventListener("click", handleButtonClick);
  }, [playSound]);

  // ---- 3. Heartbeat controls (Portal page only). playHeartbeat starts
  // it from the beginning; stopHeartbeat pauses and resets it. Portal
  // Scene calls these on mount/unmount - see pages/PortalScene.jsx.
  const playHeartbeat = useCallback(() => {
    const hb = heartbeatRef.current;
    if (hb) {
      hb.currentTime = 0;
      hb.play().catch(() => {});
    }
  }, []);

  const stopHeartbeat = useCallback(() => {
    const hb = heartbeatRef.current;
    if (hb) {
      hb.pause();
      hb.currentTime = 0;
    }
  }, []);

  // ---- Background music volume control (mute/unmute toggle button
  // in App.jsx).
  const toggleMusic = useCallback(() => {
    const music = bgMusicRef.current;
    if (!music) return;

    if (isMusicPlaying) {
      music.pause();
    } else {
      music.play().catch(() => {});
    }
    setIsMusicPlaying((prev) => !prev);
  }, [isMusicPlaying]);

  const value = {
    isMusicPlaying,
    toggleMusic,
    playSound,
    playHeartbeat,
    stopHeartbeat,
  };

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}