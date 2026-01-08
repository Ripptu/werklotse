import React from 'react';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-100 bg-white pt-16 pb-8 text-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <img 
                src="https://i.postimg.cc/rm91BzCf/123.png" 
                alt="WERKLOTSE Logo" 
                className="h-8 object-contain grayscale opacity-80"
              />
            </div>
            <p className="text-xs text-charcoal/60 leading-relaxed max-w-[220px]">
              Ihr verlässlicher Partner für Handwerksleistungen in Bremen und Hamburg.
            </p>
          </div>

          <div className="col-span-1">
             <h4 className="text-[10px] font-bold text-navy uppercase tracking-widest mb-6">Unternehmen</h4>
             <ul className="space-y-3 text-xs text-charcoal/80">
                <li><a href="#" className="hover:text-navy hover:underline">Über Werklotse</a></li>
                <li><a href="#" className="hover:text-navy hover:underline">Für Fachbetriebe</a></li>
                <li><a href="#" className="hover:text-navy hover:underline">Karriere</a></li>
             </ul>
          </div>

          <div className="col-span-1">
             <h4 className="text-[10px] font-bold text-navy uppercase tracking-widest mb-6">Rechtliches</h4>
             <ul className="space-y-3 text-xs text-charcoal/80">
                <li><a href="#" className="hover:text-navy hover:underline">Impressum</a></li>
                <li><a href="#" className="hover:text-navy hover:underline">Datenschutz</a></li>
                <li><a href="#" className="hover:text-navy hover:underline">AGB</a></li>
             </ul>
          </div>

           <div className="col-span-1">
             <h4 className="text-[10px] font-bold text-navy uppercase tracking-widest mb-6">Kontakt</h4>
             <ul className="space-y-3 text-xs text-charcoal/80">
                <li><a href="#" className="hover:text-navy flex items-center gap-2"><MapPin size={14}/> Hamburg & Bremen</a></li>
                <li><a href="#" className="hover:text-navy flex items-center gap-2"><Phone size={14}/> 040 - 123 456 78</a></li>
                <li><a href="#" className="hover:text-navy flex items-center gap-2"><Mail size={14}/> info@werklotse.de</a></li>
             </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-charcoal/40">© 2025 Werklotse GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;