import { useState, useEffect, useRef } from "react";
import CompanySection from "./components/CompanySection";
import Gallery from "./components/Gallery";
import { useReveal } from "./components/useReveal";
import { mediaManifest } from "./mediaManifest";
import "./index.css";

// ── Scroll progress bar ────────────────────────────────
function ProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setProgress(pct * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="progress-bar"
      style={{ transform: `scaleX(${progress / 100})` }}
    />
  );
}

// ── Nav ────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="nav-logo">
        Field Exploration
      </a>
      <ul className="nav-links">
        <li>
          <a href="#uniqlo">Uniqlo</a>
        </li>
        <li>
          <a href="#ikea">IKEA</a>
        </li>
        <li>
          <a href="#zara">Zara</a>
        </li>
        <li>
          <a href="#members">Members</a>
        </li>
      </ul>
    </nav>
  );
}

// ── Hero ───────────────────────────────────────────────
function Hero() {
  // Show up to 6 photos across all company folders for mosaic
  const allImages = [
    ...mediaManifest.uniqloImages.slice(0, 2).map((f) => `images/UNIQLO/${f}`),
    ...mediaManifest.ikeaImages.slice(0, 2).map((f) => `images/IKEA/${f}`),
    ...mediaManifest.zaraImages.slice(0, 1).map((f) => `images/ZARA/${f}`),
    ...mediaManifest.memberImages.slice(0, 5).map((f) => `images/members/${f}`),
  ];

  const placeholderEmojis = ["🏪", "🛋️", "👕", "📦", "🛒", "📷"];

  return (
    <div id="top" className="hero">
      <div className="hero-left">
        <p className="hero-eyebrow">Group 1 · PGDM SCM · 26/04/2026</p>
        <h1 className="hero-title">
          Field
          <br />
          <em>Exploration</em>
        </h1>
        <p className="hero-desc">
          A site visit to three retail and fashion leaders at Tampines —
          documenting supply chain operations, distribution practices, and the
          seamless movement of goods.
        </p>
        <div className="hero-tags">
          <span className="hero-tag">Uniqlo</span>
          <span className="hero-tag">IKEA</span>
          <span className="hero-tag">Zara</span>
          <span className="hero-tag">Distribution</span>
          <span className="hero-tag">SCM</span>
        </div>
        <div className="hero-scroll-hint">
          <span className="scroll-line" />
          scroll to explore
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-mosaic">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="hero-mosaic-cell">
              {allImages[i] ? (
                <img src={`/${allImages[i]}`} alt="" />
              ) : (
                <div className="placeholder-cell">{placeholderEmojis[i]}</div>
              )}
            </div>
          ))}
        </div>
        <div className="hero-mosaic-overlay" />
      </div>
    </div>
  );
}

// ── Stats ──────────────────────────────────────────────
function Stats() {
  const ref = useReveal();
  return (
    <div className="container reveal" ref={ref}>
      <div className="stats-strip">
        <div className="stat-item">
          <div className="stat-num">3</div>
          <div className="stat-label">Companies Visited</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">
            {mediaManifest.uniqloImages.length +
              mediaManifest.ikeaImages.length +
              mediaManifest.zaraImages.length +
              mediaManifest.memberImages.length || "—"}
          </div>
          <div className="stat-label">Photos Captured</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">
            {mediaManifest.uniqloVideos.length +
              mediaManifest.ikeaVideos.length +
              mediaManifest.zaraVideos.length || "—"}
          </div>
          <div className="stat-label">Video Clips</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">1</div>
          <div className="stat-label">Day of Exploration</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">
            {mediaManifest.memberImages.length || 5}
          </div>
          <div className="stat-label">Team Members</div>
        </div>
      </div>
    </div>
  );
}

