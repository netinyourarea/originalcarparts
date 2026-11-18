export const PHONE = "(833) 442-9950";
export const PHONE_HREF = "tel:+18334429950";
export const WHATSAPP_HREF = "https://wa.me/18334429950";

import eng1 from "@/assets/eng-1.jpg";
import trans1 from "@/assets/trans-1.jpg";
import misc1 from "@/assets/misc-1.jpg";
import eng2 from "@/assets/eng-2.jpg";
import trans2 from "@/assets/trans-2.jpg";
import misc2 from "@/assets/misc-2.jpg";
import eng3 from "@/assets/eng-3.jpg";
import trans3 from "@/assets/trans-3.jpg";
import misc3 from "@/assets/misc-3.jpg";
import eng4 from "@/assets/eng-4.jpg";
import trans4 from "@/assets/trans-4.jpg";
import misc4 from "@/assets/misc-4.jpg";
import eng5 from "@/assets/eng-5.jpg";
import trans5 from "@/assets/trans-5.jpg";
import misc5 from "@/assets/misc-5.jpg";

export const CATEGORIES = [
  { slug: "engines", name: "Engines & Motors", short: "Engines", image: eng1 },
  { slug: "transmissions", name: "Transmissions & Drivetrain", short: "Transmissions", image: trans1 },
  { slug: "other-parts", name: "Other Parts & Accessories", short: "Other Parts", image: misc1 },
];

export const BRANDS = ["Ford", "Chevrolet", "Toyota", "Honda", "Jeep", "Dodge", "Nissan", "GMC", "Acura", "Lexus"];

