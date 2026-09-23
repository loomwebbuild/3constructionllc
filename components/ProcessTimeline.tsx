'use client';

import React from 'react';
import { Compass, Shovel, Layers, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Compass,
    title: 'Site Laser Survey & Feasibility Consult',
    subtitle: 'Ground Truth Before Groundbreaking',
    description:
      'We visit your property with precision laser transit levels, evaluate elevation slopes, soil conditions, rock presence, tree lines, and drainage flows to design an exact site plan.',
    deliverables: ['Laser elevation report', 'Cut/Fill volume calculation', 'Transparent line-item bid'],
  },
  {
    step: '02',
    icon: Shovel,
    title: 'Heavy Land Clearing & Pad Excavation',
    subtitle: 'Laser-Graded Foundation Base',
    description:
      'Our operators clear cedar and trees with high-flow mulchers, bench cut slopes, import certified select fill, and compact the pad in 6-inch lifts to 95%+ standard proctor density.',
    deliverables: ['Zero topsoil rutting', 'Positive stormwater drainage swales', 'Laser-flat pad surface'],
  },
  {
    step: '03',
    icon: Layers,
    title: 'Formwork, Rebar & High-PSI Concrete Pour',
    subtitle: 'Indestructible Structural Monolithic Slab',
    description:
      'Trench deep perimeter grade beams, lay 15-mil vapor barriers, install Grade 60 rebar grids or post-tension tendons, and pour 4000–6000 PSI concrete finished with ride-on power trowels.',
    deliverables: ['Inspection-ready formwork', 'Vapor moisture lock', 'Mirror-flat laser troweled finish'],
  },
  {
    step: '04',
    icon: Building2,
    title: 'Turnkey Framing & Structure Completion',
    subtitle: 'Single-Source Execution to Move-In',
    description:
      'From custom stick framing to red iron barndominiums, standing seam metal roofs, utilities hookups, and final grading cleanup. You deal with one contractor from start to finish.',
    deliverables: ['Engineered framing inspection', 'Turnkey mechanicals & finishes', 'Clean site walkthrough'],
  },
];

export default function ProcessTimeline() {
  return (
    <section id="turnkey-process" className="py-20 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>The Turnkey Advantage</span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span className="text-neutral-400">Step-by-Step Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-balance mb-4">
            How We Build: From Raw Ground to Finished Handover
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            No gaps between earthmovers, concrete crews, and framers. 3 Construction LLC orchestrates every stage seamlessly.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-neutral-950 border border-neutral-800 hover:border-amber-500/50 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between shadow-lg relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black font-mono text-neutral-600 group-hover:text-amber-400 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-amber-500/80 font-medium mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    Key Outcomes:
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-400">
                    {item.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 bg-neutral-950 border border-neutral-800 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-lg font-bold text-white">
              Ready to break ground on your Central Texas property?
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Book a free on-site laser elevation survey and get a guaranteed quote in 24 hours.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:2544474500"
              className="px-4 py-2.5 text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-700 rounded hover:bg-neutral-800 transition-colors"
            >
              Call (254) 447-4500
            </a>
            <a
              href="#quote-request"
              className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded transition-colors flex items-center gap-1.5"
            >
              <span>Schedule Site Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
