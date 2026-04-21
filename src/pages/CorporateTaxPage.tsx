import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Building2, 
  Scale, 
  ShieldCheck, 
  FileText, 
  Users, 
  ArrowRight,
  ClipboardCheck,
  LineChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CorporateTaxPage() {
  const essentialResons = [
    { title: 'Ensure Compliance', desc: 'Avoid legal issues and stay ahead of regulatory requirements.' },
    { title: 'Optimize Liability', desc: 'Strategically manage your financial exposure within legal frameworks.' },
    { title: 'Avoid Penalties', desc: 'Timely registration and filing to prevent heavy fines from the FTA.' }
  ];

  const solutions = [
    { title: 'Tax Registration', desc: 'Assistance in obtaining your Corporate Tax Registration Number (TRN).', icon: ClipboardCheck },
    { title: 'Impact Assessment', desc: 'Evaluating how the new tax laws will affect your specific business structure.', icon: LineChart },
    { title: 'Tax Planning', desc: 'Long-term strategies to optimize your operational and financial efficiency.', icon: Scale },
    { title: 'Process Implementation', desc: 'Aligning your internal accounting systems with CT requirements.', icon: Building2 }
  ];

  return (
    <PageLayout 
      title="Corporate Tax Services" 
      subtitle="Navigating the new UAE corporate tax landscape with precision and expertise."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Corporate Tax Services in the UAE</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              With the introduction of corporate tax in the UAE, businesses are faced with a new regulatory landscape. Effective management of corporate tax is crucial to ensure compliance, optimize tax liability, and avoid penalties.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mantraa Advisory Service offers expert Corporate Tax Services to help businesses navigate this new era of taxation. Our team provides end-to-end support, from initial impact assessment to final return filing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {essentialResons.map((reason, i) => (
                <div key={i} className="p-4 bg-mantraa-paper rounded-2xl">
                  <h4 className="font-bold text-mantraa-navy text-sm mb-2">{reason.title}</h4>
                  <p className="text-slate-500 text-[10px] leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Consultation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-mantraa-red/90 backdrop-blur-lg rounded-full flex items-center justify-center text-center p-6 shadow-2xl border-4 border-white/20">
              <p className="text-white font-bold leading-tight uppercase tracking-tighter">
                Effective <br /> June 01 <br /> 2023
              </p>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-mantraa-navy mb-4">Comprehensive Corporate Tax Solutions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our structured approach ensures that your business remains compliant while thriving under new tax laws.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, i) => (
              <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-xl transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-mantraa-navy/5 flex items-center justify-center mb-6 group-hover:bg-mantraa-navy transition-colors">
                  <solution.icon className="w-7 h-7 text-mantraa-navy group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold text-mantraa-navy mb-4">{solution.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Mantraa */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-8">Why Choose Mantraa Advisory?</h2>
              <div className="space-y-6">
                {[
                  'In-depth knowledge of UAE Tax Laws',
                  'Strategic approach to tax planning',
                  'Ensured data security and confidentiality',
                  'Personalized services for each client'
                ].map((item) => (
                  <div key={item} className="flex gap-4 items-center">
                    <ShieldCheck className="w-6 h-6 text-mantraa-gold" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 p-12 rounded-[2rem] border border-white/10">
              <p className="text-lg text-slate-300 italic mb-8">
                "Our procedure starts with detailed analysis and ends with seamless filing, keeping your business growth at the center."
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-gold transition-all">
                Speak to our Tax Experts <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
