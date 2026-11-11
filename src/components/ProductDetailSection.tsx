import React, { useState } from 'react';
import { 
  FileText, 
  Check, 
  ArrowRight,
  Maximize2,
  Sparkles
} from 'lucide-react';
import { CERASTONE_INFO } from '../data/cerastoneData';

interface ProductDetailSectionProps {
  onOpenEnquiry: () => void;
  onOpenTds: () => void;
  onOpenBagZoom: () => void;
}

export const ProductDetailSection: React.FC<ProductDetailSectionProps> = ({
  onOpenEnquiry,
  onOpenTds,
  onOpenBagZoom,
}) => {
  const [selectedColor, setSelectedColor] = useState<'Grey' | 'White' | 'Others'>('Grey');

  const colorDetails = {
    Grey: {
      title: "Grey Adhesive Formula",
      bestFor: "Standard ceramic tiles, dark vitrified tiles, porcelain floor slabs, and exterior stone cladding.",
      advantages: ["High carbon matrix for tensile toughness", "Cost-effective for large commercial flooring", "Superior initial grab"],
    },
    White: {
      title: "White Adhesive Formula",
      bestFor: "Light marble, translucent Italian onyx, glass mosaics, and light-colored porcelain tiles.",
      advantages: ["Non-staining formulation prevents shade discoloration", "Bright aesthetic backing for glass mosaics", "Purity grade cementitious binders"],
    },
    Others: {
      title: "Special Formulations (On Order)",
      bestFor: "Custom projects requiring rapid setting, high chemical resistance, or ultra-flexible bed requirements.",
      advantages: ["Customized polymer concentrations", "Direct factory dispatch from Pilkhuwa facility", "Tailored to contractor specifications"],
    },
  };

  return (
    <section id="product" className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E5DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E5DFD2]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A46D]">
              Official Product Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#344454] tracking-tight mt-1 text-balance">
              OUR PRODUCT
            </h2>
            <p className="text-base sm:text-lg text-[#737373] mt-2 font-medium">
              Cerastone Polymer Modified Cementitious Tile Adhesive
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenTds}
              className="px-4 py-2 text-xs font-semibold text-[#344454] bg-[#FFFFFF] hover:bg-[#F8F6F0] rounded-lg transition-colors flex items-center gap-2 border border-[#E5DFD2] cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Technical Data Sheet (TDS)</span>
            </button>
            <button
              onClick={onOpenEnquiry}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#B99A62] hover:bg-[#A88B54] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Bulk Pricing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Product Specification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Packaging Showcase Card (Col 5) */}
          <div className="lg:col-span-5 bg-[#F8F6F0] rounded-2xl border border-[#E5DFD2] p-6 flex flex-col items-center">
            <div className="relative w-full rounded-xl overflow-hidden bg-[#FFFFFF] border border-[#E5DFD2] shadow-2xs p-4 group">
              <img
                src={CERASTONE_INFO.bagPackagingUrl}
                alt="Cerastone 20kg Tile Adhesive Bag"
                className="w-full h-80 object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
              />
              <button
                onClick={onOpenBagZoom}
                className="absolute bottom-3 right-3 bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#344454] border border-[#E5DFD2] text-xs font-medium px-3 py-1.5 rounded-lg shadow-2xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>Zoom Both Sides</span>
              </button>
            </div>

            {/* Price & Weight Callout Box */}
            <div className="w-full mt-4 bg-[#FFFFFF] rounded-xl border border-[#E5DFD2] p-4 shadow-2xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD2]">
                <div>
                  <span className="text-[11px] text-[#737373] uppercase font-semibold">Standard Pack</span>
                  <div className="text-xl font-bold text-[#344454]">20 KG Bag</div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#737373] uppercase font-semibold">Maximum Retail Price</span>
                  <div className="text-2xl font-extrabold text-[#344454]">
                    ₹600<span className="text-xs font-normal text-[#737373]">/-</span>
                  </div>
                </div>
              </div>
              <div className="mt-2.5 flex items-center justify-between text-xs text-[#737373]">
                <span className="font-medium text-[#C5A46D]">Inclusive of all taxes</span>
                <span>Manufactured by A S Enterprises</span>
              </div>
            </div>

            {/* Quick trust stamps */}
            <div className="w-full mt-3 grid grid-cols-2 gap-2 text-center text-xs">
              <div className="p-2 bg-[#FFFFFF] rounded-lg border border-[#E5DFD2] text-[#344454] font-medium">
                ISO 9001:2015 Certified
              </div>
              <div className="p-2 bg-[#FFFFFF] rounded-lg border border-[#E5DFD2] text-[#344454] font-medium">
                Make in India Quality
              </div>
            </div>
          </div>

          {/* Details, Specifications & Colour Variants (Col 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Color Selection Selector */}
            <div className="bg-[#F8F6F0] rounded-xl border border-[#E5DFD2] p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#344454]">
                  Available Colours: Grey, White &amp; Others
                </span>
                <span className="text-xs text-[#737373]">Select variant to preview usage</span>
              </div>

              {/* Color Buttons */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {CERASTONE_INFO.product.availableColours.map((col) => {
                  const key = col.name.startsWith('Grey') ? 'Grey' : col.name.startsWith('White') ? 'White' : 'Others';
                  const isSelected = selectedColor === key;
                  return (
                    <button
                      key={col.name}
                      onClick={() => setSelectedColor(key as any)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#B99A62] bg-[#FFFFFF] shadow-2xs ring-1 ring-[#B99A62]'
                          : 'border-[#E5DFD2] bg-[#FFFFFF] hover:border-[#C5A46D]'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`w-4 h-4 rounded-full ${
                            col.border ? 'border border-[#E5DFD2]' : ''
                          }`}
                          style={{ backgroundColor: col.hex }}
                        />
                        <span className="text-xs font-bold text-[#344454]">{key}</span>
                      </div>
                      <span className="text-[11px] text-[#737373] block truncate">
                        {key === 'Grey' ? 'Standard Floor/Wall' : key === 'White' ? 'Marble & Mosaic' : 'Custom Orders'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Color Info Box */}
              <div className="bg-[#FFFFFF] rounded-lg p-3.5 border border-[#E5DFD2] text-xs">
                <div className="font-bold text-[#344454] mb-1">
                  {colorDetails[selectedColor].title}
                </div>
                <p className="text-[#737373] mb-2 leading-relaxed">
                  {colorDetails[selectedColor].bestFor}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-[#344454]">
                  {colorDetails[selectedColor].advantages.map((adv, i) => (
                    <span key={i} className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-[#C5A46D]" />
                      {adv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Specifications Table */}
            <div className="bg-[#FFFFFF] rounded-xl border border-[#E5DFD2] overflow-hidden shadow-2xs">
              <div className="px-5 py-3.5 bg-[#F8F6F0] border-b border-[#E5DFD2] flex items-center justify-between">
                <span className="text-xs font-bold text-[#344454] uppercase tracking-wider">
                  Product Specifications &amp; Properties
                </span>
                <span className="text-xs text-[#737373] font-medium">Batch Tested &amp; Verified</span>
              </div>
              <div className="divide-y divide-[#E5DFD2] text-xs sm:text-sm">
                <div className="py-2.5 px-5 flex justify-between items-center">
                  <span className="text-[#737373] font-medium">Net Weight</span>
                  <span className="font-bold text-[#344454]">20 KG per Bag</span>
                </div>
                <div className="py-2.5 px-5 flex justify-between items-center bg-[#F8F6F0]/40">
                  <span className="text-[#737373] font-medium">Available Colours</span>
                  <span className="font-semibold text-[#344454]">Grey, White &amp; Others</span>
                </div>
                <div className="py-2.5 px-5 flex justify-between items-center">
                  <span className="text-[#737373] font-medium">M.R.P.</span>
                  <span className="font-bold text-[#344454]">₹600/- (Inclusive of all taxes)</span>
                </div>
                <div className="py-2.5 px-5 flex justify-between items-start">
                  <span className="text-[#737373] font-medium">Applications</span>
                  <span className="font-semibold text-[#344454] text-right max-w-xs">
                    Ceramic, Vitrified, Mosaic, Porcelain Tiles &amp; Natural Stones
                  </span>
                </div>
                <div className="py-2.5 px-5 flex justify-between items-center bg-[#F8F6F0]/40">
                  <span className="text-[#737373] font-medium">Water Mixing Ratio</span>
                  <span className="font-semibold text-[#344454]">5.0 to 5.5 Litres per 20kg Bag</span>
                </div>
                <div className="py-2.5 px-5 flex justify-between items-center">
                  <span className="text-[#737373] font-medium">Curing Window</span>
                  <span className="font-semibold text-[#344454]">24–48 Hours</span>
                </div>
                <div className="py-2.5 px-5 flex justify-between items-center bg-[#F8F6F0]/40">
                  <span className="text-[#737373] font-medium">Manufacturer</span>
                  <span className="font-semibold text-[#344454]">A S Enterprises (Hapur, U.P.)</span>
                </div>
              </div>
            </div>

            {/* Application scope summary */}
            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E5DFD2] text-xs text-[#344454] flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-[#344454]">Architect &amp; Contractor Specification: </strong>
                Cerastone is formulated with high-tenacity redispersible polymers providing superior deformability and tensile bond strength, surpassing standard requirements for residential towers, commercial plazas, and wet area installations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
