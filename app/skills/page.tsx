// app/skills/page.tsx
import Link from "next/link";

export default function SkillsPage() {
  return (
    <main className="main-container nes-container is-rounded hero">
      <h1 className="hero-name">Skills</h1>
      <p className="hero-subtitle">What I work with</p>

      <div style={{ width: "100%", maxWidth: "620px" }}>
        <table className="nes-table is-bordered is-centered" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Tech</th>
              <th>Level</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Next.js &amp; React</td>
              <td>Intermediate</td>
              <td>App Router, API routes, deployment.</td>
            </tr>
            <tr>
              <td>TypeScript</td>
              <td>Intermediate</td>
              <td>Typed components, hooks, and models.</td>
            </tr>
            <tr>
              <td>CSS / NES.css</td>
              <td>Intermediate</td>
              <td>Retro layouts, animations, responsive design.</td>
            </tr>
            <tr>
              <td>Node.js</td>
              <td>Beginner–Mid</td>
              <td>REST APIs and small backend services.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="home-link-row">
        <Link href="/" className="nes-btn is-primary">
          Home
        </Link>
      </div>
    </main>
  );
}
