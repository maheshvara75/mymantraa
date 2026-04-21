import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  ClipboardCheck, 
  Search, 
  ShieldCheck, 
  FileCheck, 
  ArrowRight,
  TrendingDown,
  Building2,
  AlertTriangle,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DueDiligenceReportPage() {
  const analysisTypes = [
    { title: 'Financial Due Diligence', desc: 'Verifying profit margins, assets, liabilities, and historic cash flows.' },
    { title: 'Tax Due Diligence', desc: 'Reviewing VAT and Corporate Tax compliance to spot hidden liabilities.' },
    { title: 'Legal Due Diligence', desc: 'Analyzing contracts, employment laws, and intellectual property rights.' },
    { title: 'Operational Due Diligence', desc: 'Evaluating the efficiency of systems, supply chains, and management.' }
  ];

  return (
    <PageLayout 
      title="Due Diligence Report" 
      subtitle="Meticulous investigation to assess risks and value before significant business transactions."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Verification of Integrity</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Due diligence is a detailed and methodical investigation conducted to assess the value and overall health of a business before mergers, acquisitions, or investments. 
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mantraa Advisory Service identifies potential risks early, ensuring that the target business aligns with your strategic goals. Our reports provide the transparency needed for confident decision-making.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl flex items-center gap-2">
                Order a Report <ShieldCheck className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
             {analysisTypes.map((item, i) => (
               <div key={i} className="p-8 bg-mantraa-paper rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-mantraa-navy transition-colors">
                     <FileCheck className="w-7 h-7 text-mantraa-navy group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-mantraa-navy mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-mantraa-navy rounded-[3.5rem] p-12 lg:p-24 text-white overflow-hidden relative">
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                   <h2 className="text-4xl font-serif mb-8 text-mantraa-gold">Why Mantraa for Due Diligence?</h2>
                   <p className="text-slate-400 mb-12">
                      Our multi-disciplinary team combines accounting, tax, and legal experts to provide a 360-degree view of any target entity in the UAE.
                   </p>
                   <div className="space-y-6">
                      {[
                         'In-depth verification of financial claims.',
                         'Identification of "Ghost" liabilities and tax risks.',
                         'Assessment of management depth and operational efficiency.',
                         'Clear, actionable recommendation for transaction terms.'
                      ].map((point, i) => (
                         <div key={i} className="flex gap-4 items-start">
                            <Zap className="w-5 h-5 text-mantraa-gold mt-1 shrink-0" />
                            <span className="text-sm font-medium text-slate-300">{point}</span>
                         </div>
                      ))}
                   </div>
                </div>
                <div className="lg:w-1/2 bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-md">
                   <AlertTriangle className="w-16 h-16 text-mantraa-gold mb-8 mx-auto" />
                   <h3 className="text-2xl font-serif mb-6 text-center">Don't Overpay for Risks</h3>
                   <p className="text-slate-400 text-center mb-12">
                      Unresolved due diligence issues often lead to post-merger failures. Protect your capital with a thorough independent report.
                   </p>
                   <Link to="/contact" className="w-full inline-flex items-center justify-center px-10 py-5 bg-white text-mantraa-navy rounded-full font-black hover:bg-mantraa-red hover:text-white transition-all shadow-2xl">
                      Consult an Auditor <ArrowRight className="w-5 h-5" />
                   </Link>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <Building2 className="w-[800px] h-[800px] absolute -bottom-1/4 -right-1/4" />
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
