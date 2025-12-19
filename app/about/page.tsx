// app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="main-container nes-container is-rounded hero">
      <h1 className="hero-name">About</h1>
      <p className="hero-subtitle">Who is Yash Drabhlani?</p>

      <div style={{ maxWidth: "560px", textAlign: "center" }}>
        <p>
          Yash is a full-stack developer focused on building clean, fast web
          experiences with a touch of retro aesthetics.
        </p>
        <p>
          Enjoys working with Next.js, TypeScript, and playful UI elements like
          NES-style interfaces, subtle animations, and game-inspired sound effects.
        </p>
      </div>

      {/* Home button inside the container, right-aligned */}
      <div className="home-link-row">
        <Link href="/" className="nes-btn is-primary">
          Home
        </Link>
      </div>
    </main>
  );
}
