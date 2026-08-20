"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Editable from '../Editable';

export default function UsefulLinksPromo() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800/60 dark:border-slate-800 relative z-30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <div className="max-w-3xl space-y-4">
            <Editable id="services.promo.badge" defaultContent="Industry Portals & Tools">
              <span className="text-xs font-black tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-955/40 px-3.5 py-1.5 rounded-full inline-block">
                Industry Portals & Tools
              </span>
            </Editable>
            <Editable id="services.promo.title" defaultContent="Access All Essential Trade & Logistics Portals In One Place">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                Access All Essential Trade & Logistics Portals In One Place
              </h2>
            </Editable>
            <Editable id="services.promo.description" type="textarea" defaultContent="Connect directly with major international and local authorities, chambers of commerce, and civil aviation regulators like IATA, SLFFA, Sri Lanka Customs, and CAA via our secure unified directory.">
              <p className="text-slate-600 dark:text-slate-350 text-base sm:text-lg font-light leading-relaxed">
                Connect directly with major international and local authorities, chambers of commerce, and civil aviation regulators like IATA, SLFFA, Sri Lanka Customs, and CAA via our secure unified directory.
              </p>
            </Editable>
          </div>
          
          <div className="shrink-0 w-full sm:w-auto">
            <Link 
              href="/useful-links" 
              className="group bg-blue-600 hover:bg-blue-50 dark:bg-slate-9000 text-white font-bold px-8 py-4.5 rounded-2xl transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-500/20 transform hover:-translate-y-0.5 w-full sm:w-auto cursor-pointer"
            >
              <Editable id="services.promo.button" defaultContent="Open Useful Links Directory">
                <span>Open Useful Links Directory</span>
              </Editable>
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
