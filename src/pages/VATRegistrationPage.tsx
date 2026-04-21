import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight,
  ClipboardCheck,
  Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VATRegistrationPage() {
  const benefits = [
    { title: 'Legal Compliance', desc: 'Comply with UAE tax laws and avoid penalties for non-registration.' },
    { title: 'Business Credibility', desc: 'Enhance your professional standing with a valid TRN.' },
    { title: 'Input Tax Recovery', desc: 'Reclaim VAT paid on business-related expenses.' },
    { title: 'Market Expansion', desc: 'Transact smoothly with B2B clients who require tax invoices.' }
  ];

  const thresholds = [
    { type: 'Mandatory', value: 'AED 375,000', detail: 'If annual supplies exceed this amount.' },
    { type: 'Voluntary', value: 'AED 187,500', detail: 'Option to register if supplies exceed this limit.' }
  ];

  return (
    <PageLayout 
      title="VAT Registration" 
      subtitle="Ensuring your business is compliant with the UAE Federal Tax Authority regulations."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Importance of VAT Registration</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Registering for VAT in the UAE is not just a regulatory requirement but a step towards building a transparent and credible business. Having a VAT registration helps your business comply with UAE tax laws.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              If your company's supply threshold exceeds AED 375,000 and you fail to register within 30 days, you may face significant penalties. Mantraa simplifies this journey for you.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl">
                Register for VAT
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-8 bg-mantraa-paper rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:bg-mantraa-red transition-colors shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-mantraa-navy group-hover:text-white" />
                </div>
                <h4 className="font-bold text-mantraa-navy mb-2">{benefit.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Thresholds */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Registration Thresholds</h2>
            <p className="text-slate-400">Determine if your business is required to register.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {thresholds.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] text-center">
                <h4 className="text-mantraa-gold text-sm font-bold uppercase tracking-widest mb-4">{t.type}</h4>
                <p className="text-5xl font-serif mb-4">{t.value}</p>
                <p className="text-slate-400 text-sm">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="rounded-[4rem] overflow-hidden shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000" 
                            alt="VAT Documentation" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <div className="absolute -bottom-8 -left-8 bg-mantraa-red p-8 rounded-3xl shadow-2xl text-white">
                        <AlertTriangle className="w-10 h-10 mb-4" />
                        <h4 className="font-bold mb-2">Penalty Warning</h4>
                        <p className="text-xs opacity-80">Avoid AED 20,000 fine for late registration.</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-serif text-mantraa-navy mb-8">Documents Required</h2>
                    <ul className="space-y-4">
                        {[
                            'Trade License Copy',
                            'Passport & Emirates ID (Sponsors/Managers)',
                            'Company MOA',
                            'Bank Account Details & Address Label',
                            'Turnover Statements (Last 12 Months)',
                            'Estimated Future Turnover'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-slate-600 bg-mantraa-paper p-4 rounded-2xl border border-slate-50">
                                <div className="w-6 h-6 rounded-full bg-mantraa-navy flex items-center justify-center text-white text-[10px] font-bold">
                                    {i+1}
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        {/* CTA */}
        <div className="bg-mantraa-paper rounded-[3rem] p-12 lg:p-20 text-center">
            <h2 className="text-3xl font-serif text-mantraa-navy mb-6">Expert VAT Registration Support</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-12">
                Our experts guide you through the FTA portal, ensuring all documents are correctly filed to secure your Tax Registration Number (TRN) promptly.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all">
                Submit Your Files <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
      </div>
    </PageLayout>
  );
}
