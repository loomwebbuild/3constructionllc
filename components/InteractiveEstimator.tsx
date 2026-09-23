'use client';

import React, { useState, useId } from 'react';
import {
  Calculator,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  Layers,
  Trees,
  Truck,
  Building2,
  HelpCircle,
  Clock,
  ShieldCheck,
  Send,
  Sliders,
} from 'lucide-react';

type ServiceType = 'concrete' | 'clearing' | 'dirtwork' | 'turnkey' | 'commercial';

interface CostBreakdown {
  minCost: number;
  maxCost: number;
  equipment: string[];
  durationDays: string;
  recommendedSpecs: string;
}

export default function InteractiveEstimator() {
  const [service, setService] = useState<ServiceType>('concrete');
  
  // Concrete & Dirtwork Parameters
  const [sqft, setSqft] = useState<number>(2400);
  const [thickness, setThickness] = useState<number>(4); // 4, 6, 8 inches
  const [rebarGrade, setRebarGrade] = useState<'standard' | 'post-tension'>('standard');
  
  // Land Clearing Parameters
  const [acres, setAcres] = useState<number>(3.5);
  const [density, setDensity] = useState<'light' | 'medium' | 'heavy'>('medium');
  const [haulOff, setHaulOff] = useState<boolean>(false);
  
  // Dirt Work Parameters
  const [slopeCondition, setSlopeCondition] = useState<'flat' | 'moderate' | 'steep'>('moderate');
  const [compactionTested, setCompactionTested] = useState<boolean>(true);

  // Turnkey Build Parameters
  const [turnkeySqft, setTurnkeySqft] = useState<number>(2200);
  const [buildType, setBuildType] = useState<'barndominium' | 'custom_home' | 'commercial_shop'>('barndominium');

  // Lead Modal / Submit State
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  });

  // Calculate estimates dynamically
  const calculateEstimate = (): CostBreakdown => {
    switch (service) {
      case 'concrete': {
        const basePerSqFt = thickness === 4 ? 7.5 : thickness === 6 ? 10.5 : 14.0;
        const rebarMultiplier = rebarGrade === 'post-tension' ? 1.25 : 1.0;
        const subtotal = sqft * basePerSqFt * rebarMultiplier;
        const minCost = Math.round(subtotal * 0.95);
        const maxCost = Math.round(subtotal * 1.15);
        const days = sqft > 4000 ? '4–7 Days' : sqft > 2000 ? '2–4 Days' : '1–2 Days';
        return {
          minCost,
          maxCost,
          equipment: ['5000 PSI Concrete Pumper', 'Ride-On Power Trowels', 'Laser Screed Alignment', 'Grade Laser Transit'],
          durationDays: days,
          recommendedSpecs: `${thickness}" ${rebarGrade === 'post-tension' ? 'Post-Tension Engineered' : 'Grade 60 Rebar Grid'} Monolithic Slab`,
        };
      }
      case 'clearing': {
        const perAcreRate = density === 'light' ? 1400 : density === 'medium' ? 2200 : 3400;
        const haulMultiplier = haulOff ? 1.35 : 1.0;
        const total = acres * perAcreRate * haulMultiplier;
        const minCost = Math.round(total * 0.9);
        const maxCost = Math.round(total * 1.15);
        const days = acres > 10 ? '5–10 Days' : acres > 3 ? '2–4 Days' : '1–2 Days';
        return {
          minCost,
          maxCost,
          equipment: ['High-Flow Forestry Mulcher (CAT 299D3)', 'Heavy Track Excavator + Root Rake', 'Stump Grinder & Chipper'],
          durationDays: days,
          recommendedSpecs: `${density.toUpperCase()} Brush & Cedar Mulching with Ground Retainage`,
        };
      }
      case 'dirtwork': {
        const basePadRate = 2.75;
        const slopeMultiplier = slopeCondition === 'flat' ? 1.0 : slopeCondition === 'moderate' ? 1.3 : 1.7;
        const testCost = compactionTested ? 650 : 0;
        const subtotal = sqft * basePadRate * slopeMultiplier + testCost;
        const minCost = Math.round(subtotal * 0.9);
        const maxCost = Math.round(subtotal * 1.2);
        const days = sqft > 5000 ? '3–6 Days' : '2–3 Days';
        return {
          minCost,
          maxCost,
          equipment: ['Dual-Laser Guided Motor Grader', 'Vibratory Padfoot Roller Compactor', '20-Ton Excavator with Tilt Bucket'],
          durationDays: days,
          recommendedSpecs: `Select Fill House Pad with 95%+ Standard Proctor Density Compaction`,
        };
      }
      case 'turnkey': {
        const ratePerSqFt = buildType === 'barndominium' ? 145 : buildType === 'custom_home' ? 195 : 110;
        const subtotal = turnkeySqft * ratePerSqFt;
        const minCost = Math.round(subtotal * 0.92);
        const maxCost = Math.round(subtotal * 1.12);
        return {
          minCost,
          maxCost,
          equipment: ['Full Turnkey In-House Fleet', 'Engineered Slabs', 'Structural Metal / Timber Framing', 'Drywall & Mechanicals'],
          durationDays: '3–6 Months',
          recommendedSpecs: `Complete Turnkey ${buildType.replace('_', ' ').toUpperCase()} from Raw Site to Move-In`,
        };
      }
      case 'commercial': {
        const baseCommercial = 12.5;
        const subtotal = sqft * baseCommercial;
        const minCost = Math.round(subtotal * 0.95);
        const maxCost = Math.round(subtotal * 1.18);
        return {
          minCost,
          maxCost,
          equipment: ['Laser Screed Spreader', 'Heavy Civil Excavation Crew', 'Commercial 6000 PSI Mixes', 'ADA Curb & Gutter Forms'],
          durationDays: sqft > 10000 ? '2–4 Weeks' : '1–2 Weeks',
          recommendedSpecs: `Engineered Commercial Flatwork with Heavy Duty Traffic Loads & ADA Specs`,
        };
      }
    }
  };

  const estimate = calculateEstimate();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="cost-calculator" className="py-20 bg-neutral-900 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Calculator className="w-4 h-4 text-amber-500" />
            <span>Instant Estimator</span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span className="text-neutral-400">Central Texas Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-balance mb-4">
            Interactive Project Cost Calculator
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Get an instant, itemized estimate for your concrete slab, land clearing acreage, dirt pad excavation, or turnkey build. No guesswork.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-8">
            
            {/* Service Tab Selectors */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                1. Select Service Pillar
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setService('concrete')}
                  className={`px-3.5 py-3 text-xs font-semibold rounded-lg border transition-all text-left flex items-center gap-2.5 ${
                    service === 'concrete'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-400 font-bold'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  <Layers className="w-4 h-4 shrink-0 text-amber-400" />
                  <span className="truncate">Concrete Slabs</span>
                </button>

                <button
                  type="button"
                  onClick={() => setService('clearing')}
                  className={`px-3.5 py-3 text-xs font-semibold rounded-lg border transition-all text-left flex items-center gap-2.5 ${
                    service === 'clearing'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-400 font-bold'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  <Trees className="w-4 h-4 shrink-0 text-amber-400" />
                  <span className="truncate">Land Clearing</span>
                </button>

                <button
                  type="button"
                  onClick={() => setService('dirtwork')}
                  className={`px-3.5 py-3 text-xs font-semibold rounded-lg border transition-all text-left flex items-center gap-2.5 ${
                    service === 'dirtwork'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-400 font-bold'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  <Truck className="w-4 h-4 shrink-0 text-amber-400" />
                  <span className="truncate">Dirt Work & Pads</span>
                </button>

                <button
                  type="button"
                  onClick={() => setService('turnkey')}
                  className={`px-3.5 py-3 text-xs font-semibold rounded-lg border transition-all text-left flex items-center gap-2.5 ${
                    service === 'turnkey'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-400 font-bold'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  <Building2 className="w-4 h-4 shrink-0 text-amber-400" />
                  <span className="truncate">Turnkey Builds</span>
                </button>

                <button
                  type="button"
                  onClick={() => setService('commercial')}
                  className={`col-span-2 sm:col-span-2 px-3.5 py-3 text-xs font-semibold rounded-lg border transition-all text-left flex items-center gap-2.5 ${
                    service === 'commercial'
                      ? 'bg-amber-500/10 border-amber-500 text-amber-400 font-bold'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  <Building2 className="w-4 h-4 shrink-0 text-amber-400" />
                  <span className="truncate">Commercial Slabs & Civil Flatwork</span>
                </button>
              </div>
            </div>

            {/* Dynamic Inputs Based on Service */}
            {service === 'concrete' && (
              <div className="space-y-6 pt-2 border-t border-neutral-800/80">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-neutral-300">
                      Slab Area (Square Feet)
                    </label>
                    <span className="text-sm font-mono font-bold text-amber-400 tabular-nums">
                      {sqft.toLocaleString()} sq ft
                    </span>
                  </div>
                  <input
                    type="range"
                    min="400"
                    max="10000"
                    step="100"
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-mono">
                    <span>400 sq ft (Garage/Patio)</span>
                    <span>2,400 sq ft (Typical Home)</span>
                    <span>10,000 sq ft (Shop/Commercial)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2">
                      Slab Thickness
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[4, 6, 8].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setThickness(val)}
                          className={`py-2 px-3 text-xs font-semibold rounded border transition-colors ${
                            thickness === val
                              ? 'bg-neutral-800 border-amber-500 text-amber-400'
                              : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                          }`}
                        >
                          {val}&quot; Thick
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2">
                      Reinforcement Standard
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setRebarGrade('standard')}
                        className={`py-2 px-3 text-xs font-semibold rounded border transition-colors ${
                          rebarGrade === 'standard'
                            ? 'bg-neutral-800 border-amber-500 text-amber-400'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        #4 Rebar Grid
                      </button>
                      <button
                        type="button"
                        onClick={() => setRebarGrade('post-tension')}
                        className={`py-2 px-3 text-xs font-semibold rounded border transition-colors ${
                          rebarGrade === 'post-tension'
                            ? 'bg-neutral-800 border-amber-500 text-amber-400'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        Post-Tension Cable
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {service === 'clearing' && (
              <div className="space-y-6 pt-2 border-t border-neutral-800/80">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-neutral-300">
                      Total Acreage to Clear
                    </label>
                    <span className="text-sm font-mono font-bold text-amber-400 tabular-nums">
                      {acres} Acres
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="25"
                    step="0.5"
                    value={acres}
                    onChange={(e) => setAcres(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-mono">
                    <span>0.5 Acre (House Lot)</span>
                    <span>5 Acres (Small Ranch)</span>
                    <span>25+ Acres (Large Tract)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2">
                      Vegetation Density
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['light', 'medium', 'heavy'] as const).map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDensity(d)}
                          className={`py-2 px-3 text-xs font-semibold capitalize rounded border transition-colors ${
                            density === d
                              ? 'bg-neutral-800 border-amber-500 text-amber-400'
                              : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2">
                      Debris Management
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setHaulOff(false)}
                        className={`py-2 px-2.5 text-xs font-semibold rounded border transition-colors ${
                          !haulOff
                            ? 'bg-neutral-800 border-amber-500 text-amber-400'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        Mulch in Place
                      </button>
                      <button
                        type="button"
                        onClick={() => setHaulOff(true)}
                        className={`py-2 px-2.5 text-xs font-semibold rounded border transition-colors ${
                          haulOff
                            ? 'bg-neutral-800 border-amber-500 text-amber-400'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        Burn / Haul Off
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {service === 'dirtwork' && (
              <div className="space-y-6 pt-2 border-t border-neutral-800/80">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-neutral-300">
                      House / Building Pad Footprint
                    </label>
                    <span className="text-sm font-mono font-bold text-amber-400 tabular-nums">
                      {sqft.toLocaleString()} sq ft pad
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="15000"
                    step="500"
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2">
                      Ground Slope & Elevation Change
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['flat', 'moderate', 'steep'] as const).map((slope) => (
                        <button
                          key={slope}
                          type="button"
                          onClick={() => setSlopeCondition(slope)}
                          className={`py-2 px-2 text-xs font-semibold capitalize rounded border transition-colors ${
                            slopeCondition === slope
                              ? 'bg-neutral-800 border-amber-500 text-amber-400'
                              : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                          }`}
                        >
                          {slope}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2">
                      Laser Level & Compaction Test
                    </label>
                    <button
                      type="button"
                      onClick={() => setCompactionTested(!compactionTested)}
                      className={`w-full py-2 px-3 text-xs font-semibold rounded border transition-colors text-left flex items-center justify-between ${
                        compactionTested
                          ? 'bg-neutral-800 border-amber-500 text-amber-400'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                      }`}
                    >
                      <span>{compactionTested ? 'Included (95%+ Proctor)' : 'Basic Rough Grading'}</span>
                      <CheckCircle2 className={`w-4 h-4 ${compactionTested ? 'text-amber-400' : 'text-neutral-600'}`} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {service === 'turnkey' && (
              <div className="space-y-6 pt-2 border-t border-neutral-800/80">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-neutral-300">
                      Finished Living / Building Area
                    </label>
                    <span className="text-sm font-mono font-bold text-amber-400 tabular-nums">
                      {turnkeySqft.toLocaleString()} sq ft
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="6000"
                    step="100"
                    value={turnkeySqft}
                    onChange={(e) => setTurnkeySqft(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-2">
                    Construction Architectural Style
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: 'barndominium', label: 'Barndominium' },
                      { key: 'custom_home', label: 'Custom Residential' },
                      { key: 'commercial_shop', label: 'Shop / Casita' },
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setBuildType(item.key as any)}
                        className={`py-2 px-2 text-xs font-semibold rounded border transition-colors ${
                          buildType === item.key
                            ? 'bg-neutral-800 border-amber-500 text-amber-400'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {service === 'commercial' && (
              <div className="space-y-6 pt-2 border-t border-neutral-800/80">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-neutral-300">
                      Commercial Pavement / Warehouse Slab
                    </label>
                    <span className="text-sm font-mono font-bold text-amber-400 tabular-nums">
                      {sqft.toLocaleString()} sq ft
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="30000"
                    step="1000"
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>
              </div>
            )}

            <div className="text-xs text-neutral-400 flex items-center gap-2 bg-neutral-900/60 p-3 rounded-lg border border-neutral-800">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                All calculations include standard Central Texas heavy equipment mobilization, laser elevation checks, and licensed safety protocols.
              </span>
            </div>
          </div>

          {/* Results Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-neutral-950 to-neutral-900 border-2 border-amber-500/40 rounded-xl p-6 sm:p-8 relative shadow-2xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Itemized Estimate Summary
              </span>
              <span className="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {estimate.durationDays}
              </span>
            </div>

            {/* Estimated Price Range */}
            <div className="my-6">
              <div className="text-xs text-neutral-400 mb-1">Estimated Budget Range</div>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono tabular-nums tracking-tight">
                ${estimate.minCost.toLocaleString()}{' '}
                <span className="text-neutral-500 text-2xl font-light">–</span>{' '}
                <span className="text-amber-400">${estimate.maxCost.toLocaleString()}</span>
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                Recommended Spec: <span className="text-neutral-200 font-medium">{estimate.recommendedSpecs}</span>
              </p>
            </div>

            {/* Equipment & Fleet Allocated */}
            <div className="space-y-3 mb-6 pt-4 border-t border-neutral-800">
              <div className="text-xs font-semibold text-neutral-300">
                Allocated Heavy Machinery & In-House Fleet:
              </div>
              <ul className="space-y-2 text-xs text-neutral-300">
                {estimate.equipment.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lock in CTA */}
            <div className="space-y-3 pt-4 border-t border-neutral-800">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="w-full py-3.5 px-4 text-sm font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <span>Lock In This Estimate & Request Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:2544474500"
                className="w-full py-2.5 px-4 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Discuss with Estimator: (254) 447-4500</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Estimate Submission */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-neutral-950 border border-neutral-800 rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => {
                setShowModal(false);
                setSubmitted(false);
              }}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white text-sm p-1"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                    3 Construction LLC · Direct Bid
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Lock In Estimate & Schedule Free Site Visit
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Selected: {estimate.recommendedSpecs} (~${estimate.minCost.toLocaleString()} - ${estimate.maxCost.toLocaleString()})
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Marcus Vance"
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(254) 555-0199"
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Project Location / City (Central Texas) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. Waco, Temple, Belton, Salado, Gatesville..."
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Additional Notes or Timeline Requirements
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Need house pad ready by next month, soil has some rock..."
                      className="w-full px-3.5 py-2 bg-neutral-900 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-sm font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Estimate to 3 Construction LLC
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Estimate Received!</h3>
                <p className="text-sm text-neutral-300 max-w-sm mx-auto">
                  Thank you, <span className="text-amber-400 font-semibold">{formData.name}</span>. Our senior field estimator will review your project specs for <span className="text-white font-medium">{formData.address}</span> and call you at <span className="text-white font-mono">{formData.phone}</span> within 2 hours.
                </p>
                <div className="pt-4 flex flex-col gap-2">
                  <a
                    href="tel:2544474500"
                    className="py-2.5 px-4 text-xs font-semibold text-white bg-neutral-900 border border-neutral-700 rounded hover:bg-neutral-800"
                  >
                    Need Immediate Urgent Dispatch? Call (254) 447-4500
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setSubmitted(false);
                    }}
                    className="text-xs text-neutral-400 hover:text-white underline pt-2"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
