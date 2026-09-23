'use client';

import React from 'react';
import { Phone, Calculator } from 'lucide-react';

export default function QuickCallSticky() {
  return (
    <div className="fixed bottom-3 inset-x-3 z-40 sm:hidden flex items-center gap-2 p-1.5 bg-neutral-950/95 backdrop-blur-md border border-neutral-800 rounded-xl shadow-2xl">
      <a
        href="tel:2544474500"
        className="flex-1 py-2.5 px-3 bg-neutral-900 border border-neutral-700 text-white rounded-lg flex items-center justify-center gap-1.5 text-xs font-bold active:bg-neutral-800 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-amber-400" />
        <span>(254) 447-4500</span>
      </a>

      <a
        href="#cost-calculator"
        className="flex-1 py-2.5 px-3 bg-amber-500 text-neutral-950 rounded-lg flex items-center justify-center gap-1.5 text-xs font-black active:bg-amber-400 transition-colors"
      >
        <Calculator className="w-3.5 h-3.5" />
        <span>Get Estimate</span>
      </a>
    </div>
  );
}
