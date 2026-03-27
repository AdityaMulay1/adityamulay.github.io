import { useState, type ChangeEvent, type FormEvent } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Award,
  BrainCircuit,
  Cloud,
  Cpu,
  ExternalLink,
  Gamepad2,
  Github,
  GraduationCap,
  HeartPulse,
  Languages,
  Linkedin,
  Mail,
  Mic2,
  MoveRight,
  Quote,
  Radio,
  Sparkles,
  Trophy,
  Wrench,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

type ActionLink = {
  label: string;
  href: string;
  external?: boolean;
  internal?: boolean;
};

type Mission = {
  id: string;
  label: string;
  title: string;
  period: string;
  summary: string;
  notes: string[];
  chips: string[];
  primaryImage: string;
  secondaryImage: string;
  primaryAlt: string;
  secondaryAlt: string;
  galleryImages?: { image: string; alt: string }[];
  tone: "signal" | "ember" | "steel";
  footnote?: string;
};

type SystemEntry = {
  title: string;
  tier: string;
  why: string;
  detail: string;
  tags: string[];
  image: string;
  alt: string;
  icon: LucideIcon;
  action: ActionLink;
};

type SignalEntry = {
  title: string;
  body: string;
  accent: string;
  icon: LucideIcon;
};

const assetPath = (path: string) => encodeURI(path);
const EMAILJS_SERVICE_ID = "service_m3jrmef";
const EMAILJS_TEMPLATE_ID = "template_znfe5eg";
const EMAILJS_PUBLIC_KEY = "7ioYubbunoB29GDyt";

const heroQuotes = [
  "I care about machines, but I build for people.",
  "Some systems stay on screen. The best ones enter the real world.",
  "I do not chase noise. I chase work that leaves a mark.",
];

const heroMetrics = [
  { label: "Active Deployment", value: "Cerebrospark / ongoing" },
  { label: "Breakthrough Win", value: "Aurora / INR 2,00,000" },
  { label: "Enterprise Exposure", value: "Accenture / AXA Japan" },
  { label: "Academic Signal", value: "Aneka / NAAC demo" },
];

