import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  ClipboardCheck, 
  Building2, 
  FileText, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CorporateTaxRegistrationPage() {
  const steps = [
    { title: 'Create EmaraTax Account', desc: 'Setting up your portal for all future tax communications.' },
    { title: 'Information Entry', desc: 'Providing accurate data on business activities and financials.' },
    { title: 'Document Submission', desc: 'Uploading trade licenses, passport copies, and more.' },
    { title: 'FTA Review', desc: 'Status monitoring until the Registration Number (TRN) is issued.' }
  ];

  return (
    <PageLayout 
      title="Corporate Tax Registration" 
      subtitle="Ensuring compliance with the new UAE Corporate Tax Law (Federal Decree-Law No. 47)."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Mandatory Tax Registration</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              With the introduction of Corporate Tax in the UAE, all taxable entities must ensure they are registered with the Federal Tax Authority (FTA) and obtain a Corporate Tax Registration Number.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              This requirement is crucial for compliance. Failing to register within the stipulated deadlines can lead to significant administrative penalties. Mantraa Advisory Service handles the entire EmaraTax workflow for you.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl flex items-center gap-2">
                Register Now <ShieldCheck className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="bg-mantraa-paper p-12 rounded-[3.5rem] border border-slate-100 flex flex-col justify-center">
            <h4 className="text-xl font-serif text-mantraa-navy mb-8 text-center">Who Needs to Register?</h4>
            <div className="space-y-4">
                {[
                    'Natural Persons (Business turnover > AED 1M)',
                    'Juridical Persons (Mainland LLCs/Companies)',
                    'Free Zone Persons (Standard & Qualifying)',
                    'Non-Resident Persons (Nexus in UAE)'
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-50">
                        <CheckCircle2 className="w-5 h-5 text-mantraa-red shrink-0" />
                        <p className="text-slate-700 text-sm">{item}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif text-mantraa-navy text-center mb-16">The Registration Roadmap</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, i) => (
                    <div key={i} className="p-10 bg-white border border-slate-100 rounded-[3rem] hover:shadow-xl transition-all group flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-mantraa-paper flex items-center justify-center mb-6 group-hover:bg-mantraa-navy transition-colors">
                            <span className="text-mantraa-navy group-hover:text-white font-serif font-black text-2xl">{i + 1}</span>
                        </div>
                        <h4 className="text-lg font-bold text-mantraa-navy mb-4">{step.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Support Section */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white relative flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
                <h2 className="text-4xl font-serif mb-8 text-mantraa-gold">Our Support for You</h2>
                <p className="text-slate-400 mb-8 max-w-xl">
                    Navigating the EmaraTax portal can be complex. We provide pre-registration advisory, full documentation support, and continuous liaison with the FTA.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { icon: UserCheck, label: 'Eligibility Check' },
                        { icon: Lock, label: 'Secure Submission' },
                        { icon: FileText, label: 'Doc Preparation' },
                        { icon: Building2, label: 'FTA Coordination' }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                            <item.icon className="w-5 h-5 text-mantraa-gold" />
                            <span className="text-xs font-bold">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:w-1/2 relative">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
                    <img 
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000" 
                        alt="Tax Compliance" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-mantraa-gold/20 blur-[60px] rounded-full animate-pulse pointer-events-none" />
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
