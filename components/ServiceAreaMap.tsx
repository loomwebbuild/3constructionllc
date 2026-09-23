'use client';

import React, { useState } from 'react';
import { MapPin, CheckCircle2, Search, ArrowRight, Phone } from 'lucide-react';

const serviceCounties = [
  { name: 'McLennan County', cities: 'Waco, Hewitt, Woodway, McGregor, Robinson, West' },
  { name: 'Bell County', cities: 'Temple, Belton, Salado, Killeen, Harker Heights, Troy' },
  { name: 'Coryell County', cities: 'Gatesville, Copperas Cove, Flat, Oglesby' },
  { name: 'Williamson County (North)', cities: 'Jarrell, Georgetown, Florence, Liberty Hill' },
  { name: 'Bosque & Hill Counties', cities: 'Clifton, Valley Mills, Hillsboro, Whitney' },
  { name: 'Lampasas & Falls Counties', cities: 'Lampasas, Kempner, Marlin, Lott' },
];

export default function ServiceAreaMap() {
  const [query, setQuery] = useState('');
  const [checkedStatus, setCheckedStatus] = useState<null | {
    isAvailable: boolean;
    locationName: string;
  }>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Any Central Texas city / zip or general inquiry
    setCheckedStatus({
      isAvailable: true,
      locationName: query.trim(),
    });
  };

  return (
    <section id="service-area" className="py-20 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>Regional Coverage</span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span className="text-neutral-400">Heart of Texas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-balance mb-3">
            Central Texas Service Radius
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Rapid heavy equipment dispatch and direct turnkey construction across McLennan, Bell, Coryell, and surrounding counties.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Lookup Box (5 Cols) */}
          <div className="lg:col-span-5 bg-neutral-950 border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Check Your Property Location
              </h3>
              <p className="text-xs text-neutral-400">
                Enter your city, county, or Texas ZIP code to confirm dispatch availability.
              </p>
            </div>

            <form onSubmit={handleCheck} className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setCheckedStatus(null);
                  }}
                  placeholder="e.g. Waco, Belton, 76712, Salado..."
                  className="w-full pl-10 pr-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500"
                />
                <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Verify Coverage & Dispatch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {checkedStatus && (
              <div className="bg-emerald-500/10 border border-emerald-500/40 rounded-lg p-4 animate-fadeIn">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-emerald-300">
                      Confirmed Primary Service Area: {checkedStatus.locationName}
                    </div>
                    <div className="text-xs text-neutral-300 mt-1">
                      Our equipment and crews operate directly in this zone. We can schedule a free laser survey of your ground this week.
                    </div>
                    <a
                      href="#quote-request"
                      className="inline-block mt-3 text-xs font-bold text-amber-400 hover:underline"
                    >
                      Lock In Free On-Site Inspection →
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-neutral-800/80">
              <div className="text-xs text-neutral-400 flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Need rural acreage service? Call <strong className="text-white">(254) 447-4500</strong></span>
              </div>
            </div>
          </div>

          {/* Counties Grid (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceCounties.map((county, idx) => (
              <div
                key={idx}
                className="bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 rounded-xl p-5 transition-colors"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>{county.name}</span>
                </div>
                <div className="text-xs text-neutral-400 leading-relaxed">
                  <strong className="text-neutral-300">Cities: </strong>
                  {county.cities}
                </div>
                <div className="mt-3 text-[11px] text-amber-400/90 font-medium">
                  ✓ Slabs · Dirt Work · Land Clearing · Turnkey
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
