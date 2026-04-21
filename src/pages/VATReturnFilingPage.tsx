import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  FileText, 
  Send, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  ClipboardList,
  CalendarCheck,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VATReturnFilingPage() {
  const processSteps = [
    { title: 'Data Collection', desc: 'Gather all sales and purchase invoices for the tax period.', icon: ClipboardList },
    { title: 'VAT Calculation', desc: 'Determine the final tax liability or reclaimable amount.', icon: FileText },
    { title: 'Submission', desc: 'Official filing through the FTA portal (Form VAT 201).', icon: Send },
    { title: 'Payment/Reclaim', desc: 'Finalizing the tax payment or filing for a refund.', icon: ShieldCheck }
  ];

  return (
    <PageLayout 
      title="VAT Return Filing" 
      subtitle="Expert filing and submission of your VAT returns to ensure 100% FTA compliance."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">What is a VAT Return?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              A VAT return is a formal document submitted to the Federal Tax Authority (FTA) that summarizes the total sales and purchases made by a taxable person during a specific tax period. 
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Filing accurate and timely returns is essential to avoid penalties and maintain a good standing with the UAE authorities. Mantraa simplifies this by handling the entire Form VAT 201 process.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl flex items-center gap-2">
                File Your Return <Send className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="relative group">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                    src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=1000" 
                    alt="VAT Filing Process" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[3rem] shadow-2xl flex items-center gap-6">
                <CalendarCheck className="w-12 h-12 text-mantraa-red" />
                <div>
                    <h4 className="font-bold text-mantraa-navy">Quarterly/Monthly</h4>
                    <p className="text-xs text-slate-500">Scheduled Filing Support</p>
                </div>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif text-mantraa-navy text-center mb-16">The Filing Roadmap</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, i) => (
                    <div key={i} className="p-10 bg-mantraa-paper rounded-[3rem] border border-slate-50 hover:shadow-xl transition-all group flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-mantraa-navy transition-colors">
                            <step.icon className="w-8 h-8 text-mantraa-navy group-hover:text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-mantraa-navy mb-4">{step.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-mantraa-navy rounded-[3.5rem] p-12 lg:p-24 text-white relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-serif mb-8 text-mantraa-gold">Simplify Your VAT Filing</h2>
                    <div className="space-y-6">
                        {[
                            { label: 'Enhanced Efficiency', desc: 'Real-time data processing for faster turnaround.' },
                            { label: 'Real-Time Visibility', desc: 'Track your tax status anytime through our reports.' },
                            { label: 'Accuracy and Compliance', desc: 'Zero error margin in calculation and submission.' },
                            { label: 'Seamless Integration', desc: 'Direct mapping from your accounting software.' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Zap className="w-4 h-4 text-mantraa-gold" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">{item.label}</h4>
                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-md">
                    <AlertCircle className="w-16 h-16 text-mantraa-red mb-8 mx-auto" />
                    <h3 className="text-2xl font-serif mb-6 text-center">Missed the deadline?</h3>
                    <p className="text-slate-300 text-center mb-12">
                        Late filing can lead to significant penalties starting from AED 1,000 for the first time. Contact us immediately for rectification.
                    </p>
                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-10 py-5 bg-white text-mantraa-navy rounded-full font-bold hover:bg-mantraa-red hover:text-white transition-all shadow-2xl">
                        Talk to a Tax Expert
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