const featuredMissions: Mission[] = [
  {
    id: "cerebrospark",
    label: "Current deployment",
    title: "Project Intern // Cerebrospark Innovations",
    period: "Started Jan 20, 2026 // ongoing",
    summary:
      "This is where software stops being abstract. I am working around drone navigation systems, surveillance-oriented aerial workflows, and research into making autonomous systems more efficient, more aware, and more useful in the real world.",
    notes: [
      "Exposure to autonomous aerial systems, intelligent sensing, and field-aware software thinking.",
      "Research and experimentation around efficiency, navigation behavior, and real-world operating constraints.",
      "A startup culture that moves fast, demands ownership, and sharpens decision-making under pressure.",
    ],
    chips: [
      "Drone navigation",
      "Aerial surveillance",
      "Research work",
      "High-ownership startup pace",
    ],
    primaryImage:
      "/assets/gallery/Cerebrospark - Aditya Mulay working on a drone.jpeg",
    secondaryImage: "/assets/gallery/Testing of drone at MIT ADT University 4.png",
    primaryAlt: "Aditya Mulay working on a drone at Cerebrospark",
    secondaryAlt: "Drone testing related to Aditya's drone systems work",
    galleryImages: [
      {
        image: "/assets/gallery/Cerebrospark - Explaining college diploma students about drone components.jpg",
        alt: "Aditya explaining drone components",
      },
      {
        image: "/assets/gallery/Cerebrospark with managers and project lead.jpg",
        alt: "Aditya with Cerebrospark managers and project lead",
      },
      {
        image: "/assets/gallery/CS-KRISHI drone.png",
        alt: "CS-KRISHI drone visual",
      },
      {
        image: "/assets/gallery/Drone testing at MIT ADT Uni.png",
        alt: "Drone testing at MIT ADT University",
      },
      {
        image: "/assets/gallery/Testing of drone at MIT ADT University.png",
        alt: "Drone testing at MIT ADT University image one",
      },
      {
        image: "/assets/gallery/Testing of drone at MIT ADT University 2.png",
        alt: "Drone testing at MIT ADT University image two",
      },
      {
        image: "/assets/gallery/Testing of drone at MIT ADT University 3.png",
        alt: "Drone testing at MIT ADT University image three",
      },
    ],
    tone: "signal",
    footnote:
      "Some work stays intentionally abstract here. The point is the domain, the pace, and the mindset.",
  },
  {
    id: "accenture",
    label: "Summer enterprise build",
    title:
      "Packaged Application Developer Associate // Associate Software Engineer Track",
    period: "May 19, 2025 - July 15, 2025",
    summary:
      "At Accenture, I worked with a Japanese client, AXA Japan, on reworking an outdated digital experience into something more modern, structured, and usable. It was enterprise software, but the challenge still came down to clarity: clean forms, clearer workflows, and systems people would actually want to use.",
    notes: [
      "Worked with Java, Maven, APIs, and form-heavy workflows to modernize a dated web experience.",
      "Collaborated with teammates on a client-facing system for an organization rooted in asset management, investment, and sustainability.",
      "Won Gold Level in Accenture's Go for Gold iAspire contest on Jan 20, 2025.",
      "Learned how disciplined engineering, team coordination, and enterprise constraints shape product decisions.",
    ],
    chips: [
      "AXA Japan",
      "Java",
      "Maven",
      "APIs",
      "Enterprise forms",
      "iAspire Gold Level",
    ],
    primaryImage:
      "/assets/gallery/Accenture Team outside Accenture office Magarpatta.png",
    secondaryImage: "/assets/gallery/Accenture Intern Badge.png",
    primaryAlt: "Aditya Mulay and teammates outside the Accenture office",
    secondaryAlt: "Accenture internship badge",
    tone: "steel",
  },
];

const systems: SystemEntry[] = [
  {
    title: "Aurora",
    tier: "Tier 1 / flagship",
    why:
      "Aurora exists because mental health support should not begin with fear, cost, or silence.",
    detail:
      "I helped shape Aurora into a self-help environment with journaling, AI support, habit systems, and positive reinforcement. It won funding through CRiEYA because it came from a real problem, not a trend.",
    tags: [
      "Mental health self-help",
      "AI companion",
      "Journaling",
      "Habit loops",
      "CRiEYA-funded",
    ],
    image: "/assets/gallery/Aurora at Project Expo.png",
    alt: "Aurora project displayed at a project expo",
    icon: BrainCircuit,
    action: {
      label: "View live concept",
      href: "https://aurora-mhcb.netlify.app/",
      external: true,
    },
  },
  {
    title: "Audoria",
    tier: "Tier 2 / deep listening",
    why:
      "Audoria matters because music deserves interpretation, not just classification.",
    detail:
      "I built it to go beyond genre tags and produce more thoughtful, timestamp-aware feedback about arrangement, composition, and listening experience.",
    tags: ["AI", "Music analysis", "Structured feedback", "Web product"],
    image: "/assets/gallery/Audoria AI Music Analysis.png",
    alt: "Audoria AI music analysis interface",
    icon: Sparkles,
    action: {
      label: "Open Audoria",
      href: "https://audoria.netlify.app",
      external: true,
    },
  },
  {
    title: "Aneka Lab",
    tier: "Tier 2 / academic systems",
    why:
      "Aneka was my way of turning a distributed computing platform into something teachable, demonstrable, and institutionally useful.",
    detail:
      "I helped teachers shape a subject around the University of Melbourne's platform, became the primary student researcher behind the effort, demoed it during NAAC review, and pulled a team together to communicate the work well.",
    tags: [
      "Distributed computing",
      "Research",
      "NAAC",
      "Academic infrastructure",
    ],
    image: "/assets/gallery/Aneka Distributed computing.png",
    alt: "Aneka distributed computing project visual",
    icon: Cpu,
    action: {
      label: "Read the research story",
      href: "/aneka-lab",
      internal: true,
    },
  },
  {
    title: "Air Guardian",
    tier: "Tier 3 / sustainability",
    why:
      "Air Guardian matters because sustainability only becomes actionable once invisible risk becomes visible data.",
    detail:
      "I built it as an IoT air-quality system that could sense, report, and help forecast environmental conditions instead of leaving pollution as something people simply tolerate.",
    tags: ["IoT", "AQI", "Arduino", "ThingSpeak", "ML forecast"],
    image: "/assets/gallery/Air Guardian Data Collection.png",
    alt: "Air Guardian data collection dashboard",
    icon: Cloud,
    action: {
      label: "Open system note",
      href: "/air-guardian",
      internal: true,
    },
  },
];

