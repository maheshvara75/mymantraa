import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  HeartPulse, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight,
  ClipboardCheck,
  Search,
  FileCheck,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VATHealthCheckPage() {
  const components = [
    { title: 'Tax Calculations', desc: 'Verifying the accuracy of VAT logic on all transactions.' },
    { title: 'Record Keeping', desc: 'Evaluating the quality and retention of mandatory tax records.' },
    { title: 'Compliance Status', desc: 'Identifying gaps in filing history and documentation.' },
    { title: 'Invoicing Standards', desc: 'Checking if invoices meet all the FTA\'s formal requirements.' }
  ];

  return (
    <PageLayout 
      title="VAT Health Check" 
      subtitle="Proactive assessment to improve your company’s VAT compliance and audit readiness."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">What is a VAT Health Check?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              In the UAE, businesses must ensure compliance with VAT regulations to avoid penalties and manage tax obligations effectively. A VAT Health Check is a proactive "stress test" for your tax department.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mantraa Advisory Service conducts an in-depth review of your data and processes to identify potential risks before they attract the attention of the Federal Tax Authority (FTA).
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl flex items-center gap-2">
                Initiate Health Check <HeartPulse className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {components.map((comp, i) => (
              <div key={i} className="p-8 bg-mantraa-paper rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-mantraa-red transition-colors">
                  <ShieldCheck className="w-6 h-6 text-mantraa-navy group-hover:text-white" />
                </div>
                <h4 className="font-bold text-mantraa-navy mb-2 text-sm">{comp.title}</h4>
                <p className="text-[10px] text-slate-500 leading-relaxed">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white mb-24 relative overflow-hidden">
            <div className="relative z-10 text-center mb-16">
                <h2 className="text-3xl font-serif mb-4">Why Conduct a VAT Health Check?</h2>
                <p className="text-slate-400">Manage risk, ensure readiness, and improve financial health.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                {[
                    { icon: Search, title: 'Early Detection', desc: 'Identify errors early to minimize penalties and financial impact.' },
                    { icon: FileCheck, title: 'Audit Readiness', desc: 'Ensures your business is fully prepared for an official FTA audit.' },
                    { icon: Activity, title: 'Data Accuracy', desc: 'Improves the precision of your financial reporting and VAT returns.' }
                ].map((item, i) => (
                    <div key={i} className="text-center group">
                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-mantraa-gold transition-colors">
                            <item.icon className="w-8 h-8 text-mantraa-gold group-hover:text-mantraa-navy" />
                        </div>
                        <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-mantraa-gold/10 blur-[120px] rounded-full" />
        </div>

        {/* Closing CTA */}
        <div className="bg-mantraa-paper rounded-[3rem] p-12 lg:p-20 text-center relative border border-slate-100">
             <AlertTriangle className="w-16 h-16 text-mantraa-red mx-auto mb-8 animate-bounce" />
             <h3 className="text-3xl font-serif text-mantraa-navy mb-4">Don't wait for the auditor.</h3>
             <p className="text-slate-600 mb-12 max-w-xl mx-auto">
                Discover gaps in your current setup and implement corrections today. A small proactive measure can save thousands in regulatory fines.
             </p>
             <Link 
              to="/contact" 
              className="px-12 py-5 bg-white text-mantraa-navy rounded-full font-bold hover:bg-mantraa-red hover:text-white transition-all shadow-2xl border border-slate-200"
             >
               Get a Health Check Quote
             </Link>
        </div>
      </div>
    </PageLayout>
  );
}
