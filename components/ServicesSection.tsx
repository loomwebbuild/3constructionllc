'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Layers,
  Trees,
  Truck,
  Building2,
  HardHat,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Shield,
  Zap,
  Gauge,
  Compass,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  bullets: string[];
  specs: { label: string; value: string }[];
  idealFor: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'turnkey',
    number: '01',
    title: 'Turnkey Construction & Site Prep',
    subtitle: 'From Raw Acreage to Move-In Ready Building Envelope',
    description:
      'We eliminate the headaches of managing multiple subcontractors. 3 Construction LLC handles complete turnkey site development: land clearing, access roads, dirt pads, engineered concrete, structural framing, and utility trenching with single-source accountability.',
    image: '/images/hero_construction_turnkey.jpg',
    bullets: [
      'Single contract & direct superintendent on site from day one',
      'Unified scheduling between dirt excavation, concrete, and framing',
      'Zero finger-pointing between earthwork and concrete crews',
      'Streamlined county permitting and engineer sign-offs',
    ],
    specs: [
      { label: 'Project Scope', value: 'Complete Site-to-Structure' },
      { label: 'Accountability', value: '100% In-House Management' },
      { label: 'Typical Timeline', value: '3 to 6 Months' },
      { label: 'Coverage', value: 'Residential & Commercial' },
    ],
    idealFor: 'Custom home builders, acreage property owners, and commercial developers seeking hassle-free execution.',
  },
  {
    id: 'concrete',
    number: '02',
    title: 'Concrete Construction & Heavy Flatwork',
    subtitle: 'High-Strength Engineered Slabs, Footings & Structural Pours',
    description:
      'Precision monolithic slabs, post-tension foundations, commercial parking pads, and heavy equipment slabs poured to exact engineering specifications. We utilize laser screeds, high-strength 4000–6000 PSI mixes, and rigorous vibration to prevent settling and spider cracking.',
    image: '/images/concrete_slab.jpg',
    bullets: [
      'Monolithic residential & barndominium slab foundations',
      'Post-tension cable reinforcement & Grade 60 #4/5 rebar grids',
      'Commercial warehouse floors, aprons & heavy loading docks',
      'Custom stamped, broom-finished driveways & retaining walls',
    ],
    specs: [
      { label: 'Mix Strength', value: '4,000 – 6,000+ PSI' },
      { label: 'Reinforcement', value: 'Grade 60 Rebar / Post-Tension' },
      { label: 'Leveling Tech', value: 'Dual-Slope Laser Screed' },
      { label: 'Finish Styles', value: 'Machine Trowel, Broom, Stamped' },
    ],
    idealFor: 'Custom home foundations, metal building / shop pads, commercial developments, and durable heavy driveways.',
  },
  {
    id: 'dirtwork',
    number: '03',
    title: 'Dirt Work & Laser House Pad Grading',
    subtitle: 'Precision Earthmoving, Soil Compaction & Drainage',
    description:
      'The foundation of every enduring build begins beneath the concrete. Our operators use laser-guided Caterpillar equipment to excavate, bench cut slopes, import select fill, and compact building pads to 95%+ standard proctor density for zero settlement.',
    image: '/images/dirt_work.jpg',
    bullets: [
      'House & metal building pad building with select fill',
      'Laser grade control to within 1/4 inch elevation tolerance',
      'Retention & detention ponds, stock tanks & swales',
      'Culvert pipe installation, ditching & stormwater management',
    ],
    specs: [
      { label: 'Grade Accuracy', value: '± 0.25 Inch Laser Tolerance' },
      { label: 'Compaction Spec', value: '95%+ Standard Proctor' },
      { label: 'Excavators', value: '15-Ton to 25-Ton Track Units' },
      { label: 'Drainage', value: 'Engineered Positive Fall Swales' },
    ],
    idealFor: 'New construction sites, uneven acreage properties, shop pads, drainage rerouting, and road building.',
  },
  {
    id: 'clearing',
    number: '04',
    title: 'Land Clearing & Forestry Mulching',
    subtitle: 'Eco-Friendly Cedar, Mesquite & Underbrush Removal',
    description:
      'Transform overgrown Central Texas brush, dense cedar breaks, and thick oak stands into park-like pastures and ready building sites. Our high-flow forestry mulchers grind trees directly into nutrient-rich ground mulch, preventing topsoil erosion without destructive burning.',
    image: '/images/land_clearing.jpg',
    bullets: [
      'High-flow forestry mulching (clean mulch left on grade)',
      'Selective tree clearing (save heritage live oaks, remove cedar)',
      'Right-of-way, fence line, and utility corridor clearing',
      'Stump grinding, root raking, and burn-pile options available',
    ],
    specs: [
      { label: 'Equipment', value: 'CAT 299D3 + High-Flow Mulcher' },
      { label: 'Max Tree Diameter', value: 'Up to 12" Continuous Mulch' },
      { label: 'Erosion Impact', value: 'Zero Topsoil Strip (Mulch Blanket)' },
      { label: 'Turnaround', value: '2 to 5 Acres per Day' },
    ],
    idealFor: 'Raw land purchases, overgrown ranch acreage, home site clearings, and wildfire fuel reduction.',
  },
  {
    id: 'newhome',
    number: '05',
    title: 'New Home & Barndominium Construction',
    subtitle: 'Custom Residential Framing, Steel Shells & Turnkey Living',
    description:
      'From custom stick-frame luxury homes to modern steel-frame barndominiums, 3 Construction LLC delivers premium residential builds crafted for durability, energy efficiency, and Texas style. We bring blueprints to reality with meticulous craftsmanship.',
    image: '/images/new_home_build.jpg',
    bullets: [
      'Custom barndominiums (engineered steel frame + luxury interior)',
      'Traditional custom stick-built residential new homes',
      'Structural timber framing, trusses, and modern metal exteriors',
      'Energy-efficient envelope sealing & expansive covered porches',
    ],
    specs: [
      { label: 'Build Typologies', value: 'Barndominiums & Custom Stick Homes' },
      { label: 'Structure', value: 'Engineered Red Iron / Heavy Timber' },
      { label: 'Roofing & Siding', value: '26-Gauge Standing Seam Metal' },
      { label: 'Finishing', value: 'Turnkey Shell or Complete Finish-Out' },
    ],
    idealFor: 'Families building dream homes on acreage, rural barndominium estates, and modern ranch compounds.',
  },
  {
    id: 'commercial',
    number: '06',
    title: 'Commercial & Civil Site Development',
    subtitle: 'Commercial Site Prep, Industrial Slabs & Utilities',
    description:
      'We partner with general contractors, commercial developers, and municipalities on demanding civil packages. Our fleet and operators tackle parking lots, curb and gutter, utility trenching, retention basins, and industrial structural slabs.',
    image: '/images/concrete_slab.jpg',
    bullets: [
      'Commercial concrete parking aprons and heavy load pads',
      'Underground utility trenching (water, electrical, sewer)',
      'Civil site prep, grading, subbase stabilization & asphalt prep',
      'ADA ramps, commercial curbs, and concrete retention structures',
    ],
    specs: [
      { label: 'Compliance', value: 'ADA & Texas Civil Engineering Code' },
      { label: 'Load Rating', value: 'Heavy Highway & Industrial Truck Loads' },
      { label: 'Safety Record', value: 'OSHA 30 Certified Supervisory Crew' },
      { label: 'Mobilization', value: 'Rapid Dispatch Central Texas' },
    ],
    idealFor: 'Retail centers, industrial warehouses, storage facilities, and municipal utility expansions.',
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <HardHat className="w-4 h-4 text-amber-500" />
              <span>Full-Spectrum Capabilities</span>
              <span className="text-neutral-600" aria-hidden="true">·</span>
              <span className="text-neutral-400">Central Texas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-balance">
              Our 6 Core Construction Pillars
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mt-3">
              One trusted contractor. In-house heavy machinery. Complete control over grading, concrete, and construction quality.
            </p>
          </div>

          <a
            href="#cost-calculator"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 py-2 border-b border-amber-400/30 hover:border-amber-400 transition-colors shrink-0"
          >
            <span>Calculate Cost for Any Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="group bg-neutral-900/70 hover:bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 rounded-xl overflow-hidden transition-all duration-200 flex flex-col justify-between shadow-lg"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-neutral-950">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded text-xs font-mono font-bold text-amber-400 border border-neutral-700/60">
                  {svc.number}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                    {svc.title}
                  </h3>
                  <div className="text-xs text-amber-500/90 font-medium mb-3">
                    {svc.subtitle}
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3 mb-4">
                    {svc.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-neutral-400 mb-6">
                    {svc.bullets.slice(0, 3).map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveService(svc)}
                    className="text-xs font-semibold text-neutral-200 group-hover:text-white flex items-center gap-1.5 hover:underline"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>

                  <a
                    href="#quote-request"
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300"
                  >
                    Request Bid
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-neutral-950 border border-neutral-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 text-sm rounded bg-neutral-900 border border-neutral-800"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              <span>Service Deep Dive · {activeService.number}</span>
            </div>

            <h3 className="text-2xl font-black text-white mb-2">{activeService.title}</h3>
            <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
              {activeService.description}
            </p>

            {/* Specifications Matrix */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-4 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Technical Specifications & Standards
              </div>
              <div className="grid grid-cols-2 gap-4">
                {activeService.specs.map((s, idx) => (
                  <div key={idx} className="border-b border-neutral-800/60 pb-2">
                    <div className="text-[11px] text-neutral-400">{s.label}</div>
                    <div className="text-xs font-mono font-bold text-amber-400 mt-0.5">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Bullets */}
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                What&apos;s Included in Our Scope
              </div>
              <ul className="space-y-2 text-xs text-neutral-300">
                {activeService.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal For */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3.5 mb-6 text-xs text-amber-200">
              <span className="font-bold text-amber-400">Best Suited For: </span>
              {activeService.idealFor}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#quote-request"
                onClick={() => setActiveService(null)}
                className="flex-1 py-3 px-4 text-xs font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors flex items-center justify-center gap-2 text-center"
              >
                <span>Request Free Bid for {activeService.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="tel:2544474500"
                className="py-3 px-4 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors flex items-center justify-center gap-2 text-center"
              >
                Call (254) 447-4500
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
