// app/projects/page.tsx
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="main-container nes-container is-rounded hero">
      <h1 className="hero-name">Projects</h1>
      <p className="hero-subtitle">Some things I&apos;ve built</p>

      <div
        style={{
          maxWidth: "620px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <section className="nes-container is-rounded">
          <h2 className="nes-text is-primary">Noodle</h2>
          <p>
            A Notion-like note-taking app built with Next.js and TypeScript,
            featuring authentication, clean UI, and fast navigation.
          </p>
        </section>

        <section className="nes-container is-rounded">
          <h2 className="nes-text is-success">Movie Recs</h2>
          <p>
            A movie recommendation project exploring UI design, state
            management, and API integration for film enthusiasts.
          </p>
        </section>
      </div>

      <div className="home-link-row">
        <Link href="/" className="nes-btn is-primary">
          Home
        </Link>
      </div>
    </main>
  );
}
