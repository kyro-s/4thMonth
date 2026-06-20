import { useState } from 'react';

const promises = [
  'To always make you smile, even on your hardest days 😊',
  'To be your biggest cheerleader in everything you do 📣',
  'To listen to your stories, even the ones I have heard before 👂',
  'To hold your hand through every storm and every sunshine ☀️',
  'To never go to bed without telling you I love you 💤',
  'To surprise you with little things just because 💝',
  'To grow old with you and still find you just as beautiful 👴👵',
  'To be your safe space, always and no matter what 🏡',
  'To love you more each day than the day before 📈',
  'To choose you, every single day, for the rest of my life 💍',
];

export default function PromisesSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-5xl inline-block animate-heartbeat">🤞</span>
        <h2 className="text-3xl md:text-4xl font-bold text-rose-700 mt-4">
          My Promises To You
        </h2>
        <p className="text-rose-500 mt-2 mb-8">Tap to reveal my promises 💕</p>

        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="glass rounded-full px-10 py-4 text-lg font-semibold text-rose-600 hover:bg-white/40 transition-all duration-300 hover:scale-105 shadow-lg animate-gentle-float"
          >
            💌 Open My Heart
          </button>
        ) : (
          <div className="space-y-4 mt-6">
            {promises.map((promise, index) => (
              <div
                key={index}
                className="glass rounded-xl p-4 md:p-5 text-left animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <p className="text-rose-700/80 text-sm md:text-base">{promise}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
