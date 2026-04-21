import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  ClipboardCheck, 
  RotateCcw, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  History,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BacklogAccountingPage() {
  const benefits = [
    { title: 'Financial Accuracy', desc: 'Ensure your records reflect the true history of your transactions.' },
    { title: 'Compliance Ready', desc: 'Avoid penalties by bringing your historical records into alignment.' },
    { title: 'Informed Decisions', desc: 'Clear visibility of past trends to plan for the future.' },
    { title: 'Audit Ease', desc: 'Ready your books for statutory or internal audit requirements.' }
  ];

  return (
    <PageLayout 
      title="Updating Backlog Accounting" 
      subtitle="Ensuring accuracy and compliance by bringing your delayed records up to date."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Resolution for Delayed Accounting</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Keeping your books of accounts updated is crucial for financial accuracy and compliance. However, maintaining up-to-date records can be challenging, especially for small and medium-sized businesses during periods of rapid growth or transition.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Backlog accounting is designed to address these challenges. We systematically record and report your delayed financial transactions, bringing your books into perfect order with current UAE regulations.
            </p>
            <Link to="/contact" className="px-8 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-lg flex items-center gap-2 w-fit">
              Clear My Backlog <RotateCcw className="w-5 h-5" />
            </Link>
          </motion.div>
          
          <div className="relative">
            <div className="bg-mantraa-paper p-12 rounded-[3rem] border border-slate-100 flex flex-col items-center text-center">
              <History className="w-20 h-20 text-mantraa-navy mb-8 animate-pulse" />
              <h4 className="text-2xl font-serif text-mantraa-navy mb-4">Why Address Backlogs?</h4>
              <p className="text-slate-500 text-sm italic mb-8">"Delayed accounting leads to compliance risks and missed tax deadlines. We provide the expertise to fix it fast."</p>
              <div className="flex items-center gap-2 p-4 bg-red-50 text-red-600 rounded-2xl border border-red-100 text-xs font-bold">
                 <AlertTriangle className="w-4 h-4" />
                 Potential Regulatory Penalties If Unresolved
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
           {benefits.map((benefit, i) => (
             <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-xl transition-all text-center">
                <div className="w-12 h-12 rounded-2xl bg-mantraa-navy/5 flex items-center justify-center mx-auto mb-6">
                   <CheckCircle2 className="w-6 h-6 text-mantraa-navy" />
                </div>
                <h4 className="font-bold text-mantraa-navy mb-3">{benefit.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{benefit.desc}</p>
             </div>
           ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-mantraa-navy rounded-[3.5rem] p-12 lg:p-24 text-white overflow-hidden relative">
           <div className="relative z-10">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-serif mb-4">Why Choose Mantraa?</h2>
                 <p className="text-slate-400">Expertise, Flexibility, Accuracy, and Compliance.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 {[
                   { label: 'Expertise', desc: 'Over a decade of handling complex financial backlogs for diverse industries.' },
                   { label: 'Flexibility', desc: 'Scalable support that works around your existing operations.' },
                   { label: 'Accuracy', desc: 'Meticulous verification of every historical document and entry.' },
                   { label: 'Compliance', desc: 'Strict adherence to FTA and UAE company laws.' }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                         <Zap className="w-6 h-6 text-mantraa-gold" />
                      </div>
                      <div>
                         <h4 className="text-xl font-bold mb-2">{item.label}</h4>
                         <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
              <div className="mt-16 text-center">
                 <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-mantraa-gold text-mantraa-navy rounded-full font-black hover:bg-white hover:scale-105 transition-all shadow-2xl">
                    Request a Backlog Review <ArrowRight className="w-5 h-5" />
                 </Link>
              </div>
           </div>
           <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
              <History className="w-[800px] h-[800px] absolute -top-1/4 -right-1/4" />
           </div>
        </div>
      </div>
    </PageLayout>
  );
}
