import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  FileText, 
  CheckCircle2, 
  HelpCircle, 
  Info, 
  ArrowRight,
  ShieldCheck,
  ClipboardList,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VATAdvisoryPage() {
  const vatServices = [
    { title: 'VAT Registration', desc: 'Expert assistance in mandatory and voluntary VAT registration with the FTA.', icon: ClipboardList },
    { title: 'VAT Return Filing', desc: 'Ensuring accurate and timely submission of your periodic VAT returns.', icon: FileText },
    { title: 'VAT Health Check', desc: 'Comprehensive review of your records to ensure full compliance and identify risks.', icon: Activity },
    { title: 'VAT Consulting', desc: 'Strategic advice on complex transactions and international trade tax implications.', icon: HelpCircle }
  ];

  return (
    <PageLayout 
      title="VAT Advisory Services" 
      subtitle="Complete compliance and strategic guidance for Value Added Tax in the UAE."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">What is Value Added Tax (VAT)?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Value Added Tax (or VAT) is an indirect tax imposed on most supplies of goods and services that are bought and sold. Since its implementation in the UAE on January 1, 2018, it has become a fundamental aspect of the business landscape.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              At Mantraa, we provide specialized VAT advisory services to help businesses navigate the complexities of tax laws, minimize the risk of penalties, and maintain a seamless relationship with the Federal Tax Authority (FTA).
            </p>
            <div className="bg-mantraa-paper p-6 rounded-2xl border-l-4 border-mantraa-red">
              <div className="flex gap-4">
                <Info className="w-6 h-6 text-mantraa-red shrink-0" />
                <p className="text-sm text-slate-700 italic">
                  Standard VAT rate in the UAE is 5%. Businesses with taxable supplies exceeding AED 375,000 must register for VAT.
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=1000" 
                alt="VAT Documents" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-mantraa-navy" />
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Compliance Guaranteed</p>
                <p className="text-mantraa-navy font-bold">Risk-Free Tax Filing</p>
              </div>
            </div>
          </div>
        </div>

        {/* VAT Services Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-mantraa-navy mb-4">Our VAT Solutions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              From registration to audit representation, we manage every aspect of your VAT obligations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vatServices.map((service, i) => (
              <div key={i} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-2xl transition-all group flex gap-8">
                <div className="w-16 h-16 rounded-2xl bg-mantraa-paper flex items-center justify-center shrink-0 group-hover:bg-mantraa-red transition-colors">
                  <service.icon className="w-8 h-8 text-mantraa-navy group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-mantraa-navy mb-4">{service.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <Link to="/contact" className="text-mantraa-red font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    Enquire <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GCC Context */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-20 text-white text-center">
          <h2 className="text-3xl font-serif mb-8">GCC Coordination</h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
            The UAE implemented VAT in coordination with other GCC countries following the Common VAT Agreement. This unified approach ensures regional economic integration and provides businesses with a consistent tax framework across the Middle East.
          </p>
          <div className="inline-flex items-center gap-6 p-2 bg-white/5 rounded-full pl-6">
            <span className="text-sm font-medium text-slate-100">Need regional tax planning?</span>
            <Link to="/contact" className="px-8 py-3 bg-mantraa-gold text-white rounded-full font-bold hover:bg-white hover:text-mantraa-navy transition-all">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
