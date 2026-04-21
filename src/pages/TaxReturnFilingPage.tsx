import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  FileText, 
  Send, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  AlertCircle,
  BarChart3,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TaxReturnFilingPage() {
  const steps = [
    { title: 'Data Preparation', desc: 'Financial audit and grouping of taxable vs non-taxable income.' },
    { title: 'Tax Computation', desc: 'Applying deductions, exemptions, and the 9% standard rate.' },
    { title: 'Submission', desc: 'Electronic filing through the FTA portal within 9 months of year-end.' },
    { title: 'Archiving', desc: 'Secure storage of documents for mandatory UAE record-keeping.' }
  ];

  return (
    <PageLayout 
      title="Tax Return Filing" 
      subtitle="Ensuring accuracy and timeliness in your UAE Corporate Tax submissions."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Corporate Tax Return Obligations</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Filing corporate tax returns is a critical obligation under UAE Federal Decree-Law No. 47 of 2022. Every taxable person must submit a return and settle any payable tax within 9 months after the end of their relevant Tax Period.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mantraa Advisory Service bridges the gap between your accounting data and tax compliance, ensuring every deduction and exemption is legally utilized to reflect your true tax position.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl flex items-center gap-2">
                Start My Filing <Send className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="relative group">
            <div className="bg-mantraa-paper p-12 rounded-[3.5rem] border border-slate-100 flex flex-col items-center">
              <BarChart3 className="w-20 h-20 text-mantraa-navy mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold text-mantraa-navy mb-4">Filing Highlights</h4>
              <div className="space-y-4 w-full">
                {[
                    { label: 'Deadline', value: '9 Months Post-YE' },
                    { label: 'Standard Rate', value: '9% (Income > 375k)' },
                    { label: 'Relief', value: 'Small Business Relief available' }
                ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm">
                        <span className="text-xs text-slate-500 font-medium">{item.label}</span>
                        <span className="text-xs font-bold text-mantraa-red">{item.value}</span>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif text-mantraa-navy text-center mb-16">The Filing Cycle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, i) => (
                    <div key={i} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-2xl bg-mantraa-paper flex items-center justify-center mb-6 group-hover:bg-mantraa-red transition-colors shadow-sm">
                            <CheckCircle2 className="w-8 h-8 text-mantraa-navy group-hover:text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-mantraa-navy mb-3">{step.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white overflow-hidden relative">
            <div className="relative z-10 text-center">
                <AlertCircle className="w-16 h-16 text-mantraa-gold mx-auto mb-8 animate-pulse" />
                <h2 className="text-4xl font-serif mb-8">Avoid Non-Compliance Penalties</h2>
                <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-12">
                    Our team provides meticulous vetting of financial statements before submission to the FTA, ensuring accuracy, transparency, and timely payment of any tax due.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link to="/contact" className="px-10 py-5 bg-mantraa-red text-white rounded-full font-bold hover:bg-white hover:text-mantraa-navy transition-all shadow-2xl flex items-center gap-3">
                        Request Expert Filing <ArrowRight className="w-5 h-5" />
                    </Link>
                    <div className="flex items-center gap-3 text-slate-400">
                        <Clock className="w-5 h-5" />
                        <span className="text-sm">Don't wait for the 9-month deadline.</span>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <ShieldCheck className="w-[800px] h-[800px] absolute -bottom-1/4 -left-1/4" />
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
