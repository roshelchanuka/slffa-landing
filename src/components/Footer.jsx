import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, Link as LinkIcon, Share2 } from 'lucide-react';
import Editable from './Editable';

export default function Footer() {
  return (
    <footer className="bg-slffaBlue text-white pt-24 pb-8 relative overflow-hidden">
      {/* Beautiful top feathering gradient */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-50/50 via-slate-50/15 dark:from-slate-950/50 dark:via-slate-950/15 to-transparent pointer-events-none z-10 transition-colors duration-300"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img src="/images/drive/1d1z1Z0IMS6m0bu0Vqiyth92-Q0ezsPB0.png" alt="SLFFA Logo" className="h-16 w-auto mr-4 object-contain" />
              <h3 className="text-2xl font-bold tracking-wider">
                SLFFA<span className="text-blue-300">CARGO</span>
              </h3>
            </div>
            <Editable id="footer.about.description" type="textarea" defaultContent="SLFFA Cargo Services Ltd is a public unquoted company with limited liability, solely owned by the Freight Forwarding fraternity of Sri Lanka. We provide speedy, safe and efficient services including specialized Cool Room facilities.">
              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
                SLFFA Cargo Services Ltd is a public unquoted company with limited liability, solely owned by the Freight Forwarding fraternity of Sri Lanka. We provide speedy, safe and efficient services including specialized Cool Room facilities.
              </p>
            </Editable>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Share2 className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><LinkIcon className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Globe className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Editable id="footer.quicklinks.title" defaultContent="Quick Links">
              <h4 className="text-lg font-semibold mb-6 border-b border-blue-800 pb-2">Quick Links</h4>
            </Editable>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/useful-links" className="hover:text-white transition-colors">Useful Links</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News & Events</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <Editable id="footer.contact.title" defaultContent="Contact Info">
              <h4 className="text-lg font-semibold mb-6 border-b border-blue-800 pb-2">Contact Info</h4>
            </Editable>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Editable id="footer.contact.address" defaultContent="Terminal 02, air Cargo Village, Bandaranayake International Air port, Katunayake, sri lanka">
                  <span>Terminal 02, air Cargo Village, Bandaranayake International Air port, Katunayake, sri lanka</span>
                </Editable>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Editable id="footer.contact.phone" defaultContent="+94 11 225 2533/6">
                  <span>+94 11 225 2533/6</span>
                </Editable>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Editable id="footer.contact.email" defaultContent="admin@slffacs.com, import@slffacs.com">
                  <span>admin@slffacs.com, import@slffacs.com</span>
                </Editable>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SLFFA Cargo Services Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
