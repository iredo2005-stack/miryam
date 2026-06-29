'use client'

import { useEffect, useRef } from 'react'

const EVENTS = [
  {
    date: '09/06/2023',
    title: 'Meeting at the Mechina',
    desc: 'The beginning of our story. The moment everything changed.',
    emoji: '✨',
  },
  {
    date: '14/02/2024',
    title: 'Officially a Couple',
    desc: 'My favorite day. Valentine\'s Day became our day forever.',
    emoji: '💕',
  },
  {
    date: 'April 2024',
    title: 'Finishing the Mechina',
    desc: 'We completed our 10-month Mechina journey — side by side.',
    emoji: '🎓',
  },
  {
    date: 'Apr – Aug 2024',
    title: 'Our Golden Summer',
    desc: 'Enjoying every single moment together before the next chapter.',
    emoji: '☀️',
  },
  {
    date: '14/08/2024',
    title: 'IDF Service Begins',
    desc: 'A new challenge we faced together. Distance made us stronger.',
    emoji: '🫡',
  },
  {
    date: 'Aug 2024 – Today',
    title: 'Growing Stronger',
    desc: 'Building our rhythm, meeting once a week, and growing stronger every single day.',
    emoji: '💪',
  },
]

export default function Timeline() {
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    refs.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="max-w-2xl mx-auto relative">
      {/* Vertical line */}
      <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose/40 via-rose/20 to-transparent sm:-translate-x-px" />

      {EVENTS.map((event, i) => {
        const isLeft = i % 2 === 0

        return (
          <div
            key={i}
            ref={(el) => { refs.current[i] = el }}
            className={`scroll-reveal relative flex items-start gap-4 mb-14 sm:mb-16 ${
              isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
            }`}
          >
            {/* Dot */}
            <div className="absolute left-6 sm:left-1/2 w-4 h-4 rounded-full bg-rose timeline-dot -translate-x-1/2 mt-1.5 z-10 flex-shrink-0" />

            {/* Spacer for mobile */}
            <div className="w-12 sm:hidden flex-shrink-0" />

            {/* Card */}
            <div className={`flex-1 sm:w-[calc(50%-2rem)] ${isLeft ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:text-left'}`}>
              <div className="bg-white/70 backdrop-blur-sm border border-rose/10 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'sm:justify-end' : 'sm:justify-start'}`}>
                  <span className="text-lg">{event.emoji}</span>
                  <span className="text-xs font-medium text-rose tracking-wide uppercase">{event.date}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-800 mb-1">{event.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{event.desc}</p>
              </div>
            </div>

            {/* Empty space for other side on desktop */}
            <div className="hidden sm:block flex-1 sm:w-[calc(50%-2rem)]" />
          </div>
        )
      })}
    </div>
  )
}
