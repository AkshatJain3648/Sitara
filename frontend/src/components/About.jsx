import React, { useEffect, useRef, useState } from 'react';
import { Instagram, Mail, MapPin, RotateCcw } from 'lucide-react';
import { FlowerDoodle, SparkleDoodle, StarDoodle } from './Doodles';

const FOUNDERS = [
  {
    name: 'Swasti Bansal',
    role: 'Founder',
    location: 'Meerut, IN',
    image: 'https://cdn.phototourl.com/free/2026-08-22-e312e91c-bdca-4275-b817-9e57f2858f37.jpg',
    bio: 'Descriptionn/bio',
    accent: '#F7D774',
    handle: '@sitara.newdawn',
  },
  {
    name: 'Aadhya Aggarwal',
    role: 'Co-founder',
    location: 'Meerut, IN',
    image: 'https://cdn.phototourl.com/free/2026-08-22-668d37fb-53ee-462b-aa16-8d046665a3d9.jpg',
    bio: 'DESCRIPTION/bio',
    accent: '#C9B6E4',
    handle: '@sitara.newdawn',
  },
];

const FounderCard = ({ founder, index }) => {
  const [flipped, setFlipped] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggleFlip = () => setFlipped((current) => !current);

  return (
    <article className={`founder-card reveal ${flipped ? 'is-flipped' : ''}`} style={{ animationDelay: `${index * 160}ms` }}>
      <div className="paper-card founder-card-shell grain">
        <div className="tape" style={{ background: `${founder.accent}CC` }} />
        <div className="founder-visual-wrap">
          <div className="founder-visual-inner">
            <div className="founder-visual founder-visual-front">
              <div className={`founder-image-loading ${imageLoaded ? 'is-loaded' : ''}`} aria-hidden="true" />
              <img src={founder.image} alt={`${founder.name}, ${founder.role}`} className="founder-photo" onLoad={() => setImageLoaded(true)} />
              <button type="button" className="founder-flip-button" onClick={toggleFlip} aria-label={`Flip to read about ${founder.name}`}>
                <RotateCcw className="w-3 h-3" /> tap to flip
              </button>
            </div>
            <div className="founder-visual founder-visual-back" style={{ backgroundColor: founder.accent }}>
              <span className="founder-heart" aria-hidden="true">♥</span>
              <p className="font-handwrite text-2xl md:text-3xl leading-tight text-[#1E2A4A] max-w-[260px] text-center">QUOTE IF YOU WANT ANY</p>
              <button type="button" className="founder-flip-button" onClick={toggleFlip} aria-label={`Flip back to see ${founder.name}'s photo`}>
                <RotateCcw className="w-3 h-3" /> flip back
              </button>
            </div>
          </div>
        </div>

        <div className="founder-basic-info">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-handwrite text-2xl text-[#1E2A4A]">{founder.name} <span aria-hidden="true">✦</span></h3>
            <span className="font-type text-[10px] text-[#1E2A4A]/60">tap to flip</span>
          </div>
          <div className="founder-rule" />
          <div className="flex items-center gap-2 font-handwrite text-lg text-[#7A4E7E]">
            <span className="font-type text-[10px] uppercase tracking-[0.12em] bg-[#F7D774] px-3 py-1 rounded-full text-[#1E2A4A]">{founder.role}</span>
            <MapPin className="w-4 h-4" /> {founder.location}
          </div>
          {/* <blockquote className="font-handwrite text-xl leading-tight text-[#F4B6C2] border-l-2 border-[#F4B6C2] pl-4 my-4">“{founder.quote}”</blockquote> */}
          <p className="font-type text-[12px] leading-[1.8] text-[#1E2A4A]/85 mt-2 mb-[-5px]">{founder.bio}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="https://instagram.com/sitara.newdawn" target="_blank" rel="noreferrer" className="founder-contact-link"><Instagram className="w-3.5 h-3.5" /> {founder.handle}</a>
            <a href="mailto:sitara.newdawn@gmail.com" className="founder-contact-link"><Mail className="w-3.5 h-3.5" /> write to us</a>
          </div>
        </div>
      </div>
    </article>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className={`relative py-24 px-6 lg:px-10 bg-gingham-pink overflow-hidden ${visible ? 'founders-visible' : ''}`}>
      <div className="absolute top-8 left-[7%] floaty" style={{ '--r': '-8deg' }}><StarDoodle size={52} /></div>
      <div className="absolute top-12 right-[8%] wiggle"><FlowerDoodle size={54} /></div>
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-handwrite text-3xl text-[#F4B6C2] rotate-[-3deg]">meet the people behind the paint spills</p>
          <h2 className="font-display text-4xl md:text-6xl text-[#1E2A4A] mt-2"><span className="underline-scribble">about the founders</span></h2>
          <p className="font-type text-[13px] md:text-[15px] text-[#1E2A4A]/75 mt-4">two students, one shared scrapbook, and a soft spot for big dreams.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
          {FOUNDERS.map((founder, index) => <FounderCard key={founder.name} founder={founder} index={index} />)}
        </div>

        <div className="flex justify-center mt-12"><p className="font-handwrite text-2xl md:text-3xl text-[#1E2A4A] -rotate-2">the dream is bigger when we build it together <SparkleDoodle size={25} className="inline-block align-middle ml-1" /></p></div>
      </div>
    </section>
  );
};

export default About;
