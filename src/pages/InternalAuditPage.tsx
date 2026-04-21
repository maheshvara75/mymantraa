import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Search, 
  Settings, 
  TrendingUp, 
  Users, 
  ArrowRight,
  CheckCircle2,
  Lock,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InternalAuditPage() {
  const benefits = [
    { title: 'Compliance Assurance', desc: 'Ensuring your operations meet internal and external standards.', icon: ShieldCheck },
    { title: 'Risk Management', desc: 'Identifying and mitigating operational and financial risks.', icon: Lock },
    { title: 'Improved Management', desc: 'Providing data-driven insights for executive decision-making.', icon: TrendingUp },
    { title: 'Resource Utilization', desc: 'Optimizing the allocation of human and capital assets.', icon: Layers }
  ];

  return (
    <PageLayout 
      title="Internal Audit" 
      subtitle="Adding value and improving organizational operations through objective evaluation."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Internal Audit: A Value-Add Function</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Internal Auditing is a critical function that adds value to an organization by providing an objective evaluation of its operations. It helps in achieving organizational goals through a structured approach to assessing risk management and control.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mantraa Advisory Service offers specialized internal audit solutions designed to ensure your internal controls are adequate and your processes are performing at peak efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl flex items-center gap-2">
                Enhance Controls <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-8 bg-mantraa-paper rounded-3xl border border-slate-100 hover:border-mantraa-red transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:bg-mantraa-navy transition-colors shadow-sm">
                  <benefit.icon className="w-6 h-6 text-mantraa-navy group-hover:text-white" />
                </div>
                <h4 className="font-bold text-mantraa-navy mb-3 text-sm">{benefit.title}</h4>
                <p className="text-[10px] text-slate-500 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-24 border border-slate-100 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-mantraa-navy mb-4">Core Internal Audit Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We provide a systematic, disciplined approach to evaluate and improve governance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Establishment of Standards',
              'Continuous Monitoring',
              'Objective Assessment',
              'Effective Division of Labor',
              'Enhanced Staff Accountability',
              'In-Depth Knowledge Management',
              'Optimal Asset Protection',
              'Strategic Resource Allocation'
            ].map((service, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-50">
                 <CheckCircle2 className="w-5 h-5 text-mantraa-red shrink-0" />
                 <span className="text-slate-700 text-xs font-bold">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-20 text-white text-center">
            <Settings className="w-16 h-16 text-mantraa-gold mx-auto mb-8 animate-spin-slow" />
            <h2 className="text-4xl font-serif mb-8">Why Partner with Mantraa?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-12">
              Our team of dedicated professionals offers objective assessments tailored to the unique complexities of your business environment.
            </p>
            <Link to="/contact" className="px-12 py-5 bg-mantraa-red text-white rounded-full font-bold hover:bg-white hover:text-mantraa-navy transition-all shadow-2xl">
              Start Your Audit Today
            </Link>
        </div>
      </div>
    </PageLayout>
  );
}
