import React, { useState } from 'react';
import { 
  Brush, 
  FlaskConical, 
  SquareDashed, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Droplet,
  Info
} from 'lucide-react';
import { HOW_TO_USE_STEPS } from '../data/cerastoneData';

export const HowToUseGuide: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const stepIcons = [
    <Brush className="w-5 h-5 text-[#C5A46D]" />,
    <FlaskConical className="w-5 h-5 text-[#C5A46D]" />,
    <SquareDashed className="w-5 h-5 text-[#C5A46D]" />,
    <CheckCircle2 className="w-5 h-5 text-[#344454]" />,
    <Clock className="w-5 h-5 text-[#C5A46D]" />,
  ];

  return (
    <section id="how-to-use" className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E5DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C5A46D]">
            Official Application Protocol
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#344454] tracking-tight mt-1 text-balance">
            HOW TO USE CERASTONE™
          </h2>
          <p className="mt-3 text-[#737373] text-base sm:text-lg leading-relaxed">
            Follow these 5 standardized steps printed directly on each 20 KG bag to ensure maximum tensile bond strength and zero hollow spots.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {HOW_TO_USE_STEPS.map((stepItem, index) => {
            const isCurrent = selectedStep === stepItem.step;
            return (
              <div
                key={stepItem.step}
                onClick={() => setSelectedStep(stepItem.step)}
                className={`relative rounded-xl p-5 border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? 'border-[#B99A62] bg-[#F8F6F0] shadow-2xs ring-1 ring-[#B99A62]'
                    : 'border-[#E5DFD2] bg-[#FFFFFF] hover:border-[#C5A46D]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-full bg-[#B99A62] text-white text-xs font-bold flex items-center justify-center">
                      {stepItem.step}
                    </span>
                    <div className="p-1.5 rounded-md bg-[#F8F6F0]">
                      {stepIcons[index]}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-[#344454] mb-1.5">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-[#737373] leading-relaxed line-clamp-3">
                    {stepItem.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5DFD2] text-[11px] font-semibold text-[#C5A46D] flex items-center gap-1">
                  <span>Step {stepItem.step} Guide</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Step Deep Dive Box (Warm Ivory with Soft Beige Border) */}
        {(() => {
          const activeStepData = HOW_TO_USE_STEPS.find((s) => s.step === selectedStep) || HOW_TO_USE_STEPS[0];
          return (
            <div className="bg-[#F8F6F0] rounded-2xl border border-[#E5DFD2] p-6 sm:p-8 mb-12 shadow-2xs">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A46D] mb-1">
                    <span>Detailed Technical Guideline · Step 0{activeStepData.step}</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#344454] mb-3">
                    {activeStepData.title}
                  </h4>
                  <p className="text-[#737373] text-sm sm:text-base leading-relaxed max-w-3xl mb-4">
                    {activeStepData.detail}
                  </p>
                  <div className="p-3.5 bg-[#FFFFFF] rounded-xl border border-[#E5DFD2] text-xs text-[#344454] flex items-start gap-2.5 max-w-2xl">
                    <Info className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-[#344454]">Pro Masonry Tip: </strong>
                      <span className="text-[#737373]">{activeStepData.tip}</span>
                    </div>
                  </div>
                </div>

                {/* Mixing & Curing Quick Reference */}
                <div className="bg-[#FFFFFF] rounded-xl border border-[#E5DFD2] p-4 shrink-0 w-full md:w-72 text-xs">
                  <div className="font-bold text-[#344454] mb-2 border-b border-[#E5DFD2] pb-2 flex items-center gap-1.5">
                    <Droplet className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>Mixing &amp; Curing Data</span>
                  </div>
                  <div className="space-y-2 text-[#737373]">
                    <div className="flex justify-between">
                      <span>Water Ratio:</span>
                      <strong className="text-[#344454]">5 – 5.5 Litres / 20kg</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Pot Life:</span>
                      <strong className="text-[#344454]">2 – 3 Hours</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Open Time:</span>
                      <strong className="text-[#344454]">20 – 25 Minutes</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Curing Time:</span>
                      <strong className="text-[#344454]">24 – 48 Hours</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Official Packaging Notes & Warnings Strip */}
        <div className="bg-[#F8F6F0] rounded-2xl border border-[#E5DFD2] p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] flex items-center justify-center shrink-0 border border-[#E5DFD2]">
              <AlertTriangle className="w-5 h-5 text-[#C5A46D]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#344454] mb-1">
                Official Instructions &amp; Packaging Notes
              </h4>
              <p className="text-xs sm:text-sm text-[#737373] leading-relaxed mb-3">
                Always follow the product instructions for mixing, application, and curing to achieve certified warranty performance.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#344454] font-medium">
                <li className="flex items-center gap-2 bg-[#FFFFFF] px-3 py-2 rounded-lg border border-[#E5DFD2]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]"></span>
                  <span>Use clean water for mixing.</span>
                </li>
                <li className="flex items-center gap-2 bg-[#FFFFFF] px-3 py-2 rounded-lg border border-[#E5DFD2]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]"></span>
                  <span>Do not add extra water after mixing.</span>
                </li>
                <li className="flex items-center gap-2 bg-[#FFFFFF] px-3 py-2 rounded-lg border border-[#E5DFD2]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]"></span>
                  <span>Best results when used as per instructions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
