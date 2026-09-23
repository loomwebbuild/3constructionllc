'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Clock, Instagram, HardHat } from 'lucide-react';

export default function ContactQuoteSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    services: [] as string[],
    sqftOrAcres: '',
    timeline: 'Within 2-4 Weeks',
    message: '',
  });

  const availableServices = [
    'Turnkey Construction (Site to Structure)',
    'Concrete Foundation / Monolithic Slab',
    'Dirt Work & House Pad Laser Grading',
    'Land Clearing & Forestry Mulching',
    'New Home / Barndominium Build',
    'Commercial Site Prep & Flatwork',
  ];

  const handleCheckboxChange = (serviceName: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceName);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== serviceName) };
      } else {
        return { ...prev, services: [...prev.services, serviceName] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote-request" className="py-20 bg-neutral-950 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Value Props (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                <HardHat className="w-4 h-4 text-amber-500" />
                <span>Get in Touch</span>
                <span className="text-neutral-600" aria-hidden="true">·</span>
                <span className="text-neutral-400">Fast Response</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-balance mb-4">
                Request a Free On-Site Bid & Laser Survey
              </h2>
              <p className="text-neutral-300 text-base leading-relaxed">
                Whether you have raw acreage needing heavy clearing or ready blueprints for a custom home foundation, we deliver honest, transparent bids with zero surprise change orders.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4">
              <a
                href="tel:2544474500"
                className="group flex items-center gap-4 p-4 bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 rounded-xl transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Direct Phone / Call or Text</div>
                  <div className="text-lg font-bold text-white font-mono group-hover:text-amber-400 transition-colors">
                    (254) 447-4500
                  </div>
                </div>
              </a>

              <a
                href="mailto:3constructionllc@gmail.com"
                className="group flex items-center gap-4 p-4 bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 rounded-xl transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Official Project Email</div>
                  <div className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    3constructionllc@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/3constructionllc"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 rounded-xl transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Follow Daily Job Reels</div>
                  <div className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    @3constructionllc
                  </div>
                </div>
              </a>
            </div>

            {/* Response Guarantees */}
            <div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>On-Site Laser Survey within 24-48 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Fully Licensed, Insured & Bonded Contractor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Line-Item Fixed Price Bids (No Hidden Fees)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Bid Request Form (7 Cols) */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Tell Us About Your Project
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Fill out the scope details below for priority contractor scheduling.
                  </p>
                </div>

                {/* Service Checkboxes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Services Needed (Select all that apply) *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableServices.map((svc, idx) => {
                      const selected = formData.services.includes(svc);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleCheckboxChange(svc)}
                          className={`p-2.5 text-xs rounded-lg border text-left flex items-center justify-between transition-colors ${
                            selected
                              ? 'bg-amber-500/10 border-amber-500 text-amber-300 font-semibold'
                              : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                          }`}
                        >
                          <span className="truncate mr-2">{svc}</span>
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 ${
                              selected ? 'text-amber-400' : 'text-neutral-700'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Personal Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Davis"
                      className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(254) 555-0100"
                      className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Project City or County *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. Waco, Temple, Belton, Salado..."
                      className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Estimated Size (Sq Ft or Acres)
                    </label>
                    <input
                      type="text"
                      value={formData.sqftOrAcres}
                      onChange={(e) => setFormData({ ...formData, sqftOrAcres: e.target.value })}
                      placeholder="e.g. 3,500 sq ft or 5 acres"
                      className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Target Start Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      <option>Urgent (Within 1-2 Weeks)</option>
                      <option>Within 2-4 Weeks</option>
                      <option>Within 1-3 Months</option>
                      <option>Planning / Budgeting Phase</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Project Notes or Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the ground, tree density, slope, soil, or any specific blueprints..."
                    className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-sm font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-xl transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Request for Free On-Site Bid</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Bid Request Received!
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto">
                  Thank you, <span className="text-amber-400 font-semibold">{formData.name}</span>. Our project superintendent will review your specifications for <span className="text-white font-medium">{formData.address}</span> and reach out at <span className="text-white font-mono">{formData.phone}</span> within 24 hours.
                </p>
                <div className="pt-6">
                  <a
                    href="tel:2544474500"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-neutral-950 border border-neutral-700 rounded-lg hover:bg-neutral-800"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Have an urgent question? Call (254) 447-4500</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
