import React, { useState } from 'react';
import { 
  Calculator, 
  Layers, 
  ArrowRight, 
  MessageCircle, 
  Droplets,
  DollarSign
} from 'lucide-react';
import { CERASTONE_INFO } from '../data/cerastoneData';

interface TileAdhesiveCalculatorProps {
  onOpenEnquiryWithQty: (bags: number, area: number, tileType: string) => void;
}

export const TileAdhesiveCalculator: React.FC<TileAdhesiveCalculatorProps> = ({
  onOpenEnquiryWithQty,
}) => {
  const [unit, setUnit] = useState<'sqft' | 'sqm'>('sqft');
  const [areaInput, setAreaInput] = useState<number>(350);
  const [trowelType, setTrowelType] = useState<'standard' | 'medium' | 'large'>('medium');
  const [includeBuffer, setIncludeBuffer] = useState<boolean>(true);

  const coverageRates = {
    standard: {
      name: "Small Ceramic & Mosaic Tiles",
      bed: "3mm – 4mm Bed (6mm Trowel)",
      sqftPerBag: 52,
      sqmPerBag: 4.8,
    },
    medium: {
      name: "Standard Vitrified & Wall Tiles",
      bed: "5mm – 6mm Bed (8mm Trowel)",
      sqftPerBag: 38,
      sqmPerBag: 3.5,
    },
    large: {
      name: "Large Slabs & Natural Stone",
      bed: "8mm – 12mm Bed (10-12mm Trowel)",
      sqftPerBag: 26,
      sqmPerBag: 2.4,
    },
  };

  const selectedRate = coverageRates[trowelType];
  const coveragePerBag = unit === 'sqft' ? selectedRate.sqftPerBag : selectedRate.sqmPerBag;

  const rawBags = areaInput > 0 ? areaInput / coveragePerBag : 0;
  const bufferedBags = includeBuffer ? rawBags * 1.1 : rawBags;
  const totalBags = Math.ceil(bufferedBags);
  const totalWeightKg = totalBags * 20;
  const estimatedCost = totalBags * 600;
  const estimatedWaterLitres = (totalBags * 5.2).toFixed(1);

  const handleWhatsAppEnquiry = () => {
    const text = `Hi Cerastone Team, I calculated my project requirement on your website:\n- Area: ${areaInput} ${unit === 'sqft' ? 'Sq. Ft.' : 'Sq. Meters'}\n- Tile Type: ${selectedRate.name}\n- Estimated Bags: ${totalBags} bags (20 KG)\n- Estimated MRP: ₹${estimatedCost.toLocaleString('en-IN')}\nPlease share pricing and availability.`;
    window.open(`https://wa.me/919275277273?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-[#F8F6F0] border-b border-[#E5DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C5A46D]">
            Smart Project Estimator
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#344454] tracking-tight mt-1 text-balance">
            TILE ADHESIVE &amp; BAG CALCULATOR
          </h2>
          <p className="mt-3 text-[#737373] text-base sm:text-lg leading-relaxed">
            Quickly estimate how many 20 KG Cerastone bags you need for your floor or wall project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Controls Column (Pure White on Warm Ivory) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-2xl border border-[#E5DFD2] p-6 sm:p-8 shadow-2xs">
            <h3 className="text-lg font-bold text-[#344454] mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#C5A46D]" />
              <span>Project Dimensions &amp; Tile Selection</span>
            </h3>

            {/* Unit Toggle & Area Input */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#344454]">
                  Total Installation Area
                </label>
                <div className="flex items-center bg-[#F8F6F0] p-0.5 rounded-lg text-xs font-semibold border border-[#E5DFD2]">
                  <button
                    type="button"
                    onClick={() => setUnit('sqft')}
                    className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                      unit === 'sqft' ? 'bg-[#FFFFFF] text-[#344454] shadow-2xs' : 'text-[#737373] hover:text-[#344454]'
                    }`}
                  >
                    Sq. Feet (sq.ft)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUnit('sqm')}
                    className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                      unit === 'sqm' ? 'bg-[#FFFFFF] text-[#344454] shadow-2xs' : 'text-[#737373] hover:text-[#344454]'
                    }`}
                  >
                    Sq. Meters (m²)
                  </button>
                </div>
              </div>

              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="50000"
                  value={areaInput || ''}
                  onChange={(e) => setAreaInput(Math.max(0, Number(e.target.value)))}
                  className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#E5DFD2] rounded-xl text-lg font-bold text-[#344454] focus:outline-none focus:ring-2 focus:ring-[#B99A62] focus:bg-[#FFFFFF] transition-all"
                  placeholder="Enter total area..."
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#737373]">
                  {unit === 'sqft' ? 'SQ. FT.' : 'SQ. METERS'}
                </span>
              </div>

              {/* Quick Area Presets */}
              <div className="flex items-center gap-2 mt-2.5">
                <span className="text-[11px] text-[#737373]">Common sizes:</span>
                {[150, 350, 800, 1500].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAreaInput(preset)}
                    className="text-xs px-2.5 py-1 bg-[#F8F6F0] hover:bg-[#EDEBE5] text-[#344454] rounded-md transition-colors border border-[#E5DFD2] cursor-pointer"
                  >
                    {preset} {unit}
                  </button>
                ))}
              </div>
            </div>

            {/* Tile Type / Trowel Selection */}
            <div className="mb-6">
              <label className="text-xs font-bold uppercase tracking-wider text-[#344454] block mb-2">
                Select Tile Type &amp; Trowel Depth
              </label>
              <div className="space-y-2.5">
                {(Object.keys(coverageRates) as Array<keyof typeof coverageRates>).map((key) => {
                  const item = coverageRates[key];
                  const isSelected = trowelType === key;
                  return (
                    <div
                      key={key}
                      onClick={() => setTrowelType(key)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'border-[#B99A62] bg-[#F8F6F0] ring-1 ring-[#B99A62]'
                          : 'border-[#E5DFD2] hover:border-[#C5A46D] bg-[#FFFFFF]'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-[#344454]">{item.name}</div>
                        <div className="text-[11px] text-[#737373]">{item.bed}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-[#344454] tabular-nums">
                          ~{unit === 'sqft' ? `${item.sqftPerBag} sq.ft` : `${item.sqmPerBag} m²`}
                        </span>
                        <span className="text-[10px] text-[#737373] block">per 20kg bag</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Wastage Buffer Checkbox */}
            <div className="pt-4 border-t border-[#E5DFD2] flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs text-[#737373] cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeBuffer}
                  onChange={(e) => setIncludeBuffer(e.target.checked)}
                  className="w-4 h-4 rounded text-[#B99A62] focus:ring-[#B99A62] border-[#E5DFD2]"
                />
                <span>Include 10% safety buffer for cuts and uneven substrate (recommended)</span>
              </label>
            </div>
          </div>

          {/* Results Summary Card (Bright, Elegant Pure White with Champagne & Muted Gold) */}
          <div className="lg:col-span-5 bg-[#FFFFFF] rounded-2xl border border-[#E5DFD2] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5DFD2]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C5A46D]">
                  Estimated Requirement
                </span>
                <span className="text-[11px] text-[#737373]">Cerastone 20 KG Pack</span>
              </div>

              {/* Main Total Bags Counter */}
              <div className="py-6 border-b border-[#E5DFD2]">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#344454] tracking-tight tabular-nums">
                  {totalBags} <span className="text-xl sm:text-2xl font-bold text-[#737373]">Bags</span>
                </div>
                <p className="text-xs text-[#737373] mt-1">
                  Total Adhesive Weight: <strong className="text-[#344454]">{totalWeightKg} KG</strong>
                </p>
              </div>

              {/* Calculated Breakdown List */}
              <div className="py-4 space-y-3 text-xs">
                <div className="flex justify-between items-center text-[#737373]">
                  <span className="flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-[#C5A46D]" />
                    Estimated MRP (₹600/bag):
                  </span>
                  <span className="text-base font-bold text-[#344454] tabular-nums">
                    ₹{estimatedCost.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex justify-between items-center text-[#737373]">
                  <span className="flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5 text-[#C5A46D]" />
                    Clean Water Needed:
                  </span>
                  <span className="font-semibold text-[#344454] tabular-nums">
                    ~{estimatedWaterLitres} Litres
                  </span>
                </div>

                <div className="flex justify-between items-center text-[#737373]">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#C5A46D]" />
                    Trowel Coverage Profile:
                  </span>
                  <span className="font-semibold text-[#344454] truncate max-w-[140px]">
                    {selectedRate.bed.split(' ')[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions for this Calculation (Muted Gold) */}
            <div className="mt-8 pt-4 border-t border-[#E5DFD2] space-y-2.5">
              <button
                type="button"
                onClick={() => onOpenEnquiryWithQty(totalBags, areaInput, selectedRate.name)}
                className="w-full py-3 text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A88B54] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-sm"
              >
                <span>Request Quotation for {totalBags} Bags</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={handleWhatsAppEnquiry}
                className="w-full py-2.5 text-xs font-semibold text-[#344454] bg-[#F8F6F0] hover:bg-[#EDEBE5] border border-[#E5DFD2] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>Instant WhatsApp Quote ({CERASTONE_INFO.company.phone})</span>
              </button>

              <p className="text-[10px] text-[#737373] text-center pt-1">
                Bulk discounts available for contractors, builders &amp; tile dealers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
