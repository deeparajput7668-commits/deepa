import React from 'react';
import { 
  ShieldCheck, 
  Leaf, 
  Snowflake, 
  Droplets, 
  Layers, 
  SunMedium, 
  Check, 
  X
} from 'lucide-react';
import { KEY_BENEFITS } from '../data/cerastoneData';

export const WhyChooseCerastone: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#C5A46D]" />,
    Leaf: <Leaf className="w-5 h-5 text-[#C5A46D]" />,
    Snowflake: <Snowflake className="w-5 h-5 text-[#C5A46D]" />,
    Droplets: <Droplets className="w-5 h-5 text-[#C5A46D]" />,
    Layers: <Layers className="w-5 h-5 text-[#344454]" />,
    SunMedium: <SunMedium className="w-5 h-5 text-[#C5A46D]" />,
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#F8F6F0] border-b border-[#E5DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#C5A46D] mb-2">
            Engineered For Lasting Strength
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#344454] tracking-tight text-balance">
            Why Choose Cerastone?
          </h2>
          <p className="mt-3 text-[#737373] text-base sm:text-lg leading-relaxed">
            Modern high-density porcelain and vitrified tiles have near-zero water absorption (&lt; 0.5%). 
            Cerastone is scientifically polymer-modified to deliver exceptional mechanical interlock, shear flexibility, and enduring bonding power.
          </p>
        </div>

        {/* 6 Key Benefits Bento Grid (Pure White cards on Warm Ivory) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {KEY_BENEFITS.map((benefit, idx) => (
            <div
              key={benefit.id}
              className="bg-[#FFFFFF] rounded-xl p-6 border border-[#E5DFD2] shadow-2xs hover:shadow-sm hover:border-[#C5A46D] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F8F6F0] flex items-center justify-center border border-[#E5DFD2]">
                    {iconMap[benefit.icon]}
                  </div>
                  <span className="text-xs font-semibold text-[#344454] bg-[#F8F6F0] px-2 py-0.5 rounded border border-[#E5DFD2]">
                    {benefit.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#344454] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5DFD2] flex items-center gap-2 text-xs font-medium text-[#737373]">
                <span className="text-[#C5A46D] font-bold tabular-nums">0{idx + 1}.</span>
                <span>Certified High Performance Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison: Cerastone vs Traditional Sand-Cement Mortar */}
        <div className="bg-[#FFFFFF] rounded-2xl border border-[#E5DFD2] shadow-2xs p-6 sm:p-8">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A46D]">
              Technical Comparison
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#344454] mt-1">
              Cerastone™ Adhesive vs Traditional Sand-Cement Mortar
            </h3>
            <p className="text-xs sm:text-sm text-[#737373] mt-1">
              Why engineers and leading contractors specify polymer-modified adhesive over old site-mixed mortar.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E5DFD2] bg-[#F8F6F0]">
                  <th className="py-3 px-4 font-bold text-[#344454]">Performance Metric</th>
                  <th className="py-3 px-4 font-bold text-[#344454] bg-[#F8F6F0] border-l border-r border-[#E5DFD2]">
                    Cerastone™ Tile Adhesive
                  </th>
                  <th className="py-3 px-4 font-bold text-[#737373]">Traditional Sand-Cement Mortar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DFD2]">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#344454]">Bonding to Vitrified &amp; Porcelain</td>
                  <td className="py-3.5 px-4 font-semibold text-[#344454] bg-[#F8F6F0]/40 border-l border-r border-[#E5DFD2] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#C5A46D] shrink-0" />
                    <span>Permanent Polymer Bond (&gt;1.0 N/mm²)</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#737373] flex items-center gap-1.5">
                    <X className="w-4 h-4 text-[#B99A62] shrink-0" />
                    <span>Prone to hollow debonding</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#344454]">Water &amp; Frost Resistance</td>
                  <td className="py-3.5 px-4 font-semibold text-[#344454] bg-[#F8F6F0]/40 border-l border-r border-[#E5DFD2] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#C5A46D] shrink-0" />
                    <span>Waterproof &amp; Frost Proof</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#737373] flex items-center gap-1.5">
                    <X className="w-4 h-4 text-[#B99A62] shrink-0" />
                    <span>Porous; traps moisture and efflorescence</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#344454]">Vertical Wall Tile Non-Sag</td>
                  <td className="py-3.5 px-4 font-semibold text-[#344454] bg-[#F8F6F0]/40 border-l border-r border-[#E5DFD2] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#C5A46D] shrink-0" />
                    <span>Zero vertical slip during fixing</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#737373] flex items-center gap-1.5">
                    <X className="w-4 h-4 text-[#B99A62] shrink-0" />
                    <span>Heavy tiles slide downward</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#344454]">Thickness &amp; Bed Load</td>
                  <td className="py-3.5 px-4 font-semibold text-[#344454] bg-[#F8F6F0]/40 border-l border-r border-[#E5DFD2] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#C5A46D] shrink-0" />
                    <span>Thin bed 3mm – 6mm (reduces dead load)</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#737373] flex items-center gap-1.5">
                    <X className="w-4 h-4 text-[#B99A62] shrink-0" />
                    <span>Thick bed 15mm – 25mm (heavy load)</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#344454]">Mixing &amp; Quality Consistency</td>
                  <td className="py-3.5 px-4 font-semibold text-[#344454] bg-[#F8F6F0]/40 border-l border-r border-[#E5DFD2] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#C5A46D] shrink-0" />
                    <span>Factory premixed with controlled polymers</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#737373] flex items-center gap-1.5">
                    <X className="w-4 h-4 text-[#B99A62] shrink-0" />
                    <span>Inconsistent sand quality and manual ratios</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
