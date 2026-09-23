'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, HardHat, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['services', 'turnkey-process', 'cost-calculator', 'projects', 'service-area'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 shadow-xl shadow-black/40 py-3'
            : 'bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Zone 1: Brand Wordmark (Single Line) */}
            <a
              href="#"
              className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
              aria-label="3 Construction LLC - Home"
            >
              <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center text-neutral-950 font-black text-lg shadow-md group-hover:bg-amber-400 transition-colors">
                3
              </div>
              <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                <span className="font-extrabold tracking-wider text-white text-lg group-hover:text-amber-400 transition-colors uppercase">
                  CONSTRUCTION
                </span>
                <span className="text-xs font-bold text-amber-500 tracking-widest uppercase">
                  LLC
                </span>
              </div>
            </a>

            {/* Zone 2: Curated Clean Nav Links (Single-Line, 4-6 items) */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              <a
                href="#services"
                className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded transition-colors whitespace-nowrap ${
                  activeSection === 'services'
                    ? 'text-amber-400 bg-neutral-900/80 font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-900/50'
                }`}
              >
                Services
              </a>

              <a
                href="#turnkey-process"
                className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded transition-colors whitespace-nowrap ${
                  activeSection === 'turnkey-process'
                    ? 'text-amber-400 bg-neutral-900/80 font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-900/50'
                }`}
              >
                Turnkey Process
              </a>

              <a
                href="#cost-calculator"
                className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded transition-colors whitespace-nowrap ${
                  activeSection === 'cost-calculator'
                    ? 'text-amber-400 bg-neutral-900/80 font-semibold'
                    : 'text-neutral-300 hover:text-amber-400 hover:bg-neutral-900/50'
                }`}
              >
                <span className="text-amber-400 font-semibold">Cost Calculator</span>
              </a>

              <a
                href="#projects"
                className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded transition-colors whitespace-nowrap ${
                  activeSection === 'projects'
                    ? 'text-amber-400 bg-neutral-900/80 font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-900/50'
                }`}
              >
                Projects
              </a>

              <a
                href="#service-area"
                className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded transition-colors whitespace-nowrap ${
                  activeSection === 'service-area'
                    ? 'text-amber-400 bg-neutral-900/80 font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-900/50'
                }`}
              >
                Service Area
              </a>

              <a
                href="#faq"
                className="hidden xl:inline-block px-3 py-1.5 text-xs lg:text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900/50 rounded transition-colors whitespace-nowrap"
              >
                FAQ
              </a>
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href="tel:2544474500"
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-neutral-200 hover:text-white bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 rounded-lg hover:bg-neutral-800/80 transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-mono">(254) 447-4500</span>
              </a>

              <a
                href="#quote-request"
                className="px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors whitespace-nowrap shadow-sm flex items-center gap-1.5 active:scale-95"
              >
                <span>Request Bid</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Navigation Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-fadeIn">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Card */}
          <div className="fixed top-16 inset-x-4 bg-neutral-950 border border-neutral-800 rounded-2xl p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <HardHat className="w-4 h-4 text-amber-500" />
                <span>3 Construction LLC · Navigation</span>
              </div>
              <span className="text-[11px] text-neutral-400">Central Texas</span>
            </div>

            <nav className="flex flex-col gap-1 text-sm font-medium">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-neutral-200 hover:text-white hover:bg-neutral-900 transition-colors"
              >
                <span>Services (Concrete, Dirt, Clearing)</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </a>

              <a
                href="#turnkey-process"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-neutral-200 hover:text-white hover:bg-neutral-900 transition-colors"
              >
                <span>4-Step Turnkey Process</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </a>

              <a
                href="#cost-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-amber-400 font-bold bg-amber-500/10 border border-amber-500/20 transition-colors"
              >
                <span>Instant Cost Calculator</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </a>

              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-neutral-200 hover:text-white hover:bg-neutral-900 transition-colors"
              >
                <span>Projects & Gallery</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </a>

              <a
                href="#equipment"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-neutral-200 hover:text-white hover:bg-neutral-900 transition-colors"
              >
                <span>Heavy Fleet & Machinery</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </a>

              <a
                href="#service-area"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-neutral-200 hover:text-white hover:bg-neutral-900 transition-colors"
              >
                <span>Service Area Radius</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </a>

              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-neutral-200 hover:text-white hover:bg-neutral-900 transition-colors"
              >
                <span>Contractor FAQ</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </a>
            </nav>

            <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2.5">
              <a
                href="tel:2544474500"
                className="w-full py-3 px-4 bg-neutral-900 border border-neutral-700 text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2 active:bg-neutral-800"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Direct: (254) 447-4500</span>
              </a>

              <a
                href="#quote-request"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 bg-amber-500 text-neutral-950 rounded-xl font-bold text-xs flex items-center justify-center gap-2 active:bg-amber-400"
              >
                <span>Request Free On-Site Bid</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
