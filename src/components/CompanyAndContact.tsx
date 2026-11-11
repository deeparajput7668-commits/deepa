import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail,
  Send, 
  CheckCircle, 
  Award, 
  Clock, 
  ShieldCheck, 
  Truck
} from 'lucide-react';
import { CERASTONE_INFO } from '../data/cerastoneData';

interface CompanyAndContactProps {
  initialBags?: number;
  initialArea?: number;
  initialType?: string;
}

export const CompanyAndContact: React.FC<CompanyAndContactProps> = ({
  initialBags,
  initialArea,
  initialType,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    role: 'Contractor',
    estimatedBags: initialBags ? String(initialBags) : '',
    message: initialArea ? `Looking for quotation for ${initialArea} sq.ft project using ${initialType || 'Cerastone'}.` : '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `Hi Cerastone (A S Enterprises),\nMy Name: ${formData.name || 'Customer'}\nPhone: ${formData.phone}\nCity/State: ${formData.city || 'Not specified'}\nRole: ${formData.role}\nEstimated Bags: ${formData.estimatedBags || 'Discussion required'}\nNote: ${formData.message || 'Looking for pricing and delivery details.'}`;
    window.open(`https://wa.me/919275277273?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E5DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C5A46D]">
            Manufacturing &amp; Distribution
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#344454] tracking-tight mt-1 text-balance">
            ABOUT THE COMPANY &amp; CONTACT
          </h2>
          <p className="mt-3 text-[#737373] text-base sm:text-lg leading-relaxed">
            Manufactured and marketed by <strong className="text-[#344454]">A S Enterprises</strong> — committed to precision polymer chemistry, quality consistency, and dependable contractor supply.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Company Details & Direct Contact Cards (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* About A S Enterprises Box (Warm Ivory with Soft Beige Border) */}
            <div className="bg-[#F8F6F0] rounded-2xl border border-[#E5DFD2] p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] border border-[#E5DFD2] flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#C5A46D]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#344454]">A S Enterprises</h3>
                  <span className="text-xs text-[#737373] font-medium">
                    Manufactured &amp; Marketed by A S Enterprises
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#737373] leading-relaxed mb-6">
                A S Enterprises produces specialized high-performance tile adhesives engineered with European polymer additives. 
                Our manufacturing facility in Pilkhuwa adheres to stringent quality control standards, ensuring consistent batch strength for tiles, stones, and aquatic installations.
              </p>

              {/* Manufacturing Address */}
              <div className="p-4 bg-[#FFFFFF] rounded-xl border border-[#E5DFD2] text-xs">
                <div className="font-bold text-[#344454] uppercase tracking-wider text-[11px] mb-1.5 flex items-center gap-1.5 text-[#C5A46D]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Factory &amp; Registered Address</span>
                </div>
                <p className="text-[#344454] font-medium leading-relaxed">
                  {CERASTONE_INFO.company.address}
                </p>
                <div className="mt-2 text-[11px] text-[#737373]">
                  Modinagar Road, Pilkhuwa, District Hapur, Uttar Pradesh, India
                </div>
              </div>

              {/* Company Trust Points */}
              <div className="mt-4 pt-4 border-t border-[#E5DFD2] grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#344454]">
                  <ShieldCheck className="w-4 h-4 text-[#C5A46D] shrink-0" />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 text-[#344454]">
                  <Award className="w-4 h-4 text-[#C5A46D] shrink-0" />
                  <span>Make in India</span>
                </div>
                <div className="flex items-center gap-2 text-[#344454]">
                  <Truck className="w-4 h-4 text-[#C5A46D] shrink-0" />
                  <span>Prompt Dispatch</span>
                </div>
                <div className="flex items-center gap-2 text-[#344454]">
                  <Clock className="w-4 h-4 text-[#C5A46D] shrink-0" />
                  <span>Direct Factory Support</span>
                </div>
              </div>
            </div>

            {/* Direct Calling & WhatsApp Card (Light & Rich, No Dark Background) */}
            <div className="bg-[#FFFFFF] border border-[#E5DFD2] rounded-2xl p-6 sm:p-7 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C5A46D] mb-1">
                Direct Helpline
              </div>
              <h4 className="text-xl font-bold text-[#344454] mb-2">
                For Product, Pricing &amp; Dealership
              </h4>
              <p className="text-xs text-[#737373] mb-6 leading-relaxed">
                Connect directly with our sales desk for bulk pricing, sample bags, dealership inquiries, and technical guidance.
              </p>

              <div className="space-y-3">
                <a
                  href={`tel:${CERASTONE_INFO.company.phone}`}
                  className="w-full py-3 px-4 bg-[#B99A62] hover:bg-[#A88B54] text-white rounded-xl font-bold text-sm transition-all flex items-center justify-between shadow-xs cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Call: {CERASTONE_INFO.company.phone}</span>
                  </span>
                  <span className="text-xs font-semibold text-white/90 uppercase">Tap to Call</span>
                </a>

                <a
                  href={CERASTONE_INFO.company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#F8F6F0] hover:bg-[#EDEBE5] border border-[#E5DFD2] text-[#344454] rounded-xl font-bold text-sm transition-all flex items-center justify-between cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#C5A46D]" />
                    <span>Chat on WhatsApp</span>
                  </span>
                  <span className="text-xs font-semibold text-[#737373] uppercase">Fast Reply</span>
                </a>

                <a
                  href={`mailto:${CERASTONE_INFO.company.email}`}
                  className="w-full py-3 px-4 bg-[#FFFFFF] hover:bg-[#F8F6F0] border border-[#E5DFD2] text-[#344454] rounded-xl font-bold text-sm transition-all flex items-center justify-between cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#C5A46D]" />
                    <span>Email: {CERASTONE_INFO.company.email}</span>
                  </span>
                  <span className="text-xs font-semibold text-[#737373] uppercase">Send Mail</span>
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E5DFD2] text-[11px] text-[#737373] text-center">
                A S Enterprises | Premium Tile Bonding Solutions
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry / Dealer Form (Col 7) */}
          <div className="lg:col-span-7 bg-[#F8F6F0] rounded-2xl border border-[#E5DFD2] p-6 sm:p-8 shadow-2xs">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A46D]">
                Quick Response Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#344454] mt-1">
                Send Product Enquiry / Request Bulk Rates
              </h3>
              <p className="text-xs sm:text-sm text-[#737373] mt-1">
                Fill this brief form and our technical sales team will revert with rates and dispatch schedules.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#FFFFFF] rounded-xl border border-[#E5DFD2] text-center animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-[#F8F6F0] text-[#C5A46D] border border-[#E5DFD2] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#344454] mb-1">
                  Enquiry Received Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-[#737373] max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.name}</strong>. Our team at A S Enterprises has received your enquiry and will contact you at <strong>{formData.phone}</strong> shortly.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendToWhatsApp}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A88B54] rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send directly via WhatsApp now</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-[#344454] bg-[#FFFFFF] hover:bg-[#F8F6F0] border border-[#E5DFD2] rounded-xl transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#344454] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E5DFD2] rounded-xl text-sm text-[#344454] placeholder:text-[#737373]/60 focus:outline-none focus:ring-2 focus:ring-[#B99A62] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#344454] mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E5DFD2] rounded-xl text-sm text-[#344454] placeholder:text-[#737373]/60 focus:outline-none focus:ring-2 focus:ring-[#B99A62] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#344454] mb-1.5">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Hapur / Delhi NCR / Meerut"
                      className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E5DFD2] rounded-xl text-sm text-[#344454] placeholder:text-[#737373]/60 focus:outline-none focus:ring-2 focus:ring-[#B99A62] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#344454] mb-1.5">
                      I Am A
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E5DFD2] rounded-xl text-sm text-[#344454] focus:outline-none focus:ring-2 focus:ring-[#B99A62] transition-all cursor-pointer"
                    >
                      <option value="Contractor">Tile Contractor / Mason</option>
                      <option value="Builder">Builder / Developer</option>
                      <option value="Dealer">Tile Dealer / Distributor</option>
                      <option value="Architect">Architect / Interior Designer</option>
                      <option value="Homeowner">Individual Homeowner</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#344454] mb-1.5">
                    Estimated Requirement (20 KG Bags)
                  </label>
                  <input
                    type="number"
                    value={formData.estimatedBags}
                    onChange={(e) => setFormData({ ...formData, estimatedBags: e.target.value })}
                    placeholder="e.g. 50 bags"
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E5DFD2] rounded-xl text-sm text-[#344454] placeholder:text-[#737373]/60 focus:outline-none focus:ring-2 focus:ring-[#B99A62] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#344454] mb-1.5">
                    Project Details or Specific Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your tile type, application area, or dealership interest..."
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E5DFD2] rounded-xl text-sm text-[#344454] placeholder:text-[#737373]/60 focus:outline-none focus:ring-2 focus:ring-[#B99A62] transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 text-xs font-bold text-white bg-[#B99A62] hover:bg-[#A88B54] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Enquiry to A S Enterprises</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-[#344454] bg-[#FFFFFF] hover:bg-[#EDEBE5] border border-[#E5DFD2] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

                <p className="text-[11px] text-[#737373] pt-1 text-center">
                  Your information is kept private. We respond within a few business hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