const auroraEvidence = [
  {
    title: "Project expo proof",
    image: "/assets/gallery/Aurora at Project Expo.png",
    alt: "Aurora at project expo",
  },
  {
    title: "Winning certificate",
    image: "/assets/gallery/Certificate IdeaSpark Winner.jpg",
    alt: "IdeaSpark winner certificate",
  },
  {
    title: "Best project felicitation",
    image: "/assets/gallery/Felicitation IdeaSpark.png",
    alt: "Felicitation related to the Aurora award",
  },
  {
    title: "Trophy and recognition",
    image: "/assets/gallery/IdeaSpark Trophy - Best Idea - Aurora.jpg",
    alt: "IdeaSpark trophy for Aurora",
  },
];

const retinologyHighlights = [
  { label: "Model", value: "ResNet50-powered desktop screening app" },
  { label: "Performance", value: "85%+ accuracy with 5-level severity output" },
  { label: "Speed", value: "Roughly 3-second analysis flow" },
  { label: "Status", value: "Ongoing development for medical and research use" },
];

const miniResidueImages = [
  {
    title: "YouTube Clone",
    image: "/assets/gallery/Youtube Clone Mini Project.png",
  },
  {
    title: "Weather App",
    image: "/assets/gallery/Weather APP Mini Project.png",
  },
  {
    title: "TikTacToe",
    image: "/assets/gallery/TikTacToe Mini Project.jpg",
  },
  {
    title: "Stopwatch",
    image: "/assets/gallery/Stopwatch Mini Project.jpg",
  },
];

const signals: SignalEntry[] = [
  {
    title: "Wordsworth debate champion",
    body:
      "I won first position in a tech debate, which matters to me because engineering is not just about making things work. It is about defending ideas clearly under pressure.",
    accent: "Proof that I can build and argue.",
    icon: Trophy,
  },
  {
    title: "Foreign languages ambassador",
    body:
      "At MIT ADT, I worked with Japanese delegates and helped organize international-facing events. That role forced me to communicate with cultural sensitivity, confidence, and presence.",
    accent: "Not just technical. Human-facing too.",
    icon: Languages,
  },
  {
    title: "Public speaking instinct",
    body:
      "I keep showing up where ideas need a voice, whether that means explaining cloud computing, giving young students career guidance, or carrying a room through curiosity rather than formality.",
    accent: "Informal speaker. Clear communicator.",
    icon: Mic2,
  },
  {
    title: "Unexpected rooms",
    body:
      "Meetups, startup teams, research demos, and conversations around builders keep widening the scope of what I want to make next.",
    accent: "I learn in public and in motion.",
    icon: Radio,
  },
];

const experiments = [
  "YouTube Clone",
  "Weather App",
  "TikTacToe",
  "TimeClock",
  "Stopwatch",
];

