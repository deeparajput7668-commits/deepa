import React from 'react';
import { Phone, MessageCircle, MapPin, ShieldCheck, ArrowUp, FileText, Mail } from 'lucide-react';
import { CERASTONE_INFO } from '../data/cerastoneData';

interface FooterProps {
  onOpenTds: () => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTds, onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EDEBE5] text-[#737373] pt-16 pb-12 border-t border-[#E5DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E5DFD2]">
          {/* Brand Info (Col 5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={CERASTONE_INFO.logoUrl}
                alt="Cerastone Brand Logo"
                className="h-10 w-auto max-w-[58px] object-contain rounded-lg border border-[#E5DFD2] bg-[#FFFFFF] p-1 shadow-2xs"
              />
              <span className="font-extrabold text-xl tracking-tight text-[#344454]">
                CERASTONE<span className="text-xs font-bold text-[#C5A46D] align-super">™</span> TILE ADHESIVE
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#737373] leading-relaxed mb-4 max-w-sm">
              Advanced polymer-modified cementitious tile adhesive engineered for ceramic, vitrified, mosaic, porcelain tiles and natural stones.
            </p>

            <div className="text-xs font-semibold text-[#344454] italic mb-4">
              "{CERASTONE_INFO.tagline}"
            </div>

            <div className="flex items-center gap-2 text-xs text-[#737373]">
              <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
              <span>ISO 9001:2015 Certified · Make In India</span>
            </div>
          </div>

          {/* Quick Navigation Links (Col 2) */}
          <div className="lg:col-span-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#344454] block mb-4">
              Quick Links
            </span>
            <ul className="space-y-2 text-xs text-[#737373]">
              <li>
                <a href="#overview" className="hover:text-[#344454] transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#344454] transition-colors">
                  Why Cerastone
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-[#344454] transition-colors">
                  Product Details
                </a>
              </li>
              <li>
                <a href="#applications" className="hover:text-[#344454] transition-colors">
                  Application Areas
                </a>
              </li>
              <li>
                <a href="#how-to-use" className="hover:text-[#344454] transition-colors">
                  How To Use Guide
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#344454] transition-colors">
                  Bag Calculator
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenTds}
                  className="hover:text-[#344454] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3 h-3 text-[#C5A46D]" />
                  <span>Technical Data Sheet</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Manufacture Details (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#344454] block mb-4">
                Manufactured &amp; Marketed By
              </span>
              <div className="text-sm font-bold text-[#344454] mb-1">
                A S Enterprises
              </div>
              <div className="flex items-start gap-2 text-xs text-[#737373] leading-relaxed mb-4">
                <MapPin className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <span>
                  Plot No. A, Khasra No. 484, Modinagar Road, Pilkhuwa, Hapur (U.P.), India
                </span>
              </div>

              {/* Direct helpline box (Pure White on Light Beige) */}
              <div className="p-3.5 bg-[#FFFFFF] rounded-xl border border-[#E5DFD2] mb-3 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#737373] block">
                    Product &amp; Pricing Helpline
                  </span>
                  <a
                    href={`tel:${CERASTONE_INFO.company.phone}`}
                    className="text-base font-extrabold text-[#344454] hover:text-[#C5A46D] transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-[#C5A46D]" />
                    <span>{CERASTONE_INFO.company.phone}</span>
                  </a>
                  <a
                    href={`mailto:${CERASTONE_INFO.company.email}`}
                    className="text-xs font-medium text-[#737373] hover:text-[#C5A46D] transition-colors flex items-center gap-1.5 mt-1"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>{CERASTONE_INFO.company.email}</span>
                  </a>
                </div>
                <a
                  href={CERASTONE_INFO.company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-[#B99A62] hover:bg-[#A88B54] text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="text-xs text-[#737373]">
              A S Enterprises | Premium Tile Bonding Solutions
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
          <div>
            © {new Date().getFullYear()} CERASTONE™ TILE ADHESIVE. Manufactured &amp; Marketed by A S Enterprises. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>MRP: ₹600 (Incl. Taxes)</span>
            <span>·</span>
            <span>20 KG Pack</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#FFFFFF] hover:bg-[#F8F6F0] border border-[#E5DFD2] text-[#344454] transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
