import React from 'react';

// Reusable SVG doodles - inline so they respond to color/scale

export const StarDoodle = ({ size = 40, color = '#F7D774', stroke = '#1E2A4A', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" className={className}>
    <path d="M30 4 L36 22 L55 24 L40 37 L45 56 L30 45 L15 56 L20 37 L5 24 L24 22 Z"
      fill={color} stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

export const HeartDoodle = ({ size = 36, color = '#F4B6C2', stroke = '#1E2A4A', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" className={className}>
    <path d="M30 52 C 6 36, 8 12, 22 12 C 27 12, 30 16, 30 20 C 30 16, 33 12, 38 12 C 52 12, 54 36, 30 52 Z"
      fill={color} stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

export const FlowerDoodle = ({ size = 44, color = '#F4B6C2', center = '#F7D774', stroke = '#1E2A4A', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" className={className}>
    <g stroke={stroke} strokeWidth="2" strokeLinejoin="round">
      <circle cx="30" cy="12" r="8" fill={color} />
      <circle cx="30" cy="48" r="8" fill={color} />
      <circle cx="12" cy="30" r="8" fill={color} />
      <circle cx="48" cy="30" r="8" fill={color} />
      <circle cx="30" cy="30" r="7" fill={center} />
    </g>
  </svg>
);

export const SparkleDoodle = ({ size = 28, color = '#F7D774', stroke = '#1E2A4A', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" className={className}>
    <path d="M20 2 L23 17 L38 20 L23 23 L20 38 L17 23 L2 20 L17 17 Z"
      fill={color} stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

export const CloudDoodle = ({ size = 60, color = '#EAF1F8', stroke = '#1E2A4A', className = '' }) => (
  <svg width={size} height={size * 0.62} viewBox="0 0 100 62" className={className}>
    <path d="M20 44 Q 8 44 8 34 Q 8 22 22 22 Q 22 8 40 8 Q 56 8 58 22 Q 74 22 74 34 Q 92 34 92 46 Q 92 58 78 58 L 24 58 Q 12 58 12 50 Z"
      fill={color} stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

export const SunDoodle = ({ size = 60, color = '#F7D774', stroke = '#1E2A4A', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" className={className}>
    <g stroke={stroke} strokeWidth="2.5" strokeLinecap="round">
      <circle cx="40" cy="40" r="16" fill={color} />
      {[0,45,90,135,180,225,270,315].map((deg, i) => (
        <line key={i} x1="40" y1="12" x2="40" y2="4" transform={`rotate(${deg} 40 40)`} />
      ))}
    </g>
  </svg>
);

export const ScribbleArrow = ({ width = 100, className = '', color = '#1E2A4A' }) => (
  <svg width={width} height="40" viewBox="0 0 120 40" className={className}>
    <path d="M4 20 Q 30 4 60 20 T 110 20" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
    <path d="M110 20 L 100 12 M 110 20 L 100 28" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

export const Squiggle = ({ width = 180, className = '', color = '#F4B6C2' }) => (
  <svg width={width} height="16" viewBox="0 0 200 16" className={className}>
    <path d="M2 8 Q 12 2 22 8 T 42 8 T 62 8 T 82 8 T 102 8 T 122 8 T 142 8 T 162 8 T 182 8 T 198 8"
      fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const Butterfly = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" className={className}>
    <g stroke="#1E2A4A" strokeWidth="2" strokeLinejoin="round">
      <path d="M30 30 Q 8 10 4 26 Q 2 42 30 32 Z" fill="#C9B6E4" />
      <path d="M30 30 Q 52 10 56 26 Q 58 42 30 32 Z" fill="#F4B6C2" />
      <path d="M30 30 Q 12 32 8 48 Q 20 52 30 38 Z" fill="#F7D774" />
      <path d="M30 30 Q 48 32 52 48 Q 40 52 30 38 Z" fill="#B6E4CE" />
      <line x1="30" y1="22" x2="30" y2="42" strokeWidth="2.5" />
    </g>
  </svg>
);

export const Ticket = ({ className = '' }) => (
  <svg width="140" height="60" viewBox="0 0 140 60" className={className}>
    <path d="M6 6 H 134 V 24 A 6 6 0 0 0 134 36 V 54 H 6 V 36 A 6 6 0 0 0 6 24 Z"
      fill="#FBF6E9" stroke="#1E2A4A" strokeWidth="2" />
    <line x1="70" y1="10" x2="70" y2="50" stroke="#1E2A4A" strokeWidth="1.5" strokeDasharray="4 4" />
  </svg>
);
