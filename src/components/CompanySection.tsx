import Gallery from './Gallery'
import VideoGallery from './VideoGallery'
import { useReveal } from './useReveal'

interface ObservationPoint {
  icon: string
  title: string
  desc: string
}

interface CompanySectionProps {
  id: string
  sectionNum: string
  company: 'UNIQLO' | 'IKEA' | 'ZARA'
  tagline: string
  description: string
  images: string[]
  videos: string[]
  observations: ObservationPoint[]
}

const badgeClass: Record<string, string> = {
  UNIQLO: 'badge-uniqlo',
  IKEA:   'badge-ikea',
  ZARA:   'badge-zara',
}

export default function CompanySection({
  id, sectionNum, company, tagline, description,
  images, videos, observations
}: CompanySectionProps) {
  const headerRef = useReveal()
  const galleryRef = useReveal()
  const obsRef = useReveal()

  return (
    <section id={id} className="section">
      <div className="container">

        {/* ── Section Header ── */}
        <div className="reveal" ref={headerRef}>
          <div className="section-header">
            <div className="section-meta">
              <span className="section-num">Field Visit {sectionNum}</span>
              <h2 className="section-title">
                {company}<br />
                <span className="section-subtitle">{tagline}</span>
              </h2>
            </div>
            <p className="section-desc">{description}</p>
          </div>

          {/* Company badge row */}
          <div className="company-bar">
            <span className={`company-badge ${badgeClass[company]}`}>{company}</span>
            <span className="company-tagline">{tagline}</span>
          </div>
        </div>

        {/* ── Observations ── */}
        <div className="reveal" ref={obsRef}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 12,
            marginBottom: 52,
          }}>
            {observations.map((obs, i) => (
              <div key={i} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-md)',
                padding: '18px 20px',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-lit)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                ;(e.currentTarget as HTMLElement).style.transform = ''
              }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{obs.icon}</div>
                <div style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: 6,
                  fontFamily: 'var(--font-display)',
                }}>
                  {obs.title}
                </div>
                <div style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}>
                  {obs.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Photo Gallery ── */}
        <div className="reveal" ref={galleryRef}>
          <div className="video-section-label">Photo Gallery</div>
          <Gallery
            folder={`images/${company}`}
            images={images}
          />

          {/* ── Videos ── */}
          {(videos.length > 0 || true) && (
            <div className="video-section">
              <VideoGallery
                folder={`videos/${company}`}
                videos={videos}
              />
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
