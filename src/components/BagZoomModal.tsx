import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { CERASTONE_INFO } from '../data/cerastoneData';

interface BagZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BagZoomModal: React.FC<BagZoomModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'both' | 'front' | 'back'>('both');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/35 backdrop-blur-2xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#FFFFFF] rounded-3xl max-w-4xl w-full border border-[#E5DFD2] shadow-xl overflow-hidden my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar (Warm Ivory & Deep Slate) */}
        <div className="bg-[#F8F6F0] text-[#344454] p-4 sm:p-5 flex items-center justify-between border-b border-[#E5DFD2]">
          <div className="flex items-center gap-3">
            <img
              src={CERASTONE_INFO.logoUrl}
              alt="Cerastone Brand Logo"
              className="h-9 w-auto max-w-[50px] object-contain rounded-md border border-[#E5DFD2] bg-[#FFFFFF] p-1 shadow-2xs"
            />
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#344454]">
                Official Packaging Inspection (20 KG Bag)
              </h3>
              <p className="text-xs text-[#737373]">
                CERASTONE™ TILE ADHESIVE · Front &amp; Back Specification Details
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#737373] hover:text-[#344454] hover:bg-[#FFFFFF] border border-[#E5DFD2] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="bg-[#FFFFFF] p-2.5 border-b border-[#E5DFD2] flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6">
          <div className="flex items-center gap-1.5 text-xs font-semibold">
            <span className="text-[#737373] mr-1">View Mode:</span>
            <button
              onClick={() => setViewMode('both')}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                viewMode === 'both' ? 'bg-[#B99A62] text-white shadow-2xs' : 'bg-[#F8F6F0] text-[#344454] hover:bg-[#EDEBE5] border border-[#E5DFD2]'
              }`}
            >
              Both Bags (Dual View)
            </button>
            <button
              onClick={() => setViewMode('front')}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                viewMode === 'front' ? 'bg-[#B99A62] text-white shadow-2xs' : 'bg-[#F8F6F0] text-[#344454] hover:bg-[#EDEBE5] border border-[#E5DFD2]'
              }`}
            >
              Front Packaging
            </button>
            <button
              onClick={() => setViewMode('back')}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                viewMode === 'back' ? 'bg-[#B99A62] text-white shadow-2xs' : 'bg-[#F8F6F0] text-[#344454] hover:bg-[#EDEBE5] border border-[#E5DFD2]'
              }`}
            >
              Back Technical Specs
            </button>
          </div>

          <div className="text-xs text-[#737373] font-medium">
            MRP: <span className="font-bold text-[#344454]">₹600/-</span> (Incl. all taxes) · 20 KG Pack
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 max-h-[72vh] overflow-y-auto">
          {/* Packaging Image Box */}
          <div className="w-full bg-[#F8F6F0] rounded-2xl border border-[#E5DFD2] p-4 overflow-hidden flex items-center justify-center">
            <div className="relative max-w-2xl w-full flex items-center justify-center overflow-hidden">
              <img
                src={CERASTONE_INFO.bagPackagingUrl}
                alt="Cerastone 20kg Bag Packaging Front and Back"
                className={`max-h-[50vh] object-contain transition-all duration-300 ${
                  viewMode === 'front' ? 'scale-150 -translate-x-[25%]' : ''
                } ${
                  viewMode === 'back' ? 'scale-150 translate-x-[25%]' : ''
                }`}
              />
            </div>
          </div>

          {/* Key Packaging Details Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Front Highlights */}
            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E5DFD2]">
              <span className="font-bold text-[#344454] text-xs uppercase tracking-wider block mb-2">
                Front Bag Features
              </span>
              <ul className="space-y-1.5 text-[#737373]">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <span>For Interior &amp; Exterior Use (Wall &amp; Floor Tiles)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <span>Premium Grade · Non-Toxic &amp; Flexible</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <span>Frost and Water Resistant</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <span>ISO 9001:2015 Certified · Make In India</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <span>Net Weight: 20 KG Heavy Duty Bag</span>
                </li>
              </ul>
            </div>

            {/* Back Highlights */}
            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E5DFD2]">
              <span className="font-bold text-[#344454] text-xs uppercase tracking-wider block mb-2">
                Back Technical Specs
              </span>
              <ul className="space-y-1.5 text-[#737373]">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <span>Available Colours: Grey, White, Others</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <span>Suitable: Ceramic, Vitrified, Mosaic, Stone, Pools</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <span>5-Step Illustrated How-To-Use Guide</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <span>Curing Time: 24–48 Hours</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <span>Mfd &amp; Mkt: A S Enterprises, Pilkhuwa, Hapur (U.P.)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8F6F0] border-t border-[#E5DFD2] flex justify-between items-center text-xs">
          <span className="text-[#737373] font-medium">
            Genuine factory packaging provided by A S Enterprises
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#B99A62] hover:bg-[#A88B54] text-white rounded-lg font-semibold transition-colors cursor-pointer shadow-xs"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
