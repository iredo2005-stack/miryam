import FloatingHearts from './FloatingHearts'
import Timeline from './Timeline'
import LoveReasons from './LoveReasons'
import LoveQuestion from './LoveQuestion'

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden" dir="rtl">
      <FloatingHearts />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-6 text-center">
        <div className="animate-pulse-soft mb-6">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-rose">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
          </svg>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-2 animate-fade-in">
          מרים יוסף
        </h1>
        <p className="font-serif text-xl sm:text-2xl text-rose mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          הסיפור שלנו עד עכשיו
        </p>
        <p className="text-lg sm:text-xl text-gray-500 max-w-md animate-fade-in" style={{ animationDelay: '0.4s' }}>
          כל רגע איתך הוא הפרק האהוב עליי.
        </p>
        <div className="mt-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="#timeline" className="inline-flex items-center gap-2 bg-rose/20 text-deep font-medium px-6 py-3 rounded-full hover:bg-rose/30 transition-colors">
            <span>קראי את הסיפור שלנו</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          </a>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="relative z-10 py-20 px-6">
        <h2 className="font-serif text-3xl sm:text-4xl text-center text-gray-800 mb-16">
          ציר <span className="text-rose">הזמן</span> שלנו
        </h2>
        <Timeline />
      </section>

      {/* Love Reasons */}
      <section className="relative z-10 py-20 px-6 bg-blush/40">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-800 mb-4">
            למה אני אוהב <span className="text-rose">אותך</span>
          </h2>
          <p className="text-gray-500 mb-10">לחצי על הכפתור ותני לי להזכיר לך.</p>
          <LoveReasons />
        </div>
      </section>

      {/* Love Question */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-lg mx-auto bg-white/70 backdrop-blur-sm border border-rose/10 rounded-3xl p-8 shadow-sm">
          <LoveQuestion />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center bg-cream">
        <div className="animate-pulse-soft inline-block mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-rose inline">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
          </svg>
        </div>
        <p className="text-gray-500 text-sm">נבנה באהבה, רק בשבילך.</p>
        <p className="text-gray-400 text-xs mt-1">יום הולדת שמח, אהובתי.</p>
      </footer>
    </main>
  )
}
