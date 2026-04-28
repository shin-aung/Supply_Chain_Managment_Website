import { useState } from 'react'
import Lightbox from './Lightbox'
import { buildUrl } from '../mediaManifest'

interface GalleryProps {
  folder: string
  images: string[]
  label?: string
}

export default function Gallery({ folder, images, label }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const urls = images.map(f => buildUrl(folder, f))

  // Placeholder tiles when no images provided
  const renderPlaceholder = (index: number) => (
    <div key={`ph-${index}`} className="gallery-item">
      <div className="gallery-placeholder">
        <span className="gallery-placeholder-icon">🖼</span>
        <span>image {index + 1}</span>
      </div>
    </div>
  )

  const showEmpty = images.length === 0

  return (
    <>
      {label && (
        <div className="video-section-label" style={{ marginBottom: 16 }}>
          {label}
        </div>
      )}

      <div className="gallery-grid masonry">
        {showEmpty
          ? Array.from({ length: 6 }, (_, i) => renderPlaceholder(i))
          : urls.map((src, i) => (
              <div
                key={src}
                className={`gallery-item ${i === 0 ? 'tall' : ''}`}
                onClick={() => setLightboxIndex(i)}
              >
                <img src={src} alt={`${folder} ${i + 1}`} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-caption">
                    {folder.split('/').pop()} — {i + 1}
                  </span>
                </div>
              </div>
            ))
        }
      </div>

      {lightboxIndex !== null && urls.length > 0 && (
        <Lightbox
          items={urls}
          currentIndex={lightboxIndex}
          type="image"
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(i => Math.max(0, (i ?? 0) - 1))}
          onNext={() => setLightboxIndex(i => Math.min(urls.length - 1, (i ?? 0) + 1))}
        />
      )}
    </>
  )
}
