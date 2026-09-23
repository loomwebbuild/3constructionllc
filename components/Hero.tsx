'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, HardHat, Phone, Calculator, ArrowRight, CheckCircle2, Award, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-neutral-800 bg-neutral-950">
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden opacity-35">
        <Image
          src="/images/hero_construction_turnkey.jpg"
          alt="3 Construction LLC - Heavy equipment and concrete construction in Central Texas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-90 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Measured scrim for 4.5:1 WCAG contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-neutral-950/60 to-neutral-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker / Regional Trust Indicator */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-4">
          <HardHat className="w-4 h-4 text-amber-500" />
          <span>Central Texas Turnkey Contractor</span>
          <span className="text-neutral-500" aria-hidden="true">·</span>
          <span className="text-neutral-300">Residential & Commercial</span>
          <span className="text-neutral-500" aria-hidden="true">·</span>
          <span className="text-neutral-300">Fully Insured & Bonded</span>
        </div>

        {/* Primary Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] text-balance mb-6">
            From Raw Land to <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
              Precision Concrete & Turnkey Builds.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mb-8">
            Complete turnkey site development, precision laser dirt work, heavy forestry land clearing, engineered concrete foundations, and new home construction across Central Texas. Single point of accountability.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href="#cost-calculator"
              className="px-6 py-3.5 text-sm font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded transition-all duration-150 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 whitespace-nowrap"
            >
              <Calculator className="w-4 h-4" />
              <span>Instant Cost Estimator</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:2544474500"
              className="px-6 py-3.5 text-sm font-semibold text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 rounded transition-colors flex items-center justify-center gap-2.5 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Direct: (254) 447-4500</span>
            </a>

            <a
              href="#quote-request"
              className="px-5 py-3.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap sm:border-0 border border-neutral-800"
            >
              <span>Request On-Site Bid</span>
              <span className="text-amber-400 text-xs">→</span>
            </a>
          </div>

          {/* Value Adjacency & Proof Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-neutral-800/90 max-w-4xl">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums">
                100%
              </div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">
                Turnkey & In-House Fleet
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums">
                5,000+ PSI
              </div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">
                Engineered Concrete Slabs
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums">
                Dual Laser
              </div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">
                GPS Sub-Inch Pad Grading
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tabular-nums">
                0 Days
              </div>
              <div className="text-xs text-neutral-400 mt-1 font-medium">
                Subcontractor Delays
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
