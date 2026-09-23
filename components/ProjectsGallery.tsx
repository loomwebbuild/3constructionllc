'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Layers, MapPin, Calendar, CheckCircle2, ChevronRight, Eye, HardHat } from 'lucide-react';

interface Project {
  id: string;
  category: 'all' | 'turnkey' | 'concrete' | 'dirtwork' | 'clearing' | 'commercial';
  title: string;
  categoryLabel: string;
  location: string;
  stats: string;
  timeline: string;
  description: string;
  image: string;
  highlights: string[];
}

const projectsList: Project[] = [
  {
    id: '1',
    category: 'turnkey',
    categoryLabel: 'Turnkey Residential',
    title: 'Custom Modern Barndominium Estate',
    location: 'Waco, TX',
    stats: '3,800 sq ft Finished + 1,200 sq ft Shop',
    timeline: '4 Months Total',
    description: 'Complete turnkey package including 5 acres of cedar clearing, laser pad cut, 5,000 sq ft monolithic post-tension slab, engineered steel frame and full interior finish-out.',
    image: '/images/new_home_build.jpg',
    highlights: ['5 Acres Mulched', 'Post-Tension Slab', 'Standing Seam Metal Roof', 'Vaulted Great Room'],
  },
  {
    id: '2',
    category: 'concrete',
    categoryLabel: 'Concrete Slab',
    title: 'Engineered Commercial Workshop Foundation',
    location: 'Temple, TX',
    stats: '6,400 sq ft · 6-Inch #4 Rebar Slab',
    timeline: '5 Days Pour & Finish',
    description: 'Heavy duty commercial slab with 5,000 PSI high-early mix, laser screeded flat within 1/8" FF/FL spec, power troweled mirror finish and saw-cut relief joints.',
    image: '/images/concrete_slab.jpg',
    highlights: ['6000 PSI Concrete', 'Laser Screed Finish', 'Integrated Trench Drains', 'Machine Polished'],
  },
  {
    id: '3',
    category: 'dirtwork',
    categoryLabel: 'Dirt Work & Pads',
    title: 'Hillside House Pad & Retention Drainage',
    location: 'Belton, TX',
    stats: '1,200 Yards Select Fill Imported',
    timeline: '4 Days Grading',
    description: 'Bench cut steep limestone slope, engineered terrace retaining wall, imported select road base, compacted to 98% Standard Proctor with dual-laser motor grader.',
    image: '/images/dirt_work.jpg',
    highlights: ['98% Proctor Density', 'Dual-Laser Grading', 'Culvert & Swale Drainage', 'Soil Stability Guarantee'],
  },
  {
    id: '4',
    category: 'clearing',
    categoryLabel: 'Land Clearing',
    title: '14-Acre Ranch Forestry Mulching & Pasture Recovery',
    location: 'Salado, TX',
    stats: '14 Acres Dense Cedar & Mesquite',
    timeline: '3 Days High-Flow Mulching',
    description: 'Selectively mulched dense cedar and brush canopy while preserving old growth Live Oaks, returning overgrown cattle pasture to pristine park-like condition.',
    image: '/images/land_clearing.jpg',
    highlights: ['Zero Burn Piles Needed', 'Eco-Friendly Mulch Layer', 'Heritage Oak Preservation', 'Fence Line Cleared'],
  },
  {
    id: '5',
    category: 'commercial',
    categoryLabel: 'Commercial Site Prep',
    title: 'Industrial Equipment Parking & Logistics Slab',
    location: 'Killeen / Hewitt, TX',
    stats: '12,500 sq ft Heavy Duty Concrete',
    timeline: '2 Weeks Total',
    description: 'Sub-base soil stabilization, 8-inch reinforced concrete apron, heavy vehicle turning radiuses, and ADA concrete curb ramps for logistics company.',
    image: '/images/hero_construction_turnkey.jpg',
    highlights: ['8-Inch Heavy Duty Slab', 'Heavy Axle Load Rating', 'ADA Compliant Curbs', 'Rapid Turnaround'],
  },
  {
    id: '6',
    category: 'concrete',
    categoryLabel: 'Concrete Foundation',
    title: 'Custom Residential Monolithic Slab with Porches',
    location: 'Gatesville, TX',
    stats: '3,200 sq ft · 4-Inch SOG Foundation',
    timeline: '3 Days Execution',
    description: 'Residential foundation featuring deepened beam trenches, vapor barrier membrane, grade 60 steel rebar reinforcement, and smooth broom finished covered patios.',
    image: '/images/concrete_slab.jpg',
    highlights: ['15 mil Vapor Barrier', 'Deep Grade Beams', 'Smooth Broom Patio Finish', 'Passed 1st City Inspection'],
  },
];

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === 'all'
      ? projectsList
      : projectsList.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <HardHat className="w-4 h-4 text-amber-500" />
              <span>Project Portfolio</span>
              <span className="text-neutral-600" aria-hidden="true">·</span>
              <span className="text-neutral-400">Central Texas Groundwork</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-balance">
              Recent Completed Projects
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mt-2">
              Explore recent turnkey builds, high-strength concrete pours, and heavy dirt jobs across Central Texas.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg shrink-0">
            {[
              { id: 'all', label: 'All Jobs' },
              { id: 'turnkey', label: 'Turnkey Homes' },
              { id: 'concrete', label: 'Concrete Slabs' },
              { id: 'dirtwork', label: 'Dirt Pads' },
              { id: 'clearing', label: 'Land Clearing' },
              { id: 'commercial', label: 'Commercial' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeFilter === tab.id
                    ? 'bg-amber-500 text-neutral-950 font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 flex flex-col justify-between shadow-lg"
            >
              <div className="relative h-56 w-full overflow-hidden bg-neutral-950">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                
                {/* Location Badge */}
                <div className="absolute bottom-3 left-3 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded text-xs font-semibold text-neutral-200 flex items-center gap-1.5 border border-neutral-800">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{proj.location}</span>
                </div>

                <div className="absolute top-3 right-3 bg-amber-500/90 text-neutral-950 text-[11px] font-black uppercase px-2 py-0.5 rounded">
                  {proj.categoryLabel}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                    {proj.title}
                  </h3>
                  <div className="text-xs text-amber-400/90 font-mono mb-2">
                    {proj.stats}
                  </div>
                  <p className="text-xs text-neutral-400 line-clamp-2 mb-4 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-300">
                  <span className="text-neutral-500">Timeline: {proj.timeline}</span>
                  <span className="text-amber-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    View Project <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-neutral-950 border border-neutral-800 rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-neutral-900/90 text-neutral-300 hover:text-white p-1.5 rounded-full border border-neutral-700"
            >
              ✕
            </button>

            <div className="relative h-64 sm:h-72 w-full">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                <span>{selectedProject.categoryLabel}</span>
                <span className="text-neutral-600" aria-hidden="true">·</span>
                <span className="text-neutral-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  {selectedProject.location}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">{selectedProject.title}</h3>
              <div className="text-xs font-mono text-amber-400 mb-4">{selectedProject.stats} · Duration: {selectedProject.timeline}</div>

              <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Key Scope Execution Points
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300 bg-neutral-900/80 p-2.5 rounded border border-neutral-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-neutral-800">
                <a
                  href="#quote-request"
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 py-3 px-4 text-xs font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors text-center"
                >
                  Request Similar Project Estimate
                </a>
                <a
                  href="tel:2544474500"
                  className="py-3 px-4 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg text-center"
                >
                  Call (254) 447-4500
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