// ── Members section ────────────────────────────────────
function MembersSection() {
  const headerRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="members" className="section members-section">
      <div className="container">
        <div className="reveal" ref={headerRef}>
          <div className="section-header">
            <div className="section-meta">
              <span className="section-num">Our Team</span>
              <h2 className="section-title">
                Group 1<br />
                <span className="section-subtitle">Members</span>
              </h2>
            </div>
            <p className="section-desc">
              PGDM Supply Chain Management students who conducted the field
              visit to document real-world retail and distribution operations.
            </p>
          </div>
        </div>

        <div className="reveal" ref={gridRef}>
          {mediaManifest.memberImages.length > 0 ? (
            <div className="members-grid">
              {mediaManifest.memberImages.map((file, i) => (
                <div key={file} className="member-card">
                  <img
                    src={`/images/members/${file}`}
                    alt={`Member ${i + 1}`}
                    loading="lazy"
                  />
                  <div className="member-overlay">
                    <div className="member-name">
                      {file.split(".").slice(0, -1).join(".")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Placeholder members
            <div className="members-grid">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="member-card">
                  <div className="member-placeholder">
                    <div className="member-avatar">👤</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Group photos */}
        {mediaManifest.memberImages.length > 5 && (
          <div style={{ marginTop: 48 }}>
            <div className="video-section-label">Group Photos</div>
            <Gallery
              folder="images/members"
              images={mediaManifest.memberImages.slice(5)}
            />
          </div>
        )}
      </div>
    </section>
  );
}

// ── Main App ───────────────────────────────────────────
export default function App() {
  return (
    <>
      <ProgressBar />
      <Nav />
      <Hero />

      <Stats />

      {/* ── Divider ── */}
      <div className="container">
        <div className="divider" />
      </div>

      {/* ── UNIQLO ── */}
      <CompanySection
        id="uniqlo"
        sectionNum="01"
        company="UNIQLO"
        tagline="Tampines Mall"
        description="Exploring Uniqlo's O2O strategy, membership program, self-checkout innovation, and brand collaborations across men's, women's, and kids' sections."
        images={mediaManifest.uniqloImages}
        videos={mediaManifest.uniqloVideos}
        observations={[
          {
            icon: "🆕",
            title: "New Arrivals & Limited Edition",
            desc: "Seasonal drops drive urgency and inventory turnover at the floor level.",
          },
          {
            icon: "📱",
            title: "Online-to-Offline (O2O)",
            desc: "Order unavailable sizes online in-store — a smart inventory extension.",
          },
          {
            icon: "🏷️",
            title: "Membership Program",
            desc: "Loyalty data enables demand forecasting and personalised promotions.",
          },
          {
            icon: "♻️",
            title: "Recycling Bins",
            desc: "Reverse logistics in action — clothes collected and repurposed.",
          },
          {
            icon: "🤖",
            title: "Self-Checkout Counter",
            desc: "Reduces labour cost and improves throughput at peak hours.",
          },
          {
            icon: "🎨",
            title: "Brand Collaborations",
            desc: "Disney, Marvel, Pokémon, Pop Mart, Mario, Peanuts, Old Chang Kee & more.",
          },
          {
            icon: "👔",
            title: "Store Sections",
            desc: "Men, Women & Kids zones organised by segment for easy navigation.",
          },
          {
            icon: "🗺️",
            title: "Floor Layout Display",
            desc: "Visual merchandising with body displays and floor plan guides product flow.",
          },
        ]}
      />

      <div className="container">
        <div className="divider" />
      </div>

      {/* ── IKEA ── */}
      <CompanySection
        id="ikea"
        sectionNum="02"
        company="IKEA"
        tagline="Tampines"
        description="A two-floor warehouse-style retailer with experiential showrooms, digital store navigation, flat-pack philosophy and last-mile shuttle bus service."
        images={mediaManifest.ikeaImages}
        videos={mediaManifest.ikeaVideos}
        observations={[
          {
            icon: "🏗️",
            title: "2-Floor Layout",
            desc: "Floor 2: Showroom with room setups. Floor 1: Small items, plants, warehouse.",
          },
          {
            icon: "🛋️",
            title: "Experiential Showroom",
            desc: 'Room setups let customers "live" the product — try sofas, beds, and chairs.',
          },
          {
            icon: "📐",
            title: "Free Measurement Tools",
            desc: "Free measuring tape, notepad & pencil — customers self-measure items.",
          },
          {
            icon: "💻",
            title: "Digital Store Map",
            desc: "No physical floor map — digital kiosk shows real-time item locations.",
          },
          {
            icon: "🏭",
            title: "In-store Warehouse",
            desc: "End-of-floor-1 warehouse with crane. No robots — fully human-powered.",
          },
          {
            icon: "🌭",
            title: "Low-Cost Food Strategy",
            desc: "$1 hotdog, $0.50 ice cream — deliberate marketing to increase dwell time.",
          },
          {
            icon: "🚌",
            title: "Shuttle Bus Service",
            desc: "Free shuttle to Tampines & Serangoon MRT — solving last-mile transport.",
          },
          {
            icon: "📦",
            title: "Self-Pack & Disassembly",
            desc: "Self-packing counter and disassembly station aligned with flat-pack design.",
          },
        ]}
      />

      <div className="container">
        <div className="divider" />
      </div>

      {/* ── ZARA ── */}
      <CompanySection
        id="zara"
        sectionNum="03"
        company="ZARA"
        tagline="Centralized Distribution"
        description="Documenting Zara's fast-fashion retail model, store layout, product flow, and how centralized distribution enables twice-weekly global replenishment."
        images={mediaManifest.zaraImages}
        videos={mediaManifest.zaraVideos}
        observations={[
          {
            icon: "⚡",
            title: "Fast Replenishment",
            desc: "New stock arrives twice weekly — intentional scarcity drives urgency.",
          },
          {
            icon: "🏷️",
            title: "RFID Technology",
            desc: "All items tagged with RFID for real-time inventory tracking store-wide.",
          },
          {
            icon: "👗",
            title: "Visual Merchandising",
            desc: "High-contrast display and editorial styling communicates brand identity.",
          },
          {
            icon: "🗺️",
            title: "Store Flow Design",
            desc: "Curated route through the store maximises product exposure time.",
          },
          {
            icon: "📦",
            title: "Back-of-House Ops",
            desc: "Lean stockroom design — items move quickly from delivery to floor.",
          },
          {
            icon: "🌍",
            title: "Global Sourcing",
            desc: "Centralized hub in Arteixo, Spain ships twice weekly to all global stores.",
          },
        ]}
      />

      <div className="container">
        <div className="divider" />
      </div>

      {/* ── Members ── */}
      <MembersSection />

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">Field Exploration</div>
            <div className="footer-info">
              Group 1 · PGDM Supply Chain Management
              <br />
              Retail & Fashion — Lecturer: Mr. Nathan
              <br />
              Acetek College · 26/04/2026
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