const credentialLinks: ActionLink[] = [
  {
    label: "Resume",
    href: "/assets/certificates/Aditya_Mulay_CV.pdf",
    external: true,
  },
  {
    label: "Accenture Go for Gold",
    href: "/assets/certificates/Accenture- Go for Gold-iAspire Certificate\u00a0.pdf",
    external: true,
  },
  {
    label: "AWS Cloud Foundations",
    href: "/assets/certificates/AWS Academy Graduate- Cloud Foundations_Aditya Mulay.pdf",
    external: true,
  },
  {
    label: "Google Cloud Security",
    href: "/assets/certificates/Google - Security Principles in Cloud Computing.pdf",
    external: true,
  },
  {
    label: "IIT Bombay Python",
    href: "/assets/certificates/Python - Certificate IIT Bombay.pdf",
    external: true,
  },
  {
    label: "Student Ambassador",
    href: "/assets/certificates/SHD student ambassador certificate of appreciation.pdf",
    external: true,
  },
];

const socialLinks: ActionLink[] = [
  { label: "Email", href: "mailto:adityamulay1@gmail.com", external: true },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/aditya-mulay1",
    external: true,
  },
  { label: "GitHub", href: "https://github.com/AdityaMulay1", external: true },
];

const SectionHeading = ({
  index,
  kicker,
  title,
  copy,
}: {
  index: string;
  kicker: string;
  title: string;
  copy: string;
}) => (
  <div className="section-heading">
    <span className="section-index">{index}</span>
    <div className="section-heading-copy">
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  </div>
);

