import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  UserCheck, 
  Users, 
  ArrowRight,
  Zap,
  Building,
  GraduationCap,
  HeartPulse,
  BadgeCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GoldenVisaPage() {
  const benefits = [
    { title: 'Extended Residency', desc: 'Secure 5 or 10-year residency for you and your family.', icon: ShieldCheck },
    { title: 'Self-Sponsorship', desc: 'Work or study in Dubai without the need for a local employer sponsor.', icon: UserCheck },
    { title: 'Wealth of Benefits', icon: BadgeCheck, desc: 'Access to the Esaad Privilege Card for discounts on healthcare and retail.' },
    { title: 'Family Protection', icon: Users, desc: 'Sponsor dependents, including spouses and children, with no age limits for some categories.' }
  ];

  return (
    <PageLayout 
      title="Golden Visa Assistance" 
      subtitle="Your pathway to long-term residency and stability in the UAE."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Long-Term Residency in the UAE</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The UAE's Golden Visa program, introduced in 2019, allows eligible individuals to enjoy long-term residency in Dubai without the need for a local sponsor.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              The program has recently been updated to broaden eligibility. Whether you are an investor, entrepreneur, or a specialized talent, Mantraa simplifies the complex application and documentation process for you.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl flex items-center gap-2">
                Apply for Golden Visa <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {benefits.map((item, i) => (
               <div key={i} className="p-8 bg-mantraa-paper rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-mantraa-navy transition-colors">
                     <item.icon className="w-7 h-7 text-mantraa-navy group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-mantraa-navy mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>

        {/* Eligibility Grid */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif text-mantraa-navy text-center mb-16">Eligibility & Application</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { label: 'Investors', icon: Building, detail: 'Public investments, real estate, or business owners.' },
                    { label: 'Professionals', icon: GraduationCap, detail: 'PhD holders, engineers, and executive directors.' },
                    { label: 'Healthcare', icon: HeartPulse, detail: 'Frontline heroes, doctors, and specialists.' }
                ].map((item, i) => (
                    <div key={i} className="text-center p-10 bg-white border border-slate-100 rounded-[3rem] hover:shadow-xl transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-mantraa-paper flex items-center justify-center mx-auto mb-6">
                            <item.icon className="w-8 h-8 text-mantraa-navy" />
                        </div>
                        <h4 className="font-bold text-mantraa-navy mb-4">{item.label}</h4>
                        <p className="text-slate-500 text-sm">{item.detail}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Application Process */}
        <div className="bg-mantraa-navy rounded-[3.5rem] p-12 lg:p-24 text-white overflow-hidden relative">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
                        <img 
                            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000" 
                            alt="Dubai Skyline" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-mantraa-gold/20 blur-[60px] rounded-full animate-pulse" />
                </div>
                <div>
                   <h2 className="text-4xl font-serif mb-8 text-mantraa-gold">Our Application Roadmap</h2>
                   <div className="space-y-6">
                      {[
                         { step: '01', title: 'Determine Eligibility', desc: 'Confirming which category fits your unique profile best.' },
                         { step: '02', title: 'Documentation', desc: 'Sourcing equivalency certificates and financial statements.' },
                         { step: '03', title: 'Portal Submission', desc: 'Lodging the application with the ICP or GDRFA portal.' },
                         { step: '04', title: 'Resident Identity', desc: 'Managing the Emirates ID and visa stamping process.' }
                      ].map((item, i) => (
                         <div key={i} className="flex gap-6">
                            <div className="text-3xl font-serif text-white/20">{item.step}</div>
                            <div>
                               <h4 className="text-xl font-bold mb-1 text-mantraa-gold">{item.title}</h4>
                               <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                         </div>
                      ))}
                   </div>
                   <Link to="/contact" className="mt-12 inline-flex items-center gap-3 px-10 py-5 bg-mantraa-gold text-mantraa-navy rounded-full font-black hover:bg-white transition-all shadow-2xl">
                      Check My Eligibility <Zap className="w-5 h-5" />
                   </Link>
                </div>
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
