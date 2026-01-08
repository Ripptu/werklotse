import React from 'react';
import { motion } from 'framer-motion';
import { Home, Award, Building2, Landmark, CheckCircle2 } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
};

const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 border-b border-gray-50 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-bold text-slate uppercase tracking-widest mb-8">
          Ihr Partner in der Region – Vertrauen in Bremen & Hamburg
        </p>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center md:justify-around items-center gap-8 md:gap-12 opacity-70"
        >
            {/* Trust Badges / Concept Logos */}
            <motion.div variants={item} className="flex items-center gap-2 font-bold text-lg text-charcoal hover:opacity-100 transition-opacity cursor-default">
                <Home className="text-navy" /> Haus & Grund
            </motion.div>
            <motion.div variants={item} className="flex items-center gap-2 font-bold text-lg text-charcoal hover:opacity-100 transition-opacity cursor-default">
                <Award className="text-navy" /> Meisterbetrieb
            </motion.div>
             <motion.div variants={item} className="flex items-center gap-2 font-bold text-lg text-charcoal hover:opacity-100 transition-opacity cursor-default">
                <Building2 className="text-navy" /> Handelskammer
            </motion.div>
             <motion.div variants={item} className="flex items-center gap-2 font-bold text-lg text-charcoal hover:opacity-100 transition-opacity cursor-default">
                <Landmark className="text-navy" /> KfW Förderung
            </motion.div>
             <motion.div variants={item} className="flex items-center gap-2 font-bold text-lg text-charcoal hover:opacity-100 transition-opacity cursor-default">
                <CheckCircle2 className="text-navy" /> TÜV Geprüft
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;