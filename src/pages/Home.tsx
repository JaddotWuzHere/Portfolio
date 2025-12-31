export default function Home() {
  return (
    <div className="page">
      <section className="hero-section">
        <div className="meta-pill">CS / AI • Music</div>

        <h1 className="hero-title gradient-text">Jason Ding</h1>
        <h2 className="hero-subtitle">CS/AI &amp; Music @ Carnegie Mellon University</h2>

        <p className="hero-blurb">
          I make programs sometimes.
        </p>

        <p className="hero-blurb">
          Interested in software engineering, systems, graphics, as well as game
          development and modding.
        </p>
      </section>

      <section>
        <h3>Currently Building</h3>
        <ul>
          <li>Locrian</li>
          <li>Realistic water physics Minecraft mod</li>
          <li>The Continuum</li>
        </ul>
      </section>

      <section>
        <h3>Featured Work</h3>

        <h4>Locrian — music practice app</h4>
        <p>
          A dark and elegant web app for tracking practice sessions, built to be
          simple enough that musicians actually use it.
        </p>
        <p>
          <a href="#/projects">View more on Projects →</a>
        </p>

        <h4>Ray Tracer</h4>
        <p>
          Built for 21-241@CMU using Python + NumPy. Supports recursive
          reflections &amp; Blinn-Phong shading.
        </p>
        <p>
          <a href="#/projects">View more on Projects →</a>
        </p>
      </section>

      <section>
        <h3>Also into music</h3>
        <p>I also make music sometimes.</p>

        <p>
          I compose, produce, and perform music, including orchestral and
          electronic.
        </p>
        <p>
          <a href="#/music">See music →</a>
        </p>
      </section>

      <section>
        <h3>Get in touch</h3>
        <p>If you want to chat, feel free to reach out.</p>
        <p>
          <a href="#/contact">Contact →</a>
        </p>
      </section>
    </div>
  );
}
