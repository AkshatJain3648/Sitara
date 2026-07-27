import React from 'react';
import { INSTAGRAM_POSTS, IG_HANDLE } from '../mock';
import { Instagram as IgIcon, Heart, MessageCircle } from 'lucide-react';
import { SparkleDoodle, Butterfly } from './Doodles';

const InstagramFeed = () => {
  return (
    <section className="relative py-24 px-6 lg:px-10 bg-gingham-pink overflow-hidden">
      <div className="absolute top-10 left-10 wiggle"><SparkleDoodle size={36} /></div>
      <div className="absolute top-16 right-12 floaty" style={{ '--r': '10deg' }}><Butterfly size={56} /></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-handwrite text-3xl text-[#F4B6C2] rotate-[-2deg]">bts &amp; smiles</p>
          <h2 className="font-display text-4xl md:text-6xl text-[#1E2A4A]">FROM THE GRAM</h2>
          <a href="https://instagram.com/sitara.newdawn" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 font-type text-[#7A4E7E] hover:text-[#F4B6C2] transition-colors">
            <IgIcon className="w-5 h-5" /> {IG_HANDLE}
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {INSTAGRAM_POSTS.map((p, i) => (
            <a key={i} href={p.postUrl || 'https://instagram.com/sitara.newdawn'} target="_blank" rel="noreferrer"
              className="polaroid group hover:scale-[1.03] transition-transform relative overflow-hidden"
              style={{ transform: `rotate(${(i % 3 - 1) * 1.6}deg)` }}>
              <div className="tape" style={{ background: 'rgba(255,255,255,0.75)' }} />
              <div className="relative w-full aspect-square overflow-hidden bg-[#EAF1F8]">
                <img src={p.img} alt={p.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#1E2A4A]/0 group-hover:bg-[#1E2A4A]/40 transition-colors flex items-center justify-center gap-6 text-[#FBF6E9] opacity-0 group-hover:opacity-100">
                  <span className="flex items-center gap-1 font-type text-sm"><Heart className="w-4 h-4" /> {12 + i * 7}</span>
                  <span className="flex items-center gap-1 font-type text-sm"><MessageCircle className="w-4 h-4" /> {2 + i}</span>
                </div>
              </div>
              <p className="font-handwrite text-lg text-[#1E2A4A] text-center mt-2 -rotate-1 truncate px-2">{p.caption}</p>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://instagram.com/sitara.newdawn" target="_blank" rel="noreferrer" className="sticker-btn sticker-btn-pink">
            <IgIcon className="w-4 h-4" /> follow us
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
