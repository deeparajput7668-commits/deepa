import React from 'react';
import { X, Printer, ShieldCheck, FileCheck } from 'lucide-react';
import { CERASTONE_INFO, TECHNICAL_SPECS } from '../data/cerastoneData';

interface TdsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TdsModal: React.FC<TdsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/30 backdrop-blur-2xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FFFFFF] rounded-2xl max-w-3xl w-full border border-[#E5DFD2] shadow-xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Warm Ivory & Deep Slate) */}
        <div className="bg-[#F8F6F0] text-[#344454] p-5 sm:p-6 flex items-center justify-between border-b border-[#E5DFD2]">
          <div className="flex items-center gap-3">
            <img
              src={CERASTONE_INFO.logoUrl}
              alt="Cerastone Brand Logo"
              className="h-9 w-auto max-w-[50px] object-contain rounded-md border border-[#E5DFD2] bg-[#FFFFFF] p-1 shadow-2xs"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold tracking-tight text-[#344454]">
                  CERASTONE™ TILE ADHESIVE
                </span>
                <span className="text-[10px] bg-[#B99A62] text-white font-bold px-1.5 py-0.5 rounded">
                  TDS
                </span>
              </div>
              <p className="text-xs text-[#737373]">
                Technical Data Sheet · Polymer-Modified Cementitious Tile Adhesive
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-[#737373] hover:text-[#344454] hover:bg-[#FFFFFF] border border-[#E5DFD2] rounded-lg transition-colors cursor-pointer"
              title="Print TDS Sheet"
            >
              <Printer className="w-4 h-4 text-[#C5A46D]" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#737373] hover:text-[#344454] hover:bg-[#FFFFFF] border border-[#E5DFD2] rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / TDS document */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto text-[#737373] text-xs sm:text-sm">
          {/* Document Header info */}
          <div className="border-b border-[#E5DFD2] pb-4 mb-6 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <div>
              <div className="text-xs text-[#737373] font-semibold uppercase">Product Description</div>
              <div className="text-sm font-bold text-[#344454]">
                Cerastone Polymer-Modified Cementitious Tile Adhesive (20 KG)
              </div>
            </div>
            <div className="text-right sm:text-right">
              <span className="inline-flex items-center gap-1 text-xs text-[#344454] font-semibold bg-[#F8F6F0] px-2.5 py-1 rounded-full border border-[#E5DFD2]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A46D]" /> ISO 9001:2015 Verified
              </span>
            </div>
          </div>

          {/* Technical Specs Table */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#344454] mb-3 flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-[#C5A46D]" />
              <span>Standard Laboratory Properties</span>
            </h4>
            <div className="border border-[#E5DFD2] rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs divide-y divide-[#E5DFD2]">
                <thead className="bg-[#F8F6F0] text-[#344454] font-bold">
                  <tr>
                    <th className="py-2.5 px-4">Parameter / Property</th>
                    <th className="py-2.5 px-4">Performance Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5DFD2] bg-[#FFFFFF]">
                  {TECHNICAL_SPECS.map((spec, index) => (
                    <tr key={index} className={index % 2 === 1 ? 'bg-[#F8F6F0]/40' : ''}>
                      <td className="py-2.5 px-4 font-medium text-[#737373]">{spec.property}</td>
                      <td className="py-2.5 px-4 font-semibold text-[#344454]">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mixing & Application Instructions */}
          <div className="mb-6 p-4 rounded-xl bg-[#F8F6F0] border border-[#E5DFD2] text-xs">
            <h5 className="font-bold text-[#344454] mb-2">Mixing &amp; Troweling Instructions</h5>
            <p className="text-[#737373] mb-2 leading-relaxed">
              Mix 1 bag (20 kg) of Cerastone with approximately 5.0 to 5.5 litres of potable clean water. Mix thoroughly with a slow speed mixer (300-400 rpm) for 3-5 minutes until a homogeneous paste is achieved. Allow to slake for 2-3 minutes, then re-stir before use.
            </p>
            <p className="text-[#344454] leading-relaxed font-semibold">
              Note: Do not add excess water. Do not attempt to re-temper stiffened adhesive with water after pot life expiration.
            </p>
          </div>

          {/* Manufacturer block */}
          <div className="p-4 rounded-xl border border-[#E5DFD2] bg-[#FFFFFF] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
            <div>
              <div className="font-bold text-[#344454]">Manufactured &amp; Marketed By:</div>
              <div className="text-[#344454] font-medium">A S Enterprises</div>
              <div className="text-[#737373]">Plot No. A, Khasra No. 484, Modinagar Road, Pilkhuwa, Hapur (U.P.), India</div>
            </div>
            <div className="shrink-0 text-right">
              <div className="text-[11px] text-[#737373]">Helpline &amp; Email:</div>
              <a href="tel:9275277273" className="font-bold text-[#344454] hover:text-[#C5A46D] block">
                +91 9275277273
              </a>
              <a href={`mailto:${CERASTONE_INFO.company.email}`} className="text-[#737373] hover:text-[#C5A46D] block mt-0.5">
                {CERASTONE_INFO.company.email}
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8F6F0] border-t border-[#E5DFD2] flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#344454] bg-[#FFFFFF] hover:bg-[#EDEBE5] border border-[#E5DFD2] rounded-lg transition-colors cursor-pointer"
          >
            Close Sheet
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#B99A62] hover:bg-[#A88B54] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Data Sheet</span>
          </button>
        </div>
      </div>
    </div>
  );
};
