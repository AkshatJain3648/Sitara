import React from 'react';
import { FUNDRAISER } from '../mock';
import { StarDoodle, FlowerDoodle, SunDoodle, Ticket, SparkleDoodle } from './Doodles';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Fundraiser = () => {
  return (
    <section id="fundraiser" className="relative py-24 px-6 lg:px-10 bg-gingham-pink overflow-hidden">
      {/* Doodles */}
      <div className="absolute top-10 left-6 floaty" style={{ '--r': '-6deg' }}><FlowerDoodle size={54} /></div>
      <div className="absolute top-24 right-10 floaty" style={{ '--r': '10deg', animationDelay: '.4s' }}><SunDoodle size={64} /></div>
      <div className="absolute bottom-16 left-[10%] wiggle"><SparkleDoodle size={38} /></div>

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-handwrite text-3xl text-[#7A4E7E] rotate-[-2deg]">save the date♡</p>
          <h2 className="font-serif-b italic text-4xl md:text-6xl text-[#7A4E7E] mt-2">
            <span className="font-display text-[#F4B6C2]">Fundraiser Collaboration with</span>
          </h2>
          <h3 className="font-display text-4xl md:text-6xl text-[#7A4E7E] tracking-wider">YANKEE DOODLES</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Left: poster-like image card */}
          <div className="paper-card relative p-4 grain rotate-slight-l">
            <div className="tape tape-left" style={{ background: 'rgba(247,215,116,0.8)' }} />
            <div className="tape tape-right" style={{ background: 'rgba(244,182,194,0.8)' }} />
            <img
              src="https://images.pexels.com/photos/29188519/pexels-photo-29188519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Tote bag painting"
              className="w-full h-[420px] object-cover rounded-sm"
            />
            <div className="absolute -bottom-6 -right-6 wiggle"><StarDoodle size={70} /></div>
          </div>

          {/* Right: details */}
          <div className="paper-card relative p-8 md:p-10 grain rotate-slight-r flex flex-col justify-between">
            <div className="tape" />
            <div>
              <div className="flex items-center gap-3 font-type text-[#1E2A4A] mb-3">
                <Calendar className="w-5 h-5" /><span>{FUNDRAISER.date}</span>
              </div>
              {/* <div className="flex items-center gap-3 font-type text-[#1E2A4A] mb-3">
                <Clock className="w-5 h-5" /><span>from {FUNDRAISER.from}</span>
              </div> */}
              <div className="flex items-center gap-3 font-type text-[#1E2A4A] mb-6">
                <MapPin className="w-5 h-5" /><span>{FUNDRAISER.locationNote}</span>
              </div>

              <div className="pink-divider my-6" />

              <p className="font-handwrite text-2xl text-[#F4B6C2] -rotate-1">tickets ♡</p>
              <div className="mt-3 grid grid-cols-2 gap-4">
                <div className="relative">
                  <Ticket className="w-full" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-type text-[11px] text-[#1E2A4A]/70">early bird</span>
                    <span className="font-display text-2xl text-[#1E2A4A]">{FUNDRAISER.earlyBird}</span>
                  </div>
                </div>
                <div className="relative">
                  <Ticket className="w-full" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-type text-[11px] text-[#1E2A4A]/70">regular</span>
                    <span className="font-display text-2xl text-[#1E2A4A]">{FUNDRAISER.regular}</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => alert('DM us on Instagram @sitara.newdawn to grab a ticket \u2661')}
              className="sticker-btn sticker-btn-pink mt-8 self-start">
              grab a ticket
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fundraiser;
