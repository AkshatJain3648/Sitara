import React from 'react';
import { PILLARS } from '../mock';
import { BookOpen, Heart, Palette } from 'lucide-react';

const iconFor = (key) => {
  const cls = 'w-6 h-6 stroke-[2.2]';
  if (key === 'book') return <BookOpen className={cls} />;
  if (key === 'flower') return <Heart className={cls} />;
  return <Palette className={cls} />;
};

const Project = () => {
  return (
    <section id="project" className="relative py-24 px-6 lg:px-10 bg-gingham">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-handwrite text-3xl text-[#F4B6C2] rotate-[2deg]">the mission</p>
          <h2 className="font-display text-4xl md:text-6xl text-[#1E2A4A] mt-2">
            PROJECT <span className="text-[#7A4E7E]">SITARA</span>
          </h2>
          <p className="font-type text-[15px] mt-4 max-w-2xl mx-auto text-[#1E2A4A]/80">
            Three pillars, one aim — build a softer, kinder ecosystem for every kid we meet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {PILLARS.map((p, i) => (
            <div key={p.id}
              className="paper-card relative p-8 pt-14 grain hover:-translate-y-2 transition-transform duration-300"
              style={{ transform: `rotate(${p.rotate}deg)` }}>
              <div className="tape" style={{ background: `${p.tapeColor}CC` }} />
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: p.tapeColor }}>
                  {iconFor(p.emoji)}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-[#1E2A4A] tracking-wide">{p.label}</h3>
              </div>
              <div className="h-[2px] w-full mb-4" style={{
                background: `repeating-linear-gradient(90deg, ${p.tapeColor} 0 8px, transparent 8px 14px)`
              }} />
              <p className="font-type text-[15px] leading-[1.9] text-[#1E2A4A]">{p.body}</p>
            </div>
          ))}
        </div>

        {/* footer note */}
        <div className="mt-16 text-center">
          <p className="font-handwrite text-3xl md:text-4xl text-[#1E2A4A]">
            we don’t gatekeep dreams. we help them grow 🌱
          </p>
        </div>
      </div>

      <div className="pink-divider mt-20" />
    </section>
  );
};

export default Project;
