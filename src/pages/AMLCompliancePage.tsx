import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Search, 
  FileCheck, 
  ArrowRight,
  ClipboardList,
  AlertCircle,
  Building2,
  UsersRound,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AMLCompliancePage() {
  const services = [
    { title: 'goAML Registration', desc: 'Secure registration and reporting through the UAE goAML portal.' },
    { title: 'AML Policy Framework', desc: 'Customized policy development tailored to your business activities.' },
    { title: 'Risk Assessment', desc: 'Thorough evaluation of customer, product, and geographical risks.' },
    { title: 'KYC Implementation', desc: 'Streamlined "Know Your Customer" procedures and due diligence.' }
  ];

  return (
    <PageLayout 
      title="AML Compliance Services" 
      subtitle="Robust Anti-Money Laundering and Counter Financing of Terrorism strategies for UAE businesses."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Adaptive Compliance Frameworks</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Mantraa Advisory Service offers comprehensive Anti-Money Laundering (AML) and Counter Financing of Terrorism (CFT) compliance services tailored to meet the evolving regulatory landscape in the UAE.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our team of experts is dedicated to ensuring that your business adheres to AML regulations while allowing you to focus on your core growth goals. We bridge the gap between complex law and operational simplicity.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl flex items-center gap-2">
                Consult an AML Officer <ShieldCheck className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
             {services.map((item, i) => (
               <div key={i} className="p-8 bg-mantraa-paper rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-mantraa-navy transition-colors">
                     <Lock className="w-7 h-7 text-mantraa-navy group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-mantraa-navy mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif text-mantraa-navy text-center mb-16">Benefits of Partnering with Mantraa</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { title: 'Regulatory Peace of Mind', icon: ShieldCheck, desc: 'Stay compliant with the latest Ministry of Economy and Central Bank guidelines.' },
                    { title: 'Enhanced Reputuation', icon: Building2, desc: 'Build trust with banks and international partners through robust AML controls.' },
                    { title: 'Operational Security', icon: UsersRound, desc: 'Identify and mitigate potential financial crime risks within your network.' }
                ].map((item, i) => (
                    <div key={i} className="text-center group p-10 bg-white border border-slate-50 rounded-[3rem] hover:shadow-lg transition-all">
                        <div className="w-20 h-20 rounded-full bg-mantraa-paper flex items-center justify-center mb-8 mx-auto group-hover:bg-mantraa-red transition-all">
                            <item.icon className="w-10 h-10 text-mantraa-navy group-hover:text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-mantraa-navy mb-4">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Enforcement Section */}
        <div className="bg-mantraa-navy rounded-[3.5rem] p-12 lg:p-24 text-white overflow-hidden relative">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
                        <img 
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                            alt="AML Security" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-mantraa-red/20 blur-[60px] rounded-full animate-pulse" />
                </div>
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <AlertCircle className="w-12 h-12 text-mantraa-gold" />
                        <h2 className="text-3xl font-serif text-mantraa-gold">Strict Reporting Deadlines</h2>
                    </div>
                    <p className="text-slate-300 mb-8 leading-relaxed">
                        Designated Non-Financial Businesses and Professions (DNFBPs) are under strict scrutiny in the UAE. Failure to register with goAML and implement AML policies can result in fines up to AED 5 Million.
                    </p>
                    <div className="space-y-4 mb-12">
                        {[
                            'Suspicious Transaction Reporting (STR)',
                            'Customer Due Diligence (CDD)',
                            'Sanctions List Screening'
                        ].map((point, i) => (
                            <div key={i} className="flex gap-4 items-center">
                                <FileCheck className="w-5 h-5 text-mantraa-gold" />
                                <span className="text-sm font-medium">{point}</span>
                            </div>
                        ))}
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-mantraa-red text-white rounded-full font-black hover:bg-white hover:text-mantraa-navy transition-all shadow-2xl">
                        Schedule a Compliance Audit <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <Search className="w-[800px] h-[800px] absolute -bottom-1/4 -right-1/4" />
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
