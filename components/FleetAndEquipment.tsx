'use client';

import React from 'react';
import { Truck, ShieldCheck, Zap, Gauge, Wrench, CheckCircle2 } from 'lucide-react';

const equipmentList = [
  {
    name: 'Caterpillar 299D3 High-Flow Skid Steer + Fecon Forestry Mulcher',
    type: 'Heavy Land Clearing',
    specs: '110 HP · High-Flow Hydraulic Circuit · 60" Drum Mulcher',
    purpose: 'Grinds 10-12" trees and thick cedar into clean, erosion-resistant mulch directly on site with zero burns.',
  },
  {
    name: '20-Ton Hydraulic Track Excavator with Hydraulic Thumb & Tilt Bucket',
    type: 'Heavy Excavation & Bench Cutting',
    specs: '20-Ton Class · 22-Foot Dig Depth · Laser Grade Receiver',
    purpose: 'Deep foundation beam trenching, limestone rock breaking, slope excavation, and retention pond construction.',
  },
  {
    name: 'Dual-Slope Laser-Guided Motor Grader & Laser Box Blade',
    type: 'Precision Pad Grading',
    specs: 'Trimble Dual Laser Receivers · Sub-0.25" Elevation Accuracy',
    purpose: 'Creates perfectly flat building pads for barndominiums and commercial slabs to prevent thick-pour concrete overages.',
  },
  {
    name: 'Vibratory Padfoot & Smooth Drum Soil Compactors',
    type: 'Compaction & Subbase Stabilization',
    specs: '84" Drum · 25,000 lbs Dynamic Compactive Force',
    purpose: 'Ensures select fill house pads achieve 95%+ Standard Proctor Density, eliminating foundation settling risks.',
  },
  {
    name: 'Ride-On Hydraulic Power Trowels & Concrete Pumps',
    type: 'Concrete Pours & Mirror Finishing',
    specs: 'Twin 46" Rotors · High-Flow Boom & Line Pumping',
    purpose: 'Produces commercial-grade super-flat (FF/FL) finishes with high abrasion resistance and tight surface pores.',
  },
  {
    name: 'Heavy Tri-Axle Dump Hauling Fleet',
    type: 'Material Logistics & Fill Import',
    specs: '20-Yard High-Capacity Steel Dump Trailers',
    purpose: 'Direct sourcing and transport of select road base, crushed limestone, topsoil, and washed gravel without delays.',
  },
];

export default function FleetAndEquipment() {
  return (
    <section id="equipment" className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Truck className="w-4 h-4 text-amber-500" />
            <span>Heavy Equipment Advantage</span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span className="text-neutral-400">100% In-House Fleet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-balance mb-4">
            Commercial-Grade Machinery on Every Job
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            We own, maintain, and operate our own heavy equipment fleet. That means no equipment rental delays, no subcontractor markups, and immediate job mobilization.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipmentList.map((eq, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/40 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-bold text-amber-400 uppercase mb-1">
                  {eq.type}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {eq.name}
                </h3>
                <div className="text-xs text-neutral-400 bg-neutral-950 p-2 rounded border border-neutral-800/80 mb-3 font-mono">
                  {eq.specs}
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {eq.purpose}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Active in Central Texas Daily</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
