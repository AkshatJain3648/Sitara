import React, { useState } from 'react';
import { DONATION } from '../mock';
import { Copy, Check, Heart } from 'lucide-react';
import { StarDoodle, FlowerDoodle, HeartDoodle } from './Doodles';

const Donation = () => {
  const [copied, setCopied] = useState(false);

  const copyUpi = () => {
    navigator.clipboard.writeText(DONATION.upi);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  // Real QR image
  const QR = () => (
    <img
      src="/qr-sitara.jpg"
      alt="Sitara UPI QR"
      className="w-56 h-56 object-contain bg-white"
      draggable={false}
    />
  );

  return (
    <section id="donate" className="relative py-24 px-6 lg:px-10 bg-gingham overflow-hidden">
      <div className="absolute top-8 right-[6%] wiggle"><FlowerDoodle size={64} /></div>
      <div className="absolute bottom-16 left-[8%] floaty" style={{ '--r': '6deg' }}><HeartDoodle size={54} /></div>

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-handwrite text-3xl text-[#F4B6C2] rotate-[-2deg]">open donation</p>
          <h2 className="font-display text-4xl md:text-6xl text-[#1E2A4A]">DROP A LIL LOVE ♡</h2>
          <p className="font-type text-[15px] mt-4 max-w-xl mx-auto text-[#1E2A4A]/80">{DONATION.note}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Polaroid QR */}
          <div className="polaroid rotate-slight-l mx-auto grain relative">
            <div className="tape tape-left" style={{ background: 'rgba(247,215,116,0.8)' }} />
            <div className="bg-white p-4">
              <QR />
            </div>
            <p className="font-handwrite text-2xl text-center text-[#1E2A4A] mt-3">scan me ✨</p>
            <div className="absolute -top-6 -right-6 wiggle"><StarDoodle size={54} /></div>
          </div>

          {/* Info card */}
          <div className="paper-card p-8 md:p-10 rotate-slight-r grain relative">
            <div className="tape" style={{ background: 'rgba(244,182,194,0.8)' }} />
            <h3 className="font-serif-b font-bold text-2xl text-[#1E2A4A] mb-2">any UPI app works</h3>
            <p className="font-type text-[14px] text-[#1E2A4A]/80 mb-6">
              GPay, PhonePe, Paytm, BHIM — pick your fav.
            </p>

            <div className="flex items-center gap-2 bg-[#FBEAEF] border-2 border-dashed border-[#F4B6C2] rounded-md px-4 py-3">
              <span className="font-type text-[14px] md:text-[15px] flex-1 truncate text-[#1E2A4A]">{DONATION.upi}</span>
              <button onClick={copyUpi} className="sticker-btn !py-2 !px-3 !text-[12px]">
                {copied ? <><Check className="w-4 h-4" /> copied!</> : <><Copy className="w-4 h-4" /> copy</>}
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[100, 250, 500].map((amt) => (
                <button key={amt}
                  onClick={() => alert(`Scan the QR and send ₹${amt} ♡`)}
                  className="sticker-btn justify-center !py-3" style={{ background: amt === 250 ? '#F7D774' : '#FBF6E9' }}>
                  ₹{amt}
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 font-type text-[13px] text-[#1E2A4A]/75">
              <Heart className="w-4 h-4 mt-1 text-[#F4B6C2]" />
              <span>
                Prefer bank transfer or want an 80G receipt? DM us on Instagram — we’ll sort it in a jiffy.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
