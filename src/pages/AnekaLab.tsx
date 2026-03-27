import { ArrowUpRight, ChevronLeft, Cpu, GraduationCap, Network, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const AnekaLab = () => {
  return (
    <div className="home-shell">
      <header className="top-nav">
        <div className="nav-inner">
          <Link to="/" className="nav-link">
            <span className="inline-flex items-center gap-2">
              <ChevronLeft size={16} />
              Back
            </span>
          </Link>
          <div className="brand-mark">AM</div>
        </div>
      </header>

      <main className="page-shell">
        <section className="hero-layout scene-anchor">
          <div className="hero-copy">
            <p className="eyebrow">Research note // distributed systems</p>
            <h1 className="hero-title">
              Aneka
              <span> Lab</span>
            </h1>
            <p className="hero-deck">
              The point was never just to run code in parallel. The point was to
              make distributed computing real enough to teach, demonstrate, and
              defend.
            </p>
            <p className="hero-body">
              I worked around the Aneka cloud computing framework from the
              University of Melbourne and helped transform it into something my
              teachers could shape into a subject, something students could
              understand, and something the university could confidently present
              during NAAC review.
            </p>
            <div className="hero-actions">
              <a
                href="https://www.manjrasoft.com/products/aneka/"
                target="_blank"
                rel="noreferrer"
                className="ghost-link"
              >
                Platform reference
                <ArrowUpRight size={16} />
              </a>
              <Link to="/" className="ghost-link">
                Back to portfolio
                <ChevronLeft size={16} />
              </Link>
            </div>
          </div>

          <article className="notched-panel tone-steel">
            <div className="metric-grid">
              <div className="metric-cell">
                <p className="metric-label">Role</p>
                <p className="metric-value">Primary student researcher</p>
              </div>
              <div className="metric-cell">
                <p className="metric-label">Institution</p>
                <p className="metric-value">MIT ADT University</p>
              </div>
              <div className="metric-cell">
                <p className="metric-label">Academic impact</p>
                <p className="metric-value">Subject-shaping support</p>
              </div>
              <div className="metric-cell">
                <p className="metric-label">Public proof</p>
                <p className="metric-value">NAAC review demonstration</p>
              </div>
            </div>
          </article>
        </section>

        <section className="scene-block">
          <div className="signals-grid">
            <article className="notched-panel tone-signal signal-panel">
              <div className="systems-heading-row">
                <div className="systems-icon">
                  <Workflow size={18} />
                </div>
                <div>
                  <p className="section-kicker">Research work</p>
                  <h2 className="systems-title">What I built around it</h2>
                </div>
              </div>
              <ul className="signal-list">
                <li>Explored distributed image convolution workloads.</li>
                <li>Worked with Mandelbrot set computation in a parallel model.</li>
                <li>Helped turn the framework from a demo into an academic asset.</li>
                <li>Organized other students to explain the system to interested people.</li>
              </ul>
            </article>

            <article className="notched-panel tone-ember signal-panel">
              <div className="systems-heading-row">
                <div className="systems-icon">
                  <Cpu size={18} />
                </div>
                <div>
                  <p className="section-kicker">Technical frame</p>
                  <h2 className="systems-title">System ingredients</h2>
                </div>
              </div>
              <div className="chip-cluster">
                <span className="signal-chip">Aneka framework</span>
                <span className="signal-chip">Distributed systems</span>
                <span className="signal-chip">C#</span>
                <span className="signal-chip">Parallel processing</span>
                <span className="signal-chip">Image convolution</span>
                <span className="signal-chip">Mandelbrot</span>
              </div>
            </article>
          </div>
        </section>

        <section className="scene-block">
          <div className="archive-layout">
            <article className="notched-panel tone-steel archive-panel">
              <div className="systems-heading-row">
                <div className="systems-icon">
                  <Network size={18} />
                </div>
                <div>
                  <p className="section-kicker">Why it matters</p>
                  <h2 className="systems-title">Infrastructure as influence</h2>
                </div>
              </div>
              <p className="systems-detail">
                Aneka matters because it shows I do not only enjoy building end
                products. I also like shaping the environments, teaching moments,
                and systems architecture that let other builders think bigger.
              </p>
            </article>

            <article className="notched-panel tone-signal archive-panel">
              <div className="systems-heading-row">
                <div className="systems-icon">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <p className="section-kicker">What it says about me</p>
                  <h2 className="systems-title">Research with ownership</h2>
                </div>
              </div>
              <p className="systems-detail">
                This work stays in the portfolio because it shows initiative beyond
                assignment culture: I stepped into a difficult technical platform,
                made it understandable, and helped it become useful at the
                institutional level.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AnekaLab;
