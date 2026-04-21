import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  XOctagon, 
  FileCheck, 
  AlertTriangle, 
  ArrowRight,
  ClipboardX,
  History,
  Building
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VATDeregistrationPage() {
  const situations = [
    { title: 'Ceasing Taxable Supplies', desc: 'The business no longer performs taxable activities.' },
    { title: 'Below Voluntary Threshold', desc: 'Expected turnover falls below the voluntary limit for the next 30 days.' },
    { title: 'Liquidation', desc: 'The legal entity is being closed or liquidated.' }
  ];

  return (
    <PageLayout 
      title="VAT Deregistration" 
      subtitle="Accurate cancellation of your tax registration to avoid long-term liabilities."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Cancelling Your VAT Registration</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              VAT de-registration, also known as cancellation or termination of VAT registration, is typically done when a business needs to cancel its status with the UAE Federal Tax Authority (FTA).
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Failure to deregister within 20 business days of becoming eligible can lead to an AED 10,000 penalty. Mantraa ensures your termination reasons are valid and all conditions are fulfilled for FTA approval.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl flex items-center gap-2">
                Initiate Deregistration <XOctagon className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="bg-mantraa-paper p-12 rounded-[3.5rem] border border-slate-100 relative">
             <ClipboardX className="w-20 h-20 text-mantraa-navy mb-8 mx-auto" />
             <div className="space-y-4">
                <h4 className="text-center font-bold text-mantraa-navy">Mandatory Reasons:</h4>
                <div className="flex flex-col gap-3">
                   {situations.map((s, i) => (
                     <div key={i} className="bg-white p-4 rounded-2xl border border-slate-50 flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-mantraa-red mt-2 shrink-0" />
                        <div>
                           <p className="text-sm font-bold text-mantraa-navy">{s.title}</p>
                           <p className="text-[10px] text-slate-500">{s.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif text-mantraa-navy text-center mb-16">The Deregistration Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                <div className="hidden lg:block absolute top-10 left-0 w-full h-[1px] bg-slate-100 z-0" />
                {[
                    { title: 'Determine Eligibility', icon: History, desc: 'Assess if the reason for cancellation is mandatory or voluntary.' },
                    { title: 'Submit Application', icon: FileCheck, desc: 'Prepare and lodge the official form through the FTA portal.' },
                    { title: 'FTA Review', icon: Building, desc: 'Respond to queries from the authority for final approval.' }
                ].map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full bg-white border border-slate-100 flex items-center justify-center mb-8 shadow-sm">
                            <step.icon className="w-8 h-8 text-mantraa-red" />
                        </div>
                        <h4 className="text-xl font-bold text-mantraa-navy mb-4">{step.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white overflow-hidden relative">
            <div className="relative z-10 text-center">
                <AlertTriangle className="w-16 h-16 text-mantraa-gold mx-auto mb-8 animate-pulse" />
                <h2 className="text-4xl font-serif mb-8">Avoid Late Deregistration Fines</h2>
                <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-12">
                    Our tax consultants manage the entire termination workflow, ensuring all outstanding liabilities are cleared and the TRN is deactivated without penalty.
                </p>
                <Link to="/contact" className="px-12 py-5 bg-mantraa-red text-white rounded-full font-bold hover:bg-white hover:text-mantraa-navy transition-all shadow-2xl">
                    Get Professional Advice
                </Link>
            </div>
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <XOctagon className="w-[800px] h-[800px] absolute -top-1/4 -right-1/4" />
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
