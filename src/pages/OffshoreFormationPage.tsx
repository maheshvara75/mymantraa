import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Building2, 
  ShieldCheck, 
  Globe, 
  Lock, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2,
  Anchor,
  Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OffshoreFormationPage() {
  const benefits = [
    { title: 'Tax Relief', desc: 'Enjoy maximum tax efficiency and exemptions for global activities.', icon: TrendingUp },
    { title: 'Confidentiality', desc: 'Enhanced privacy for company details and shareholders.', icon: Lock },
    { title: 'Asset Protection', desc: 'Robust legal framework to secure international assets.', icon: ShieldCheck },
    { title: '100% Foreign Ownership', desc: 'No requirement for a local UAE partner or sponsor.', icon: Globe }
  ];

  const points = [
    'Legal and Regulatory Framework',
    'Global Market Access',
    'Access to International Funding',
    'Limited Liability Protection',
    'Geopolitical Stability',
    'Favorable Business Nature'
  ];

  return (
    <PageLayout 
      title="Offshore Company Formation" 
      subtitle="Secure and efficient international business solutions via Dubai Offshore entities."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Dubai Offshore: A Global Business Hub</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Dubai, as a leading global business hub, offers attractive opportunities for offshore company formation. These entities, also known as Dubai Offshore International Companies, are primarily set up for conducting business activities outside the UAE.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              They provide significant advantages such as tax relief, full foreign ownership, confidentiality, and limited liability. Mantraa Advisory Services assists you in selecting the right jurisdiction and managing the entire registration process.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-8 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-lg flex items-center gap-2">
                Get Started <Anchor className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-8 bg-mantraa-paper rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:bg-mantraa-red transition-colors shadow-sm">
                  <benefit.icon className="w-6 h-6 text-mantraa-navy group-hover:text-white" />
                </div>
                <h4 className="font-bold text-mantraa-navy mb-3">{benefit.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Mantraa */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white mb-24 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-8 text-mantraa-gold">Choosing the Right Jurisdiction</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Choosing the right jurisdiction is crucial for offshore registration. We evaluate factors like applicable laws, geopolitics, and asset types to recommend the best fit for your needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {points.map(point => (
                  <div key={point} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-mantraa-gold" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-12 rounded-[2rem] backdrop-blur-sm">
              <Scale className="w-12 h-12 text-mantraa-gold mb-6" />
              <h4 className="text-xl font-bold mb-4">Necessary Documentation</h4>
              <p className="text-slate-400 text-sm mb-6">
                Our experts help you gather and verify all required documentation to ensure a swift and error-free registration according to international compliance standards.
              </p>
              <Link to="/contact" className="text-white font-bold inline-flex items-center gap-2 hover:gap-4 transition-all">
                Learn Document Reqs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-mantraa-gold/5 blur-[120px] rounded-full translate-y-1/2 translate-x-1/2" />
        </div>

        {/* Top Options */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-mantraa-navy mb-4">Top Offshore Jurisdictions in the UAE</h2>
            <p className="text-slate-500">Optimized environments for global trade and asset management.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'JAFZA Offshore', desc: 'One of the most prestigious offshore registries in the region, ideal for holding UAE property.' },
              { name: 'RAK ICC', desc: 'Flexible and cost-effective jurisdiction with high levels of privacy and modern regulations.' },
              { name: 'Ajman Offshore', desc: 'Speedy and economical setup process with straightforward administrative requirements.' }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-mantraa-paper border border-slate-50 text-center hover:scale-105 transition-transform duration-300">
                <Building2 className="w-10 h-10 text-mantraa-navy mx-auto mb-6" />
                <h4 className="text-xl font-serif font-bold text-mantraa-navy mb-4">{item.name}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
