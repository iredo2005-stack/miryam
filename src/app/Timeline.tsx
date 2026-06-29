'use client'

import { useEffect, useRef } from 'react'

const EVENTS = [
  {
    date: '09/06/2023',
    title: 'נפגשנו במכינה',
    desc: 'ההתחלה של הסיפור שלנו. הרגע שבו הכל השתנה.',
    emoji: '✨',
    photo: '/photos/1.jpg',
  },
  {
    date: '14/02/2024',
    title: 'רשמית זוג',
    desc: 'היום האהוב עליי. ולנטיינס הפך ליום שלנו לנצח.',
    emoji: '💕',
    photo: '/photos/2.jpg',
  },
  {
    date: 'אפריל 2024',
    title: 'סיימנו את המכינה',
    desc: 'סיימנו יחד מסע של 10 חודשים — זה לצד זה.',
    emoji: '🎓',
    photo: '/photos/3.jpg',
  },
  {
    date: 'אפריל – אוגוסט 2024',
    title: 'הקיץ הזהוב שלנו',
    desc: 'נהנינו מכל רגע ורגע ביחד לפני הפרק הבא.',
    emoji: '☀️',
    photo: null,
  },
  {
    date: '14/08/2024',
    title: 'התחלתי שירות צבאי',
    desc: 'אתגר חדש שעברנו יחד. המרחק רק חיזק אותנו.',
    emoji: '🫡',
    photo: '/photos/4.jpg',
  },
  {
    date: 'אוגוסט 2024 – היום',
    title: 'גדלים ביחד',
    desc: 'בונים את הקצב שלנו, נפגשים כל שבוע, ומתחזקים כל יום.',
    emoji: '💪',
    photo: '/photos/5.jpg',
  },
]

export default function Timeline() {
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    refs.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="max-w-2xl mx-auto relative" dir="ltr">
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
            <div className={`flex-1 sm:w-[calc(50%-2rem)] ${isLeft ? 'sm:pr-10' : 'sm:pl-10'}`} dir="rtl">
              <div className="bg-white/70 backdrop-blur-sm border border-rose/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">

                {/* Photo */}
                {event.photo && (
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={event.photo}
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Text content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{event.emoji}</span>
                    <span className="text-xs font-medium text-rose tracking-wide">{event.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-gray-800 mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{event.desc}</p>
                </div>
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
