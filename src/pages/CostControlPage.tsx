import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  BarChart, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PieChart,
  Zap,
  Target,
  TrendingDown,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CostControlPage() {
  const methods = [
    { title: 'Budgetary Control', desc: 'Setting financial targets and monitoring variances in real-time.' },
    { title: 'Standard Costing', desc: 'Estimating expected costs to identify and fix operational inefficiencies.' },
    { title: 'Zero-Based Budgeting', desc: 'Justifying every expense from scratch to eliminate legacy waste.' },
    { title: 'Inventory Control', desc: 'Optimizing stock levels to free up working capital and reduce wastage.' }
  ];

  return (
    <PageLayout 
      title="Cost Control & Profit Maximization" 
      subtitle="Essential strategies to enhance your bottom line and ensure sustainable business growth."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Maximize Your Profitability</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              In the pursuit of sustainable growth, effective cost control is crucial. By managing expenses efficiently, companies can enhance their bottom line, ensuring that revenue consistently exceeds costs.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mantraa Advisory Service identifies "leaks" in your financial systems and implements rigorous cost management methodologies to boost your net margins without compromising quality.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl flex items-center gap-2">
                Audit My Expenses <TrendingDown className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {methods.map((item, i) => (
              <div key={i} className="p-8 bg-mantraa-paper rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-mantraa-navy transition-colors">
                  <Activity className="w-7 h-7 text-mantraa-navy group-hover:text-white" />
                </div>
                <h4 className="text-lg font-bold text-mantraa-navy mb-3">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif text-mantraa-navy text-center mb-16">Understanding Your Cost Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { label: 'Direct Costs', icon: Target, detail: 'Labor, raw materials, and manufacturing supplies.' },
                    { label: 'Fixed Costs', icon: ShieldCheck, detail: 'Rent, salaries, and insurance that remain constant.' },
                    { label: 'Indirect Costs', icon: PieChart, detail: 'Utilities, marketing, and general admin expenses.' }
                ].map((item, i) => (
                    <div key={i} className="text-center p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-mantraa-paper flex items-center justify-center mx-auto mb-6">
                            <item.icon className="w-8 h-8 text-mantraa-navy" />
                        </div>
                        <h4 className="text-xl font-bold text-mantraa-navy mb-4">{item.label}</h4>
                        <p className="text-slate-500 text-sm">{item.detail}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-mantraa-navy rounded-[3.5rem] p-12 lg:p-24 text-white overflow-hidden relative">
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                   <h2 className="text-4xl font-serif mb-8 text-mantraa-gold">Project Cost Control</h2>
                   <p className="text-slate-400 mb-8 leading-relaxed">
                      Managing project-specific expenses requires constant vigilance. We help you track labor costs, material variance, and project timelines to ensure every engagement delivers the expected ROI.
                   </p>
                   <div className="space-y-4">
                      {[
                         'Resource Allocation Optimization',
                         'Timeline & Milestone Variance Analysis',
                         'Subcontractor Cost Auditing',
                         'Profit Margin Protection'
                      ].map((point, i) => (
                         <div key={i} className="flex gap-4 items-center">
                            <CheckCircle2 className="w-4 h-4 text-mantraa-gold" />
                            <span className="text-sm font-medium text-slate-300">{point}</span>
                         </div>
                      ))}
                   </div>
                </div>
                <div className="lg:w-1/2 bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-md text-center">
                   <BarChart className="w-16 h-16 text-mantraa-gold mx-auto mb-8" />
                   <h3 className="text-2xl font-serif mb-6 text-mantraa-gold">Ready to increase margins?</h3>
                   <p className="text-slate-400 mb-12">
                      Implement surgical cost-cutting and strategic profit enhancement with Mantraa’s financial management experts.
                   </p>
                   <Link to="/contact" className="w-full inline-flex items-center justify-center px-10 py-5 bg-white text-mantraa-navy rounded-full font-black hover:bg-mantraa-red hover:text-white transition-all shadow-2xl">
                      Get a Profit Review <ArrowRight className="w-5 h-5" />
                   </Link>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <TrendingUp className="w-[800px] h-[800px] absolute -bottom-1/4 -right-1/4" />
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
