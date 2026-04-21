import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Calculator, 
  BarChart, 
  ClipboardList, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BasicBookkeepingPage() {
  const highlights = [
    { title: 'Client-Centric', desc: 'Accounting frameworks tailored to your business goals.' },
    { title: 'Qualified Team', desc: 'Chartered accountants with deep UAE market expertise.' },
    { title: 'Transparency', desc: 'Clear communication and honest financial advisory.' },
    { title: 'Tech-Driven', desc: 'Modern cloud accounting for real-time visibility.' }
  ];

  return (
    <PageLayout 
      title="Basic Bookkeeping and MIS" 
      subtitle="The foundation of financial success and informed decision-making in the UAE."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Crucial Financial Management</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Dubai's dynamic market, vibrant business environment, and complex regulatory landscape make effective financial management crucial for success. Whether you're a startup or an established enterprise, reliable bookkeeping can significantly impact your sustainability.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Management Information Systems (MIS) provide the data you need to drive growth. At Mantraa, we don't just record numbers; we provide the insights that turn those numbers into business strategies.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl">
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <div key={i} className="p-8 bg-mantraa-paper rounded-3xl border border-slate-100 hover:-translate-y-1 transition-all">
                <CheckCircle2 className="w-8 h-8 text-mantraa-red mb-4" />
                <h4 className="font-bold text-mantraa-navy text-sm mb-2">{item.title}</h4>
                <p className="text-[10px] text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-20 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-8">Why Mantraa Advisory Stands Out</h2>
            <div className="space-y-8 text-left">
              {[
                'Highly Qualified and Experienced Team of financial experts.',
                'Comprehensive Service Portfolio catering to all business sizes.',
                'Commitment to Transparency and clear financial communication.',
                'Integration of latest Technology for precise reporting.'
              ].map((point, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-mantraa-gold flex items-center justify-center shrink-0 mt-1">
                    <Zap className="w-3 h-3 text-mantraa-navy" />
                  </div>
                  <p className="text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
