import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Calculator, 
  Search, 
  BarChart, 
  Settings, 
  ShieldCheck, 
  Zap, 
  CheckCircle2,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BookkeepingAuditPage() {
  const highlights = [
    {
      title: 'Client-Centric Approach',
      desc: 'We prioritize your specific business goals, offering tailored accounting frameworks that grow with your organization.',
      icon: Users
    },
    {
      title: 'Qualified Team',
      desc: 'Our financial experts bring years of UAE market experience and international certifications to your accounts.',
      icon: ShieldCheck
    },
    {
      title: 'Tech-Driven Solutions',
      desc: 'Utilizing the latest ERP and cloud accounting software for real-time visibility and accurate reporting.',
      icon: Zap
    },
    {
      title: 'Transparency',
      desc: 'Complete clarity in communication and reporting, ensuring you always know the financial health of your firm.',
      icon: Search
    }
  ];

  const services = [
    { title: 'Statutory Audit', desc: 'Independent assessments to ensure your financial statements comply with UAE regulations.', href: '/services/bookkeeping/statutory' },
    { title: 'Internal Audit', desc: 'Evaluating internal controls and risk management processes to improve operations.', href: '/services/bookkeeping/internal' },
    { title: 'Bookkeeping', desc: 'Precise record-keeping and MIS reporting to drive data-backed decisions.', href: '/services/bookkeeping/mis' },
    { title: 'Accounting Staffing', desc: 'Temporary and long-term professional staffing to support your finance department.', href: '/services/bookkeeping/staffing' }
  ];

  return (
    <PageLayout 
      title="Bookkeeping and Auditing" 
      subtitle="Ensuring financial integrity and operational efficiency in Dubai's dynamic market."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Crucial for Your Success in the UAE</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Dubai's dynamic market and complex regulatory landscape make effective financial management crucial. Whether you're a startup or an established enterprise, engaging a reliable bookkeeping and accounting firm can significantly impact your sustainability and growth.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Under UAE Commercial Companies Law, maintaining proper accounting records is a legal mandate. Mantraa Advisory Services provides the expertise needed to turn these compliance requirements into a competitive advantage.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-8 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-lg">
                Book a Consultation
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <div key={i} className="p-8 bg-mantraa-paper rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <item.icon className="w-6 h-6 text-mantraa-navy" />
                </div>
                <h4 className="font-bold text-mantraa-navy mb-3">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-20 text-white mb-24 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-serif mb-12 text-center">Benefits of Outsourcing to Mantraa</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: 'Cost-Effective', desc: 'Reduce overheads associated with full-time in-house accounting teams.' },
                { title: 'Accuracy & Expertise', desc: 'Avoid costly errors with our team of chartered accountants and tax experts.' },
                { title: 'Flexibility', desc: 'Scalable services that adapt to your seasonal or growth-related business needs.' }
              ].map((benefit, i) => (
                <div key={i} className="text-center">
                  <h4 className="text-xl font-bold text-mantraa-gold mb-4">{benefit.title}</h4>
                  <p className="text-slate-400 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-mantraa-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>

        {/* Services Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-mantraa-navy mb-4">Our Financial Solutions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto italic">
              "We provide a comprehensive portfolio of services to meet every financial challenge."
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <Link 
                key={i} 
                to={service.href}
                className="p-8 rounded-3xl border border-slate-100 bg-white hover:border-mantraa-red transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-mantraa-paper flex items-center justify-center mb-6 group-hover:bg-mantraa-red transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-mantraa-navy group-hover:text-white" />
                </div>
                <h4 className="font-bold text-mantraa-navy mb-3">{service.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed mb-6">{service.desc}</p>
                <span className="text-mantraa-red text-xs font-bold flex items-center gap-2">
                  Learn more <BarChart className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="text-center bg-mantraa-paper rounded-[3rem] p-12">
            <Calculator className="w-12 h-12 text-mantraa-navy mx-auto mb-6" />
            <h3 className="text-3xl font-serif text-mantraa-navy mb-4">Ready to Optimize Your Finance?</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Our experts are ready to provide clarity on any specific requirements or complex challenges you're facing.
            </p>
            <Link 
              to="/contact" 
              className="px-10 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl"
            >
              Get Started Now
            </Link>
        </div>
      </div>
    </PageLayout>
  );
}
