import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';
import { CERASTONE_INFO } from '../data/cerastoneData';

interface NavbarProps {
  onOpenEnquiry: () => void;
  onOpenTds: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onOpenTds }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Why Cerastone', href: '#why-us' },
    { name: 'Product Specs', href: '#product' },
    { name: 'Applications', href: '#applications' },
    { name: 'How to Use', href: '#how-to-use' },
    { name: 'Bag Calculator', href: '#calculator' },
    { name: 'About & Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E5DFD2] transition-all">
      {/* Top Utility Strip (Warm Ivory & Soft Grey with Champagne Gold accents) */}
      <div className="bg-[#F8F6F0] text-[#737373] text-xs py-1.5 px-4 sm:px-6 border-b border-[#E5DFD2]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#344454] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A46D]" /> ISO 9001:2015 Certified
            </span>
            <span className="text-[#E5DFD2]">|</span>
            <span className="text-[#737373]">Manufactured by A S Enterprises</span>
            <span className="hidden md:inline text-[#E5DFD2]">|</span>
            <span className="hidden md:inline text-[#737373]">Pilkhuwa, Hapur (U.P.)</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${CERASTONE_INFO.company.email}`}
              className="hidden lg:flex items-center gap-1.5 text-[#344454] hover:text-[#C5A46D] transition-colors font-medium whitespace-nowrap"
            >
              <Mail className="w-3 h-3 text-[#C5A46D]" />
              <span>{CERASTONE_INFO.company.email}</span>
            </a>
            <a
              href={`tel:${CERASTONE_INFO.company.phone}`}
              className="flex items-center gap-1.5 text-[#344454] hover:text-[#C5A46D] transition-colors font-medium whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#C5A46D]" />
              <span>Call: {CERASTONE_INFO.company.phone}</span>
            </a>
            <a
              href={CERASTONE_INFO.company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-[#344454] hover:text-[#C5A46D] transition-colors font-medium whitespace-nowrap"
            >
              <MessageCircle className="w-3 h-3 text-[#C5A46D]" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Top Corner Logo & Brand Wordmark */}
        <a href="#overview" className="flex items-center gap-3 shrink-0 group">
          <img
            src={CERASTONE_INFO.logoUrl}
            alt="Cerastone Brand Logo"
            className="h-10 w-auto max-w-[58px] object-contain rounded-lg border border-[#E5DFD2] bg-[#FFFFFF] p-1 shadow-2xs group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-[#344454] group-hover:text-[#C5A46D] transition-colors">
                CERASTONE<span className="text-xs font-semibold text-[#C5A46D] align-super">™</span> TILE ADHESIVE
              </span>
            </div>
            <span className="text-[10px] text-[#737373] tracking-normal hidden md:inline">
              Build Stronger. Build with Cerastone.
            </span>
          </div>
        </a>

        {/* Zone 2: Nav Links (Soft Grey with subtle Champagne Gold hover) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#737373]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#344454] hover:underline decoration-[#C5A46D] underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenTds}
            className="text-[#344454] hover:text-[#C5A46D] transition-colors text-xs font-semibold uppercase tracking-wider border border-[#E5DFD2] rounded px-2.5 py-1 whitespace-nowrap hover:bg-[#F8F6F0]"
          >
            TDS Sheet
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action (Muted Gold) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenEnquiry}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#B99A62] hover:bg-[#A88B54] rounded-lg transition-all shadow-xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer hover:shadow-sm"
          >
            <span>Get Price Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenEnquiry}
            className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-[#B99A62] hover:bg-[#A88B54] rounded-md"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#344454] hover:bg-[#F8F6F0] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5DFD2] bg-[#FFFFFF] px-4 pt-3 pb-6 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-[#344454] font-medium hover:bg-[#F8F6F0] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTds();
              }}
              className="text-left px-3 py-2 text-[#344454] font-medium hover:bg-[#F8F6F0] rounded-md transition-colors flex items-center justify-between"
            >
              <span>Technical Data Sheet (TDS)</span>
              <span className="text-xs bg-[#F8F6F0] border border-[#E5DFD2] px-2 py-0.5 rounded text-[#344454]">
                PDF View
              </span>
            </button>
            <div className="pt-3 border-t border-[#E5DFD2] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#B99A62] hover:bg-[#A88B54] rounded-lg shadow-sm"
              >
                Request Price Quote &amp; Dealership
              </button>
              <a
                href={`tel:${CERASTONE_INFO.company.phone}`}
                className="w-full py-2 text-center text-sm font-medium text-[#344454] bg-[#F8F6F0] rounded-lg border border-[#E5DFD2] flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C5A46D]" />
                <span>Call {CERASTONE_INFO.company.phone}</span>
              </a>
              <a
                href={`mailto:${CERASTONE_INFO.company.email}`}
                className="w-full py-2 text-center text-sm font-medium text-[#344454] bg-[#F8F6F0] rounded-lg border border-[#E5DFD2] flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#C5A46D]" />
                <span>{CERASTONE_INFO.company.email}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
