import React from 'react';
import { Squiggle } from './Doodles';

const LINES = [
  'not a brand · not a trend',
  'every child, a fair start',
  'talent is everywhere · opportunity isn\u2019t',
  'made by students, for kids',
  'closing the gap · one bag at a time',
];

const Marquee = () => {
  const rendered = [...LINES, ...LINES, ...LINES];
  return (
    <div className="relative bg-[#1E2A4A] py-4 border-y-4 border-[#F4B6C2] overflow-hidden">
      <div className="flex whitespace-nowrap marquee-track">
        {rendered.map((l, i) => (
          <span key={i} className="font-display text-[#FBF6E9] text-xl md:text-2xl px-8 flex items-center gap-6">
            {l}
            <Squiggle width={60} color="#F7D774" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
