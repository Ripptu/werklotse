import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Hammer, CalendarCheck, MapPin } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  },
};

const floatingAnimation = (delay: number) => ({
  y: [0, -15, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
    delay: delay,
  },
});

const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden grid-bg">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 bg-slate-600/10 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-wide border border-slate-600/20">
              <MapPin size={12} />
              <span>Hamburg & Bremen</span>
            </div>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-navy leading-[1.1] tracking-tight">
            Endlich der richtige Handwerker. <span className="block text-slate">Persönlich. Vor Ort. Sicher.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg text-charcoal/80 max-w-lg leading-relaxed">
            Ihr Partner für geprüfte Fachbetriebe im Norden. Wir vermitteln nicht nur – wir begleiten Ihr Bauvorhaben von der Planung bis zur Abnahme.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-navy text-white font-semibold px-8 py-4 rounded-sm hover:bg-navy-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Projekt anfragen
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-gray-200 text-charcoal font-medium px-8 py-4 rounded-sm hover:bg-gray-50 transition-colors"
            >
              Mehr erfahren
            </motion.button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="pt-4 flex items-center gap-6 text-sm text-charcoal/70 font-medium">
            <div className="flex items-center gap-2">
                <ShieldCheck className="text-navy" size={18} />
                <span>Geprüfte Betriebe</span>
            </div>
            <div className="flex items-center gap-2">
                <Hammer className="text-navy" size={18} />
                <span>Meisterqualität</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visuals */}
        <div className="relative h-[450px] w-full flex items-center justify-center">
          
          {/* Main Visual - Abstract Representation of Blueprint/House */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 bg-gray-100 rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden border border-gray-200 shadow-inner"
          >
             {/* Placeholder for a high-quality construction image, using a colored pattern for now */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-500 via-gray-200 to-white"></div>
             <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-navy/5 rounded-tl-[100px]"></div>
          </motion.div>

          {/* Floating Card - Handwerker Found */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            style={{ y: 0 }} // Initialize for animate prop
          >
             <motion.div
               animate={floatingAnimation(0)}
               className="absolute top-12 right-4 md:right-8 bg-white p-5 rounded-lg shadow-xl border-l-4 border-navy w-64 z-20 cursor-default"
               whileHover={{ scale: 1.05 }}
             >
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-navy/10 rounded-md flex items-center justify-center text-navy">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-navy">Fachbetrieb gefunden</h3>
                    <p className="text-xs text-slate">Dachdeckermeister Müller</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal/70 bg-gray-50 p-2 rounded">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Verfügbar in 3 Wochen
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Card - Offer Check */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.4, type: 'spring' }}
             className="absolute top-48 left-4 md:left-8 z-30"
          >
            <motion.div
                animate={floatingAnimation(1)}
                whileHover={{ scale: 1.05 }}
                className="bg-slate p-5 rounded-lg shadow-xl text-white w-60"
            >
              <div className="flex gap-3 mb-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm">
                  100%
                </div>
                <div>
                  <h3 className="font-bold text-sm">Angebot geprüft</h3>
                  <p className="text-xs text-gray-200">Festpreis-Garantie</p>
                </div>
              </div>
               <div className="h-1 w-full bg-white/20 rounded-full mt-2 overflow-hidden">
                   <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      className="h-full bg-white"
                   ></motion.div>
               </div>
            </motion.div>
          </motion.div>

          {/* Floating Card - Appointment */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, type: 'spring' }}
            className="absolute bottom-12 right-12 z-10"
          >
             <motion.div
               animate={floatingAnimation(2)}
               whileHover={{ scale: 1.05 }}
               className="bg-white p-4 rounded-lg shadow-xl border border-gray-100 w-56"
             >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-charcoal rounded-md flex items-center justify-center text-white">
                    <CalendarCheck size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs text-navy">Vor-Ort Termin</h3>
                    <p className="text-[10px] text-slate">Morgen, 10:00 Uhr</p>
                  </div>
                </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      {/* Background Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;