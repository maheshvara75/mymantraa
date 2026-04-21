import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  FileText, 
  Users, 
  ArrowRight,
  ClipboardCheck,
  CheckCircle2,
  Scale,
  Landmark
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MainlandFormationPage() {
  const steps = [
    { title: 'Choose Your Licence', desc: 'Identify the activity and jurisdiction that matches your business model.' },
    { title: 'Legal Structure', desc: 'Settle on the legal form, such as an LLC or a Sole Proprietorship.' },
    { title: 'Check Ownership', desc: 'Verify your eligibility for 100% foreign ownership for your specific activity.' },
    { title: 'Additional Approvals', desc: 'Secure permits from specialized departments if your activity requires it.' },
    { title: 'Gather Documents', desc: 'Prepare all notarized and legalized paperwork for submission.' },
    { title: 'Obtain License', desc: 'Finalize the process and receive your mainland commercial license.' }
  ];

  return (
    <PageLayout 
      title="Mainland Company Formation" 
      subtitle="A step-by-step guide to establishing your business presence in the heart of the UAE market."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Establish a Mainland Company in Dubai</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Establishing a mainland company in Dubai offers significant opportunities due to the city's strategic location, robust infrastructure, and favorable business environment.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mantraa provides a comprehensive guide and hands-on support for setting up your mainland entity, ensuring you navigate the required documents and key steps efficiently.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl flex items-center gap-2">
                Start Mainland Journey <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="relative group">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl relative aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1577416416141-7c834097f575?auto=format&fit=crop&q=80&w=1000" 
                alt="Dubai Mainland Business" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mantraa-navy/60 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-10 rounded-[3rem] shadow-2xl max-w-xs">
               <Landmark className="w-10 h-10 text-mantraa-red mb-4" />
               <h4 className="font-bold text-mantraa-navy mb-2">Legal Sovereignty</h4>
               <p className="text-xs text-slate-500 leading-relaxed italic">Trade freely throughout the UAE and participate in government projects.</p>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-mantraa-navy mb-4">6 Steps to Your Mainland License</h2>
            <p className="text-slate-500">Our systematic roadmap to successful mainland registration.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="p-10 bg-mantraa-paper rounded-[3rem] border border-slate-50 hover:shadow-xl transition-all group flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 text-mantraa-red font-serif font-black shadow-sm shrink-0">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold text-mantraa-navy mb-4">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Considerations */}
        <div className="bg-mantraa-navy rounded-[4rem] p-12 lg:p-24 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-8 text-mantraa-gold">Key Considerations</h2>
              <div className="space-y-8">
                {[
                  { title: 'Local Sponsor/Agent', desc: 'Understanding the role of a local partner for specific activities.' },
                  { title: 'Physical Office Space', desc: 'Requirement for a registered office address in the mainland.' },
                  { title: 'Regulatory Approvals', desc: 'Liaising with the DED and other relevant authorities.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-8 h-8 rounded-full bg-mantraa-gold flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-mantraa-navy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-md">
              <ClipboardCheck className="w-12 h-12 text-mantraa-red mb-6" />
              <h3 className="text-2xl font-serif mb-6">Need an eligibility check?</h3>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Rules for 100% foreign ownership vary by activity. Our legal experts can perform a quick check for your specific business case.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-mantraa-navy rounded-full font-bold hover:bg-mantraa-red hover:text-white transition-all shadow-xl"
              >
                Contact Legal Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
