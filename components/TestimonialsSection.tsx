'use client';

import React from 'react';
import { Star, Quote, CheckCircle2, Award } from 'lucide-react';

const reviews = [
  {
    name: 'Brett Hollingsworth',
    role: 'Acreage Property Owner & Barndominium Builder',
    location: 'Waco / Crawford, TX',
    scope: '10-Acre Land Clearing + 4,500 sq ft Slab + Turnkey Shell',
    quote:
      '3 Construction LLC was the only contractor in Central Texas willing and equipped to handle the whole job from start to finish. They cleared dense cedar in two days, graded a rock-solid pad, and poured our post-tension slab perfectly level. No subcontractor runaround.',
    date: 'Verified Project · Spring 2026',
  },
  {
    name: 'Cody Miller',
    role: 'Commercial Developer & Shop Owner',
    location: 'Temple, TX',
    scope: 'Commercial Warehouse Pad & 6,400 sq ft Concrete Slab',
    quote:
      'Their laser grading precision saved us thousands in concrete overage costs. The slab passed engineering inspection on the very first try with mirror-smooth power trowel finish. Fast, honest communication and unbeatable work ethic.',
    date: 'Verified Project · Early 2026',
  },
  {
    name: 'Sarah & Derek Jenkins',
    role: 'Custom Home Builders',
    location: 'Salado, TX',
    scope: 'Hillside House Pad Excavation + Concrete SOG Foundation',
    quote:
      'We had a severe 7-foot slope on our lot that other contractors quoted ridiculous numbers for. 3 Construction LLC brought out their 20-ton excavator, built proper terraced swales, and delivered a perfect foundation on schedule.',
    date: 'Verified Project · Fall 2025',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Reputation & Track Record</span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span className="text-neutral-400">Client Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-balance mb-3">
            Trusted by Landowners & Builders Across Central Texas
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            See why homeowners, ranch owners, and commercial builders choose 3 Construction LLC for their most critical groundwork.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors shadow-lg"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80">
                <div className="text-sm font-bold text-white">{rev.name}</div>
                <div className="text-xs text-amber-400/90 font-medium">{rev.role}</div>
                <div className="text-xs text-neutral-500 mt-1">{rev.location}</div>
                <div className="text-[11px] text-neutral-400 mt-2 font-mono bg-neutral-950 p-1.5 rounded border border-neutral-800">
                  {rev.scope}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
