'use client'

import { useState, useRef } from 'react'

export default function LoveQuestion() {
  const [yesClicked, setYesClicked] = useState(false)
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const [escaped, setEscaped] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  function runAway() {
    setEscaped((e) => e + 1)
    const x = (Math.random() - 0.5) * 250
    const y = (Math.random() - 0.5) * 150
    setNoPos({ x, y })
  }

  if (yesClicked) {
    return (
      <div className="text-center py-8">
        <div className="text-6xl mb-4 animate-bounce">💖</div>
        <p className="font-serif text-2xl sm:text-3xl text-gray-800 font-bold mb-2">ידעתי!</p>
        <p className="text-gray-500 text-lg">אני אוהב אותך יותר 💕</p>
      </div>
    )
  }

  const messages = [
    '',
    'לא תצליחי 😏',
    'ניסיון יפה 😂',
    'אין סיכוי!',
    'עדיין מנסה? 🤭',
    'את חייבת ללחוץ על כן 💕',
    'הכפתור בורח ממך 😂',
    'תוותרי כבר 💖',
  ]

  return (
    <div ref={containerRef} className="text-center py-8 relative overflow-hidden" style={{ minHeight: '280px' }}>
      <p className="font-serif text-2xl sm:text-3xl text-gray-800 font-bold mb-2">
        את אוהבת אותי? 🥺
      </p>
      {escaped > 0 && (
        <p className="text-rose text-sm mb-6 animate-fade-in font-medium">
          {messages[Math.min(escaped, messages.length - 1)]}
        </p>
      )}
      {escaped === 0 && <div className="mb-6" />}

      <div className="flex items-center justify-center gap-6 relative" style={{ minHeight: '80px' }}>
        {/* Yes button — stays in place, gets bigger */}
        <button
          onClick={() => setYesClicked(true)}
          className="bg-rose text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 z-10"
          style={{
            padding: `${14 + escaped * 3}px ${28 + escaped * 6}px`,
            fontSize: `${16 + escaped * 2}px`,
          }}
        >
          כן 💕
        </button>

        {/* No button — runs away */}
        <button
          onMouseEnter={runAway}
          onTouchStart={(e) => { e.preventDefault(); runAway() }}
          onClick={runAway}
          className="bg-gray-200 text-gray-500 font-bold px-7 py-3.5 rounded-full transition-all duration-300 text-sm hover:bg-gray-200 select-none z-10"
          style={{
            transform: `translate(${noPos.x}px, ${noPos.y}px)`,
            opacity: Math.max(0.3, 1 - escaped * 0.1),
            fontSize: `${Math.max(10, 14 - escaped)}px`,
            padding: `${Math.max(6, 14 - escaped * 2)}px ${Math.max(12, 28 - escaped * 3)}px`,
          }}
        >
          לא
        </button>
      </div>
    </div>
  )
}
