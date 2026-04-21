import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Users, 
  UserCheck, 
  Briefcase, 
  Zap, 
  ArrowRight,
  Clock,
  ShieldCheck,
  Building
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StaffingSolutionsPage() {
  const steps = [
    { title: 'Needs Analysis', desc: 'We assess your specific project or seasonal requirements.' },
    { title: 'Candidate Selection', desc: 'Shortlisting pre-vetted accounting and finance professionals.' },
    { title: 'Immediate Onboarding', desc: 'Quick deployment to ensure no disruption to your workflow.' }
  ];

  return (
    <PageLayout 
      title="Accounting Staffing Solutions" 
      subtitle="Your ultimate partner in workforce flexibility for accounting and finance in the UAE."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Workforce Flexibility & Expertise</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Mantraa offers comprehensive temporary and long-term staffing solutions to meet your business needs in the UAE. Whether you need support during peak seasons, for specific projects, or to fill in gaps in your workforce, we provide the perfect candidates.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              From entry-level accountants to seasoned financial managers, we ensure that your operations run smoothly with pre-vetted professionals who understand the local financial landscape.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-8 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl flex items-center gap-2">
                Find Talent Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Fintech Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-8 -left-8 bg-white p-8 rounded-[2rem] shadow-2xl space-y-4 max-w-[200px]">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-mantraa-paper border-2 border-white flex items-center justify-center overflow-hidden">
                       <img src={`https://picsum.photos/seed/${i+40}/50/50`} alt="Avatar" referrerPolicy="no-referrer" />
                    </div>
                  ))}
               </div>
               <p className="text-xs font-bold text-mantraa-navy leading-tight">100+ Pre-vetted Professionals Ready</p>
            </div>
          </div>
        </div>

        {/* Why Choose Mantraa */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: 'Wide Industry Coverage', desc: 'Expertise across retail, hospitality, manufacturing, and tech.', icon: Building },
            { title: 'Tailored Solutions', desc: 'Flexible engagement models from daily to annual contracts.', icon: Briefcase },
            { title: 'Qualified Candidates', desc: 'Only top-tier candidates with proven UAE experience.', icon: UserCheck }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[3rem] bg-mantraa-paper border border-slate-50 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                 <item.icon className="w-8 h-8 text-mantraa-navy" />
              </div>
              <h4 className="text-xl font-bold text-mantraa-navy mb-4">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Our Commitment to Excellence</h2>
            <p className="text-slate-400">Streamlined onboarding process from start to finish.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
             {steps.map((step, i) => (
               <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-mantraa-gold flex items-center justify-center font-black text-mantraa-navy mb-6">
                    {i+1}
                  </div>
                  <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
               </div>
             ))}
          </div>
          <div className="mt-16 text-center">
             <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-mantraa-red rounded-full font-bold hover:bg-white hover:text-mantraa-navy transition-all">
               Find Your Workforce Partner <Clock className="w-5 h-5" />
             </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
