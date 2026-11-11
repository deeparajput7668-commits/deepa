import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { WhyChooseCerastone } from './components/WhyChooseCerastone';
import { ProductDetailSection } from './components/ProductDetailSection';
import { ApplicationAreas } from './components/ApplicationAreas';
import { HowToUseGuide } from './components/HowToUseGuide';
import { TileAdhesiveCalculator } from './components/TileAdhesiveCalculator';
import { CompanyAndContact } from './components/CompanyAndContact';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { TdsModal } from './components/TdsModal';
import { BagZoomModal } from './components/BagZoomModal';
import { EnquiryModal } from './components/EnquiryModal';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isTdsModalOpen, setIsTdsModalOpen] = useState(false);
  const [isBagZoomModalOpen, setIsBagZoomModalOpen] = useState(false);

  // Preset calculator state for enquiry modal
  const [enquiryPresets, setEnquiryPresets] = useState<{
    bags?: number;
    area?: number;
    tileType?: string;
  }>({});

  const handleOpenEnquiryWithQty = (bags: number, area: number, tileType: string) => {
    setEnquiryPresets({ bags, area, tileType });
    setIsEnquiryModalOpen(true);
  };

  const handleOpenGeneralEnquiry = () => {
    setEnquiryPresets({});
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#737373] selection:bg-[#F8F6F0] selection:text-[#344454]">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenEnquiry={handleOpenGeneralEnquiry}
        onOpenTds={() => setIsTdsModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section with Rich Light Background & Dual Bag Packaging Viewer */}
        <HeroBanner
          onOpenEnquiry={handleOpenGeneralEnquiry}
          onOpenBagZoom={() => setIsBagZoomModalOpen(true)}
        />

        {/* 3. Why Choose Cerastone (6 core pillars + technical comparison table) */}
        <WhyChooseCerastone />

        {/* 4. Product Details: Cerastone Polymer Modified Cementitious Adhesive (20kg, ₹600 MRP, Grey/White/Others) */}
        <ProductDetailSection
          onOpenEnquiry={handleOpenGeneralEnquiry}
          onOpenTds={() => setIsTdsModalOpen(true)}
          onOpenBagZoom={() => setIsBagZoomModalOpen(true)}
        />

        {/* 5. Application Areas (Floors, Walls, Ceramic/Vitrified, Natural Stone, Mosaics, Swimming Pools) */}
        <ApplicationAreas onOpenEnquiry={handleOpenGeneralEnquiry} />

        {/* 6. How to Use Guide (5 steps from packaging with water ratio & instructions) */}
        <HowToUseGuide />

        {/* 7. Tile Adhesive & Bag Calculator (Instant estimates + WhatsApp enquiry) */}
        <TileAdhesiveCalculator
          onOpenEnquiryWithQty={handleOpenEnquiryWithQty}
        />

        {/* 8. About A S Enterprises & Contact Us (Helpline: 9275277273, Address, Form) */}
        <CompanyAndContact
          initialBags={enquiryPresets.bags}
          initialArea={enquiryPresets.area}
          initialType={enquiryPresets.tileType}
        />

        {/* 9. Newsletter Signup - Just Before Footer as requested */}
        <NewsletterSection />
      </main>

      {/* 10. Footer */}
      <Footer
        onOpenTds={() => setIsTdsModalOpen(true)}
        onOpenEnquiry={handleOpenGeneralEnquiry}
      />

      {/* Interactive Modals */}
      <TdsModal
        isOpen={isTdsModalOpen}
        onClose={() => setIsTdsModalOpen(false)}
      />

      <BagZoomModal
        isOpen={isBagZoomModalOpen}
        onClose={() => setIsBagZoomModalOpen(false)}
      />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        presetBags={enquiryPresets.bags}
        presetArea={enquiryPresets.area}
        presetTileType={enquiryPresets.tileType}
      />
    </div>
  );
}
