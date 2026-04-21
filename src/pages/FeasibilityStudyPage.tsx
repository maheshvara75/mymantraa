import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Target, 
  BarChart, 
  Search, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Map,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeasibilityStudyPage() {
  const process = [
    { title: 'Business Goals', desc: 'Understanding your objectives to align our analysis with your mission.' },
    { title: 'Value Proposition', desc: 'Clarifying your unique market offering and budget constraints.' },
    { title: 'Market Awareness', desc: 'Analyzing competitors and demand for your proposed project.' },
    { title: 'Risk Identification', desc: 'Spotting potential legal and financial hurdles before you invest.' }
  ];

  return (
    <PageLayout 
      title="Business Feasibility Study" 
      subtitle="Comprehensive analysis to determine the viability and realistic potential of your business ideas."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Data-Driven Decision Making</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              A feasibility study is a critical deep-dive into your proposed project or business model. Before committing capital, you need to know if your idea is technically possible and financially profitable in the UAE market.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mantraa Advisory Service identifies potential risks early, allowing you to tailor your strategy or budget constraints. We provide the realistic business insights necessary for enhanced credibility with investors.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl flex items-center gap-2">
                Analyze My Idea <Search className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {process.map((step, i) => (
              <div key={i} className="p-8 bg-mantraa-paper rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:bg-mantraa-navy transition-colors shadow-sm">
                  <Zap className="w-6 h-6 text-mantraa-navy group-hover:text-white" />
                </div>
                <h4 className="font-bold text-mantraa-navy mb-2 text-sm">{step.title}</h4>
                <p className="text-[10px] text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white mb-24 relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl font-serif mb-12 text-center text-mantraa-gold">Advantages of Our Study</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: 'Realistic Insights', detail: 'Actual data vs optimistic projections.', icon: BarChart },
                        { title: 'Market Awareness', detail: 'Deep dive into local UAE demand.', icon: Map },
                        { title: 'Risk Abatement', detail: 'Early identification of potential failures.', icon: ShieldCheck },
                        { title: 'Investor Credibility', detail: 'Back your pitch with verified facts.', icon: TrendingUp }
                    ].map((item, i) => (
                        <div key={i} className="text-center group">
                            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-mantraa-gold transition-colors">
                                <item.icon className="w-8 h-8 text-mantraa-gold group-hover:text-mantraa-navy" />
                            </div>
                            <h4 className="font-bold mb-3">{item.title}</h4>
                            <p className="text-slate-400 text-xs">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-mantraa-gold/10 blur-[120px] rounded-full" />
        </div>

        {/* Process Roadmap */}
        <div className="bg-mantraa-paper rounded-[3rem] p-12 lg:p-20 border border-slate-100 flex flex-col items-center">
            <h2 className="text-3xl font-serif text-mantraa-navy mb-8">Our Four-Phase Methodology</h2>
            <div className="space-y-6 w-full max-w-2xl">
                {[
                    'Phase 1: Legal Framework Assessment',
                    'Phase 2: Technical & Operational Feasibility',
                    'Phase 3: Financial Projections & ROI Analysis',
                    'Phase 4: Synthesis & Recommendation Report'
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-4 bg-white rounded-2xl shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-mantraa-navy flex items-center justify-center text-white font-bold shrink-0">
                            {i + 1}
                        </div>
                        <p className="text-slate-700 font-medium">{item}</p>
                    </div>
                ))}
            </div>
            <Link to="/contact" className="mt-12 inline-flex items-center gap-3 px-10 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl">
                Start My Study <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
      </div>
    </PageLayout>
  );
}
