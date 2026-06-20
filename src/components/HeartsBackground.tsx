import { useEffect, useState, useCallback } from 'react';

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  emoji: string;
}

const emojis = ['❤️', '💕', '💗', '💖', '💓', '🩷', '🌸', '✨', '💘', '🦋'];

export default function HeartsBackground() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  const generateHearts = useCallback(() => {
    const newHearts: Heart[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 12,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 15,
      opacity: Math.random() * 0.4 + 0.3,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setHearts(newHearts);
  }, []);

  useEffect(() => {
    generateHearts();
  }, [generateHearts]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
}
