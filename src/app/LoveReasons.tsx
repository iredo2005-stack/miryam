'use client'

import { useState } from 'react'

const REASONS = [
  "Because your laugh is my favorite sound in the world.",
  "Because you make the hard days feel lighter just by being there.",
  "Because you believed in us when it wasn't easy.",
  "Because every week I see you, it feels like coming home.",
  "Because you're the strongest person I know, and you don't even realize it.",
  "Because your smile still makes my heart skip a beat.",
  "Because you make me want to be the best version of myself.",
  "Because no distance could ever change what I feel for you.",
  "Because every memory with you is one I want to relive forever.",
  "Because you're not just my girlfriend — you're my best friend.",
  "Because when I'm with you, nothing else in the world matters.",
  "Because you loved me on my worst days, not just my best ones.",
  "Because the way you look at me makes me feel invincible.",
  "Because I can't imagine my life without you in it.",
  "Because every love song finally makes sense because of you.",
]

export default function LoveReasons() {
  const [reason, setReason] = useState<string | null>(null)
  const [animating, setAnimating] = useState(false)

  function showReason() {
    setAnimating(false)
    const filtered = REASONS.filter((r) => r !== reason)
    const next = filtered[Math.floor(Math.random() * filtered.length)]
    setTimeout(() => {
      setReason(next)
      setAnimating(true)
    }, 50)
  }

  return (
    <div>
      <button
        onClick={showReason}
        className="group relative inline-flex items-center gap-2 bg-rose text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="group-hover:scale-110 transition-transform">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
        </svg>
        {reason ? 'Tell Me Another' : 'Why Do You Love Me?'}
      </button>

      {reason && (
        <div className={`mt-8 transition-all duration-500 ${animating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-white/80 backdrop-blur-sm border border-rose/15 rounded-2xl p-6 shadow-sm max-w-md mx-auto">
            <p className="font-serif text-xl text-gray-700 leading-relaxed italic">
              &ldquo;{reason}&rdquo;
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
