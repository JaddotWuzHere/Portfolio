export default function Home() {
  return (
    <div>
      <section>
        <h1>Jason Ding</h1>
        <h2>CS/AI & Music @ Carnegie Mellon University</h2>

        <p>
          I make programs sometimes.
        </p>

        <p>
          Interested in software engineering, systems, graphics, as well as game development and modding.
        </p>
      </section>

      <section>
        <h3>Currently building:</h3>
        <ul>
          <li>
            Locrian (music practice app)
          </li>
          <li>
            Realistic water physics (Minecraft)
          </li>
          <li>
            The Continuum (long term speculative physics project)
          </li>
        </ul>
      </section>

      <section>
        <h3>Featured Work</h3>

        <h4>Locrian — music practice app</h4>
        <p>
          A dark and elegant web app for tracking practice sessions, built to be simple enough that musicians
          actually use it. 
        </p>
        <p>
          <a href="#/projects">View more on Projects →</a>
        </p>

        <h4>Ray Tracer</h4>
        <p>
          Built for 21-241@CMU using Python + NumPy. Supports recursive reflections & Blinn-Phong shading.
        </p>
        <p>
          <a href="#/projects">View more on Projects →</a>
        </p>

        {/*<h4>Realistic Water Physics (Minecraft)</h4>
        <p>
          A custom fluid simulation experiment focused on intuitive, stable
          water spreading using local redistribution rules.
        </p>
        <p>
          <a href="#/projects">View more on Projects →</a>
        </p> */}
      </section>

      <section>
        <h3>Also into music</h3>
        <p>
          I also make music sometimes.
        </p>

        <p>
          I also compose, produce, and perform music, including orchestral and electronic.
        </p>
        <p>
          <a href="#/music">See music →</a>
        </p>
      </section>

      <section>
        <h3>Get in touch</h3>
        <p>
          If you want to chat, feel free to reach out.
        </p>
        <p>
          <a href="#/contact">Contact →</a>
        </p>
      </section>
    </div>
  );
}
