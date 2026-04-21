import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Target, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PieChart,
  Zap,
  Building
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TaxPlanningPage() {
  const aspects = [
    { title: 'Strategic Tax Planning', desc: 'Aligning business operations with UAE regulations while legally minimizing liability.' },
    { title: 'Exemption Optimization', desc: 'Expert guidance on utilizing relief mechanisms and Free Zone incentives.' },
    { title: 'Business Structure', desc: 'Advising on the ideal legal structure to optimize your group-wide tax position.' },
    { title: 'Ongoing Advisory', desc: 'Continuous support to adapt to changing tax laws and FTA decisions.' }
  ];

  return (
    <PageLayout 
      title="Tax Planning Services" 
      subtitle="Fostering business growth and compliance through strategic tax management in the UAE."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Strategic Corporate Tax Planning</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Mantraa Advisory Service provides expert corporate tax planning services designed to align your business operations with UAE’s corporate tax regulations while minimizing your tax liabilities legally.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our goal is to foster business growth and compliance through strategic tax management. We analyze your commercial goals and translate them into a tax-efficient roadmap.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl flex items-center gap-2">
                Consult a Planner <ShieldCheck className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="relative">
             <div className="bg-mantraa-paper p-12 rounded-[4rem] border border-slate-100 flex flex-col items-center">
                <PieChart className="w-20 h-20 text-mantraa-navy mb-8 animate-pulse" />
                <h4 className="text-2xl font-serif text-mantraa-navy mb-4 text-center">Efficiency Pillars</h4>
                <div className="space-y-3 w-full">
                   {[
                      'Strategic Jurisdiction Choice',
                      'Transfer Pricing Policy',
                      'Expense Deductibility Review',
                      'Small Business Relief Utilization'
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-50">
                         <CheckCircle2 className="w-4 h-4 text-mantraa-red" />
                         <span className="text-xs font-bold text-slate-700">{item}</span>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* Aspects Grid */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif text-mantraa-navy text-center mb-16">Key Aspects of Our Planning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {aspects.map((item, i) => (
                    <div key={i} className="flex gap-6 p-10 bg-white border border-slate-100 rounded-[3rem] hover:shadow-xl transition-all">
                        <div className="w-14 h-14 rounded-2xl bg-mantraa-paper flex items-center justify-center shrink-0">
                            <Zap className="w-7 h-7 text-mantraa-red" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-mantraa-navy mb-3">{item.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-mantraa-navy rounded-[3.5rem] p-12 lg:p-24 text-white overflow-hidden relative">
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-serif mb-8 text-mantraa-gold">Why Strategize with Mantraa?</h2>
                    <p className="text-slate-400 mb-12">
                        Tax planning is not a one-time event—it is an ongoing process. We help you stay ahead of regulatory shifts while ensuring your operations remain lean and profitable.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                       <div>
                          <div className="text-3xl font-serif text-mantraa-gold mb-2">15+</div>
                          <p className="text-xs text-slate-400 uppercase tracking-widest">Years of Expertise</p>
                       </div>
                       <div>
                          <div className="text-3xl font-serif text-mantraa-gold mb-2">100%</div>
                          <p className="text-xs text-slate-400 uppercase tracking-widest">Compliance Track Record</p>
                       </div>
                    </div>
                </div>
                <div className="lg:w-1/2 bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-md">
                   <Target className="w-16 h-16 text-mantraa-gold mb-8 mx-auto" />
                   <p className="text-lg text-slate-300 italic mb-8 text-center font-serif">
                      "Leveraging global tax standards and local UAE insights to drive your business forward."
                   </p>
                   <Link to="/contact" className="w-full inline-flex items-center justify-center px-10 py-5 bg-white text-mantraa-navy rounded-full font-black hover:bg-mantraa-red hover:text-white transition-all shadow-2xl">
                      Plan My Tax Strategy <ArrowRight className="w-5 h-5" />
                   </Link>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <Building className="w-[800px] h-[800px] absolute -top-1/4 -right-1/4" />
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
