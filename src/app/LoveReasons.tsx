'use client'

import { useState } from 'react'

const REASONS = [
  "כי הצחוק שלך הוא הצליל האהוב עליי בעולם.",
  "כי את הופכת את הימים הקשים לקלים יותר רק בזכות הנוכחות שלך.",
  "כי את האמנת בנו גם כשזה לא היה קל.",
  "כי כל שבוע שאני רואה אותך זה מרגיש כמו לחזור הביתה.",
  "כי את האישה הכי חזקה שאני מכיר, ואת אפילו לא מבינה את זה.",
  "כי החיוך שלך עדיין גורם ללב שלי לדלג פעימה.",
  "כי את גורמת לי לרצות להיות הגרסה הכי טובה של עצמי.",
  "כי שום מרחק לא יכול לשנות את מה שאני מרגיש כלפייך.",
  "כי כל זיכרון איתך הוא כזה שאני רוצה לחיות מחדש.",
  "כי את לא רק החברה שלי — את החברה הכי טובה שלי.",
  "כי כשאני איתך, שום דבר אחר בעולם לא חשוב.",
  "כי את אהבת אותי בימים הכי קשים, לא רק בטובים.",
  "כי הדרך שאת מסתכלת עליי גורמת לי להרגיש בלתי מנוצח.",
  "כי אני לא יכול לדמיין את החיים שלי בלעדייך.",
  "כי כל שיר אהבה סוף סוף הגיוני בזכותך.",
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
        {reason ? 'ספרי לי עוד' : 'למה אתה אוהב אותי?'}
      </button>

      {reason && (
        <div className={`mt-8 transition-all duration-500 ${animating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-white/80 backdrop-blur-sm border border-rose/15 rounded-2xl p-6 shadow-sm max-w-md mx-auto">
            <p className="font-serif text-xl text-gray-700 leading-relaxed">
              &ldquo;{reason}&rdquo;
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
