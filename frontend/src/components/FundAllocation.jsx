import React from 'react';
import { FUND_ALLOCATIONS } from '../mock';
import { Utensils, Sparkles, Lightbulb } from 'lucide-react';
import { StarDoodle } from './Doodles';

const icons = [Utensils, Sparkles, Lightbulb];

const FundAllocation = () => {
  return (
    <section className="relative py-24 px-6 lg:px-10 bg-notebook">
      {/* stars on top corners */}
      <div className="absolute top-8 left-8 wiggle"><StarDoodle size={40} /></div>
      <div className="absolute top-8 right-8 wiggle" style={{ animationDelay: '.6s' }}><StarDoodle size={40} /></div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-handwrite text-3xl text-[#7A4E7E] rotate-[-2deg]">where your ₹ goes</p>
          <h2 className="font-serif-b text-3xl md:text-5xl font-black text-[#1E2A4A] mt-2">
            Fund allocations for <br />
            <span className="italic">Project Sitara</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FUND_ALLOCATIONS.map((f, i) => {
            const Icon = icons[i] || Sparkles;
            return (
              <div key={f.title}
                className="paper-card relative p-8 text-center grain hover:-translate-y-2 hover:rotate-0 transition-transform"
                style={{ transform: `rotate(${i % 2 === 0 ? -1.2 : 1.4}deg)` }}>
                <div className="tape" style={{ background: `${f.color}CC` }} />
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ background: f.color }}>
                  <Icon className="w-7 h-7 text-[#1E2A4A]" />
                </div>
                <h3 className="font-serif-b font-bold text-lg text-[#1E2A4A] mb-3">{f.title}</h3>
                <p className="font-type text-[14px] leading-[1.9] text-[#1E2A4A]/85">{f.body}</p>
              </div>
            );
          })}
        </div>

        <p className="font-handwrite text-center text-2xl md:text-3xl italic text-[#1E2A4A] mt-14">
          your contribution nourishes lives and futures.
        </p>
      </div>
    </section>
  );
};

export default FundAllocation;
