import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import locrian from "../assets/locrian.png";
import raytracer from "../assets/raytracer.png";
import continuum from "../assets/continuum.png";
import hydraxia from "../assets/hydraxia.png";
import gradient from "../assets/gradient.gif";
import scry from "../assets/scry.png";


export default function Projects() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      element?.scrollIntoView();
    }
  }, [location.hash]);
  
  return (
    <div className="page">
      <section>
        <h1>Projects</h1>
      </section>

      <section>
        <h2>Featured</h2>

        <article id="scry">
          <h3>Scry</h3>

          <p>
            I've always found operating systems interesting because so much of what they do is invisible during normal
            programming, and how so much of it could be exploited to do malicious things. I wanted to understand more
            of the lower level intracacies of how processes and other things such as memory and files are managed at 
            that boundary.
          </p>

          <p>
            Scry is a small Linux sandbox I built in Rust for running programs inside a restricted environment. Rather
            than just launching a child process and waiting for it to finish, Scry places limits on the resources it can 
            consume, isolates parts of its view of the system, captures its output, enforces wall-clock timeouts, and
            reports what happened during execution.
          </p>

          <img src={scry} alt="Scry sandbox output" style={{ width: "1280px", height: "auto" }} />

          <p>
            <strong>Problem:</strong> Running an arbitrary program normally gives it access to the host
            environment and allows it to consume resources with relatively few restrictions. I wanted to explore
            how Linux itself can be used to constrain and observe a process.
          </p>

          <p>
            <strong>Solution:</strong> I built a Linux sandbox in Rust that launches programs with resource
            limits and process/filesystem isolation, then collects information about their execution.
          </p>

          <p>
            <strong>Features:</strong>
          </p>

          <ul>
            <li>
              CPU, memory, file size, process, and file descriptor limits
            </li>
            <li>
              Wall-clock timeout with process-group cleanup
            </li>
            <li>
              Bounded stdout and stderr capture
            </li>
            <li>
              UTS, network, and mount namespace isolation
            </li>
            <li>
              Isolated filesystem root using <code>pivot_root</code>
            </li>
            <li>
              Filesystem activity tracking using <code>strace</code>
            </li>
            <li>
              Human-readable and JSON execution reports
            </li>
          </ul>

          <p>
            <strong>Challenges:</strong>
          </p>

          <ul>
            <li>
              Correctly setting up Linux namespaces and filesystem isolation
            </li>
            <li>
              Cleaning up entire process groups after timeouts
            </li>
            <li>
              Handling errors across forked processes without leaving resources behind
            </li>
            <li>
              Working safely with low-level Linux system interfaces from Rust
            </li>
          </ul>

          <p>
            <strong>Stack:</strong> Rust, Linux, namespaces, resource limits, strace
          </p>

          <p>
            <a
              href="https://github.com/Jaddotish/Scry"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repo
            </a>
          </p>
        </article>

        <article id="ray-tracer">
          <h3>Ray Tracer</h3>

          <p>
            Computer graphics do fascinate me, and I've found it very interesting as I see how 
            media such as video games and movies use computer generated graphics to create scenes
            that feel sublime and real yet impossible to see in reality. I found the perfect opportunity to dive much deeper
            into how such things are actually implemented from a mathematical standpoint as a 
            final project for 21-241@CMU.
          </p>

          <p>
            Since 21-241 is in fact a linear algebra course, I decided (along with a friend) to 
            approach this from a linear algebraic implementation rather than the usual geometric optics.
            While Python had heavy limitations in terms of performance, I daresay we built something
            quite impressive: a ray tracer complete with recursive reflections, speculars, and Lambertian shading.
          </p>

            <img src={raytracer} alt="raytracer" style={{ width: "1280px", height: "auto" }} />

          <p>
            <strong>Problem:</strong> I wanted to understand how graphics rendering is built on linear algebra and other 
            mathematical structures
          </p>
          <p>
            <strong>Solution:</strong> I built a Python ray tracer from scratch.
          </p>

          <p>
            <strong>Features:</strong>

            <ul>
              <li>
                Vector/matrix representations of rays and objects
              </li>
              <li>
                Matrix transform representations of camera orientation and projection
              </li>
              <li>
                Blinn-Phong and Lambertian shading models
              </li>
              <li>
                Recursive ray tracing for reflections
              </li>
              <li>
                Lambertian and Blinn-Phong speculars
              </li>
              <li>
                Wrote a formal paper explaining how matrices, projections, and vector spaces
                map directly to the ray tracing implementation
              </li>
            </ul>
          </p>

          <p>
            <strong>Challenges:</strong>
            <ul>
              <li>
                Floating point errors
              </li>
              <li>
                Performance
              </li>
              <li>
                Structuring the pipeline from scratch
              </li>
              <li>
                Ray recursion
              </li>
            </ul>
          </p>

          <p>
            <strong>Stack:</strong> Python, NumPy, basic rendering via a
            windowing/graphics library
          </p>
          <p>
            <a href="https://github.com/Jaddotish/raytracer_21-241" target="_blank" rel="noreferrer">
              GitHub repo
            </a>{" "}
            ·{" "}
            <a href="https://www.jsonding.com/raytracer.pdf" target="_blank" rel="noreferrer">
              Project writeup
            </a>
          </p>
        </article>

        <article id="gradient">
          <h3>Gradient</h3>

          <p>Minecraft's water physics has always been very jank. The fact that you could create infinite water and perpetual floating water sources always felt odd to me,
            even though they do function well enough from a game design standpoint. However, I thought it would be interesting to create a mod that added a bit more realism
            and consistent behavior without removing the core theme of the game.
          </p>
          <p>
            I focused on distributive behavior that conserved water, so no fluids can be created or destroyed. A problem quickly arose, and that was oceans, which contained hundreds
            of thousands of water cells that would almost certainly crash the game if simulated all at once. Thus, I made a point to design performance features so calculations weren't
            done simultaneously and instead relied on regions, which were toggled active and insactive depending on nearby simulation activity.
          </p>
          <p>
            It was a little late when I realized something like this has already existed on the internet, but I still enjoyed implementing my own version of this idea. 
          </p>

          <img src={gradient} alt="gradient" style={{ width: "1280px", height: "auto" }} />

          <p>
            <strong>Problem:</strong> Minecraft water is implemented as a simple static spread system rather than a physically inspired fluid simulation. I wanted to explore how
            a more consistent water model could be integrated into Minecraft while remaining performant enough for actual gameplay.
          </p>
          <p>
            <strong>Solution:</strong> I build a Minecraft mod that replaces vanilla water behavior with a region based fluid simulation system.
          </p>

          <p>
            <strong>Features:</strong>

            <ul>
              <li>
                Convservation of water levels
              </li>
              <li>
                  Multi level water
              </li>
              <li>
                  Region based simulation where metadata is stored in discrete regions
              </li>
              <li>
                Lazy assimilation to convert vanilla water into simulated water only when interacted with
              </li>
              <li>
                Adjustable sim step and world sync intervals for TPS performance targets
              </li>
            </ul>
          </p>

          <p>
            <strong>Challenges:</strong>

            <ul>
              <li>
                Maintaining acceptable server TPS with larger bodies of water
              </li>
              <li>
                Believable water distribution
              </li>
              <li>
                Synchronizing simulation state between server and client
              </li>
            </ul>
          </p>

          <p>
            <strong>Stack:</strong> Fabric API, Java
          </p>

          <p>
            <a href="https://github.com/Jaddotish/Gradient" target="_blank" rel="noreferrer">
              GitHub repo
            </a>{" "}
          </p>
        </article>

        <article id="locrian">
          <h3>Locrian</h3>

          <p>
            I've always found it difficult to keep track of my practice sessions, what I need to work on,
            and whether I've been improving when it comes to music performance. Thus, I've decided to create
            Locrian, which is a music practice app made with serious musicians in mind to help organize 
            their practice routine and to keep a productive schedule.
          </p>
          <p>
            The name of the app is quite clever, if I do say so myself. The locrian scale has long been regarded as
            the least stable of all modes, some even going as far as calling it "unplayable". This is due to its 
            very dissonant sound, and most songs, classic or modern, rarely use such a scale. 
          </p>
          <p>So, if you ever lay your musicianship on Locrian, expect some flaws in your playing. But if you practice,
            your music may be just as beautifully and elegantly dissonant as the locrian scale.
          </p>

            <img src={locrian} alt="locrian" style={{ width: "1280px", height: "auto" }} />

          <p>
            <strong>Problem:</strong> Tracking practice sessions manually is annoying and inconsistent. I want something
            built for serious musicians, not a generic to-do app.
          </p>
          <p>
            <strong>Solution:</strong> I built a web app to log practice sessions with timers, piece tracking, and insights on
            which pieces were most worked on.
          </p>

          <p>
            <strong>Features:</strong>

            <ul>
              <li>
                Start/stop timer based practice sessions
              </li>
              <li>
                  Piece manager
              </li>
              <li>
                  Session history log
              </li>
              <li>
                Insights page
              </li>
              <li>
                Minimal workflow that requires only a few taps/clicks
              </li>
            </ul>
          </p>

          <p>
            <strong>Stack:</strong> React, TypeScript, Vite, browser storage
          </p>
          <p>
            <a href="https://github.com/Jaddotish/Locrian" target="_blank" rel="noreferrer">
              GitHub repo
            </a>{" "}
            ·{" "}
            <a href="https://locrian.vercel.app/" target="_blank" rel="noreferrer">
              Website
            </a>
          </p>
        </article>

        <article id="hydraxia">
          <h3>Hydraxia</h3>

          <p>
            If you've played Minecraft, you would know that sometimes the world generation can get a bit boring. Sure,
            within the last few years, the 1.18 "Caves and Cliffs" update dropped that overhauled the terrain generation 
            in the Overworld, but I wasn't satisfied. 
          </p>

          <p>
            My favorite season is winter, so I was motivated to create a custom world generation themed around snowy landscapes for Minecraft built for 
            the Terra worldgen engine. I designed the terrain mathematically, so everything is generated procedurally 
            using noise functions. It's almost like stumbling into a winter wonderland.
          </p>

            <img src={hydraxia} alt="hydraxia" style={{ width: "1280px", height: "auto" }} />

          <p>
            <strong>Problem: </strong>
            Vanilla terrain is simple and repetitive. I wanted to create a fantasy winter themed world that is interesting to explore yet 
            was still friendly to players.
          </p>

          <p>
            <strong>Solution: </strong>
            I built a Terra config pack that defines terrain using noise functions and a multitude of YAML files to create 
            mountainous terrain and biome distributions. 
          </p>

          <p>
            <strong>Features:</strong>
            <ul>
              <li>
                Multi-octave noise heightmaps
              </li>
              <li>
                Domain-warped noise for natural looking terrain
              </li>
              <li>
                Terracing functions
              </li>
              <li>
                Other noise samplers including but not limited to OpenSimplex, Perlin, cellular, and FBM.
              </li>
            </ul>
          </p>
          <p>
            <strong>Stack:</strong> Terra, YAML,
            noise functions, Paper/Bukkit servers, Minecraft
          </p>
          <p>
            <a href="https://github.com/Jaddotish/Hydraxia" target="_blank" rel="noreferrer">
              Github repo
            </a>{" "}
            ·{" "}
            <a href="https://www.youtube.com/watch?v=pIA6BiLzD7M" target="_blank" rel="noreferrer">
              YouTube showcase/trailer
            </a>{" "}
            ·{" "}
            <a href="https://modrinth.com/plugin/terra" target="_blank" rel="noreferrer">
              Terra plugin/mod
            </a>
          </p>
        </article>

        <article id="continuum">
          <h3>The Continuum</h3>

          <p>
            Have you ever wondered how magic spells can exist without breaking our world's physics? I wondered 
            that too, so I set out to create an entirely self consistent universe from the ground up, with its 
            own notions of time, space, symmetry, energy, and other physical constraints and laws. "Magic" in 
            The Continuum isn't a supernatural phenomenon, but rather an emergent behavior of a different yet 
            coherent physics system.
          </p>

          <p>
            The Continuum is a long term project that stems from this idea, and serves as both a thought experiment of
            a theoretical universe as well as a worldbuilding project. It suggests a possible universe where 
            what we call "magic" in popular media can exist as a consequence of physical laws, as well as possible 
            civilizations and societal structures that may arise as a result.
          </p>

            <img src={continuum} alt="continuum" style={{ width: "1280px", height: "auto" }} />

          <p>
            <strong>Problem: </strong>
            Most fantasy worlds and stories treat magic as an arbitrary exception to physics, something that bothered me.
            I wanted a universe where magic-like behavior emerges naturally from internally consistent physical laws and 
            interactions without paradoxes or other broken rules. 
          </p>

          <p>
            <strong>Solution: </strong>
            I designed a theoretical physics framework from scratch, defining base axioms, conservation rules, interaction 
            fields, and other structures that allow magic-like effects while still behaving like a physically lawful system.
          </p>

          <p>
            <strong>Basic Concepts: </strong>
            <ul>
              <li>
                <strong>Domains: </strong>
                The universe consists of interacting domains including but not limited to realspace (conventional physical matter/energy),
                manaspace (parallel field space governing mana behavior) and coupling interfaces that allow energy and information transfer
                between domains.
              </li>
              <li>
                <strong>Mana: </strong>
                Mana is modeled as a continuous field with density and flux, and coupling to biological systems via a constant.
              </li>
              <li>
                <strong>Formal Laws: </strong>
                Law of Resonant Correspondence (mana couples when material and mana harmonics align), Law of Phase Equilibrium (energy 
                exchange between domains seeks equilibrium), etc
              </li>
            </ul>
          </p>

          <p>
            <strong>Site and Implementation: </strong>
            The Continuum is published as a structural reference site rather than a narrative universe. I designed and built the site 
            to support long-form technical documentation and cross-referencing to be able to expand these world systems easily.
          </p>

          <p>
            <strong>Stack:</strong> Quartz, TypeScript,
            SCSS, Markdown
          </p>
          <p>
            <a href="https://github.com/Jaddotish/TheContinuum" target="_blank" rel="noreferrer">
              Github repo
            </a>{" "}
            ·{" "}
            <a href="https://continuumarchives.com/en/" target="_blank" rel="noreferrer">
              Website
            </a>
          </p>
        </article>
      </section>

      <section>
        <h2>Other things</h2>
        <p>
          Smaller experiments and course projects that aren't fully written up
          yet:
        </p>
        <ul>
          <li>OpenGL voxel engine</li>
          <li>Minecraft mods/plugins</li>
        </ul>
        <p>
          Most of these live on my{" "}
          <a
            href="https://github.com/jaddotish"
            target="_blank"
            rel="noreferrer"
          >
            GitHub profile
          </a>
          .
        </p>
      </section>
    </div>
  );
}
