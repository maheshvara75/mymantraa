import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Scale, 
  ShieldCheck, 
  FileText, 
  Gavel, 
  CheckCircle2, 
  ArrowRight,
  ClipboardCheck,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StatutoryAuditPage() {
  const auditTypes = [
    { title: 'Regulatory Audit', desc: 'Focuses on adherence to specific laws and industry standards.', icon: Gavel },
    { title: 'Performance Audit', desc: 'Evaluates efficiency and effectiveness of business operations.', icon: Search },
    { title: 'Statutory Audit', desc: 'A mandatory legal requirement to verify financial statements.', icon: ClipboardCheck }
  ];

  return (
    <PageLayout 
      title="Statutory Audit" 
      subtitle="Ensuring financial transparency, accuracy, and legal compliance in the UAE."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Understanding Statutory Audit</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Conducting an audit is a critical process for any business, involving adherence to various prerequisites. Among the different types of audits, the Statutory Audit stands out due to its mandatory nature under UAE laws.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              A statutory audit is a legally required review of the accuracy of a company's financial statements and records. The purpose is to determine whether the organization provides a fair and accurate representation of its financial position.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-8 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl flex items-center gap-2">
                Consult an Auditor <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=1000" 
                alt="Audit Review" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-mantraa-navy p-10 rounded-[3rem] shadow-2xl max-w-xs text-white">
               <ShieldCheck className="w-10 h-10 text-mantraa-gold mb-4" />
               <h4 className="font-bold mb-2">Legal Verification</h4>
               <p className="text-xs text-slate-300">Mandatory for Free Zone and Mainland entities in various UAE jurisdictions.</p>
            </div>
          </div>
        </div>

        {/* Audit Types */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-mantraa-navy mb-4">Core Pillars of Auditing</h2>
            <p className="text-slate-500">We specialize in various regulatory and technical audit processes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {auditTypes.map((audit, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-mantraa-paper border border-slate-50 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <audit.icon className="w-8 h-8 text-mantraa-red" />
                </div>
                <h4 className="text-xl font-serif font-bold text-mantraa-navy mb-4">{audit.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{audit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif mb-8 text-mantraa-gold">Statutory Audit Requirements</h2>
              <p className="text-slate-400 mb-8">
                To perform a statutory audit, businesses must provide complete financial data, trial balances, and supporting evidence for all transactions. Our experts guide you through the preparation.
              </p>
              <div className="space-y-4">
                {[
                  'Who Can Perform? Only certified external auditors.',
                  'Accuracy of Financial Statements.',
                  'Verification of Assets and Liabilities.',
                  'Compliance with International Financial Reporting Standards (IFRS).'
                ].map((point, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-5 h-5 text-mantraa-gold mt-1 shrink-0" />
                    <span className="text-slate-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-12 rounded-[2rem] flex flex-col justify-center">
              <h4 className="text-2xl font-serif font-bold mb-6">Need an External Auditor?</h4>
              <p className="text-slate-400 mb-8 italic">"We work with leading registered audit firms in the UAE to facilitate your statutory audit requirements seamlessly."</p>
              <Link to="/contact" className="px-8 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-white hover:text-mantraa-navy transition-all text-center">
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
