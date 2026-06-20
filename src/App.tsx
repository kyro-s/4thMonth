import HeartsBackground from './components/HeartsBackground';
import CountdownTimer from './components/CountdownTimer';
import LoveLetter from './components/LoveLetter';
import Timeline from './components/Timeline';
import ReasonsSection from './components/ReasonsSection';
import PromisesSection from './components/PromisesSection';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-rose-50 via-pink-100 to-rose-200 z-[-2]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(244,143,177,0.3),transparent_70%)] z-[-1]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(248,187,208,0.4),transparent_70%)] z-[-1]" />

      {/* Floating hearts */}
      <HeartsBackground />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <div className="text-center space-y-6">
          {/* Heart animation */}
          <div className="animate-heartbeat inline-block mb-4">
            <span className="text-7xl md:text-8xl">💕</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-rose-600 text-shadow leading-tight">
            Happy 4th
            <br />
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
              Monthsary
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-rose-500/80 font-light max-w-lg mx-auto leading-relaxed">
            4 months of loving you, and it only gets better every day ✨
          </p>

          <div className="pt-4">
            <span className="text-rose-400 animate-bounce inline-block">👇</span>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="relative z-10">
        <div className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 py-4">
          <CountdownTimer />
        </div>
      </section>

      {/* Love Letter */}
      <LoveLetter />

      {/* Timeline */}
      <div className="bg-gradient-to-b from-transparent via-rose-100/50 to-transparent">
        <Timeline />
      </div>

      {/* Reasons Section */}
      <ReasonsSection />

      {/* Promises Section */}
      <div className="bg-gradient-to-b from-transparent via-rose-100/50 to-transparent">
        <PromisesSection />
      </div>

      {/* Footer / Closing */}
      <footer className="py-20 px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-6xl animate-gentle-float inline-block">💗</div>
          <h2 className="text-3xl md:text-5xl font-bold text-rose-600">
            I Love You More Than Words
          </h2>
          <p className="text-lg text-rose-500/80 leading-relaxed max-w-md mx-auto">
            Thank you for being the best thing that ever happened to me. 
            Here's to 4 months, and to every beautiful month that comes after.
          </p>

          <div className="pt-8 space-y-4">
            <p className="text-2xl text-rose-400 font-light tracking-widest">
              June 21, 2025
            </p>
            <div className="flex justify-center gap-2 text-3xl">
              <span className="animate-pulse-slow" style={{ animationDelay: '0s' }}>❤️</span>
              <span className="animate-pulse-slow" style={{ animationDelay: '0.2s' }}>🧡</span>
              <span className="animate-pulse-slow" style={{ animationDelay: '0.4s' }}>💛</span>
              <span className="animate-pulse-slow" style={{ animationDelay: '0.6s' }}>💚</span>
              <span className="animate-pulse-slow" style={{ animationDelay: '0.8s' }}>💙</span>
              <span className="animate-pulse-slow" style={{ animationDelay: '1.0s' }}>💜</span>
              <span className="animate-pulse-slow" style={{ animationDelay: '1.2s' }}>🩷</span>
            </div>
            <p className="text-rose-300 text-sm mt-4">
              Made with all my love, just for you 💕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
