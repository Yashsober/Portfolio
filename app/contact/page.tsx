// app/contact/page.tsx
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="main-container nes-container is-rounded hero">
      <h1 className="hero-name">Contact</h1>
      <p className="hero-subtitle">Let&apos;s talk</p>

      <div style={{ maxWidth: "480px", textAlign: "center" }}>
        <p>
          Email:{" "}
          <span className="nes-text is-primary">yash@example.com</span>
        </p>
        <p>
          GitHub:{" "}
          <span className="nes-text is-success">@yashdrabhlani</span>
        </p>
        <p>Location: Indore, Madhya Pradesh, India</p>
      </div>

      <div className="home-link-row">
        <Link href="/" className="nes-btn is-primary">
          Home
        </Link>
      </div>
    </main>
  );
}
