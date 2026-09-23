'use client';

import React from 'react';
import { Phone, Mail, Instagram, ShieldCheck, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 text-lg font-bold tracking-tight text-white"
            >
              <div className="w-7 h-7 rounded bg-amber-500 flex items-center justify-center text-neutral-950 font-black text-base">
                3
              </div>
              <span className="font-bold tracking-wider uppercase">
                CONSTRUCTION <span className="text-amber-400">LLC</span>
              </span>
            </a>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Central Texas premier turnkey construction contractor. Specializing in high-strength concrete foundations, heavy dirt work, laser pad grading, forestry land clearing, and residential & commercial new home builds.
            </p>
            <div className="flex items-center gap-4 text-neutral-300 pt-2">
              <a
                href="https://www.instagram.com/3constructionllc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@3constructionllc</span>
              </a>
              <span className="text-neutral-700" aria-hidden="true">·</span>
              <span className="text-neutral-400">Insured & Bonded</span>
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <div className="font-bold uppercase tracking-wider text-white text-xs mb-4">
              Core Capabilities
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Turnkey Site Construction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Engineered Concrete Slabs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Laser Dirt Work & Grading
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Forestry Mulching & Clearing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Barndominiums & New Homes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Commercial Civil Flatwork
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Nav Links */}
          <div>
            <div className="font-bold uppercase tracking-wider text-white text-xs mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#cost-calculator" className="hover:text-amber-400 transition-colors text-amber-400 font-medium">
                  Instant Cost Calculator
                </a>
              </li>
              <li>
                <a href="#turnkey-process" className="hover:text-amber-400 transition-colors">
                  4-Step Turnkey Process
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors">
                  Completed Projects
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-amber-400 transition-colors">
                  Heavy Fleet & Machinery
                </a>
              </li>
              <li>
                <a href="#service-area" className="hover:text-amber-400 transition-colors">
                  Service Area Radius
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Contractor FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <div className="font-bold uppercase tracking-wider text-white text-xs mb-4">
              Direct Contact
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:2544474500"
                  className="flex items-center gap-2 text-white hover:text-amber-400 font-mono font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>(254) 447-4500</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:3constructionllc@gmail.com"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>3constructionllc@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Central Texas (Waco · Temple · Belton · Salado)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-xs">
          <div>
            © {new Date().getFullYear()} 3 Construction LLC. All rights reserved. Registered Texas Contractor.
          </div>

          <div className="flex items-center gap-6">
            <a href="#quote-request" className="hover:text-neutral-300 transition-colors">
              Request Bid
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
