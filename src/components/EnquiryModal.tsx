import React, { useState } from 'react';
import { X, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { CERASTONE_INFO } from '../data/cerastoneData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetBags?: number;
  presetArea?: number;
  presetTileType?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  presetBags,
  presetArea,
  presetTileType,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [role, setRole] = useState('Contractor');
  const [bags, setBags] = useState(presetBags ? String(presetBags) : '');
  const [message, setMessage] = useState(
    presetArea
      ? `Looking for quotation for ${presetArea} sq.ft project using ${presetTileType || 'Cerastone'}.`
      : ''
  );
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = `Hi Cerastone Team,\nI would like to enquire about:\n- Name: ${name || 'Customer'}\n- Phone: ${phone}\n- Location: ${city || 'Not provided'}\n- Role: ${role}\n- Requirement: ${bags ? `${bags} bags (20 KG)` : 'Pricing & distribution'}\n- Note: ${message || 'Please send price quote.'}`;
    window.open(`https://wa.me/919275277273?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/35 backdrop-blur-2xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#FFFFFF] rounded-2xl max-w-lg w-full border border-[#E5DFD2] shadow-xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Warm Ivory & Deep Slate) */}
        <div className="bg-[#F8F6F0] text-[#344454] p-5 flex items-center justify-between border-b border-[#E5DFD2]">
          <div className="flex items-center gap-3">
            <img
              src={CERASTONE_INFO.logoUrl}
              alt="Cerastone Brand Logo"
              className="h-9 w-auto max-w-[50px] object-contain rounded-md border border-[#E5DFD2] bg-[#FFFFFF] p-1 shadow-2xs"
            />
            <div>
              <h3 className="text-base font-bold text-[#344454]">
                Request Price Quote &amp; Dealership
              </h3>
              <p className="text-xs text-[#737373]">
                CERASTONE™ TILE ADHESIVE · A S Enterprises
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#737373] hover:text-[#344454] hover:bg-[#FFFFFF] border border-[#E5DFD2] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-6 text-center animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-[#F8F6F0] text-[#C5A46D] border border-[#E5DFD2] flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#344454] mb-1">
                Thank You for Contacting Cerastone!
              </h4>
              <p className="text-xs text-[#737373] mb-6">
                Our sales desk at A S Enterprises will contact you at <strong>{phone}</strong> shortly.
              </p>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-2.5 text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A88B54] rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send direct message on WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2 text-xs font-semibold text-[#344454] bg-[#F8F6F0] hover:bg-[#EDEBE5] border border-[#E5DFD2] rounded-xl transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-[#344454] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full px-3 py-2 bg-[#F8F6F0] border border-[#E5DFD2] rounded-lg text-[#344454] text-xs focus:ring-2 focus:ring-[#B99A62] focus:bg-[#FFFFFF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold uppercase tracking-wider text-[#344454] mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit number"
                    className="w-full px-3 py-2 bg-[#F8F6F0] border border-[#E5DFD2] rounded-lg text-[#344454] text-xs focus:ring-2 focus:ring-[#B99A62] focus:bg-[#FFFFFF] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-[#344454] mb-1">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City / State"
                    className="w-full px-3 py-2 bg-[#F8F6F0] border border-[#E5DFD2] rounded-lg text-[#344454] text-xs focus:ring-2 focus:ring-[#B99A62] focus:bg-[#FFFFFF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold uppercase tracking-wider text-[#344454] mb-1">
                    Role
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3 py-2 bg-[#F8F6F0] border border-[#E5DFD2] rounded-lg text-[#344454] text-xs focus:ring-2 focus:ring-[#B99A62] focus:bg-[#FFFFFF] focus:outline-none cursor-pointer"
                  >
                    <option value="Contractor">Tile Contractor</option>
                    <option value="Builder">Builder / Developer</option>
                    <option value="Dealer">Tile Dealer / Wholesaler</option>
                    <option value="Architect">Architect / Designer</option>
                    <option value="Homeowner">Homeowner</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-[#344454] mb-1">
                  Estimated 20 KG Bags
                </label>
                <input
                  type="number"
                  value={bags}
                  onChange={(e) => setBags(e.target.value)}
                  placeholder="e.g. 50"
                  className="w-full px-3 py-2 bg-[#F8F6F0] border border-[#E5DFD2] rounded-lg text-[#344454] text-xs focus:ring-2 focus:ring-[#B99A62] focus:bg-[#FFFFFF] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-[#344454] mb-1">
                  Message / Requirement
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project or dealership enquiry..."
                  className="w-full px-3 py-2 bg-[#F8F6F0] border border-[#E5DFD2] rounded-lg text-[#344454] text-xs focus:ring-2 focus:ring-[#B99A62] focus:bg-[#FFFFFF] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-[#B99A62] hover:bg-[#A88B54] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Enquiry</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="px-4 py-2.5 bg-[#F8F6F0] hover:bg-[#EDEBE5] border border-[#E5DFD2] text-[#344454] font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>WhatsApp</span>
                </button>
              </div>

              <div className="text-[10px] text-[#737373] text-center pt-1">
                Direct phone helpline: <strong className="text-[#344454]">9275277273</strong>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
