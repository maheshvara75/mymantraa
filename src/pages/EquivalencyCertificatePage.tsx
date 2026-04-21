import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  FileCheck, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Building,
  History,
  Stamp
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EquivalencyCertificatePage() {
  const categories = [
    { title: 'PhD Holders', desc: 'Mandatory for Golden Visa applications in scientific research.' },
    { title: 'Top-Tier Talent', desc: 'Required for recognized artists, inventors, and digital experts.' },
    { title: 'Education Excellence', desc: 'Proof of degree standing for teachers and university faculty.' },
    { title: 'Professional Work', desc: 'Necessary for licensing in medical, engineering, and legal roles.' }
  ];

  return (
    <PageLayout 
      title="Equivalency Certificate" 
      subtitle="Validating and standardizing foreign educational qualifications against UAE standards."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Credential recognition in UAE</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              An Equivalency Certificate is a crucial document issued by the Ministry of Education (MOE) in the UAE. It validates your foreign educational qualifications against UAE educational standards.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              This certification is an absolute requirement for many Golden Visa categories and high-level professional roles. Mantraa handles the complex attestation and MOE portal submission for you.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl flex items-center gap-2">
                Start My Equivalency <FileCheck className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="bg-mantraa-paper p-12 rounded-[3.5rem] border border-slate-100 flex flex-col items-center">
             <Stamp className="w-20 h-20 text-mantraa-navy mb-8 mx-auto" />
             <h4 className="text-2xl font-serif text-mantraa-navy mb-8 text-center">Required Documents</h4>
             <div className="space-y-4 w-full">
                {[
                   'Attested Degree Certificate',
                   'Original Transcripts',
                   'Passport Copy & Emirates ID',
                   'GDRFA Transfer Summary (for residents)',
                   'Verification Letter from University'
                ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-50">
                      <div className="w-2 h-2 rounded-full bg-mantraa-red shrink-0" />
                      <span className="text-xs font-bold text-slate-700">{item}</span>
                   </div>
                ))}
             </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif text-mantraa-navy text-center mb-16">Key Beneficiaries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((item, i) => (
                    <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-xl transition-all group flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-mantraa-paper flex items-center justify-center mb-6 shadow-sm group-hover:bg-mantraa-navy transition-colors">
                            <GraduationCap className="w-8 h-8 text-mantraa-navy group-hover:text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-mantraa-navy mb-4">{item.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Why Choice Section */}
        <div className="bg-mantraa-navy rounded-[3.5rem] p-12 lg:p-24 text-white overflow-hidden relative">
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-serif mb-8 text-mantraa-gold">Why Mantraa for Equivalency?</h2>
                    <p className="text-slate-400 mb-8 max-w-xl">
                        The MOE portal can be rejection-heavy if documents aren't perfectly formatted or attested. We manage the end-to-end communication to ensure approval.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {[
                          { icon: History, label: 'Document Review' },
                          { icon: Building, label: 'MOE Portal Submission' },
                          { icon: ShieldCheck, label: 'Attestation Support' },
                          { icon: Zap, label: 'Expedited Processing' }
                       ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                             <item.icon className="w-5 h-5 text-mantraa-gold" />
                             <span className="text-xs font-bold leading-tight">{item.label}</span>
                          </div>
                       ))}
                    </div>
                </div>
                <div className="lg:w-1/2 bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-md text-center">
                   <FileCheck className="w-16 h-16 text-mantraa-gold mx-auto mb-8 animate-pulse" />
                   <h3 className="text-2xl font-serif mb-6 text-center text-mantraa-gold">Validation Guaranteed</h3>
                   <p className="text-slate-400 text-center mb-12">
                      Ensure your foreign degrees are recognized by the UAE Ministry of Education without a hitch.
                   </p>
                   <Link to="/contact" className="w-full inline-flex items-center justify-center px-10 py-5 bg-white text-mantraa-navy rounded-full font-black hover:bg-mantraa-red hover:text-white transition-all shadow-2xl">
                      Request Attestation Service <ArrowRight className="w-5 h-5" />
                   </Link>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <Stamp className="w-[800px] h-[800px] absolute -bottom-1/4 -right-1/4" />
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
