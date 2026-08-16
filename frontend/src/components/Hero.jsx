import React from 'react';
import { StarDoodle, SparkleDoodle, HeartDoodle, FlowerDoodle, CloudDoodle, ScribbleArrow } from './Doodles';

const Hero = () => {
  return (
    <section id="top" className="relative pt-14 pb-24 px-6 lg:px-10">
      {/* floating doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-[6%] floaty" style={{ '--r': '-8deg' }}><StarDoodle size={54} /></div>
        <div className="absolute top-24 right-[8%] floaty" style={{ '--r': '12deg', animationDelay: '.6s' }}><FlowerDoodle size={62} /></div>
        <div className="absolute top-1/2 left-[3%] floaty" style={{ '--r': '4deg', animationDelay: '1.2s' }}><HeartDoodle size={44} /></div>
        <div className="absolute bottom-16 right-[5%] floaty" style={{ '--r': '-6deg', animationDelay: '.9s' }}><SparkleDoodle size={40} /></div>
        <div className="absolute top-40 left-[42%] opacity-60"><CloudDoodle size={90} /></div>
        <div className="absolute bottom-20 left-[20%] opacity-70"><CloudDoodle size={70} /></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="paper-card relative px-8 md:px-16 py-16 md:py-24 grain"
             style={{ borderRadius: '6px', transform: 'rotate(-0.4deg)' }}>
          <div className="tape" />
          <div className="tape tape-left" style={{ background: 'rgba(244,182,194,0.75)' }} />
          <div className="tape tape-right" style={{ background: 'rgba(201,182,228,0.75)' }} />

          {/* corner star sticker */}
          <div className="absolute -top-6 -right-4 wiggle"><StarDoodle size={70} /></div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-center hero-title reveal">
            HEY, WE’RE SITARA
          </h1>

          <p className="mt-6 text-center font-serif-b italic text-[#F4B6C2] text-xl md:text-2xl tracking-wide reveal" style={{ animationDelay: '.2s' }}>
            not a brand. not a trend.
          </p>

          <div className="flex justify-center my-6">
            <ScribbleArrow width={140} color="#1E2A4A" className="opacity-40" />
          </div>

          <p className="font-type text-center text-[15px] md:text-[17px] leading-[2] max-w-2xl mx-auto text-[#1E2A4A] reveal" style={{ animationDelay: '.35s' }}>
            Our team has initiated a project called Sitara, aimed at supporting underprivileged communities. Through this initiative, we plan to organize workshops and outreach activities to provide essential support to those in need. These efforts will include distributing nutritious food, stationery for educational support, sanitary pads for menstrual hygiene, and other basic necessities.
In addition, we will also distribute eco-friendly products to encourage sustainable living and reduce environmental waste. By promoting environmentally responsible alternatives, we aim to raise awareness about sustainability while meeting everyday needs.
We also welcome donations to support this initiative. If you choose to contribute financially, we kindly request that you share a screenshot of the transaction for record-keeping and transparency purposes.
– Swasti Bansal (founder)
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 reveal" style={{ animationDelay: '.5s' }}>
            <a href="#project" className="sticker-btn">what we do</a>
            <a href="#donate" className="sticker-btn sticker-btn-pink">donate ♡</a>
            <a href="#fundraiser" className="sticker-btn" style={{ background: '#C9B6E4' }}>next event</a>
          </div>
        </div>

        {/* handwritten note under card */}
        <div className="mt-8 flex justify-center">
          <p className="font-handwrite text-2xl md:text-3xl text-[#1E2A4A] -rotate-2">
            ✨ made with love, tea &amp; a lot of paint spills
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
