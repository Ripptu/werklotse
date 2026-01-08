import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, ArrowRight, Home, Sun, Ruler, Wrench } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-navy">Unsere Handwerks-Leistungen</h2>
          <p className="text-slate mt-2">Alles aus einer Hand. Koordiniert und geprüft.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
          
          {/* Card 1: Sanierung (Tall) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="lg:col-span-1 lg:row-span-2 bg-navy rounded-sm p-8 flex flex-col justify-between overflow-hidden relative group cursor-pointer"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full border-2 border-slate-500/30 flex items-center justify-center mb-6 bg-navy-800 group-hover:bg-navy-700 transition-colors">
                <Home className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Sanierung & Umbau</h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Kernsanierung, Dachausbau oder energetische Modernisierung. Wir steuern alle Gewerke für Sie.
              </p>
              <div className="text-white text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all border-b border-transparent hover:border-white w-fit pb-1">
                Projekt starten <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Visual element: Blueprint lines */}
            <motion.div 
              className="absolute bottom-0 right-0 opacity-10 pointer-events-none"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
                <Ruler size={200} className="text-white -mb-10 -mr-10" />
            </motion.div>
          </motion.div>

          {/* Right Column Group */}
          <div className="lg:col-span-2 lg:row-span-2 flex flex-col gap-6">
            
            {/* Card 2: Neubau & Anbau (Wide Slate) */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               whileHover={{ scale: 1.01 }}
               className="bg-slate rounded-sm p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden group cursor-pointer"
            >
              <div className="flex-1 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                    <Ruler className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Neubau & Anbau</h3>
                <p className="text-gray-100 text-sm mb-6 max-w-sm">
                    Vom Wintergarten bis zum Einfamilienhaus. Planungssicherheit durch geprüfte Architekten und Bauunternehmen.
                </p>
                <div className="text-white text-sm font-bold flex items-center gap-2">
                    Mehr erfahren <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              {/* Visual: Abstract House Structure */}
              <motion.div 
                className="flex-1 flex items-center justify-center relative opacity-20"
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ type: "spring", stiffness: 50 }}
              >
                  <Home size={160} className="text-white" />
              </motion.div>
            </motion.div>

            {/* Bottom Split Row */}
            <div className="flex flex-col md:flex-row gap-6 h-full">
                
                {/* Card 3: Energy (White) */}
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.1 }}
                   viewport={{ once: true }}
                   whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                   className="flex-1 bg-white border border-gray-200 rounded-sm p-8 relative overflow-hidden group cursor-pointer"
                >
                     <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center mb-4 group-hover:bg-yellow-100 transition-colors">
                        <Sun className="text-navy" size={20} />
                    </div>

                    <div className="mt-8 mb-4">
                         <div className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded inline-flex items-center uppercase">
                            Sparpotenzial
                         </div>
                    </div>

                    <h3 className="text-lg font-bold text-navy mb-2">Energie & Solar</h3>
                    <p className="text-charcoal/70 text-xs mb-4">PV-Anlagen, Wärmepumpen und Dämmung. Reduzieren Sie Ihre Nebenkosten.</p>
                </motion.div>

                {/* Card 4: Repair (Charcoal) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-charcoal rounded-sm p-8 relative overflow-hidden text-white group cursor-pointer"
                >
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                        <Wrench className="text-white" size={20} />
                    </div>

                    <div className="absolute top-6 right-6">
                         <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-lg font-bold text-white mb-2">Reparatur & Service</h3>
                        <p className="text-gray-400 text-xs mb-4">Schnelle Hilfe bei Wasserschaden, Heizungsausfall oder Sturmschäden.</p>
                         <div className="text-white text-[10px] font-bold uppercase tracking-wide flex items-center gap-1 border-b border-white/50 pb-0.5 w-fit group-hover:border-white transition-colors">
                            Hilfe anfordern <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;