import { ArrowUpRight, ChevronLeft, Cloud, Cpu, Radio, Wind } from "lucide-react";
import { Link } from "react-router-dom";

const AirGuardian = () => {
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
            <p className="eyebrow">System note // sustainability</p>
            <h1 className="hero-title">
              Air
              <span> Guardian</span>
            </h1>
            <p className="hero-deck">
              An IoT air-quality system built to turn invisible environmental risk
              into visible, actionable data.
            </p>
            <p className="hero-body">
              I built Air Guardian because pollution is often discussed only after
              it becomes obvious. I wanted a system that could sense, report, and
              help people act earlier instead of treating environmental awareness
              like a vague concern.
            </p>
            <div className="hero-actions">
              <a
                href="https://thingspeak.mathworks.com/channels/2748708"
                target="_blank"
                rel="noreferrer"
                className="action-link"
              >
                Open live data
                <ArrowUpRight size={16} />
              </a>
              <Link to="/" className="ghost-link">
                Back to portfolio
                <ChevronLeft size={16} />
              </Link>
            </div>
          </div>

          <article className="notched-panel tone-signal">
            <figure className="image-frame" style={{ aspectRatio: "16 / 11" }}>
              <img
                src={encodeURI("/assets/gallery/Air Guardian Data Collection.png")}
                alt="Air Guardian data collection interface"
                loading="eager"
                decoding="async"
              />
            </figure>
          </article>
        </section>

        <section className="scene-block">
          <div className="signals-grid">
            <article className="notched-panel tone-steel signal-panel">
              <div className="systems-heading-row">
                <div className="systems-icon">
                  <Wind size={18} />
                </div>
                <div>
                  <p className="section-kicker">Why it matters</p>
                  <h2 className="systems-title">Environmental visibility</h2>
                </div>
              </div>
              <p className="systems-detail">
                Air Guardian was my way of making sustainability measurable. When
                air quality becomes a dashboard, a trendline, and an alert instead
                of just a complaint, people can respond faster and think more
                clearly about the spaces they live in.
              </p>
            </article>

            <article className="notched-panel tone-ember signal-panel">
              <div className="systems-heading-row">
                <div className="systems-icon">
                  <Radio size={18} />
                </div>
                <div>
                  <p className="section-kicker">Core stack</p>
                  <h2 className="systems-title">Sensors and telemetry</h2>
                </div>
              </div>
              <div className="chip-cluster">
                <span className="signal-chip">MQ-135</span>
                <span className="signal-chip">DHT22</span>
                <span className="signal-chip">PM2.5</span>
                <span className="signal-chip">Arduino Uno</span>
                <span className="signal-chip">ESP8266</span>
                <span className="signal-chip">ThingSpeak</span>
                <span className="signal-chip">Python</span>
                <span className="signal-chip">Scikit-learn</span>
              </div>
            </article>
          </div>
        </section>

        <section className="scene-block">
          <div className="archive-layout">
            <article className="notched-panel tone-signal archive-panel">
              <div className="systems-heading-row">
                <div className="systems-icon">
                  <Cloud size={18} />
                </div>
                <div>
                  <p className="section-kicker">Capabilities</p>
                  <h2 className="systems-title">What the system does</h2>
                </div>
              </div>
              <ul className="signal-list">
                <li>Collects environmental data from hardware sensors in real time.</li>
                <li>Streams readings to the cloud for viewing and historical tracking.</li>
                <li>Turns raw measurements into something visible and easier to act on.</li>
                <li>Explores ML-based thinking for predictive pollution awareness.</li>
              </ul>
            </article>

            <article className="notched-panel tone-steel archive-panel">
              <div className="systems-heading-row">
                <div className="systems-icon">
                  <Cpu size={18} />
                </div>
                <div>
                  <p className="section-kicker">Build lesson</p>
                  <h2 className="systems-title">Why I still show it</h2>
                </div>
              </div>
              <p className="systems-detail">
                Air Guardian stays in the portfolio because it proves I care about
                systems that touch real conditions, not only interface surfaces. It
                sits lower in the hierarchy than Aurora or my internships, but it
                still signals engineering intent.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AirGuardian;
