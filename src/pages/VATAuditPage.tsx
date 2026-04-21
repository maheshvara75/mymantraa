import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Search, 
  FileCheck, 
  Building2, 
  ArrowRight,
  ClipboardList,
  AlertCircle,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VATAuditPage() {
  const procedure = [
    { title: 'Initiation', desc: 'The FTA notifies the business about the upcoming audit.' },
    { title: 'Review', desc: 'Thorough examination of sales, purchases, and invoices.' },
    { title: 'Assistance', desc: 'Cooperation from the business in providing requested data.' },
    { title: 'Completion', desc: 'Issuance of the audit report and any required corrections.' }
  ];

  return (
    <PageLayout 
      title="VAT Audit Services" 
      subtitle="Preparing your business for Federal Tax Authority (FTA) examinations with confidence."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Professional VAT Audit Support</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              A VAT audit in the UAE is a thorough examination conducted by the Federal Tax Authority (FTA) to ensure that businesses comply with regulations and accurately report taxable transactions.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mantraa Advisory Service acts as your liaison and expert advisor during this critical process, ensuring your documentation is in order and helping you navigate the FTA's inquiries seamlessly.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl flex items-center gap-2">
                Prepare for Audit <ShieldCheck className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {procedure.map((step, i) => (
              <div key={i} className="p-8 bg-mantraa-paper rounded-3xl border border-slate-100 hover:border-mantraa-red transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:bg-mantraa-navy transition-colors shadow-sm">
                  <span className="text-mantraa-navy group-hover:text-white font-serif font-black">{i + 1}</span>
                </div>
                <h4 className="font-bold text-mantraa-navy mb-2 text-sm">{step.title}</h4>
                <p className="text-[10px] text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Documentation Section */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white mb-24 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-serif mb-8 text-mantraa-gold">Factors to Consider During Audit</h2>
                    <div className="space-y-6">
                        {[
                            'Proper calculation of output and input tax in each return.',
                            'Validity of VAT invoices and compliance with formatting rules.',
                            'Consistency between financial records and filed returns.',
                            'Accuracy of reverse charge mechanism (RCM) applications.'
                        ].map((point, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <Activity className="w-5 h-5 text-mantraa-gold mt-1 shrink-0" />
                                <span className="text-slate-300 text-sm leading-relaxed">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] backdrop-blur-md">
                    <ClipboardList className="w-16 h-16 text-mantraa-gold mb-8 mx-auto" />
                    <h4 className="text-xl font-bold mb-6 text-center">Audit Documents Checklist</h4>
                    <ul className="text-slate-400 text-sm space-y-3 mb-8">
                        <li>• Complete invoices (Sales & Purchases)</li>
                        <li>• Credit and Debit Notes</li>
                        <li>• Records of all imports and exports</li>
                        <li>• Accurate inventory records</li>
                    </ul>
                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-8 py-4 bg-white text-mantraa-navy rounded-full font-bold hover:bg-mantraa-red hover:text-white transition-all shadow-xl">
                        Review My Documents
                    </Link>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <Search className="w-[800px] h-[800px] absolute -top-1/4 -right-1/4" />
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
