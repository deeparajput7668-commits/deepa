import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Calculator, 
  Phone, 
  MessageCircle, 
  Maximize2, 
  CheckCircle,
  Package,
  MapPin
} from 'lucide-react';
import { CERASTONE_INFO } from '../data/cerastoneData';

interface HeroBannerProps {
  onOpenEnquiry: () => void;
  onOpenBagZoom: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenEnquiry, onOpenBagZoom }) => {
  const [activeBagFocus, setActiveBagFocus] = useState<'both' | 'front' | 'back'>('both');

  return (
    <section id="overview" className="relative overflow-hidden bg-[#FFFFFF] border-b border-[#E5DFD2]">
      {/* Subtle Warm Ivory & Soft Grid Accent */}
      <div className="absolute inset-0 pointer-events-none bg-white-subtle-grid opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-16 lg:pt-16 lg:pb-24">
        {/* Top Breadcrumb / Trust Kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#737373] mb-6">
          <span className="font-semibold text-[#344454] tracking-wider uppercase">
            Manufactured by A S Enterprises
          </span>
          <span aria-hidden="true" className="text-[#E5DFD2]">·</span>
          <span>ISO 9001:2015 Certified</span>
          <span aria-hidden="true" className="text-[#E5DFD2]">·</span>
          <span>Pilkhuwa, Hapur (U.P.), India</span>
        </div>

        {/* 2-Column Split: Content & Rich Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Subtle Ivory Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F6F0] border border-[#E5DFD2] text-[#344454] text-xs font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C5A46D]"></span>
              <span>Advanced Polymer-Modified Cementitious Technology</span>
            </div>

            {/* Main Brand Title & Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-[#344454] leading-[1.15] mb-4 text-balance">
              Build Stronger. <br className="hidden sm:inline" />
              <span className="text-[#C5A46D]">
                Build with Cerastone.
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[#344454] mb-4 max-w-2xl leading-relaxed">
              CERASTONE™ TILE ADHESIVE — Advanced Tile Bonding Solutions for Modern Construction.
            </p>

            <p className="text-sm sm:text-base text-[#737373] mb-8 max-w-2xl leading-relaxed">
              Designed for fixing <strong className="text-[#344454]">ceramic, vitrified, mosaic, porcelain tiles and natural stones</strong>. 
              Suitable for interior and exterior wall and floor applications, delivering unmatched flexibility and long-lasting bond strength for residential and commercial projects.
            </p>

            {/* Quick Feature Badges (Warm Ivory & Pure White with Soft Beige Border) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-2xl mb-8">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E5DFD2] shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#C5A46D] shrink-0" />
                <span className="text-xs font-medium text-[#344454]">Wall &amp; Floor Tiles</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E5DFD2] shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#C5A46D] shrink-0" />
                <span className="text-xs font-medium text-[#344454]">Interior &amp; Exterior</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E5DFD2] shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#C5A46D] shrink-0" />
                <span className="text-xs font-medium text-[#344454]">Frost &amp; Water Proof</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E5DFD2] shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#C5A46D] shrink-0" />
                <span className="text-xs font-medium text-[#344454]">Non-Toxic &amp; Flexible</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E5DFD2] shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#C5A46D] shrink-0" />
                <span className="text-xs font-medium text-[#344454]">20 KG Standard Pack</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E5DFD2] shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#C5A46D] shrink-0" />
                <span className="text-xs font-medium text-[#344454]">MRP ₹600 (All Taxes)</span>
              </div>
            </div>

            {/* Primary Action Buttons (Muted Gold) */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-[#B99A62] hover:bg-[#A88B54] rounded-xl transition-all shadow-xs hover:shadow-sm flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Request Price &amp; Bulk Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="#calculator"
                className="w-full sm:w-auto px-5 py-3.5 text-sm font-semibold text-[#344454] bg-[#FFFFFF] hover:bg-[#F8F6F0] border border-[#E5DFD2] rounded-xl transition-all shadow-2xs flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#C5A46D]" />
                <span>Calculate Bags Needed</span>
              </a>

              <a
                href={CERASTONE_INFO.company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-3.5 text-sm font-medium text-[#344454] bg-[#F8F6F0] hover:bg-[#FFFFFF] border border-[#E5DFD2] rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A46D]" />
                <span>WhatsApp: 9275277273</span>
              </a>
            </div>

            {/* Direct Contact Line */}
            <div className="mt-5 flex items-center gap-4 text-xs text-[#737373]">
              <span className="flex items-center gap-1.5 font-medium text-[#344454]">
                <Phone className="w-3.5 h-3.5 text-[#C5A46D]" />
                Direct Helpline: <a href="tel:9275277273" className="text-[#344454] font-bold hover:text-[#C5A46D]">9275277273</a>
              </span>
              <span>·</span>
              <span>Dealership &amp; Bulk Inquiries Welcome</span>
            </div>
          </div>

          {/* Right Column: Clean Packaging Showcase Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-[#FFFFFF] rounded-2xl border border-[#E5DFD2] shadow-sm overflow-hidden p-4 sm:p-5">
              {/* Card Header with View Switcher */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD2] mb-3">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#C5A46D]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#344454]">
                    Official 20 KG Pack
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-[#F8F6F0] p-0.5 rounded-lg text-[11px] font-medium text-[#737373] border border-[#E5DFD2]">
                  <button
                    onClick={() => setActiveBagFocus('both')}
                    className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                      activeBagFocus === 'both' ? 'bg-[#FFFFFF] text-[#344454] shadow-2xs font-semibold' : 'hover:text-[#344454]'
                    }`}
                  >
                    Dual View
                  </button>
                  <button
                    onClick={() => setActiveBagFocus('front')}
                    className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                      activeBagFocus === 'front' ? 'bg-[#FFFFFF] text-[#344454] shadow-2xs font-semibold' : 'hover:text-[#344454]'
                    }`}
                  >
                    Front
                  </button>
                  <button
                    onClick={() => setActiveBagFocus('back')}
                    className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                      activeBagFocus === 'back' ? 'bg-[#FFFFFF] text-[#344454] shadow-2xs font-semibold' : 'hover:text-[#344454]'
                    }`}
                  >
                    Back Specs
                  </button>
                </div>
              </div>

              {/* Packaging Image Frame with Optical Zoom Hotspots */}
              <div className="relative rounded-xl overflow-hidden bg-[#F8F6F0] border border-[#E5DFD2] group">
                <div className="aspect-[4/3] w-full overflow-hidden flex items-center justify-center bg-[#F8F6F0]">
                  <img
                    src={CERASTONE_INFO.bagPackagingUrl}
                    alt="Cerastone Tile Adhesive 20kg Bag Packaging"
                    className={`w-full h-full object-contain p-2 transition-all duration-300 ${
                      activeBagFocus === 'front' ? 'scale-125 -translate-x-[20%]' : ''
                    } ${
                      activeBagFocus === 'back' ? 'scale-125 translate-x-[20%]' : ''
                    }`}
                  />
                </div>

                {/* Hotspot Floating Badges */}
                <div className="absolute top-2 left-2 bg-[#FFFFFF]/90 backdrop-blur-xs text-[#344454] border border-[#E5DFD2] text-[10px] font-semibold px-2 py-1 rounded-md shadow-2xs">
                  <span>Net Weight: 20 KG</span>
                </div>
                <div className="absolute top-2 right-2 bg-[#B99A62] text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-2xs">
                  MRP ₹600/-
                </div>

                {/* Inspect Button */}
                <button
                  onClick={onOpenBagZoom}
                  className="absolute bottom-2 right-2 bg-[#FFFFFF] hover:bg-[#F8F6F0] text-[#344454] text-xs font-medium px-2.5 py-1.5 rounded-lg shadow-2xs border border-[#E5DFD2] flex items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer"
                  title="Click to zoom packaging in detail"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>Inspect Bag Details</span>
                </button>
              </div>

              {/* Bag Key Metrics Footnote */}
              <div className="mt-4 pt-3 border-t border-[#E5DFD2] grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-[#F8F6F0] rounded-lg border border-[#E5DFD2]">
                  <span className="block text-[10px] text-[#737373] uppercase font-medium">Certification</span>
                  <span className="text-xs font-bold text-[#344454]">ISO 9001:2015</span>
                </div>
                <div className="p-2 bg-[#F8F6F0] rounded-lg border border-[#E5DFD2]">
                  <span className="block text-[10px] text-[#737373] uppercase font-medium">Origin</span>
                  <span className="text-xs font-bold text-[#344454]">Make In India</span>
                </div>
                <div className="p-2 bg-[#F8F6F0] rounded-lg border border-[#E5DFD2]">
                  <span className="block text-[10px] text-[#737373] uppercase font-medium">Colours</span>
                  <span className="text-xs font-bold text-[#344454]">Grey &amp; White</span>
                </div>
              </div>

              {/* Manufacturer Footnote */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-[#737373] px-1">
                <span className="flex items-center gap-1 text-[#344454] font-medium">
                  <MapPin className="w-3 h-3 text-[#C5A46D]" />
                  A S Enterprises · Pilkhuwa, Hapur
                </span>
                <span className="font-semibold text-[#B99A62]">Authentic Factory Supply</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column KPI Trust Strip below hero */}
        <div className="mt-12 pt-8 border-t border-[#E5DFD2] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A46D]">Tensile Adhesion</span>
            <p className="text-2xl font-bold text-[#344454] mt-1 tabular-nums">&gt; 1.0 N/mm²</p>
            <p className="text-xs text-[#737373] mt-0.5">High-strength polymer bond</p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A46D]">Standard Pack</span>
            <p className="text-2xl font-bold text-[#344454] mt-1 tabular-nums">20 KG Bag</p>
            <p className="text-xs text-[#737373] mt-0.5">Moisture-resistant bag</p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A46D]">Affordable Pricing</span>
            <p className="text-2xl font-bold text-[#344454] mt-1 tabular-nums">₹600 MRP</p>
            <p className="text-xs text-[#737373] mt-0.5">Inclusive of all taxes</p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A46D]">Curing Window</span>
            <p className="text-2xl font-bold text-[#344454] mt-1 tabular-nums">24–48 Hours</p>
            <p className="text-xs text-[#737373] mt-0.5">Ready for grouting &amp; foot traffic</p>
          </div>
        </div>
      </div>
    </section>
  );
};
