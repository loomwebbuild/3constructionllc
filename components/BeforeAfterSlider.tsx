'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Sliders, Sparkles, CheckCircle2, ArrowLeftRight } from 'lucide-react';

interface ComparisonPair {
  id: string;
  title: string;
  location: string;
  scope: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  afterLabel: string;
  details: string;
}

const comparisons: ComparisonPair[] = [
  {
    id: 'pad_and_slab',
    title: 'Raw Central Texas Brush to Laser Pad & High-Strength Monolithic Slab',
    location: 'Waco / Crawford, TX',
    scope: 'Land Clearing + Dirt Pad + 4,200 sq ft Concrete Foundation',
    beforeImg: '/images/land_clearing.jpg',
    afterImg: '/images/concrete_slab.jpg',
    beforeLabel: 'BEFORE: 8-Acre Overgrown Cedar & Slope',
    afterLabel: 'AFTER: Precision Laser Pad & 5000 PSI Slab',
    details: 'Mulched 8 acres of cedar, excavated 450 yds of select fill with GPS grade control, and poured monolithic post-tension slab in 6 days.',
  },
  {
    id: 'turnkey_barndo',
    title: 'Rough Excavated Lot to Modern Turnkey Barndominium Home',
    location: 'Salado / Belton, TX',
    scope: 'Dirt Work + Engineered Slab + Custom Metal Frame & Siding',
    beforeImg: '/images/dirt_work.jpg',
    afterImg: '/images/new_home_build.jpg',
    beforeLabel: 'BEFORE: Rough Rocky Slope Dirt Work',
    afterLabel: 'AFTER: Turnkey Custom Home & Driveway',
    details: 'Completed complete earthwork leveling, retaining perimeter, foundation pour, and full modern steel barndominium structure.',
  },
];

export default function BeforeAfterSlider() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const active = comparisons[activeTab];

  return (
    <section className="py-20 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <ArrowLeftRight className="w-4 h-4 text-amber-500" />
            <span>Visual Proof of Execution</span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span className="text-neutral-400">Before & After Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-balance mb-3">
            Real Site Transformations
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Drag the interactive slider to see how 3 Construction LLC converts raw Texas scrub and rough terrain into clean engineered pads and finished structures.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 mb-6">
          {comparisons.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(idx);
                setSliderPos(50);
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors border ${
                activeTab === idx
                  ? 'bg-amber-500 text-neutral-950 border-amber-500 font-bold'
                  : 'bg-neutral-950 text-neutral-300 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {item.title.split(' to ')[0]} → {item.title.split(' to ')[1]}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden p-4 sm:p-6 shadow-2xl">
          
          <div
            ref={containerRef}
            onMouseDown={() => (isDragging.current = true)}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[480px] lg:h-[540px] w-full rounded-xl overflow-hidden select-none cursor-ew-resize"
          >
            {/* After Image (Background full) */}
            <div className="absolute inset-0">
              <Image
                src={active.afterImg}
                alt={active.afterLabel}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md border border-neutral-700/80 px-3 py-1.5 rounded text-xs font-bold text-amber-400">
                {active.afterLabel}
              </div>
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative h-full w-[100vw] max-w-7xl">
                <Image
                  src={active.beforeImg}
                  alt={active.beforeLabel}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md border border-neutral-700/80 px-3 py-1.5 rounded text-xs font-bold text-neutral-200">
                {active.beforeLabel}
              </div>
            </div>

            {/* Drag Handle Bar */}
            <div
              className="absolute inset-y-0 w-1 bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.8)] cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-9 h-9 -ml-0.5 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center shadow-2xl font-bold text-xs border-2 border-white">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Project Details Footer */}
          <div className="mt-4 pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-white">{active.title}</div>
              <div className="text-xs text-neutral-400 mt-0.5">
                <span>Location: {active.location}</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Scope: {active.scope}</span>
              </div>
              <p className="text-xs text-neutral-300 mt-1">{active.details}</p>
            </div>

            <a
              href="#quote-request"
              className="px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded transition-colors whitespace-nowrap self-start sm:self-center"
            >
              Get Quote for Similar Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
