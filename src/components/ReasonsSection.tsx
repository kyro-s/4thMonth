import { useEffect, useRef, useState } from 'react';

const reasons = [
  { emoji: '😊', text: 'Your beautiful smile that lights up my entire world' },
  { emoji: '🤗', text: 'The way you make me feel safe and loved' },
  { emoji: '😂', text: 'Your adorable laugh that makes my heart melt' },
  { emoji: '💪', text: 'How strong and amazing you are in everything you do' },
  { emoji: '🧠', text: 'Your brilliant mind and the way you think about things' },
  { emoji: '🫶', text: 'The warmth of your hugs that feel like home' },
  { emoji: '💝', text: 'Your kind and beautiful heart, inside and out' },
  { emoji: '✨', text: 'The way you make every ordinary day feel extraordinary' },
  { emoji: '🥰', text: 'Your cute little quirks that make you so perfectly you' },
  { emoji: '🌟', text: 'Because you are you, and that is everything to me' },
];

export default function ReasonsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-5xl inline-block animate-gentle-float">💝</span>
          <h2 className="text-3xl md:text-4xl font-bold text-rose-700 mt-4">
            10 Reasons I Love You
          </h2>
          <p className="text-rose-500 mt-2 text-lg">...and there are a million more 🌹</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-5 md:p-6 flex items-center gap-4 hover:scale-105 transition-all duration-300 cursor-default shadow-md hover:shadow-xl ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className="text-3xl md:text-4xl flex-shrink-0">{reason.emoji}</span>
              <p className="text-rose-700/80 font-medium text-sm md:text-base">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
