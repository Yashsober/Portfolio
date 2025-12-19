"use client";

const clickAudio = typeof Audio !== "undefined"
  ? new Audio("/sounds/click.mp3")
  : null;

const playClick = () => {
  if (!clickAudio) return;
  clickAudio.currentTime = 0;
  clickAudio.play().catch(() => {});
};

export function ClickSoundButtons() {
  return (
    <div className="nav-buttons">
      <button className="nes-btn is-primary" onClick={playClick}>
        About
      </button>
      <button className="nes-btn is-success" onClick={playClick}>
        Projects
      </button>
      <button className="nes-btn is-warning" onClick={playClick}>
        Skills
      </button>
      <button className="nes-btn is-error" onClick={playClick}>
        Contact
      </button>
    </div>
  );
}
