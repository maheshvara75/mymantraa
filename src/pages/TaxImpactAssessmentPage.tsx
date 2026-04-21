import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  BarChart4, 
  Activity, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  FileCheck,
  Zap,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TaxImpactAssessmentPage() {
  const points = [
    { title: 'Tax Thresholds', desc: 'Determining if your income exceeds the AED 375,000 limit.' },
    { title: 'Qualified Income', desc: 'Assessing Free Zone status and qualifying vs non-qualifying revenue.' },
    { title: 'Operational Structure', desc: 'Evaluating if your current legal entity is tax-efficient.' },
    { title: 'Financial Readiness', desc: 'Checking if your accounting practices support CT documentation requirements.' }
  ];

  return (
    <PageLayout 
      title="Tax Impact Assessment" 
      subtitle="Strategic evaluation of how the UAE Corporate Tax regime affects your business."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Pivotal Business Evaluation</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              A Corporate Tax Impact Assessment is crucial for businesses in the UAE as they adapt to the newly implemented regime. This structured process evaluates the implications on your finances and operations.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mantraa Advisory Service conducts a deep dive into your corporate structure, contract arrangements, and revenue streams to provide proactive adjustments and sustainable strategic planning.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl flex items-center gap-2">
                Get an Impact Report <Activity className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {points.map((point, i) => (
              <div key={i} className="p-8 bg-mantraa-paper rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-mantraa-navy transition-colors">
                  <Target className="w-7 h-7 text-mantraa-navy group-hover:text-white" />
                </div>
                <h4 className="text-lg font-bold text-mantraa-navy mb-3">{point.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Grid */}
        <div className="bg-mantraa-navy rounded-[3.5rem] p-12 lg:p-24 text-white overflow-hidden relative mb-24">
            <div className="relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif mb-4">How We Can Assist</h2>
                    <p className="text-slate-400">Expertise, Comprehensive analysis, and Proactive approach.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        { label: 'Exemption Eligibility', desc: 'Identifying if your sector or income type qualifies for 0% rates.' },
                        { label: 'Contractual Review', desc: 'Reviewing key agreements to ensure they account for CT implications.' },
                        { label: 'Relief Analysis', desc: 'Evaluating Small Business Relief and other statutory incentives.' },
                        { label: 'Reporting Gap Analysis', desc: 'Pinpointing where your financial data lacks required detail for CT returns.' }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                <Zap className="w-6 h-6 text-mantraa-gold" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">{item.label}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <BarChart4 className="w-[800px] h-[800px] absolute -bottom-1/4 -right-1/4" />
            </div>
        </div>

        {/* Benefits CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
                { title: 'Expert Consultants', icon: ShieldCheck, detail: 'Specialists in Free Zone and Mainland tax landscapes.' },
                { title: 'Strategic Roadmap', icon: TrendingUp, detail: 'Clear, actionable steps to transition to the CT regime.' },
                { title: 'Regulatory Compliance', icon: FileCheck, detail: 'Total peace of mind knowing you meet all FTA standards.' }
            ].map((item, i) => (
                <div key={i} className="p-10 rounded-[3rem] bg-white border border-slate-100 text-center shadow-sm hover:shadow-xl transition-all">
                    <div className="w-16 h-16 rounded-full bg-mantraa-paper flex items-center justify-center mx-auto mb-6">
                        <item.icon className="w-8 h-8 text-mantraa-red" />
                    </div>
                    <h4 className="text-xl font-bold text-mantraa-navy mb-4">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.detail}</p>
                </div>
            ))}
        </div>
      </div>
    </PageLayout>
  );
}
