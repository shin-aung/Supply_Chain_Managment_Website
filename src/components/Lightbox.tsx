import { useEffect, useCallback } from 'react'

interface LightboxProps {
  items: string[]
  currentIndex: number
  type: 'image' | 'video'
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({
  items, currentIndex, type, onClose, onPrev, onNext
}: LightboxProps) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  const src = items[currentIndex]

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>[ ESC ] close</button>

        {type === 'image' ? (
          <img src={src} alt={`View ${currentIndex + 1}`} />
        ) : (
          <video src={src} controls autoPlay />
        )}

        {items.length > 1 && (
          <>
            <button className="lightbox-nav prev" onClick={onPrev}>‹</button>
            <button className="lightbox-nav next" onClick={onNext}>›</button>
            <div className="lightbox-counter">
              {currentIndex + 1} / {items.length}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
