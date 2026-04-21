import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Users, 
  UserCheck, 
  ShieldCheck, 
  ArrowRight,
  AlertTriangle,
  FileCheck,
  Building,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UBOServicesPage() {
  const criteria = [
    { title: 'Ownership Rights', desc: 'A natural person who ultimately owns 25% or more of the company\'s capital.' },
    { title: 'Voting Power', desc: 'A natural person who holds at least 25% of the voting rights.' },
    { title: 'Ultimate Control', desc: 'A natural person who exercises ultimate control over the company through other means.' }
  ];

  return (
    <PageLayout 
      title="UBO Compliance Services" 
      subtitle="Ensuring transparency by disclosing Ultimate Beneficial Owners as per UAE Cabinet Decision No. 58 of 2020."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">UBO Transparency Standards</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Ultimate Beneficial Ownership (UBO) compliance is a crucial aspect of UAE's anti-money laundering (AML) efforts. The regulation mandates that companies disclose details about their true owners to ensure transparency and prevent financial crimes.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mantraa Advisory Service helps you identify qualifying individuals, maintain the standard UBO register, and file all necessary declarations with the licensing authorities to maintain your business's legal standing.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl flex items-center gap-2">
                Register Your UBO <UserCheck className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6">
             {criteria.map((item, i) => (
               <div key={i} className="p-8 bg-mantraa-paper rounded-3xl border border-slate-100 hover:shadow-lg transition-all group flex gap-6 items-center">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-mantraa-navy transition-colors">
                     <Target className="w-8 h-8 text-mantraa-navy group-hover:text-white" />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-mantraa-navy mb-2">{item.title}</h4>
                     <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white mb-24 relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-3xl font-serif mb-12 text-center text-mantraa-gold">Key Compliance Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                    { label: 'Register of Partners', icon: Users, desc: 'Maintain an updated list of all partners/shareholders.' },
                    { label: 'Register of UBOs', icon: UserCheck, desc: 'Detailed register identifying the ultimate beneficial owners.' },
                    { label: 'Authority Notification', icon: Building, desc: 'Filing UBO details with the registrar (DED, Free Zone).' },
                    { label: 'Ongoing Updates', icon: FileCheck, desc: 'Updating the registrar within 15 days of any changes.' }
                 ].map((req, i) => (
                    <div key={i} className="text-center">
                       <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                            <req.icon className="w-8 h-8 text-mantraa-gold" />
                       </div>
                       <h4 className="font-bold mb-3">{req.label}</h4>
                       <p className="text-slate-400 text-xs">{req.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Penalty CTA */}
        <div className="bg-mantraa-paper rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-12 border border-slate-100">
            <div className="lg:w-2/3">
                <div className="flex items-center gap-4 mb-6">
                    <AlertTriangle className="w-10 h-10 text-mantraa-red" />
                    <h3 className="text-3xl font-serif text-mantraa-navy">Risk of Non-Compliance</h3>
                </div>
                <p className="text-slate-600 mb-8">
                   Failure to maintain UBO registers or notify the authorities can lead to administrative penalties starting from AED 50,000 to AED 100,000, including potential trade license suspension.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all">
                    Ensure Compliance Today <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
            <div className="lg:w-1/3 text-center">
                <ShieldCheck className="w-32 h-32 text-mantraa-navy/10 mx-auto" />
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
