"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { featuresData, stcBg } from '../../data/homeData';
import Editable from '../Editable';

export default function FeaturedServices({ hideSTC = false, hideCoolRooms = false, showNewsIntro = false }) {
  const { Snowflake, ShieldCheck, FileText, ArrowRight } = LucideIcons;

  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className="h-8 w-8 text-blue-500" /> : null;
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className={hideSTC ? "w-full relative z-10" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"}>
        {/* Feature Showcase Card/Box */}
        <div className={hideSTC ? "w-full flex flex-col lg:flex-row items-stretch" : "max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch"}>
          {/* Left Box: Cool Rooms OR News & Events */}
          {(showNewsIntro || !hideCoolRooms) && (
            <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex-grow ${hideSTC ? 'w-full rounded-none border-x-0' : 'lg:w-3/5 rounded-3xl border'} bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800/80 dark:border-slate-800 p-8 md:p-10 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-5px_rgba(37,99,235,0.08)] transition-all duration-500 relative overflow-hidden flex flex-col md:flex-row items-stretch gap-6`}
          >
            {/* Elegant side color highlight bar */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-600 to-sky-400"></div>
            
            {/* Decorative background circle */}
            <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-blue-50 dark:bg-slate-900/70 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>
            
            {/* Slow falling snow background animation (Only for Cool Rooms) */}
            {!showNewsIntro && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
                <div className="snowflake snow-1">❄</div>
                <div className="snowflake snow-2">❅</div>
                <div className="snowflake snow-3">❆</div>
                <div className="snowflake snow-4">❄</div>
                <div className="snowflake snow-5">❅</div>
                <div className="snowflake snow-6">❆</div>
                <div className="snowflake snow-7">❄</div>
                <div className="snowflake snow-8">❅</div>
                <div className="snowflake snow-9">❆</div>
                <div className="snowflake snow-10">❄</div>
                <div className="snowflake snow-11">❅</div>
                <div className="snowflake snow-12">❆</div>
              </div>
            )}
 
            <div className="flex-grow flex flex-col justify-between space-y-4 md:space-y-0 text-left relative z-10">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-955/40 border border-blue-100 dark:border-blue-900/30 px-3 py-1 rounded-full text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                  {showNewsIntro ? (
                    <LucideIcons.Newspaper className="h-4 w-4 text-blue-500" />
                  ) : (
                    <Snowflake className="h-4 w-4 animate-pulse text-blue-500" />
                  )}
                  {showNewsIntro ? (
                    <Editable id="home.simplenews.badge" defaultContent="Stay Updated">
                      <span>Stay Updated</span>
                    </Editable>
                  ) : (
                    <Editable id="home.coolrooms.announcement.badge" defaultContent="Upgraded Facility Announcement">
                      <span>Upgraded Facility Announcement</span>
                    </Editable>
                  )}
                </div>
                
                {showNewsIntro ? (
                  <Editable id="home.simplenews.title" defaultContent="Latest News & Events">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      Latest News & Events
                    </h3>
                  </Editable>
                ) : (
                  <Editable id="home.coolrooms.announcement.title" defaultContent="State-of-the-Art Cargo Cold Chain & Cool Rooms">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      State-of-the-Art Cargo Cold Chain & Cool Rooms
                    </h3>
                  </Editable>
                )}
                
                {showNewsIntro ? (
                  <Editable id="home.simplenews.description" type="textarea" defaultContent="Stay up-to-date with the latest operational announcements, facility upgrades, industry milestones, and association news from SLFFA Cargo Services.">
                    <p className="text-slate-655 dark:text-slate-300 text-sm leading-relaxed max-w-2xl">
                      Stay up-to-date with the latest operational announcements, facility upgrades, industry milestones, and association news from SLFFA Cargo Services.
                    </p>
                  </Editable>
                ) : (
                  <Editable id="home.coolrooms.announcement.description" type="textarea" defaultContent="We have expanded and upgraded our Katunayake airport airside cool room terminal. Our facility features advanced multi-zone temperature storage channels (spanning deep freezer, chilled, and controlled ambient ranges) managed under a certified maintenance standard to guarantee cargo integrity.">
                    <p className="text-slate-655 dark:text-slate-300 text-sm leading-relaxed max-w-2xl">
                      We have expanded and upgraded our Katunayake airport airside cool room terminal. Our facility features advanced multi-zone temperature storage channels (spanning deep freezer, chilled, and controlled ambient ranges) managed under a certified maintenance standard to guarantee cargo integrity.
                    </p>
                  </Editable>
                )}
              </div>
 
              <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {showNewsIntro ? (
                  <Link 
                    href="/news" 
                    className="hover-blink-blue inline-flex items-center text-sm font-extrabold text-blue-600 dark:text-blue-400 transition-all duration-300 gap-2 cursor-pointer decoration-2 underline underline-offset-4 decoration-blue-600/30 hover:decoration-blue-600"
                  >
                    <Editable id="home.simplenews.button" defaultContent="Explore All News">
                      <span>Explore All News</span>
                    </Editable>
                    <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  </Link>
                ) : (
                  <Link 
                    href="/cool-rooms" 
                    className="hover-blink-blue inline-flex items-center text-sm font-extrabold text-blue-600 dark:text-blue-400 transition-all duration-300 gap-2 cursor-pointer decoration-2 underline underline-offset-4 decoration-blue-600/30 hover:decoration-blue-600"
                  >
                    Explore More About Our Cool Room Facilities
                    <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  </Link>
                )}
              </div>
            </div>
 
            {/* Right Column: Single Big Icon */}
            <div className="flex items-center justify-center shrink-0 w-full md:w-36 relative z-10 select-none pointer-events-none">
              {showNewsIntro ? (
                <LucideIcons.Newspaper className="h-16 w-16 md:h-20 md:w-20 text-blue-500/80 drop-shadow-[0_4px_20px_rgba(59,130,246,0.25)] hover:scale-110 transition-transform duration-500" />
              ) : (
                <Snowflake className="h-16 w-16 md:h-20 md:w-20 text-blue-500/90 animate-spin-slow drop-shadow-[0_4px_20px_rgba(59,130,246,0.25)]" />
              )}
            </div>
          </motion.div>
          )}

          {/* Right Box: Standard Trading Conditions Link Box */}
          {!hideSTC && (
            <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`flex-grow ${hideCoolRooms ? 'w-full min-h-[300px] md:min-h-[340px] p-10 md:p-12' : 'lg:w-2/5 p-8 md:p-10'} rounded-3xl border border-slate-200 dark:border-slate-800/80 dark:border-slate-800 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-5px_rgba(245,158,11,0.08)] transition-all duration-500 relative overflow-hidden flex flex-col justify-between group`}
          >
            {/* Background Image with hover zoom */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-100 group-hover:scale-105 z-0" 
              style={{ backgroundImage: `url('${stcBg}')` }}
            ></div>
            {/* Overlay for legibility */}
            <div className="absolute inset-0 bg-white/90 dark:bg-slate-950/78 dark:bg-slate-900/78 group-hover:bg-white/80 dark:bg-slate-950/68 dark:group-hover:bg-slate-900/68 transition-colors duration-500 z-0"></div>
 
            {/* Elegant side color highlight bar in amber/gold */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-50 to-orange-400 z-10"></div>
 
            {/* Decorative background circle */}
            <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-amber-50/80 dark:bg-amber-950/10 rounded-full blur-3xl pointer-events-none z-10"></div>
 
            <div className="space-y-4 relative z-10 text-left">
              <div className="inline-flex items-center space-x-2 bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/30 px-3 py-1 rounded-full text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4 text-amber-500" />
                <Editable id="home.stc.announcement.badge" defaultContent="Regulatory Standards">
                  <span>Regulatory Standards</span>
                </Editable>
              </div>
 
              <Editable id="home.stc.announcement.title" defaultContent="Standard Trading Conditions">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Standard Trading Conditions
                </h3>
              </Editable>
 
              <Editable id="home.stc.announcement.description" type="textarea" defaultContent="View the official SLFFA Standard Trading Conditions governing all forwarding, logistics, warehousing, and handling operations conducted by member entities.">
                <p className="text-slate-655 dark:text-slate-355 text-sm leading-relaxed max-md select-all">
                  View the official SLFFA Standard Trading Conditions governing all forwarding, logistics, warehousing, and handling operations conducted by member entities.
                </p>
              </Editable>
            </div>
 
            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
              <Link 
                href="/tools#standard-trading" 
                className="hover-blink-blue inline-flex items-center text-sm font-extrabold text-amber-600 dark:text-amber-455 transition-all duration-300 gap-2 cursor-pointer decoration-2 underline underline-offset-4 decoration-amber-600/30 hover:decoration-amber-600"
              >
                Read Standard Trading Conditions
                <ArrowRight className="h-4 w-4 text-amber-600 dark:text-amber-455 shrink-0" />
              </Link>
            </div>
 
            {/* Decorative large background icon watermark */}
            <div className="absolute right-6 bottom-6 opacity-[0.06] select-none pointer-events-none">
              <FileText className="h-24 w-24 text-slate-900 dark:text-slate-100" />
            </div>
          </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
