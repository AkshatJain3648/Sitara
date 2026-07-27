import React, { useEffect, useRef, useState } from 'react';
import { IMPACT_STATS, TESTIMONIALS } from '../mock';
import { StarDoodle, ScribbleArrow } from './Doodles';

const StatCard = ({ stat, i }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}
      className={`paper-card relative p-8 text-center grain transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transform: `rotate(${(i % 2 === 0 ? -1.2 : 1.4)}deg)`, transitionDelay: `${i * 80}ms` }}>
      <div className="tape" style={{ background: ['rgba(247,215,116,0.85)','rgba(244,182,194,0.85)','rgba(201,182,228,0.85)','rgba(182,228,206,0.85)'][i % 4] }} />
      <div className="font-display text-4xl md:text-5xl text-[#1E2A4A]">{stat.number}</div>
      <p className="font-type text-[13px] mt-2 text-[#1E2A4A]/80">{stat.label}</p>
    </div>
  );
};

const Impact = () => {
  return (
    <section id="impact" className="relative py-24 px-6 lg:px-10 bg-notebook">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-handwrite text-3xl text-[#F4B6C2] rotate-[2deg]">receipts ♡</p>
          <h2 className="font-display text-4xl md:text-6xl text-[#1E2A4A]">
            <span className="underline-scribble">the impact so far</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {IMPACT_STATS.map((s, i) => <StatCard key={s.label} stat={s} i={i} />)}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <StarDoodle size={30} />
            <p className="font-handwrite text-3xl text-[#7A4E7E]">little notes we got</p>
            <StarDoodle size={30} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name}
                className="paper-card relative p-7 grain"
                style={{ transform: `rotate(${i % 2 === 0 ? -1.4 : 1.6}deg)` }}>
                <div className="tape" style={{ background: ['rgba(244,182,194,0.85)','rgba(247,215,116,0.85)','rgba(182,228,206,0.85)'][i] }} />
                <p className="font-handwrite text-2xl leading-tight text-[#1E2A4A] mb-4">“{t.quote}”</p>
                <div className="flex items-center gap-2">
                  <ScribbleArrow width={40} color="#F4B6C2" />
                  <span className="font-type text-[13px] text-[#1E2A4A]/80">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
