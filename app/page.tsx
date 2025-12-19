// app/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const playClick = () => {
    const base = clickSoundRef.current;
    if (!base) return;

    // clone node so rapid clicks each get their own playback
    const clone = base.cloneNode(true) as HTMLAudioElement;
    clone.currentTime = 0;
    clone.volume = 1;
    clone.play().catch(() => {});
  };

  const toggleMute = () => {
    const bgAudio = bgMusicRef.current;
    if (!bgAudio) return;

    const nextMuted = !isMuted;
    bgAudio.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  // Start background music (muted) on mount if possible
  useEffect(() => {
    const bgAudio = bgMusicRef.current;
    if (!bgAudio) return;

    bgAudio.loop = true;
    bgAudio.muted = true;
    bgAudio
      .play()
      .catch(() => {
        // If autoplay is blocked, it will start after first user interaction
      });
  }, []);

  return (
    <>
      {/* base audio nodes (hidden) */}
      <audio ref={clickSoundRef} className="hidden" preload="auto">
        <source src="/sounds/click.mp3" type="audio/mpeg" />
      </audio>

      <audio ref={bgMusicRef} className="hidden" preload="auto">
        <source src="/sounds/bg-music.mp3" type="audio/mpeg" />
      </audio>

      <main className="main-container nes-container is-rounded hero">
        <h1 className="hero-name">Yash Drabhlani</h1>
        <p className="hero-subtitle">Full-Stack Developer</p>

        <div className="nav-buttons">
          <Link href="/about" onClick={playClick} className="nes-btn is-primary">
            About
          </Link>
          <Link
            href="/projects"
            onClick={playClick}
            className="nes-btn is-success"
          >
            Projects
          </Link>
          <Link
            href="/skills"
            onClick={playClick}
            className="nes-btn is-warning"
          >
            Skills
          </Link>
          <Link
            href="/contact"
            onClick={playClick}
            className="nes-btn is-error"
          >
            Contact
          </Link>
        </div>
      </main>

      {/* bottom-right mute/unmute toggle with speaker icons */}
      <button
        className="music-toggle-btn"
        onClick={() => {
          playClick();
          toggleMute();
        }}
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
      >
        <img
          src={isMuted ? "/speaker2.png" : "/speaker1.png"}
          alt={isMuted ? "Muted" : "Unmuted"}
        />
      </button>
    </>
  );
}