const Index = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleContactChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setContactForm((current) => ({ ...current, [name]: value }));
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: contactForm.name,
          from_email: contactForm.email,
          message: contactForm.message,
          to_name: "Aditya Mulay",
        },
        EMAILJS_PUBLIC_KEY,
      );

      toast({
        title: "Message sent",
        description: "Thanks for reaching out. I will get back to you soon.",
      });

      setContactForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error", error);
      toast({
        title: "Message failed",
        description: "Please try again or contact me directly by email.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="home-shell">
      <header className="top-nav">
        <div className="nav-inner">
          <a href="#top" className="brand-mark" aria-label="Go to top">
            AM
          </a>
          <nav className="nav-links" aria-label="Section navigation">
            <a href="#missions" className="nav-link">
              Missions
            </a>
            <a href="#aurora" className="nav-link">
              Aurora
            </a>
            <a href="#retinology" className="nav-link">
              RetinologyAI
            </a>
            <a href="#systems" className="nav-link">
              Systems
            </a>
            <a href="#archive" className="nav-link">
              Archive
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
          <a
            className="nav-cta"
            href={assetPath("/assets/certificates/Aditya_Mulay_CV.pdf")}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </header>

      <main id="top" className="page-shell">
        <section className="hero-layout scene-anchor">
          <div className="hero-copy">
            <p className="eyebrow">Pune, India // active signal</p>
            <h1 className="hero-title">
              Aditya
              <span> Mulay</span>
            </h1>
            <p className="hero-deck">
              A builder of intelligent systems for human impact, real-world
              environments, and unconventional missions.
            </p>
            <p className="hero-body">
              I move between AI products, cloud systems, autonomous environments,
              storytelling, public speaking, and research with the same instinct:
              build something that matters outside the screen.
            </p>
            <div className="hero-actions">
              <a href="#missions" className="action-link">
                Enter the work
                <MoveRight size={16} />
              </a>
              <a
                href="https://www.youtube.com/watch?v=wQULfuvJ_WI"
                target="_blank"
                rel="noreferrer"
                className="ghost-link"
              >
                Aurora pitch video
                <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="metric-grid">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="metric-cell">
                  <p className="metric-label">{metric.label}</p>
                  <p className="metric-value">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-right-rail">
            <article className="notched-panel tone-signal hero-panel">
              <div className="panel-label-row">
                <p className="panel-label">Current deployment</p>
                <span className="panel-status">Ongoing</span>
              </div>
              <div className="hero-portrait-frame">
                <img
                  src={assetPath(
                    "/assets/gallery/Profile Image.jpeg",
                  )}
                  alt="Profile image of Aditya Mulay"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <div className="panel-meta-grid">
                <div>
                  <p className="meta-label">Role</p>
                  <p className="meta-value">Project Intern</p>
                </div>
                <div>
                  <p className="meta-label">Domain</p>
                  <p className="meta-value">Drone systems</p>
                </div>
                <div>
                  <p className="meta-label">Previous</p>
                  <p className="meta-value">Accenture / AXA Japan</p>
                </div>
                <div>
                  <p className="meta-label">Flagship</p>
                  <p className="meta-value">Aurora / CRiEYA-funded</p>
                </div>
              </div>
            </article>

            <div className="hero-subgrid">
              <article className="notched-panel tone-ember quote-panel">
                <Quote size={18} />
                <p>
                  Not a polished template. A living record of how I think, build,
                  and keep moving.
                </p>
              </article>
              <article className="notched-panel tone-steel quick-stack">
                <p className="panel-label">Stack pressure</p>
                <div className="chip-cluster">
                  <span className="signal-chip">AI</span>
                  <span className="signal-chip">Cloud</span>
                  <span className="signal-chip">Autonomous systems</span>
                  <span className="signal-chip">Research</span>
                  <span className="signal-chip">Public speaking</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="quote-belt deferred-block">
          {heroQuotes.map((quote) => (
            <div key={quote} className="quote-strip-item">
              <Quote size={14} />
              <span>{quote}</span>
            </div>
          ))}
        </section>

        <section id="missions" className="scene-block scene-anchor deferred-block">
          <SectionHeading
            index="01"
            kicker="Active deployments"
            title="Work that already lives in the real world."
            copy="The story starts where my code intersects with people, hardware, enterprise systems, and pressure. These are not classroom placeholders. They are the environments currently shaping me."
          />

          <div className="mission-stack">
            {featuredMissions.map((mission) => (
              <article
                key={mission.id}
                className={`notched-panel mission-panel tone-${mission.tone}`}
              >
                <div className="mission-layout">
                  <div className="mission-copy">
                    <p className="eyebrow">{mission.label}</p>
                    <h3 className="mission-title">{mission.title}</h3>
                    <p className="mission-period">{mission.period}</p>
                    <p className="mission-summary">{mission.summary}</p>
                    <ul className="signal-list">
                      {mission.notes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                    <div className="chip-cluster">
                      {mission.chips.map((chip) => (
                        <span key={chip} className="signal-chip">
                          {chip}
                        </span>
                      ))}
                    </div>
                    {mission.footnote ? (
                      <p className="mission-footnote">{mission.footnote}</p>
                    ) : null}
                  </div>

                  <div className="mission-visuals">
                    <figure className="image-frame large-frame">
                      <img
                        src={assetPath(mission.primaryImage)}
                        alt={mission.primaryAlt}
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                    <figure className="image-frame small-frame">
                      <img
                        src={assetPath(mission.secondaryImage)}
                        alt={mission.secondaryAlt}
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                    {mission.galleryImages?.length ? (
                      <div className="mission-gallery-grid">
                        {mission.galleryImages.map((item) => (
                          <figure key={item.image} className="image-frame mission-gallery-frame">
                            <img
                              src={assetPath(item.image)}
                              alt={item.alt}
                              loading="lazy"
                              decoding="async"
                            />
                          </figure>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="aurora" className="scene-block scene-anchor deferred-block">
          <SectionHeading
            index="02"
            kicker="Aurora"
            title="The project that proved empathy can carry engineering weight."
            copy="Aurora started from a question with actual emotional stakes: how do you create a digital space for reflection, support, and healthier habits when so many people do not know where to begin?"
          />

          <article className="notched-panel tone-ember aurora-panel">
            <div className="aurora-layout">
              <div className="aurora-copy">
                <p className="eyebrow">Tier 1 / flagship build</p>
                <h3 className="mission-title">
                  Aurora // Mental Health Self-Help Assistant
                </h3>
                <p className="mission-summary">
                  Aurora was built to help people feel less alone, less judged,
                  and more capable of understanding themselves. It combines
                  journaling, an AI chat companion, daily habits, streak logic,
                  and positive reinforcement into a system that feels like growth
                  rather than clinical distance.
                </p>
                <div className="impact-rail">
                  <div className="impact-tile">
                    <p className="metric-label">Funding signal</p>
                    <p className="metric-value">INR 2,00,000 through CRiEYA</p>
                  </div>
                  <div className="impact-tile">
                    <p className="metric-label">My role</p>
                    <p className="metric-value">
                      Project lead, web developer, pitch voice, therapist outreach
                    </p>
                  </div>
                  <div className="impact-tile">
                    <p className="metric-label">Team shape</p>
                    <p className="metric-value">5-person student build team</p>
                  </div>
                </div>
                <ul className="signal-list">
                  <li>Researched APIs for the chatbot and shaped the web experience.</li>
                  <li>Presented the project, made the videos, and carried the pitch.</li>
                  <li>
                    Consulted therapists and mentors to keep the design grounded in
                    responsibility, not hype.
                  </li>
                </ul>
                <div className="inline-actions">
                  <a
                    href="https://aurora-mhcb.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="action-link"
                  >
                    Live prototype
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=wQULfuvJ_WI"
                    target="_blank"
                    rel="noreferrer"
                    className="ghost-link"
                  >
                    Pitch video
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    href="https://github.com/AdityaMulay1/Aurora"
                    target="_blank"
                    rel="noreferrer"
                    className="ghost-link"
                  >
                    GitHub
                    <Github size={16} />
                  </a>
                </div>
              </div>

              <div className="evidence-grid">
                {auroraEvidence.map((item) => (
                  <figure key={item.title} className="image-frame evidence-frame">
                    <img
                      src={assetPath(item.image)}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>{item.title}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section id="retinology" className="scene-block scene-anchor deferred-block">
          <SectionHeading
            index="03"
            kicker="RetinologyAI"
            title="A medical AI system aimed at reducing distance, delay, and specialist bottlenecks."
            copy="This project came from a very specific reality: patients often travel hundreds of kilometers and wait far too long just to access retinal specialists. RetinologyAI is my attempt to reduce that friction with faster structured screening."
          />

          <article className="notched-panel tone-signal aurora-panel">
            <div className="aurora-layout">
              <div className="aurora-copy">
                <p className="eyebrow">Ongoing project / healthcare AI</p>
                <h3 className="mission-title">
                  RetinologyAI // Diabetic Retinopathy Detection
                </h3>
                <p className="mission-summary">
                  RetinologyAI is an AI-powered desktop application for diabetic
                  retinopathy detection built with a professional medical UI,
                  structured PDF reports, and fast severity analysis. I built it
                  because specialist retinal care is difficult to access for many
                  people, especially when a simple screening step still depends on a
                  scarce expert pipeline.
                </p>
                <div className="impact-rail">
                  {retinologyHighlights.map((item) => (
                    <div key={item.label} className="impact-tile">
                      <p className="metric-label">{item.label}</p>
                      <p className="metric-value">{item.value}</p>
                    </div>
                  ))}
                </div>
                <ul className="signal-list">
                  <li>Built for medical professionals and research-driven screening workflows.</li>
                  <li>Collected and worked with data from Aravind Hospital to ground the effort in real access problems.</li>
                  <li>Designed to help general doctors produce reports faster while still helping specialists move through analysis more efficiently.</li>
                </ul>
                <div className="inline-actions">
                  <a
                    href="https://github.com/AdityaMulay1/RetinologyAI"
                    target="_blank"
                    rel="noreferrer"
                    className="action-link"
                  >
                    GitHub
                    <Github size={16} />
                  </a>
                </div>
              </div>

              <figure className="image-frame evidence-frame retinology-frame">
                <img
                  src={assetPath("/assets/gallery/RetinologyAI.png")}
                  alt="RetinologyAI desktop application interface"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Desktop screening interface</figcaption>
              </figure>
            </div>
          </article>
        </section>

        <section id="systems" className="scene-block scene-anchor deferred-block">
          <SectionHeading
            index="04"
            kicker="Selected systems"
            title="A range that still points in one direction."
            copy="Even when the domains change, the instinct stays the same: build systems that read the world more clearly, help people decide better, or expose a hidden layer of reality."
          />

          <div className="systems-stack">
            {systems.map((system) => {
              const Icon = system.icon;

              return (
                <article
                  key={system.title}
                  className="notched-panel systems-panel tone-steel"
                >
                  <div className="systems-copy">
                    <div className="systems-heading-row">
                      <div className="systems-icon">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="section-kicker">{system.tier}</p>
                        <h3 className="systems-title">{system.title}</h3>
                      </div>
                    </div>
                    <p className="systems-why">{system.why}</p>
                    <p className="systems-detail">{system.detail}</p>
                    <div className="chip-cluster">
                      {system.tags.map((tag) => (
                        <span key={tag} className="signal-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="inline-actions">
                      {system.action.internal ? (
                        <Link to={system.action.href} className="ghost-link">
                          {system.action.label}
                          <ArrowUpRight size={16} />
                        </Link>
                      ) : (
                        <a
                          href={system.action.href}
                          target="_blank"
                          rel="noreferrer"
                          className="ghost-link"
                        >
                          {system.action.label}
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <figure className="image-frame system-frame">
                    <img
                      src={assetPath(system.image)}
                      alt={system.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </article>
              );
            })}
          </div>
        </section>

        <section className="scene-block deferred-block">
          <SectionHeading
            index="05"
            kicker="Unexpected experiments"
            title="Curiosity still leaks into smaller things."
            copy="The small projects are not the center of the portfolio anymore. They sit here as proof that I keep building, testing, and wandering into weird corners even when the stakes are lower."
          />

          <div className="experiments-layout">
            <article className="notched-panel tone-steel experiment-feature">
              <div className="systems-heading-row">
                <div className="systems-icon">
                  <Gamepad2 size={18} />
                </div>
                <div>
                  <p className="section-kicker">Tiny but intentional</p>
                  <h3 className="systems-title">Almost Died</h3>
                </div>
              </div>
              <p className="systems-why">
                A small Android game built in Godot and published on itch.io.
              </p>
              <p className="systems-detail">
                It stays here as a reminder that not every build needs to be
                serious to be revealing. Sometimes the side experiment says just
                as much about the builder.
              </p>
              <a
                href="https://adityamulay.itch.io/almost-died"
                target="_blank"
                rel="noreferrer"
                className="ghost-link"
              >
                Open itch.io page
                <ArrowUpRight size={16} />
              </a>
              <figure className="image-frame experiment-frame">
                <img
                  src={assetPath(
                    "/assets/gallery/Game - Almost died website on Itch.io 1.png",
                  )}
                  alt="Almost Died itch.io page screenshot"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </article>

            <article className="notched-panel tone-ember experiment-list">
              <div className="systems-heading-row">
                <div className="systems-icon">
                  <Wrench size={18} />
                </div>
                <div>
                  <p className="section-kicker">Quiet proof of range</p>
                  <h3 className="systems-title">Mini project residue</h3>
                </div>
              </div>
              <p className="systems-detail">
                These stay intentionally small. They exist as side-notes, not as
                loud proof.
              </p>
              <div className="chip-cluster compact-chips">
                {experiments.map((item) => (
                  <span key={item} className="signal-chip">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mini-residue-grid">
                {miniResidueImages.map((item) => (
                  <figure key={item.title} className="image-frame mini-residue-frame">
                    <img
                      src={assetPath(item.image)}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>{item.title}</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="scene-block deferred-block">
          <SectionHeading
            index="06"
            kicker="Presence"
            title="Signals that are not just technical."
            copy="The site should not reduce me to software alone. My edge also comes from speaking clearly, carrying ideas publicly, and moving between technical work and human rooms without becoming artificial."
          />

          <div className="signals-grid">
            {signals.map((signal) => {
              const Icon = signal.icon;

              return (
                <article
                  key={signal.title}
                  className="notched-panel tone-signal signal-panel"
                >
                  <div className="systems-heading-row">
                    <div className="systems-icon">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="section-kicker">Signal</p>
                      <h3 className="systems-title">{signal.title}</h3>
                    </div>
                  </div>
                  <p className="systems-detail">{signal.body}</p>
                  <p className="signal-accent">{signal.accent}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="archive" className="scene-block scene-anchor deferred-block">
          <SectionHeading
            index="07"
            kicker="Archive"
            title="Evidence, credentials, and direct access."
            copy="Certificates and PDFs matter, but only as support material. Here they work like a dossier: useful, compact, and easy to reach without hijacking the story."
          />

          <div className="archive-layout">
            <article className="notched-panel tone-steel archive-panel">
              <div className="systems-heading-row">
                <div className="systems-icon">
                  <Award size={18} />
                </div>
                <div>
                  <p className="section-kicker">Selected credentials</p>
                  <h3 className="systems-title">Evidence strip</h3>
                </div>
              </div>
              <div className="archive-list">
                {credentialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={assetPath(link.href)}
                    target="_blank"
                    rel="noreferrer"
                    className="archive-link"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            </article>

            <article className="notched-panel tone-ember archive-panel">
              <div className="systems-heading-row">
                <div className="systems-icon">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <p className="section-kicker">Core profile</p>
                  <h3 className="systems-title">What the archive should imply</h3>
                </div>
              </div>
              <ul className="signal-list">
                <li>Human-centered engineering rather than trend-chasing.</li>
                <li>Systems thinking across AI, cloud, robotics, and research.</li>
                <li>
                  Comfort with startup speed, enterprise context, and academic rigor.
                </li>
                <li>
                  Enough creative range to move between serious work and strange
                  experiments.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section id="contact" className="scene-block scene-anchor deferred-block">
          <article className="notched-panel tone-signal contact-panel">
            <div className="contact-copy">
              <p className="eyebrow">Direct contact</p>
              <h2 className="section-title contact-title">
                If the signal feels real, reach out.
              </h2>
              <p className="section-copy">
                This site is not trying to look employable. It is trying to look
                honest, ambitious, and alive. If that resonates, I am one message
                away.
              </p>
            </div>
            <div className="contact-actions">
              {socialLinks.map((link) => {
                const icon =
                  link.label === "Email"
                    ? Mail
                    : link.label === "LinkedIn"
                      ? Linkedin
                      : Github;
                const Icon = icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <Icon size={18} />
                    <span>{link.label}</span>
                    <ArrowUpRight size={16} />
                  </a>
                );
              })}
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label className="form-field">
                <span className="metric-label">Name</span>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  placeholder="Your name"
                  required
                  disabled={isSending}
                />
              </label>
              <label className="form-field">
                <span className="metric-label">Email</span>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  placeholder="your.email@example.com"
                  required
                  disabled={isSending}
                />
              </label>
              <label className="form-field">
                <span className="metric-label">Message</span>
                <textarea
                  className="form-input form-textarea"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  placeholder="Tell me what you're building or why you're reaching out."
                  rows={5}
                  required
                  disabled={isSending}
                />
              </label>
              <button type="submit" className="action-link form-submit" disabled={isSending}>
                {isSending ? "Sending..." : "Send message"}
                <ArrowUpRight size={16} />
              </button>
            </form>
          </article>

          <footer className="site-footer">
            <p>Aditya Mulay // Built to feel cinematic without dragging the device.</p>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default Index;
