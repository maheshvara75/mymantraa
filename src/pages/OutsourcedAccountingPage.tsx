import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Calculator,
  PieChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OutsourcedAccountingPage() {
  const benefits = [
    { title: 'Cost Savings', desc: 'Reduce the overheads of local hiring, training, and office space.' },
    { title: 'Expert Access', desc: 'Professional insights from experts familiar with UAE tax and accounting laws.' },
    { title: 'Scalability', desc: 'Easily adjust the level of support as your business grows or changes.' },
    { title: 'Data Security', desc: 'Advanced storage and security protocols for your sensitive financial data.' }
  ];

  return (
    <PageLayout 
      title="Outsourced Accounting" 
      subtitle="Strategic financial management without the executive overhead."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Why Outsource Accounting in Dubai?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Establishing a business involves more than just setting up a structure—it requires solid foundational elements to ensure long-term success. One critical pillar is effective accounting, which supports streamlined business operations.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Outsourcing is a strategic decision that offers access to top-tier expertise while maintaining focus on your core business goals. Mantraa Advisory Service provides end-to-end accounting management tailored to the UAE regulatory environment.
            </p>
            <Link to="/contact" className="px-10 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl inline-flex items-center gap-2">
              Explore Our Approach <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-6 p-8 bg-mantraa-paper rounded-[2.5rem] border border-slate-50 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-mantraa-red" />
                </div>
                <div>
                  <h4 className="font-bold text-mantraa-navy mb-2">{benefit.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-6">Services Offered by Mantraa</h2>
            <p className="text-slate-400 max-w-2xl mx-auto italic underline decoration-mantraa-gold underline-offset-8">
              "We provide a comprehensive portfolio of services to meet every financial challenge."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Calculator, label: 'Standard Accounting', desc: 'Daily entries and management.' },
              { icon: PieChart, label: 'Financial Reporting', desc: 'Detailed MIS and health reports.' },
              { icon: ShieldCheck, label: 'Tax Coordination', desc: 'Seamless integration with VAT/CT.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-mantraa-gold transition-colors">
                  <item.icon className="w-8 h-8 text-mantraa-gold group-hover:text-mantraa-navy" />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.label}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
