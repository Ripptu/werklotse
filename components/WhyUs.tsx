import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, ClipboardCheck, Map } from 'lucide-react';

const reasons = [
  {
    icon: <Handshake size={28} />,
    title: 'Vertrauen & Handschlag',
    desc: 'Wir sind Hanseaten. Ein Wort zählt. Wir arbeiten fair, transparent und auf Augenhöhe.'
  },
  {
    icon: <ClipboardCheck size={28} />,
    title: 'Geprüfte Qualität',
    desc: 'Jeder Handwerksbetrieb in unserem Netzwerk durchläuft einen strengen Prüfprozess.'
  },
  {
    icon: <Map size={28} />,
    title: 'Regional verwurzelt',
    desc: 'Wir kennen den Norden. Kurze Wege und persönliche Ansprechpartner in Bremen & Hamburg.'
  }
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Warum Werklotse?</h2>
          <p className="text-slate mt-4 text-lg">Weil Vertrauen vor Ort beginnt.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {reasons.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 rounded-full bg-slate/10 flex items-center justify-center text-navy mb-6 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-3">{item.title}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed max-w-[240px]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;