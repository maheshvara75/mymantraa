import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  Search, 
  Scale, 
  ArrowRight,
  ShieldCheck,
  UserCheck,
  History,
  Laptop
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CompliancePage() {
  const complianceServices = [
    { 
      title: 'Economic Substance (ESR)', 
      desc: 'Assistance in assessing and filing ESR notifications and reports to ensure your company has sufficient economic presence.', 
      icon: Scale 
    },
    { 
      title: 'UBO Services', 
      desc: 'Identifying and registering Ultimate Beneficial Owners to comply with transparency regulations.', 
      icon: UserCheck 
    },
    { 
      title: 'AML Compliance', 
      desc: 'Developing robust Anti-Money Laundering frameworks and reporting systems.', 
      icon: ShieldAlert 
    },
    { 
      title: 'ERP Automation', 
      desc: 'Implementing advanced ERP systems to automate compliance and financial reporting.', 
      icon: Laptop 
    }
  ];

  return (
    <PageLayout 
      title="Compliance Services" 
      subtitle="Ensuring your business adheres to all legal, industry, and financial standards in the UAE."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Stay Compliant, Stay Confident</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Compliance with various regulations is essential for protecting your business from legal risks and maintaining its reputation. At Mantraa, we provide a broad range of compliance services beyond tax and financial regulations.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our expert team ensures that your business adheres to all legal and industry standards, providing you with the peace of mind to focus on your core strategy.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl"
            >
              Consult an Expert <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="aspect-square bg-mantraa-paper rounded-3xl p-8 flex flex-col justify-center">
                <ShieldCheck className="w-10 h-10 text-mantraa-navy mb-4" />
                <h4 className="font-bold text-mantraa-navy">Full Protection</h4>
                <p className="text-xs text-slate-500 mt-2">Minimize legal and financial risks.</p>
              </div>
              <div className="aspect-[4/3] bg-mantraa-navy rounded-3xl p-8 flex flex-col justify-center text-white">
                <History className="w-10 h-10 text-mantraa-gold mb-4" />
                <h4 className="font-bold">Always Current</h4>
                <p className="text-xs text-slate-400 mt-2">Updates for latest laws.</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573163281532-13462d7448de?auto=format&fit=crop&q=80&w=600" 
                  alt="Business Meeting" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-mantraa-navy mb-4">Comprehensive Compliance Solutions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto italic">
              "We provide a broad range of services ensuring that your business adheres to all legal and industry standards."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceServices.map((service, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-[2.5rem] border border-slate-100 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-mantraa-paper flex items-center justify-center mb-6 group-hover:bg-mantraa-navy transition-colors">
                  <service.icon className="w-7 h-7 text-mantraa-navy group-hover:text-white" />
                </div>
                <h4 className="text-lg font-bold text-mantraa-navy mb-4 group-hover:text-mantraa-red transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Essential</span>
                  <Search className="w-4 h-4 text-mantraa-navy opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Standards */}
        <div className="bg-mantraa-paper rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg mx-auto lg:mx-0">
               <ShieldCheck className="w-12 h-12 text-mantraa-navy" />
            </div>
          </div>
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl font-serif text-mantraa-navy mb-6">Expert Team of Specialists</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Navigating international standards of compliance requires local expertise and global insight. Our team stays focused on every regulation change, from AML updates to ESR declarations, so you don't have to.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {['ESR', 'UBO', 'AML', 'ERP', 'FATCA'].map(tag => (
                <span key={tag} className="px-4 py-1 rounded-full bg-white text-mantraa-navy border border-slate-100 text-xs font-bold shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
