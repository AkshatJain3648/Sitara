import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import { StarDoodle, HeartDoodle, SparkleDoodle } from './Doodles';
import { IG_HANDLE } from '../mock';

const Footer = () => {
  return (
    <footer className="relative bg-[#1E2A4A] text-[#FBF6E9] py-16 px-6 lg:px-10 overflow-hidden">
      {/* Doodles */}
      <div className="absolute top-6 left-8 opacity-90"><StarDoodle size={44} color="#F7D774" stroke="#FBF6E9" /></div>
      <div className="absolute top-10 right-10 opacity-90"><SparkleDoodle size={30} color="#F4B6C2" stroke="#FBF6E9" /></div>
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-70"><HeartDoodle size={36} color="#F4B6C2" stroke="#FBF6E9" /></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <p className="font-handwrite text-3xl md:text-4xl mb-2">we don’t gatekeep dreams.</p>
        <p className="font-display text-3xl md:text-5xl text-[#F7D774] mb-8">WE HELP THEM GROW.</p>

        <a href="https://instagram.com/sitara.newdawn" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 font-type text-[#F4B6C2] hover:text-[#F7D774] transition-colors text-lg">
          <Instagram className="w-5 h-5" /> Instagram: {IG_HANDLE}
        </a>

        <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
          <a href="mailto:hello@sitara.newdawn" className="inline-flex items-center gap-2 font-type text-[#FBF6E9]/70 hover:text-[#FBF6E9] transition-colors">
            <Mail className="w-4 h-4" /> hello@sitara.newdawn
          </a>
        </div>

        <div className="my-10 h-[2px] max-w-md mx-auto" style={{
          background: 'repeating-linear-gradient(90deg, #F4B6C2 0 12px, transparent 12px 22px)'
        }} />

        <p className="font-type text-[13px] text-[#FBF6E9]/60">
          © {new Date().getFullYear()} Sitara. a lil student thing. built with paint, tape &amp; a lot of caffeine.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
