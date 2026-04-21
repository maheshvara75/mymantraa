import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Target, 
  Zap, 
  ArrowRight,
  TrendingUp,
  Search,
  CheckCircle2,
  PieChart,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BusinessValuationPage() {
  const process = [
    { title: 'Purpose Definition', desc: 'Understanding why you need the valuation to tailor our methodology.' },
    { title: 'Historical Analysis', desc: 'Reviewing past financial statements and tax filings.' },
    { title: 'Management Meetings', desc: 'Discussing business operations, strategy, and market conditions.' },
    { title: 'Performance Comparison', desc: 'Benchmarking your company against industry peers.' },
    { title: 'Data Collection', desc: 'Gathering relevant contracts, budgets, and economic data.' },
    { title: 'Compliance & Reporting', desc: 'Adhering to professional standards like IFRS and IVSC.' }
  ];

  return (
    <PageLayout 
      title="Business Valuation" 
      subtitle="Accurate and defensible assessment of your company's worth in the UAE market."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">What Is Your Business Worth?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Knowing the real value of your business is essential for mergers, acquisitions, fundraising, or ownership transfers. Our valuation experts provide a meticulous analysis that goes beyond simple numbers.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mantraa leverages standard valuation approaches—market, income, and asset-based—to provide a comprehensive report that stands up to scrutiny from banks, investors, and regulators.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl flex items-center gap-2">
                Evaluate My Firm <Search className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {process.slice(0, 4).map((item, i) => (
              <div key={i} className="p-8 bg-mantraa-paper rounded-3xl border border-slate-100 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:bg-mantraa-navy transition-colors shadow-sm">
                  <span className="text-mantraa-navy group-hover:text-white font-serif font-black">{i + 1}</span>
                </div>
                <h4 className="font-bold text-mantraa-navy mb-2 text-sm">{item.title}</h4>
                <p className="text-[10px] text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif text-mantraa-navy text-center mb-16">Valuation Approaches & Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: 'Income Approach', icon: TrendingUp, detail: 'Future cash flow discounting for growth firms.' },
                    { title: 'Market Approach', icon: PieChart, detail: 'Comparison with recent industry transactions.' },
                    { title: 'Asset-Based', icon: ShieldCheck, detail: 'Focus on tangible and intangible net assets.' }
                ].map((item, i) => (
                    <div key={i} className="text-center p-10 bg-white border border-slate-100 rounded-[3rem] hover:shadow-xl transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-mantraa-paper flex items-center justify-center mx-auto mb-6">
                            <item.icon className="w-8 h-8 text-mantraa-navy" />
                        </div>
                        <h4 className="font-bold text-mantraa-navy mb-3">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.detail}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Why Mantraa */}
        <div className="bg-mantraa-navy rounded-[3.5rem] p-12 lg:p-24 text-white overflow-hidden relative">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-4xl font-serif mb-8 text-mantraa-gold">Strategic Valuation Scenarios</h2>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                         'Mergers & Acquisitions',
                         'Shareholder Disputes',
                         'Tax & Regulatory Filing',
                         'Fundraising/Exit Strategy',
                         'Financial Reporting',
                         'Strategic Planning'
                      ].map((scenario, i) => (
                         <div key={i} className="flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10">
                            <CheckCircle2 className="w-4 h-4 text-mantraa-gold" />
                            <span className="text-[10px] font-bold">{scenario}</span>
                         </div>
                      ))}
                   </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-md">
                   <Target className="w-16 h-16 text-mantraa-gold mb-8 mx-auto" />
                   <h3 className="text-2xl font-serif mb-6 text-center">Unbiased & Independent</h3>
                   <p className="text-slate-400 text-center mb-12">
                      Get a certified report that provides a fair and objective value for your entity, widely accepted by UAE legal and financial institutions.
                   </p>
                   <Link to="/contact" className="w-full inline-flex items-center justify-center px-10 py-5 bg-white text-mantraa-navy rounded-full font-black hover:bg-mantraa-red hover:text-white transition-all shadow-2xl">
                      Request a Valuation <ArrowRight className="w-5 h-5" />
                   </Link>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <BarChart className="w-[800px] h-[800px] absolute -bottom-1/4 -left-1/4" />
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
