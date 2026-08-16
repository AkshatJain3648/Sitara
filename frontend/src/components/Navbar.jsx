import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../mock';
import { StarDoodle } from './Doodles';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Smoothly transition to an in-page section instead of jumping to it,
  // while offsetting for the sticky header so the target isn't hidden under it.
  const handleNavClick = (e, href) => {
    if (!href || !href.startsWith('#')) return;

    const targetId = href.slice(1);
    const target = targetId ? document.getElementById(targetId) : null;
    if (!target) return;

    e.preventDefault();
    setOpen(false);

    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
    const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({ top: Math.max(targetTop, 0), behavior: prefersReducedMotion ? 'auto' : 'smooth' });

    if (window.history.pushState) {
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header ref={headerRef} className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#FBF6E9]/95 backdrop-blur-sm shadow-[0_2px_0_rgba(30,42,74,0.08)]' : 'bg-[#FBF6E9]/80'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <a href="#top" onClick={(e) => handleNavClick(e, '#top')} className="flex items-center gap-2 group">
          <span className="wiggle"><StarDoodle size={38} /></span>
          <span className="font-display text-2xl md:text-3xl text-[#1E2A4A] group-hover:tracking-wider transition-all">
            SITARA<span className="text-[#F4B6C2]">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={(e) => handleNavClick(e, l.href)}
              className="font-type text-[15px] text-[#1E2A4A] relative hover:text-[#F4B6C2] transition-colors">
              {l.label}
              <span className="absolute left-0 right-0 -bottom-1 h-[3px] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 bg-[#F4B6C2]" />
            </a>
          ))}
          <a href="#donate" onClick={(e) => handleNavClick(e, '#donate')} className="sticker-btn sticker-btn-pink">Donate</a>
        </nav>

        <button className="md:hidden p-2" aria-label="menu" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#FBF6E9] border-t-2 border-dashed border-[#1E2A4A]/20">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} onClick={(e) => handleNavClick(e, l.href)}
                className="font-type text-[#1E2A4A]">{l.label}</a>
            ))}
            <a href="#donate" onClick={(e) => handleNavClick(e, '#donate')} className="sticker-btn sticker-btn-pink w-fit">Donate</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
