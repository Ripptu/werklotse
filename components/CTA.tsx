import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="py-10 px-4 md:px-6 mb-10">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto bg-slate rounded-sm py-20 px-6 text-center shadow-xl relative overflow-hidden"
      >
        {/* Subtle animated gradient overlay */}
        <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        />

        <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
            Bereit für Ihr Projekt?
            </h2>
            <p className="text-slate-200 mb-8 max-w-xl mx-auto">
                Sichern Sie sich jetzt Ihren Beratungstermin. Kostenlos und unverbindlich.
            </p>
            <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-navy px-10 py-4 rounded-sm font-bold text-sm md:text-base hover:bg-gray-100 shadow-lg"
            >
            Jetzt anfragen
            </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;