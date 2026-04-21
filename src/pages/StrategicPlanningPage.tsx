import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Target, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Map,
  Zap,
  Globe,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StrategicPlanningPage() {
  const components = [
    { title: 'Market Analysis', desc: 'Understanding the competitive landscape and identifying growth levers.' },
    { title: 'Financial Modeling', desc: 'Building dynamic forecasts to test various expansion scenarios.' },
    { title: 'Operational Roadmap', desc: 'Mapping out the team and infrastructure needed for sustainable growth.' },
    { title: 'Governance Framework', desc: 'Setting up the boards and reporting cycles to monitor progress.' }
  ];

  return (
    <PageLayout 
      title="Strategic Planning" 
      subtitle="Designing and executing long-term roadmaps for sustainable growth and market expansion."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Design Your Future</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Strategic planning for growth and expansion is a critical process that helps businesses define and achieve their long-term objectives. It involves systematically analyzing the market landscape and crafting a detailed guide.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mantraa Advisory Service acts as your strategic partner, combining data-driven insights with years of UAE market expertise to deliver a blueprint for scaling your operations effectively.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl flex items-center gap-2">
                Define My Strategy <Compass className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="relative">
             <div className="bg-mantraa-paper p-12 rounded-[4rem] border border-slate-100 flex flex-col items-center">
                <Globe className="w-20 h-20 text-mantraa-navy mb-8 animate-spin-slow" />
                <h4 className="text-2xl font-serif text-mantraa-navy mb-8 text-center">Core Pillars of Strategy</h4>
                <div className="space-y-3 w-full">
                   {[
                      'Opportunity Identification',
                      'Resource Allocation',
                      'Competitive Differentiation',
                      'Performance Measurement'
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-50">
                         <CheckCircle2 className="w-4 h-4 text-mantraa-red" />
                         <span className="text-xs font-bold text-slate-700">{item}</span>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* Components Grid */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif text-mantraa-navy text-center mb-16">Key Components of Growth Strategy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {components.map((item, i) => (
                    <div key={i} className="flex gap-6 p-10 bg-white border border-slate-100 rounded-[3rem] hover:shadow-xl transition-all">
                        <div className="w-14 h-14 rounded-2xl bg-mantraa-paper flex items-center justify-center shrink-0">
                            <Zap className="w-7 h-7 text-mantraa-red" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-mantraa-navy mb-3">{item.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Advisory Value Section */}
        <div className="bg-mantraa-navy rounded-[3.5rem] p-12 lg:p-24 text-white overflow-hidden relative">
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-serif mb-8 text-mantraa-gold">Role of Strategy Consultants</h2>
                    <p className="text-slate-400 mb-12">
                        External consultants bring an unbiased perspective and specialized tools like SWOT analysis, PESTEL frameworks, and dynamic financial modeling.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                       <div>
                          <Map className="text-mantraa-gold w-8 h-8 mb-4" />
                          <h4 className="font-bold mb-2">Sustainable Path</h4>
                          <p className="text-xs text-slate-400">Ensuring growth doesn't compromise profitability.</p>
                       </div>
                       <div>
                          <TrendingUp className="text-mantraa-gold w-8 h-8 mb-4" />
                          <h4 className="font-bold mb-2">Market Agility</h4>
                          <p className="text-xs text-slate-400">Systems to adapt to volatile market shifts.</p>
                       </div>
                    </div>
                </div>
                <div className="lg:w-1/2 bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-md">
                   <Target className="w-16 h-16 text-mantraa-gold mb-8 mx-auto" />
                   <h3 className="text-2xl font-serif mb-6 text-center">Ready to Scale?</h3>
                   <p className="text-slate-400 text-center mb-12">
                      Let’s co-create a growth strategy that transforms your vision into a scalable, high-performing UAE enterprise.
                   </p>
                   <Link to="/contact" className="w-full inline-flex items-center justify-center px-10 py-5 bg-white text-mantraa-navy rounded-full font-black hover:bg-mantraa-red hover:text-white transition-all shadow-2xl">
                      Book a Strategy Session <ArrowRight className="w-5 h-5" />
                   </Link>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <Globe className="w-[800px] h-[800px] absolute -bottom-1/4 -right-1/4" />
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
