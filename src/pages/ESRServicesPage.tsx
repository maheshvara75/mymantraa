import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Building2, 
  FileCheck, 
  ShieldCheck, 
  ArrowRight,
  Globe,
  CheckCircle2,
  AlertTriangle,
  History
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ESRServicesPage() {
  const sectors = [
    'Banking Business',
    'Insurance Business',
    'Investment Fund Management',
    'Lease-Finance Business',
    'Headquarters Business',
    'Shipping Business',
    'Holding Company Business',
    'Intellectual Property Business',
    'Distribution and Service Centre Business'
  ];

  return (
    <PageLayout 
      title="ESR Services" 
      subtitle="Ensuring compliance with Economic Substance Regulations in the UAE."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Understanding ESR in UAE</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Mantraa Advisory Service provides comprehensive support for navigating the Economic Substance Regulations (ESR) in the UAE. ESR aims to ensure that businesses demonstrate genuine economic activities within the jurisdiction.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Failure to comply with ESR requirements can lead to substantial fines, ranging from AED 10,000 to AED 400,000. We help you stay compliant, manage your obligations, and avoid these pitfalls.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl flex items-center gap-2">
                Check ESR Applicability <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="bg-mantraa-paper p-12 rounded-[4rem] border border-slate-100 flex flex-col items-center">
            <Globe className="w-20 h-20 text-mantraa-navy mb-8" />
            <h4 className="text-xl font-serif text-mantraa-navy mb-8 text-center">Relevant Activities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 w-full">
               {sectors.map((sector, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-50">
                    <CheckCircle2 className="w-4 h-4 text-mantraa-red shrink-0" />
                    <span className="text-[10px] font-bold text-slate-700">{sector}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif text-mantraa-navy text-center mb-16">ESR Compliance Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { title: 'The Substance Test', icon: ShieldCheck, desc: 'Demonstrating that the activity is directed and managed in the UAE.' },
                    { title: 'Notification Filing', icon: FileCheck, desc: 'Mandatory annual notification to the regulatory authority.' },
                    { title: 'Economic Substance Report', icon: History, desc: 'Detailed annual report showing income, assets, and employees.' }
                ].map((item, i) => (
                    <div key={i} className="text-center p-10 bg-white border border-slate-100 rounded-[3rem] hover:shadow-xl transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-mantraa-paper flex items-center justify-center mx-auto mb-6">
                            <item.icon className="w-8 h-8 text-mantraa-navy" />
                        </div>
                        <h4 className="text-xl font-bold text-mantraa-navy mb-4">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* How we help */}
        <div className="bg-mantraa-navy rounded-[3.5rem] p-12 lg:p-24 text-white overflow-hidden relative">
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-serif mb-8 text-mantraa-gold">Our ESR Expertise</h2>
                    <p className="text-slate-400 mb-12">
                        Navigating ESR requires a deep understanding of OECD standards and local regulations. We provide end-to-end support for reporting and penalty management.
                    </p>
                    <ul className="space-y-4">
                        {[
                            'Expert Guidance on Compliance',
                            'Comprehensive ESR Reporting',
                            'Tailored Solutions for Your Sector',
                            'Penalty Mitigation & Management'
                        ].map((point, i) => (
                            <li key={i} className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-mantraa-gold" />
                                <span className="text-sm font-medium">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:w-1/2 bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-md text-center">
                    <AlertTriangle className="w-16 h-16 text-mantraa-red mx-auto mb-8 animate-pulse" />
                    <h3 className="text-2xl font-serif mb-6">Late Notification Penalty?</h3>
                    <p className="text-slate-300 mb-12">
                        Failing to file your ESR Notification on time attracts an AED 20,000 fine. Contact us to ensure your filings are submitted before the deadline.
                    </p>
                    <Link to="/contact" className="px-12 py-5 bg-white text-mantraa-navy rounded-full font-black hover:bg-mantraa-gold transition-all shadow-2xl">
                        Request Advisory Now
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