export interface Product {
  id: string;
  title: string;
  image: string;
  category: string;
  fitment: string;
  condition: string;
  mileage: string;
  stock: string;
  price: number;
  sku: string;
  warranty: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  { id: "p-eng-1", title: "GM 5.3L Vortec V8", category: "engines", image: eng1, price: 1850, condition: "Inspected & Tested", mileage: "64,000 mi", warranty: "90-Day Standard Warranty", stock: "In Stock", sku: "ENG-GM53-14", fitment: "Chevrolet Silverado / GMC Sierra 2014-2018", description: "Inspected and compression-tested 5.3L Vortec V8 pulled from a low-mileage truck. Includes intake and accessories as noted on the inspection sheet." },
  { id: "p-eng-2", title: "Chevrolet Performance LS3 6.2L V8 Crate Engine", category: "engines", image: eng2, price: 7400, condition: "New OEM", mileage: "0 mi", warranty: "90-Day Standard Warranty", stock: "In Stock", sku: "ENG-LS3-CRT", fitment: "Camaro, Corvette and swap builds; confirm accessory drive by phone", description: "Brand-new factory-sealed 6.2L LS3 crate engine. Ideal for swaps and restorations." },
  { id: "p-eng-3", title: "Ford 5.0L Coyote V8 Gen 3", category: "engines", image: eng3, price: 4200, condition: "Inspected", mileage: "48,000 mi", warranty: "90-Day Standard Warranty", stock: "In Stock", sku: "ENG-CYT5-18", fitment: "Ford F-150 / Mustang 2018-2021", description: "Gen 3 Coyote 5.0L V8 with documented inspection. Strong oil pressure and clean bores." },
  { id: "p-eng-4", title: "Dodge 5.7L Hemi V8 MDS", category: "engines", image: eng4, price: 2650, condition: "Compression-Tested", mileage: "71,000 mi", warranty: "90-Day Standard Warranty", stock: "In Stock", sku: "ENG-HEMI57-16", fitment: "Ram 1500 / Charger 2016-2022", description: "MDS-equipped 5.7L Hemi, cylinder-by-cylinder compression tested and leak-checked." },
  { id: "p-eng-5", title: "Honda K24A2 2.4L DOHC i-VTEC", category: "engines", image: eng5, price: 1250, condition: "Clean Runner", mileage: "82,000 mi", warranty: "90-Day Standard Warranty", stock: "In Stock", sku: "ENG-K24A2-04", fitment: "Acura TSX / Honda Accord", description: "Clean-running K24A2 i-VTEC with no oil consumption. Popular for swaps and replacements." },
  { id: "p-trn-1", title: "GM 4L60-E 4-Speed Automatic", category: "transmissions", image: trans1, price: 1450, condition: "Rebuilt & Dyno-Tested", mileage: "Rebuilt", warranty: "90-Day Standard Warranty", stock: "In Stock", sku: "TRN-4L60E-RB", fitment: "RWD / 4WD GM trucks and SUVs", description: "Fully rebuilt 4L60-E with new clutches and seals, dyno-tested before listing." },
  { id: "p-trn-2", title: "GM 6L80 6-Speed Heavy Duty Transmission", category: "transmissions", image: trans2, price: 2100, condition: "Inspected", mileage: "58,000 mi", warranty: "90-Day Standard Warranty", stock: "In Stock", sku: "TRN-6L80-HD", fitment: "Chevrolet Silverado / Suburban", description: "Heavy-duty 6L80 6-speed from a low-mileage truck; fluid and valve body inspected." },
  { id: "p-trn-3", title: "Ford 6R80 6-Speed Automatic", category: "transmissions", image: trans3, price: 1750, condition: "Inspected", mileage: "62,000 mi", warranty: "90-Day Standard Warranty", stock: "In Stock", sku: "TRN-6R80-11", fitment: "Ford F-150 / Mustang 2011-2017", description: "6R80 6-speed automatic, spin-tested with clean fluid. Confirm gear ratio by phone." },
  { id: "p-trn-4", title: "Ford / GM 10R80 10-Speed Electronic Automatic", category: "transmissions", image: trans4, price: 3200, condition: "Low Mileage OEM", mileage: "31,000 mi", warranty: "90-Day Standard Warranty", stock: "In Stock", sku: "TRN-10R80-OE", fitment: "Ford F-150 / Mustang and GM 10-speed applications", description: "Low-mileage OEM 10-speed with electronic controls; shift-tested on the bench." },
  { id: "p-trn-5", title: "Jeep Aisin-Warner AW4 4-Speed Automatic", category: "transmissions", image: trans5, price: 950, condition: "Fully Serviced", mileage: "Serviced", warranty: "90-Day Standard Warranty", stock: "In Stock", sku: "TRN-AW4-XJ", fitment: "Jeep Cherokee XJ 4.0L", description: "Fully serviced AW4 with fresh fluid and new filter. A proven, durable XJ replacement." },
  { id: "p-msc-1", title: "OEM Bi-LED Projector Headlight Assembly (Passenger Side)", category: "other-parts", image: misc1, price: 420, condition: "Grade A Lens", mileage: "N/A", warranty: "90-Day Standard Warranty", stock: "In Stock", sku: "MSC-HDLT-BL", fitment: "Late-model vehicles; confirm by VIN", description: "Genuine OEM Bi-LED projector headlight with a Grade A lens, no haze or cracks." },
  { id: "p-msc-2", title: "Monotube Adjustable Coilover Suspension Kit (Front & Rear)", category: "other-parts", image: misc2, price: 880, condition: "Pre-assembled", mileage: "New", warranty: "90-Day Standard Warranty", stock: "In Stock", sku: "MSC-COIL-MT", fitment: "Common sport compacts and sedans; confirm by VIN", description: "Pre-assembled monotube coilovers with adjustable ride height and damping." },
  { id: "p-msc-3", title: "19\" Factory Flow-Forged Split-Spoke Wheel Set (Set of 4)", category: "other-parts", image: misc3, price: 1150, condition: "Powder-coated", mileage: "N/A", warranty: "90-Day Standard Warranty", stock: "In Stock", sku: "MSC-WHL-19", fitment: "19\" factory fitment; confirm bolt pattern by VIN", description: "Set of four flow-forged split-spoke wheels, freshly powder-coated." },
  { id: "p-msc-4", title: "Heavy-Duty Dual-Core Aluminum Performance Radiator", category: "other-parts", image: misc4, price: 290, condition: "Leak-Tested", mileage: "New", warranty: "90-Day Standard Warranty", stock: "In Stock", sku: "MSC-RAD-DC", fitment: "Multiple trucks and performance cars; confirm by VIN", description: "Dual-core aluminum radiator, pressure and leak-tested for improved cooling." },
  { id: "p-msc-5", title: "High-Output 220A Alternator Assembly", category: "other-parts", image: misc5, price: 240, condition: "Bench-Tested with Load Sheet", mileage: "N/A", warranty: "90-Day Standard Warranty", stock: "In Stock", sku: "MSC-ALT-220", fitment: "Truck and SUV applications; confirm by VIN", description: "220A high-output alternator bench-tested under load with a printed load sheet." },
];

export const TESTIMONIALS = [
  { name: "Marcus R.", vehicle: "Dodge Ram 1500", text: "Found a Hemi I'd been hunting for months. The team confirmed fitment over the phone and shipped within 48 hours. Bolted right in." },
  { name: "Sarah K.", vehicle: "Honda Accord", text: "Their specialist actually knew the K24 swap. Saved me from ordering the wrong accessories. Will order all my parts here." },
  { name: "James T.", vehicle: "GMC Sierra Denali", text: "Hard-to-find 6L80, fair price, real warranty. Beats every dealership quote I got." },
];
