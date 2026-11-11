export interface ProductSpec {
  property: string;
  value: string;
  note?: string;
}

export const CERASTONE_INFO = {
  brand: "CERASTONE™ TILE ADHESIVE",
  tagline: "Build Stronger. Build with Cerastone.",
  subheading: "Advanced Tile Bonding Solutions for Modern Construction",
  description:
    "Cerastone Tile Adhesive is a polymer-modified cementitious adhesive designed for fixing ceramic, vitrified, mosaic, porcelain tiles and natural stones. Suitable for interior and exterior wall and floor applications, Cerastone offers a flexible and reliable tile-bonding solution for residential and commercial construction projects.",
  company: {
    name: "A S Enterprises",
    role: "Manufactured & Marketed by A S Enterprises",
    address: "Plot No. A, Khasra No. 484, Modinagar Road, Pilkhuwa, Hapur (U.P.), India",
    phone: "9275277273",
    displayPhone: "+91 9275277273",
    email: "indiacerastone@gmail.com",
    whatsappUrl: "https://wa.me/919275277273?text=Hi%20Cerastone%20Team,%20I%20am%20interested%20in%20Cerastone%20Tile%20Adhesive%20pricing%20and%20dealership.",
  },
  product: {
    title: "Cerastone Polymer Modified Cementitious Tile Adhesive",
    netWeight: "20 KG",
    mrp: "₹600",
    mrpInclusive: "inclusive of all taxes",
    availableColours: [
      { name: "Grey", hex: "#78716C", desc: "Ideal for dark ceramic, vitrified & heavy exterior tiles" },
      { name: "White", hex: "#F5F5F4", border: true, desc: "Perfect for light marbles, translucent mosaics & glass tiles" },
      { name: "Others (Custom on Order)", hex: "#D6D3D1", desc: "Custom formulations available for bulk commercial orders" },
    ],
    certifications: ["ISO 9001:2015 Certified", "Make In India", "IS 15477 Type 2 Compliant"],
    applications: "Ceramic, Vitrified, Mosaic, Porcelain Tiles & Natural Stones",
  },
  logoUrl: "/assets/aistudio/WhatsApp_Image_2026-11-09_at_18.18.33_e465d809.jpeg",
  bagPackagingUrl: "/assets/aistudio/WhatsApp_Image_2026-11-03_at_19.00.57__1__8bc7f57a.jpeg",
};

export const KEY_BENEFITS = [
  {
    id: "premium-grade",
    title: "Premium Grade Quality",
    description: "High polymer content ensures superior tensile bond strength and crack resistance under heavy structural load.",
    badge: "Industrial Grade",
    icon: "ShieldCheck",
  },
  {
    id: "non-toxic",
    title: "Non-Toxic & Flexible",
    description: "Eco-friendly, low VOC composition with polymer flexibility that easily absorbs thermal expansion and substrate vibrations.",
    badge: "Eco-Safe",
    icon: "Leaf",
  },
  {
    id: "frost-resistant",
    title: "Frost Resistant",
    description: "Engineered to withstand freeze-thaw cycles without debonding, cracking, or hollow sounding tiles.",
    badge: "All-Weather",
    icon: "Snowflake",
  },
  {
    id: "water-resistant",
    title: "Water Resistant",
    description: "Exceptional resistance to water ingress, moisture migration, and efflorescence in wet areas and pools.",
    badge: "Hydrophobic",
    icon: "Droplets",
  },
  {
    id: "wall-floor",
    title: "Suitable for Wall & Floor",
    description: "Non-sag and zero-slip formula designed specifically for both vertical wall cladding and high-traffic floors.",
    badge: "Dual Application",
    icon: "Layers",
  },
  {
    id: "interior-exterior",
    title: "Interior & Exterior Use",
    description: "Built tough to withstand direct sunlight, rain, humidity, temperature shifts, and extreme climate changes.",
    badge: "Versatile",
    icon: "SunMedium",
  },
];

