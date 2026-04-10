import { motion } from 'motion/react';
import { ArrowRight, Shield, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000"
          alt="Dubai Skyline"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mantraa-navy/90 via-mantraa-navy/70 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-mantraa-red/20 text-mantraa-red text-xs font-bold uppercase tracking-widest mb-6">
              Trusted Advisory in UAE
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
              Your Strategic Partner for <br />
              <span className="italic text-mantraa-gold">Growth & Compliance</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed font-light">
              Mantraa provides comprehensive business solutions in the UAE, from company formation to complex tax advisory and CFO services. We simplify the complexities so you can focus on your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-mantraa-red text-white font-bold hover:bg-white hover:text-mantraa-navy transition-all duration-300 shadow-xl group"
              >
                Book a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold hover:bg-white/20 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Stats/Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20"
          >
            {[
              { icon: Shield, label: 'Compliance First', desc: 'Expert VAT & Tax Advisory' },
              { icon: Globe, label: 'Global Reach', desc: 'Freezone & Offshore Setup' },
              { icon: TrendingUp, label: 'Strategic Growth', desc: 'CFO & Advisory Services' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <item.icon className="w-6 h-6 text-mantraa-gold" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">{item.label}</h3>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
