import { useState } from 'react'
import Lightbox from './Lightbox'
import { buildUrl } from '../mediaManifest'

interface VideoGalleryProps {
  folder: string
  videos: string[]
}

export default function VideoGallery({ folder, videos }: VideoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const urls = videos.map(f => buildUrl(folder, f))

  const PlayIcon = () => (
    <div className="play-icon">
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  )

  const renderPlaceholder = (i: number) => (
    <div key={`vph-${i}`} className="video-card">
      <div className="video-placeholder">
        <span className="video-placeholder-icon">🎬</span>
        <span className="video-placeholder-text">video {i + 1}</span>
      </div>
      <div className="video-play-btn"><PlayIcon /></div>
    </div>
  )

  const showEmpty = videos.length === 0

  return (
    <>
      <div className="video-section-label">Video Footage</div>
      <div className="video-grid">
        {showEmpty
          ? Array.from({ length: 3 }, (_, i) => renderPlaceholder(i))
          : urls.map((src, i) => (
              <div
                key={src}
                className="video-card"
                onClick={() => setLightboxIndex(i)}
              >
                <video src={src} muted preload="metadata" />
                <div className="video-play-btn"><PlayIcon /></div>
                <div className="video-label">
                  {folder.split('/').pop()} — clip {i + 1}
                </div>
              </div>
            ))
        }
      </div>

      {lightboxIndex !== null && urls.length > 0 && (
        <Lightbox
          items={urls}
          currentIndex={lightboxIndex}
          type="video"
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(i => Math.max(0, (i ?? 0) - 1))}
          onNext={() => setLightboxIndex(i => Math.min(urls.length - 1, (i ?? 0) + 1))}
        />
      )}
    </>
  )
}
