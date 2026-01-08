import React from 'react';
import { motion } from 'framer-motion';
import { PhoneOff, Wallet, HardHat } from 'lucide-react';

const features = [
  {
    icon: <PhoneOff size={24} className="text-navy" />,
    bg: 'bg-gray-100',
    title: 'Schlechte Erreichbarkeit?',
    desc: 'Kein endloses Hinterhertelefonieren. Ihr persönlicher Werklotse kümmert sich um die Kommunikation.'
  },
  {
    icon: <Wallet size={24} className="text-slate" />,
    bg: 'bg-slate-100',
    title: 'Unklare Kosten?',
    desc: 'Wir prüfen jedes Angebot auf Herz und Nieren. Keine versteckten Kosten, volle Transparenz.'
  },
  {
    icon: <HardHat size={24} className="text-charcoal" />,
    bg: 'bg-gray-200',
    title: 'Mangelnde Qualität?',
    desc: 'Wir arbeiten ausschließlich mit geprüften Meisterbetrieben aus der Region zusammen.'
  }
];

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Bauen ohne <span className="text-slate">Kopfschmerzen.</span>
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Die meisten Bauprojekte scheitern nicht an der Technik, sondern an der Organisation. Wir lösen die Probleme, bevor sie entstehen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 50 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                transition: { type: "spring", stiffness: 300 }
              }}
              className="p-8 rounded-sm border-l-4 border-navy bg-white shadow-lg cursor-default group"
            >
              <motion.div 
                className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
              <p className="text-sm text-charcoal/80 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;