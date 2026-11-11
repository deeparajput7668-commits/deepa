import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Contractor / Builder');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative py-16 sm:py-20 bg-[#F8F6F0] border-b border-[#E5DFD2] overflow-hidden">
      {/* Subtle clean grid */}
      <div className="absolute inset-0 pointer-events-none bg-ivory-grid opacity-50" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5DFD2] shadow-sm p-8 sm:p-12 text-center">
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F6F0] border border-[#E5DFD2] text-[#344454] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Cerastone Construction Bulletin</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#344454] tracking-tight max-w-2xl mx-auto text-balance">
            Stay Connected with Cerastone Technical Updates
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#737373] max-w-2xl mx-auto leading-relaxed">
            Subscribe for contractor technical guides, new formulation updates, seasonal weather application advisories, and exclusive distributor schemes.
          </p>

          {submitted ? (
            <div className="mt-8 p-6 bg-[#F8F6F0] rounded-2xl border border-[#E5DFD2] max-w-md mx-auto animate-in fade-in">
              <div className="w-10 h-10 rounded-full bg-[#FFFFFF] text-[#C5A46D] border border-[#E5DFD2] flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#344454]">
                You're Subscribed to Cerastone Updates!
              </h3>
              <p className="text-xs text-[#737373] mt-1">
                We've registered <strong>{email}</strong> ({role}). Thank you for joining the Cerastone network.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setEmail('');
                }}
                className="mt-4 text-xs font-semibold text-[#B99A62] underline hover:text-[#A88B54] cursor-pointer"
              >
                Register another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-11 pr-4 py-3 bg-[#F8F6F0] border border-[#E5DFD2] rounded-xl text-sm text-[#344454] placeholder:text-[#737373]/60 focus:outline-none focus:ring-2 focus:ring-[#B99A62] focus:bg-[#FFFFFF] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-[#B99A62] hover:bg-[#A88B54] text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Role selector chips */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
                <span className="text-[#737373] font-medium">I am an:</span>
                {['Contractor / Builder', 'Architect / Interior Designer', 'Tile Dealer / Wholesaler', 'Homeowner'].map(
                  (r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`px-2.5 py-1 rounded-lg transition-all text-xs cursor-pointer ${
                        role === r
                          ? 'bg-[#B99A62] text-white font-semibold'
                          : 'bg-[#F8F6F0] hover:bg-[#EDEBE5] border border-[#E5DFD2] text-[#737373]'
                      }`}
                    >
                      {r}
                    </button>
                  )
                )}
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#737373]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>Zero spam. Unsubscribe anytime. Directly from A S Enterprises.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
