'use client'

import { useEffect, useRef } from 'react'

// Add your photo URLs here — replace the placeholders with real image links
const PHOTOS = [
  { src: '/photos/1.jpg', caption: 'Donating blood together — because even our blood type is compatible' },
  { src: '/photos/2.jpg', caption: 'Smiling on a bench — just us and the sunset' },
  { src: '/photos/3.jpg', caption: 'Being silly on the bus — my favorite kind of us' },
  { src: '/photos/4.jpg', caption: 'You and me in uniform — distance made us stronger' },
  { src: '/photos/5.jpg', caption: 'Car rides with you — my happy place' },
]

export default function Gallery() {
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    refs.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {PHOTOS.map((photo, i) => (
          <div
            key={i}
            ref={(el) => { refs.current[i] = el }}
            className={`scroll-reveal group relative rounded-2xl overflow-hidden bg-blush/30 border border-rose/10 shadow-sm hover:shadow-lg transition-all duration-300 ${
              i === 0 ? 'col-span-2 sm:col-span-1 aspect-[4/3] sm:aspect-square' : 'aspect-square'
            }`}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Show placeholder if image not found
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                target.parentElement!.classList.add('flex', 'items-center', 'justify-center')
              }}
            />
            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <p className="text-white text-xs font-medium">{photo.caption}</p>
            </div>
            {/* Placeholder heart when no image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-rose/20">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-400 text-xs mt-6">Our favorite moments together</p>
    </div>
  )
}
