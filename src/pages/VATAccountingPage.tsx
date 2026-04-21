import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Calculator, 
  BookOpen, 
  FileCheck, 
  History, 
  ArrowRight,
  TrendingDown,
  PieChart,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VATAccountingPage() {
  const vatTypes = [
    { title: 'Input VAT', desc: 'VAT incurred on purchases of goods or services. Reclaimable by the business.', icon: TrendingDown },
    { title: 'Output VAT', desc: 'VAT charged on sales of goods or services. Collected on behalf of the FTA.', icon: Calculator }
  ];

  const rates = [
    { rate: '5%', type: 'Standard Rate', detail: 'Applies to most goods and services in the UAE.' },
    { rate: '0%', type: 'Zero Rate', detail: 'Applies to specific exports, healthcare, and education.' },
    { rate: 'Exempt', type: 'Exemptions', detail: 'Bare land, financial services, and residential property.' }
  ];

  return (
    <PageLayout 
      title="VAT Accounting" 
      subtitle="Accurate recording and management of VAT-related transactions in the UAE."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Specialized VAT Accounting</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              VAT accounting involves recording and managing VAT-related transactions in accordance with UAE Tax Law. This includes accurate documentation and timely reporting to ensure compliance and minimize tax liabilities.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mantraa Advisory Service provides comprehensive bookkeeping that separates input and output VAT, tracks zero-rated supplies, and manages exemptions to keep your audits stress-free.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl">
              Clean Your VAT Books <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {vatTypes.map((type, i) => (
              <div key={i} className="p-8 bg-mantraa-paper rounded-[2.5rem] border border-slate-100 hover:-translate-y-2 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-mantraa-navy transition-colors">
                  <type.icon className="w-7 h-7 text-mantraa-navy group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold text-mantraa-navy mb-4">{type.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* VAT Rates */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif text-mantraa-navy text-center mb-16">UAE VAT Rate Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {rates.map((r, i) => (
                    <div key={i} className="text-center p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                        <div className="text-5xl font-black text-mantraa-red mb-4">{r.rate}</div>
                        <h4 className="text-xl font-bold text-mantraa-navy mb-4">{r.type}</h4>
                        <p className="text-slate-500 text-sm">{r.detail}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Reverse Charge */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-serif mb-8 text-mantraa-gold">Reverse Charge Mechanism (RCM)</h2>
                    <p className="text-slate-300 mb-8 leading-relaxed">
                        Managing RCM for international services and imports requires precise accounting entries. We handle the documentation collection, VAT calculation, and input tax claims to keep your RCM compliance airtight.
                    </p>
                    <div className="space-y-4">
                        {[
                            'Import of Services from outside UAE.',
                            'Intra-company transactions.',
                            'Strategic input tax reclamation.'
                        ].map((point, i) => (
                            <div key={i} className="flex items-center gap-4 text-sm">
                                <ShieldCheck className="w-5 h-5 text-mantraa-gold" />
                                <span className="text-slate-300">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] backdrop-blur-md">
                    <PieChart className="w-16 h-16 text-mantraa-gold mb-8 mx-auto" />
                    <p className="text-lg text-slate-300 italic mb-8 text-center font-serif">
                        "Proper VAT accounting is essential for financial transparency and maximizing your tax efficiency."
                    </p>
                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-8 py-4 bg-white text-mantraa-navy rounded-full font-bold hover:bg-mantraa-red hover:text-white transition-all shadow-xl">
                        Schedule an Assessment
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
