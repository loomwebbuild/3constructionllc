'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: 'What does "Turnkey Construction" mean with 3 Construction LLC?',
    a: 'Turnkey means you partner with one company from the moment your land is raw ground until the building envelope is ready or finished. We execute the land clearing, tree removal, access driveways, laser dirt pad grading, underground utility trenching, engineered concrete foundation pour, and structural framing. You avoid managing separate excavator operators, concrete contractors, and framers.',
  },
  {
    q: 'How do you handle Central Texas black clay and expansive soils?',
    a: 'Central Texas soils are notorious for high plasticity index (PI) clay that shrinks and swells. We strip all organic topsoil down to stable subgrade, import non-expansive select fill (compacted in 6-inch lifts to 95%+ Standard Proctor Density), engineer deep perimeter grade beams, and install post-tension tendons or heavy #4 rebar grids to guarantee long-term slab stability.',
  },
  {
    q: 'Why is Forestry Mulching better than traditional bull-dozing and burning?',
    a: 'Traditional bulldozing rips out topsoil, creates massive dirty root balls, and requires burn piles which are frequently prohibited during Texas burn bans. Our high-flow forestry mulchers shred cedar, mesquite, and brush into fine mulch directly onto the ground. This creates a natural erosion barrier, retains soil moisture, prevents weeds, and leaves the property immediately park-like.',
  },
  {
    q: 'What concrete PSI and reinforcement standards do you use?',
    a: 'Our standard residential foundations use a minimum of 3,500 to 4,000 PSI concrete mixes. Commercial slabs and heavy equipment workshop pads use 5,000 to 6,000 PSI high-early strength mixes with fiber mesh additive and Grade 60 rebar grids. We always use poly vapor barriers and laser screeding for flat, crack-resistant finishes.',
  },
  {
    q: 'How fast can you visit my job site and provide a formal bid?',
    a: 'We generally perform on-site laser surveys within 24 to 48 hours across McLennan, Bell, Coryell, Williamson, and surrounding counties. You will receive a detailed, line-item bid within 1 business day following the site inspection.',
  },
  {
    q: 'Do you offer residential barndominium construction as well as commercial?',
    a: 'Yes. We construct both turnkey residential barndominiums (modern steel framing, high ceilings, custom porch wraps) and commercial metal buildings, retail foundations, and industrial parking lots.',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <HelpCircle className="w-4 h-4 text-amber-500" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-balance">
            Everything You Need to Know Before Groundbreaking
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:text-amber-400 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Strip */}
        <div className="mt-10 text-center bg-neutral-950 p-6 rounded-xl border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-bold text-white">Have a specific engineering question?</div>
            <div className="text-xs text-neutral-400">Speak directly with our superintendent or field engineer.</div>
          </div>

          <a
            href="tel:2544474500"
            className="px-4 py-2.5 text-xs font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call (254) 447-4500</span>
          </a>
        </div>
      </div>
    </section>
  );
}
