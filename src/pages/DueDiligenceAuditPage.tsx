import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Building2, 
  Search, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2,
  Scale,
  FileSearch,
  Handshake
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DueDiligenceAuditPage() {
  const auditTypes = [
    { title: 'Financial Due Diligence', desc: 'In-depth review of financial statements and projections.', icon: Scale },
    { title: 'Legal Due Diligence', desc: 'Assessing legal compliance, contracts, and obligations.', icon: FileSearch },
    { title: 'Operational Due Diligence', desc: 'Evaluating the efficiency of core business processes.', icon: Building2 },
    { title: 'Tax Due Diligence', desc: 'Uncovering potential historical tax liabilities.', icon: ShieldCheck }
  ];

  return (
    <PageLayout 
      title="Due Diligence Audit" 
      subtitle="Strategic investigation to assess value, risks, and organizational health."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Methodical Risk Assessment</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Due diligence is a detailed and methodical investigation conducted to assess the value and risks of a business before significant transactions, such as mergers, acquisitions, or investments.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              This process helps in verifying information, identifying hidden liabilities, and ensuring that the business aligns with your strategic goals. Mantraa provides rigorous audit frameworks to protect your investment interests.
            </p>
            <Link to="/contact" className="px-10 py-5 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl flex items-center gap-3 w-fit">
              Initiate Investigation <Handshake className="w-5 h-5" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {auditTypes.map((type, i) => (
              <div key={i} className="p-8 bg-mantraa-paper rounded-3xl border border-slate-100 hover:border-mantraa-navy transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:bg-mantraa-navy transition-colors shadow-sm">
                  <type.icon className="w-8 h-8 text-mantraa-navy group-hover:text-white" />
                </div>
                <h4 className="font-bold text-mantraa-navy mb-3 text-sm">{type.title}</h4>
                <p className="text-[10px] text-slate-500 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Value Section */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif mb-12 text-center">The Mantraa Excellence in Due Diligence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: 'Independent Verification', desc: 'Unbiased assessment of assets, liabilities, and market position.' },
                { title: 'Risk Remediation', desc: 'Identifying red flags before they become structural problems.' },
                { title: 'Valuation Support', desc: 'Data-driven insights to negotiate fair deal prices.' },
                { title: 'Compliance Check', desc: 'Ensuring alignment with local UAE and Free Zone regulations.' }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-mantraa-gold flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-mantraa-navy" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                    <p className="text-slate-400 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
