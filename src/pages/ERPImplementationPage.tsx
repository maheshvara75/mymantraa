import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Database, 
  Settings, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  BarChart3,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ERPImplementationPage() {
  const steps = [
    { title: 'Project Preparation', desc: 'Defining objectives and clarifying why the ERP system is being implemented.' },
    { title: 'Business Analysis', desc: 'Understanding existing workflows and mapping them to the new software.' },
    { title: 'Implementation', desc: 'Configuring the system, migrating data, and technical setup.' },
    { title: 'Training & Support', desc: 'Empowering your team to use the new system effectively.' }
  ];

  return (
    <PageLayout 
      title="ERP Implementation" 
      subtitle="Streamline your complex business functions with advanced Enterprise Resource Planning solutions."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Integrated Business Systems</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Implementing an Enterprise Resource Planning (ERP) system involves a series of detailed and complex steps, given the comprehensive nature of these systems and their integration across various business functions.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mantraa simplifies your digital transformation. Whether you are migrating from manual sheets or upgrading a legacy system, our experts ensure a smooth transition that boosts productivity and data accuracy.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl flex items-center gap-2">
                Consult an ERP Specialist <Cpu className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="relative">
             <div className="bg-mantraa-navy p-12 rounded-[3.5rem] text-white">
                <Layers className="w-16 h-16 text-mantraa-gold mb-8 mx-auto" />
                <h4 className="text-2xl font-serif text-center mb-8">Key ERP Modules</h4>
                <div className="grid grid-cols-2 gap-4">
                   {[
                      'Finance & Accounting',
                      'Human Resources',
                      'Supply Chain Management',
                      'Customer Relations (CRM)',
                      'Inventory Management',
                      'Automated Reporting'
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 group hover:bg-mantraa-red transition-colors">
                         <div className="w-2 h-2 rounded-full bg-mantraa-gold group-hover:bg-white" />
                         <span className="text-[10px] font-bold group-hover:text-white">{item}</span>
                      </div>
                   ))}
                </div>
             </div>
             <div className="absolute -bottom-8 -left-8 bg-mantraa-gold p-6 rounded-2xl shadow-2xl">
                <BarChart3 className="w-8 h-8 text-mantraa-navy" />
             </div>
          </div>
        </div>

        {/* Process Map */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif text-mantraa-navy text-center mb-16">The Implementation Lifecycle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, i) => (
                    <div key={i} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-full bg-mantraa-paper flex items-center justify-center mb-6 group-hover:bg-mantraa-navy transition-all">
                            <Settings className="w-8 h-8 text-mantraa-navy group-hover:text-white group-hover:rotate-90 transition-all duration-700" />
                        </div>
                        <h4 className="text-lg font-bold text-mantraa-navy mb-3">{step.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
                { title: 'Unified Data Source', icon: Database, detail: 'Single point of truth for all business departments and financial reports.' },
                { title: 'Process Automation', icon: Zap, detail: 'Eliminate manual errors through automated workflows and approvals.' },
                { title: 'Scaling Ability', icon: ArrowUpRight, detail: 'Systems that grow as your business expands across new UAE regions.' }
            ].map((item, i) => (
                <div key={i} className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-mantraa-paper flex items-center justify-center mb-6">
                        <item.icon className="w-7 h-7 text-mantraa-navy" />
                    </div>
                    <h4 className="text-xl font-bold text-mantraa-navy mb-4">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.detail}</p>
                </div>
            ))}
        </div>

        {/* CTA */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white text-center">
            <h2 className="text-4xl font-serif mb-8 text-mantraa-gold">Modernize Your Operations</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
                A well-implemented ERP system is the backbone of a successful enterprise. Let us help you select the right vendor and manage the implementation for maximum ROI.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-mantraa-red text-white rounded-full font-black hover:bg-white hover:text-mantraa-navy transition-all shadow-2xl">
                Book a Digital Strategy Session <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
      </div>
    </PageLayout>
  );
}