export const APPLICATION_AREAS = [
  {
    id: "interior-exterior-floors",
    title: "Interior and Exterior Floors",
    short: "Flooring",
    tagline: "High-Traffic Commercial & Residential Floors",
    description: "Provides strong impact resistance and uniform bed bonding to prevent hollow spots and cracked floor tiles.",
    suitableFor: "Living rooms, corridors, commercial lobbies, terraces, driveways, balconies",
    recommendedTrowel: "6mm x 6mm or 8mm x 8mm notched trowel",
    iconName: "Home",
  },
  {
    id: "wall-tiles",
    title: "Wall Tile Installation",
    short: "Wall Cladding",
    tagline: "Zero-Slip Vertical Cladding",
    description: "Formulated with non-slump polymers for holding heavy wall tiles securely in place without sliding during installation.",
    suitableFor: "Bathroom walls, kitchen splashbacks, exterior elevation cladding, pillar tiles",
    recommendedTrowel: "6mm x 6mm notched trowel",
    iconName: "Grid",
  },
  {
    id: "ceramic-vitrified",
    title: "Ceramic & Vitrified Tiles",
    short: "Vitrified & Ceramic",
    tagline: "Ultra-Low Porosity Vitrified Bonding",
    description: "Penetrates and anchors to low-porosity vitrified tile backs where traditional sand-cement mortar inevitably fails.",
    suitableFor: "Glazed vitrified tiles (GVT/PGVT), full body vitrified, large ceramic slabs",
    recommendedTrowel: "8mm x 8mm notched trowel",
    iconName: "Sparkles",
  },
  {
    id: "natural-stone",
    title: "Natural Stone Applications",
    short: "Natural Stones",
    tagline: "Granite, Marble & Sandstone Bonding",
    description: "Exceptional shear strength for heavy natural stone slabs with zero chemical discoloration or bleed-through.",
    suitableFor: "Italian marble, granite slabs, kota stone, slate, sandstone, quartz",
    recommendedTrowel: "10mm x 10mm or 12mm notched trowel",
    iconName: "Gem",
  },
  {
    id: "mosaic-tiles",
    title: "Mosaic Tile Installation",
    short: "Mosaics",
    tagline: "Precision Grid & Glass Mosaic Bond",
    description: "Smooth creamy consistency enables fine troweling for glass, ceramic, and metal mosaic mesh sheets without staining.",
    suitableFor: "Glass mosaics, pool mosaics, artistic wall murals, water fountains",
    recommendedTrowel: "3mm x 3mm or 4mm x 4mm fine notched trowel",
    iconName: "LayoutGrid",
  },
  {
    id: "swimming-pools",
    title: "Swimming Pools & Wet Areas",
    short: "Pools & Wet Areas",
    tagline: "Continuous Submersion & Moisture Barrier",
    description: "Specially modified polymers remain insoluble and stable under continuous chlorinated water immersion.",
    suitableFor: "Swimming pools, Jacuzzis, water tanks, spa rooms, industrial washrooms",
    recommendedTrowel: "6mm x 6mm or 8mm x 8mm notched trowel",
    iconName: "Waves",
  },
];

export const HOW_TO_USE_STEPS = [
  {
    step: 1,
    title: "Prepare the Surface",
    detail: "Ensure the substrate is structurally sound, clean, dry, and completely free from dust, oil, grease, paint, and loose particles.",
    tip: "Pre-wet porous concrete substrates with damp sponge 15 minutes before application (no standing water).",
    icon: "Brush",
  },
  {
    step: 2,
    title: "Mix with Clean Water",
    detail: "Gradually add Cerastone powder into clean water (approx. 5 to 5.5 litres per 20kg bag) according to the prescribed ratio. Mix mechanically for 3-5 minutes until a smooth, lump-free paste is achieved.",
    tip: "Use clean water for mixing. Do not add extra water after initial mixing.",
    icon: "FlaskConical",
  },
  {
    step: 3,
    title: "Apply with Notched Trowel",
    detail: "Spread adhesive using the flat side of the trowel to key into the substrate, then comb evenly with the notched side at a 45° angle to create uniform ridges.",
    tip: "Only comb as much area as can be tiled within the open time (approx. 15-20 minutes).",
    icon: "SquareDashed",
  },
  {
    step: 4,
    title: "Fix Tiles & Press Firmly",
    detail: "Place tiles onto the wet adhesive ridges with a firm twisting motion to collapse ridges and achieve 100% full contact coverage without voids.",
    tip: "Tap gently with a rubber mallet. Clean excess adhesive from tile joints before setting.",
    icon: "CheckCircle2",
  },
  {
    step: 5,
    title: "Allow to Cure (24–48 Hours)",
    detail: "Allow the installation to cure undisturbed for 24 to 48 hours as indicated on the packaging before grouting or allowing foot traffic.",
    tip: "Protect from rain and freezing temperatures during the entire curing phase.",
    icon: "Clock",
  },
];

export const TECHNICAL_SPECS: ProductSpec[] = [
  { property: "Product Type", value: "Polymer Modified Cementitious Tile Adhesive" },
  { property: "Standard Packaging", value: "20 KG Heavy-Duty Moisture Resistant Bag" },
  { property: "Available Colours", value: "Grey, White & Others" },
  { property: "Maximum Retail Price (MRP)", value: "₹600/- (Inclusive of all taxes)" },
  { property: "Mixing Water Ratio", value: "approx. 25% – 28% (5.0 – 5.5 L per 20kg)" },
  { property: "Pot Life (Working Time)", value: "2 to 3 Hours at 27°C" },
  { property: "Open Time", value: "20 to 25 Minutes" },
  { property: "Adjustability Time", value: "15 to 20 Minutes" },
  { property: "Tensile Adhesion Strength", value: "> 1.0 N/mm² (28 Days Standard)" },
  { property: "Shear Bond Strength", value: "> 1.25 N/mm²" },
  { property: "Bed Thickness", value: "3 mm to 6 mm (up to 12 mm for large stone)" },
  { property: "Curing Time Before Grouting", value: "24 Hours (Floors) / 12-16 Hours (Walls)" },
  { property: "Full Traffic Ready", value: "48 Hours" },
  { property: "Temperature Resistance", value: "-10°C to +80°C (Frost & Heat Resistant)" },
  { property: "Quality Standards", value: "ISO 9001:2015 Certified | Make In India" },
  { property: "Manufacturer", value: "A S Enterprises, Modinagar Rd, Pilkhuwa, Hapur (U.P.)" },
];
