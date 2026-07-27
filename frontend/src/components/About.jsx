import React from 'react';
import { SITARA_PROVIDES } from '../mock';
import { StarDoodle, HeartDoodle, SparkleDoodle } from './Doodles';

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 lg:px-10 bg-gingham-pink">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-handwrite text-3xl text-[#F4B6C2] rotate-[-3deg]">a lil intro</p>
          <h2 className="font-display text-4xl md:text-6xl text-[#1E2A4A] mt-2">
            <span className="underline-scribble">meet sitara</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Provides card - matches moodboard "SITARA provides" */}
          <div className="paper-card relative p-8 md:p-10 grain rotate-slight-l">
            <div className="tape tape-left" />
            <div className="absolute -top-6 -right-6 spin-slow"><StarDoodle size={62} /></div>
            <h3 className="font-display text-3xl md:text-4xl text-[#7A4E7E] text-center">SITARA</h3>
            <p className="font-handwrite text-2xl text-[#1E2A4A]/70 text-center -mt-1">provides:</p>
            <ul className="mt-6 space-y-4 font-type text-[16px] text-[#1E2A4A]">
              {SITARA_PROVIDES.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1"><HeartDoodle size={20} /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="absolute -bottom-4 -left-4 wiggle"><SparkleDoodle size={34} /></div>
          </div>

          {/* Manifesto stack */}
          <div className="space-y-6">
            <div className="paper-card p-7 rotate-slight-r relative">
              <div className="tape" style={{ background: 'rgba(201,182,228,0.75)' }} />
              <p className="font-type text-[15px] leading-[2] text-[#1E2A4A]">
                We’re a student-run collective. No fancy offices, no marketing budget — just a
                group chat that never sleeps, a shared google drive, and a stubborn belief that
                <span className="font-handwrite text-2xl text-[#F4B6C2] px-1">kids deserve better</span>.
              </p>
            </div>
            <div className="paper-card p-7 rotate-slight-l relative ml-auto md:ml-8">
              <div className="tape tape-right" style={{ background: 'rgba(247,215,116,0.75)' }} />
              <p className="font-type text-[15px] leading-[2] text-[#1E2A4A]">
                Every workshop, drive and rupee is public. We show up. We show receipts. We show
                the smiles too, obviously.
              </p>
            </div>
            <div className="paper-card p-7 rotate-slight-r relative">
              <div className="tape tape-left" style={{ background: 'rgba(182,228,206,0.75)' }} />
              <p className="font-handwrite text-2xl md:text-3xl text-[#1E2A4A] leading-tight">
                if you’ve read this far — you’re one of us now. welcome home ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
