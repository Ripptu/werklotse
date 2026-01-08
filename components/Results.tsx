import React, { useEffect, useState } from 'react';
import { motion, animate, useSpring, useTransform, useMotionValue, useInView } from 'framer-motion';
import { ArrowRight, Star, Users } from 'lucide-react';
import { useRef } from 'react';

// Counter Component
const Counter = ({ value, label, subtext }: { value: number, label: string, subtext: string }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
    
    useEffect(() => {
        if (inView) {
            // Updated: Use animate() directly instead of motion.animate()
            const controls = animate(count, value, { duration: 2, ease: "easeOut" });
            return controls.stop;
        }
    }, [inView, value]);

    return (
        <div ref={ref} className="bg-navy-900 p-4 rounded-sm border border-navy-800">
            <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">{label}</p>
            <div className="flex items-baseline">
                <motion.span className="text-3xl font-bold text-white">{rounded}</motion.span>
                <span className="text-white text-lg ml-0.5">+</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1">{subtext}</p>
        </div>
    );
};


const Results: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto bg-navy rounded-sm p-8 md:p-20 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10"
          >
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Erfolgsgeschichten</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight font-display">
              Zufriedene Bauherren <br/> im ganzen Norden.
            </h2>
            <p className="text-slate-200 text-lg max-w-md">
              Qualität setzt sich durch. Sehen Sie, was wir für unsere Kunden realisiert haben.
            </p>
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-navy font-bold px-8 py-3 rounded-sm flex items-center gap-2 hover:bg-slate-100 transition-colors"
            >
              Referenzen ansehen <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          {/* Right Metrics UI */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-navy-800 rounded-sm p-6 md:p-8 border border-navy-800 shadow-2xl relative z-10"
          >
             <div className="flex justify-between items-center mb-6 border-b border-navy-900 pb-4">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Aktueller Status</span>
                <div className="flex gap-1">
                    {[1,2,3,4,5].map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5 + (i * 0.1), type: 'spring' }}
                        >
                            <Star size={14} className="fill-yellow-500 text-yellow-500" />
                        </motion.div>
                    ))}
                </div>
             </div>

             <div className="grid grid-cols-2 gap-4 mb-6">
                 <Counter value={500} label="Projekte" subtext="Realisiert in 2025" />
                 <Counter value={85} label="Partner" subtext="Geprüfte Meisterbetriebe" />
             </div>

             <div className="space-y-3">
                 <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex items-center justify-between text-xs text-slate-300 bg-navy-900 p-3 rounded-sm"
                 >
                    <div className="flex items-center gap-3">
                        <Users className="text-slate-400" size={16} />
                        <span>"Endlich pünktliche Handwerker!"</span>
                    </div>
                    <span className="text-[10px] opacity-50">– Familie K., Bremen</span>
                 </motion.div>
                 <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex items-center justify-between text-xs text-slate-300 bg-navy-900 p-3 rounded-sm"
                 >
                    <div className="flex items-center gap-3">
                        <Users className="text-slate-400" size={16} />
                        <span>"Budget exakt eingehalten."</span>
                    </div>
                     <span className="text-[10px] opacity-50">– Dr. Weber, Hamburg</span>
                 </motion.div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Results;