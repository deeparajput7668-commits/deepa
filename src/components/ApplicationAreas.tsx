import React, { useState } from 'react';
import { 
  Home, 
  Grid, 
  Sparkles, 
  Gem, 
  LayoutGrid, 
  Waves, 
  ArrowRight, 
  CheckCircle2,
  Wrench
} from 'lucide-react';
import { APPLICATION_AREAS } from '../data/cerastoneData';

interface ApplicationAreasProps {
  onOpenEnquiry: () => void;
}

export const ApplicationAreas: React.FC<ApplicationAreasProps> = ({ onOpenEnquiry }) => {
  const [activeAreaId, setActiveAreaId] = useState<string>(APPLICATION_AREAS[0].id);

  const iconComponents: Record<string, React.ReactNode> = {
    Home: <Home className="w-5 h-5" />,
    Grid: <Grid className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
    Gem: <Gem className="w-5 h-5" />,
    LayoutGrid: <LayoutGrid className="w-5 h-5" />,
    Waves: <Waves className="w-5 h-5" />,
  };

  const currentArea = APPLICATION_AREAS.find((a) => a.id === activeAreaId) || APPLICATION_AREAS[0];

  return (
    <section id="applications" className="py-16 sm:py-24 bg-[#F8F6F0] border-b border-[#E5DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C5A46D]">
            Versatile Surface Engineering
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#344454] tracking-tight mt-1 text-balance">
            APPLICATION AREAS
          </h2>
          <p className="mt-3 text-[#737373] text-base sm:text-lg leading-relaxed">
            Cerastone is formulated to provide uncompromising adhesion across residential, commercial, industrial, and aquatic substrates.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {APPLICATION_AREAS.map((area) => {
            const isActive = area.id === activeAreaId;
            return (
              <button
                key={area.id}
                onClick={() => setActiveAreaId(area.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#B99A62] text-white shadow-2xs'
                    : 'bg-[#FFFFFF] text-[#737373] hover:text-[#344454] hover:bg-[#FFFFFF] border border-[#E5DFD2]'
                }`}
              >
                <span>{area.short}</span>
              </button>
            );
          })}
        </div>

        {/* Active Application Detailed Showcase Card (Pure White on Warm Ivory) */}
        <div className="bg-[#FFFFFF] rounded-2xl border border-[#E5DFD2] shadow-2xs p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A46D] mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]"></span>
                <span>{currentArea.tagline}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#344454] mb-4">
                {currentArea.title}
              </h3>
              <p className="text-[#737373] text-base leading-relaxed mb-6">
                {currentArea.description}
              </p>

              {/* Substrate & Tooling Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E5DFD2]">
                  <div className="text-[11px] font-bold uppercase text-[#737373] mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>Suitable Locations</span>
                  </div>
                  <div className="text-xs text-[#344454] font-medium">
                    {currentArea.suitableFor}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E5DFD2]">
                  <div className="text-[11px] font-bold uppercase text-[#737373] mb-1 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>Recommended Notched Trowel</span>
                  </div>
                  <div className="text-xs text-[#344454] font-medium">
                    {currentArea.recommendedTrowel}
                  </div>
                </div>
              </div>

              {/* Action Button (Muted Gold) */}
              <button
                onClick={onOpenEnquiry}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#B99A62] hover:bg-[#A88B54] rounded-lg transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Enquire For This Application</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right Architectural Substrate Card */}
            <div className="lg:col-span-5 bg-[#F8F6F0] rounded-xl border border-[#E5DFD2] p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#737373] mb-3">
                  Technical Application Matrix
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center py-2 border-b border-[#E5DFD2]">
                    <span className="text-[#737373]">Bond Class</span>
                    <span className="font-bold text-[#344454]">Polymer-Modified C1TE/C2TE</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#E5DFD2]">
                    <span className="text-[#737373]">Substrate Suitability</span>
                    <span className="font-semibold text-[#344454]">Cement Screed, Plaster, Concrete</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#E5DFD2]">
                    <span className="text-[#737373]">Vertical Slip Resistance</span>
                    <span className="font-semibold text-[#344454]">&le; 0.5 mm (Zero-Slip)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#E5DFD2]">
                    <span className="text-[#737373]">Water Immersion Endurance</span>
                    <span className="font-bold text-[#344454]">100% Submersion Rated</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5DFD2] text-[11px] text-[#737373] flex items-center justify-between">
                <span>Pack: 20 KG Moisture Barrier</span>
                <span className="font-bold text-[#344454]">₹600 MRP</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Application Quick Grid Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {APPLICATION_AREAS.map((item) => {
            const isSelected = item.id === activeAreaId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveAreaId(item.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#B99A62] bg-[#FFFFFF] shadow-2xs ring-1 ring-[#B99A62]'
                    : 'border-[#E5DFD2] bg-[#FFFFFF] hover:border-[#C5A46D]'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 ${
                  isSelected ? 'bg-[#B99A62] text-white' : 'bg-[#F8F6F0] text-[#344454]'
                }`}>
                  {iconComponents[item.iconName]}
                </div>
                <div className="text-xs font-bold text-[#344454] line-clamp-1">{item.short}</div>
                <div className="text-[10px] text-[#737373] mt-0.5 line-clamp-1">{item.tagline}</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
