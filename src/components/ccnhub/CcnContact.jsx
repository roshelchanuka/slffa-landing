"use client";

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import Editable from '../Editable';

export default function CcnContact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        className="bg-transparent"
      >
        <div className="py-12">
          <div className="text-center mb-12">
            <Editable id="ccnhub.contact.title" defaultContent="Contact CCN">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Contact CCN</h2>
            </Editable>
            <Editable id="ccnhub.contact.subtitle" defaultContent="Get in touch with our team for inquiries or support">
              <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">Get in touch with our team for inquiries or support</p>
            </Editable>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm border border-sky-100">
                <MapPin className="w-8 h-8 text-slffaBlue" />
              </div>
              <Editable id="ccnhub.contact.address.label" defaultContent="Office Address">
                <h4 className="text-sm font-extrabold text-slffaBlue uppercase tracking-widest mb-3">Office Address</h4>
              </Editable>
              <Editable id="ccnhub.contact.address.value" type="textarea" defaultContent="37D, Torrington Avenue,\nColombo 07,\nSri Lanka.">
                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  37D, Torrington Avenue,<br />
                  Colombo 07,<br />
                  Sri Lanka.
                </p>
              </Editable>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm border border-sky-100">
                <Phone className="w-8 h-8 text-slffaBlue" />
              </div>
              <Editable id="ccnhub.contact.phone.label" defaultContent="Telephone">
                <h4 className="text-sm font-extrabold text-slffaBlue uppercase tracking-widest mb-3">Telephone</h4>
              </Editable>
              <Editable id="ccnhub.contact.phone.value" defaultContent="(+94) 114 963 375">
                <a href="tel:+94114963375" className="text-slate-900 dark:text-white font-bold hover:text-slffaBlue transition-colors block text-xl">
                  (+94) 114 963 375
                </a>
              </Editable>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm border border-sky-100">
                <Mail className="w-8 h-8 text-slffaBlue" />
              </div>
              <Editable id="ccnhub.contact.email.label" defaultContent="E-mail">
                <h4 className="text-sm font-extrabold text-slffaBlue uppercase tracking-widest mb-3">E-mail</h4>
              </Editable>
              <div className="flex flex-col space-y-2 items-center">
                <Editable id="ccnhub.contact.email1" defaultContent="ccn1@slffacs.com">
                  <a href="mailto:ccn1@slffacs.com" className="text-slate-600 dark:text-slate-400 font-medium hover:text-slffaBlue transition-colors">
                    ccn1@slffacs.com
                  </a>
                </Editable>
                <Editable id="ccnhub.contact.email2" defaultContent="project.ccn@slffacs.com">
                  <a href="mailto:project.ccn@slffacs.com" className="text-slate-600 dark:text-slate-400 font-medium hover:text-slffaBlue transition-colors">
                    project.ccn@slffacs.com
                  </a>
                </Editable>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
