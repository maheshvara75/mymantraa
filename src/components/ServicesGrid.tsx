import { motion } from 'motion/react';
import { 
  Building2, 
  Calculator, 
  FileText, 
  Scale, 
  UserCheck, 
  BarChart3, 
  Briefcase, 
  CreditCard 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Business Setup',
    desc: 'Mainland, Freezone, and Offshore company formation tailored to your needs.',
    icon: Building2,
    href: '/services/business-setup',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Bookkeeping & Audit',
    desc: 'Accurate financial records and statutory audits to ensure transparency.',
    icon: Calculator,
    href: '/services/bookkeeping',
    color: 'bg-red-50 text-red-600'
  },
  {
    title: 'VAT Advisory',
    desc: 'Registration, returns, and compliance for UAE Value Added Tax.',
    icon: FileText,
    href: '/services/vat',
    color: 'bg-amber-50 text-amber-600'
  },
  {
    title: 'Corporate Tax',
    desc: 'Strategic tax planning and registration for the new UAE Corporate Tax.',
    icon: Scale,
    href: '/services/corporate-tax',
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    title: 'Compliance Services',
    desc: 'ESR, UBO, and AML compliance to keep your business risk-free.',
    icon: UserCheck,
    href: '/services/compliance',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'Advisory Services',
    desc: 'Feasibility studies, valuations, and strategic growth advisory.',
    icon: BarChart3,
    href: '/services/advisory',
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    title: 'CFO Services',
    desc: 'Outsourced CFO solutions for budgeting, forecasting, and cost control.',
    icon: Briefcase,
    href: '/services/cfo',
    color: 'bg-rose-50 text-rose-600'
  },
  {
    title: 'UAE Residency',
    desc: 'Golden Visa assistance and comprehensive visa processing services.',
    icon: CreditCard,
    href: '/services/residency',
    color: 'bg-cyan-50 text-cyan-600'
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-mantraa-red uppercase tracking-widest mb-4">Our Expertise</h2>
            <p className="text-4xl md:text-5xl font-serif text-mantraa-navy mb-6">Comprehensive Business Solutions</p>
            <p className="max-w-2xl mx-auto text-slate-500 text-lg">
              Empowering businesses in the UAE with professional advisory services designed for excellence and compliance.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif font-bold text-mantraa-navy mb-4">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <Link
                to={service.href}
                className="inline-flex items-center text-sm font-bold text-mantraa-red hover:text-mantraa-navy transition-colors"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
