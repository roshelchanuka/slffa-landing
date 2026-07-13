"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-40 pb-16 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Cookie Policy
          </h1>
          
          <div className="text-slate-700 dark:text-slate-300 space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">1. What are cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide information to the owners of the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">2. How we use cookies</h2>
              <p className="mb-3">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                By using our website, you consent to our use of cookies.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Essential cookies:</strong> Required for the website to function properly.</li>
                <li><strong>Analytical cookies:</strong> Help us understand how visitors interact with our website.</li>
                <li><strong>Functional cookies:</strong> Enable personalization and enhanced functionality.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">3. Managing cookies</h2>
              <p>
                You can set your browser not to accept cookies. However, in a few cases, some of our website features 
                may not function as a result. You can change your cookie preferences at any time through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">4. Contact us</h2>
              <p>
                If you have any questions about our Cookie Policy, please contact us at:
                <br />
                Email: <a href="mailto:admin@slffacs.com" className="text-blue-600 dark:text-blue-400 hover:underline">admin@slffacs.com</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
