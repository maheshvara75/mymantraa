import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowRight,
  UserCheck,
  Star,
  Hotel
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResidencyPage() {
  const visaTypes = [
    { title: 'Golden Visa', desc: 'Long-term residency (5 or 10 years) for investors, entrepreneurs, and experts.', icon: Star },
    { title: 'Investor Visa', desc: 'Secure residency by investing in the UAE\'s thriving business landscape.', icon: Building2 },
    { title: 'Employment Visa', desc: 'Assistance for corporate entities in securing work permits and residencies for staff.', icon: Users },
    { title: 'Dependent Visa', desc: 'Comprehensive support for sponsoring family and dependents.', icon: Hotel }
  ];

  return (
    <PageLayout 
      title="UAE Residency Services" 
      subtitle="Obtaining a UAE residency could be your key to unlocking world-class business and luxury living."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Secure Your Future with UAE Residency</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              In today’s fast-paced business environment, are you looking to unlock new opportunities, secure your future, or enjoy a better quality of life? Obtaining a UAE residency is the key to everything the region has to offer.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mantraa’s UAE Residency Services provide comprehensive, end-to-end support, ensuring a smooth and hassle-free application process for you and your family.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-lg flex items-center gap-2"
              >
                Apply Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-square rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000" 
                alt="Dubai Skyline" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-full">
               <Globe className="w-16 h-16 text-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-mantraa-paper rounded-[3rem] p-12 lg:p-24 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-mantraa-navy mb-4">Why Choose UAE Residency?</h2>
            <p className="text-slate-500">Access premium healthcare, luxury lifestyle, and a booming economic hub.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Tax Benefits', desc: 'Enjoy the UAE\'s favorable tax regime for individuals and businesses.' },
              { title: 'Global Mobility', desc: 'Secure a base in one of the world\'s most connected travel hubs.' },
              { title: 'Premium Living', desc: 'Elite infrastructure, security, and educational standards.' }
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                   <ShieldCheck className="w-8 h-8 text-mantraa-navy" />
                </div>
                <h4 className="text-xl font-bold text-mantraa-navy mb-4">{benefit.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visa Solutions */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-mantraa-navy mb-4">Comprehensive Visa Solutions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our residency experts handle the documentation and processing for a wide range of visa types.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visaTypes.map((visa, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-mantraa-red transition-all flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-mantraa-navy/5 flex items-center justify-center mb-6 group-hover:bg-mantraa-navy transition-colors">
                  <visa.icon className="w-7 h-7 text-mantraa-navy group-hover:text-white" />
                </div>
                <h4 className="text-lg font-bold text-mantraa-navy mb-4">{visa.title}</h4>
                <p className="text-slate-500 text-xs flex-grow leading-relaxed mb-6">{visa.desc}</p>
                <Link to="/contact" className="text-mantraa-red font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                   Start Process <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white overflow-hidden relative">
          <div className="relative z-10 text-center">
             <UserCheck className="w-16 h-16 text-mantraa-gold mx-auto mb-8" />
             <h2 className="text-4xl font-serif mb-8">Ready to secure your future?</h2>
             <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-12">
               Our team provides comprehensive support ensuring a smooth and hassle-free application process for you and your family.
             </p>
             <Link 
              to="/contact" 
              className="px-12 py-5 bg-white text-mantraa-navy rounded-full font-bold hover:bg-mantraa-red hover:text-white transition-all shadow-2xl"
             >
               Get Legal Assistance
             </Link>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[100px] border-white/20 rounded-full w-[800px] h-[800px]" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
