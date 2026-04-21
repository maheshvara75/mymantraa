import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  TrendingUp, 
  ShieldCheck, 
  PieChart, 
  LineChart, 
  Target, 
  ArrowRight,
  Monitor,
  Zap,
  Building
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CFOServicesPage() {
  const cfoTypes = [
    { title: 'Virtual CFO', desc: 'Remote financial leadership providing periodic oversight and strategic direction.', icon: Monitor },
    { title: 'Interim CFO', desc: 'Temporary placement during transitions, ensuring financial continuity and stability.', icon: Zap },
    { title: 'Full-Time CFO', desc: 'Dedicated leadership for organizations requiring constant financial management.', icon: Briefcase },
    { title: 'CFO for Startups', desc: 'Specialized support for new ventures needing robust financial foundations.', icon: Building }
  ];

  const focusAreas = [
    { title: 'Business Strategy', desc: 'Aligning financial management with long-term commercial goals.' },
    { title: 'Business Value', desc: 'Implementing strategies to enhance overall company valuation.' },
    { title: 'Performance Tracking', desc: 'Real-time monitoring of KPIs and financial outcomes.' },
    { title: 'Risk Management', desc: 'Identifying and mitigating financial and operational risks.' }
  ];

  return (
    <PageLayout 
      title="CFO Services" 
      subtitle="Strategic financial leadership for organizations of all sizes and stages."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">CFO Services: Driving Financial Health</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Chief Financial Officers (CFOs) play a crucial role in managing a company's financial health and strategic direction. Whether for large corporations, startups, or SMEs, a CFO's expertise is vital for effective decision-making.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Mantraa Advisory Service offers a range of outsourced CFO solutions, providing you with high-level expertise without the cost of a full-time executive placement.
            </p>
            <div className="bg-mantraa-paper p-8 rounded-3xl">
              <h4 className="font-bold text-mantraa-navy mb-4">Core Financial Areas We Manage:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Budgeting & Forecasting',
                  'Financial Reporting',
                  'Risk Management',
                  'Performance Dashboards',
                  'Cost Control',
                  'Cash Flow Optimization'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-mantraa-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c7377f323b8d?auto=format&fit=crop&q=80&w=1000" 
                alt="Executive Consultation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl space-y-4 max-w-[240px]"
            >
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-1 h-8 bg-mantraa-red/20 rounded-full overflow-hidden">
                    <div className="w-full h-1/2 bg-mantraa-red" />
                  </div>
                ))}
              </div>
              <p className="font-bold text-mantraa-navy leading-tight text-sm">Real-time Performance Dashboards</p>
            </motion.div>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {focusAreas.map((area, i) => (
            <div key={i} className="text-center p-8 bg-mantraa-paper rounded-3xl hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-50 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-mantraa-navy" />
              </div>
              <h4 className="font-bold text-mantraa-navy mb-3">{area.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>

        {/* CFO Types */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-mantraa-navy mb-4">Flexible CFO Engagement Models</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our outsourced services are designed to fit your unique operational requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cfoTypes.map((type, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-mantraa-red transition-all flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-mantraa-paper flex items-center justify-center mb-6 group-hover:bg-mantraa-navy transition-colors">
                  <type.icon className="w-8 h-8 text-mantraa-navy group-hover:text-white" />
                </div>
                <h4 className="text-lg font-bold text-mantraa-navy mb-4">{type.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{type.desc}</p>
                <Link to="/contact" className="text-mantraa-red font-bold text-xs flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
                  Enquire <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-20 text-white text-center">
            <h2 className="text-4xl font-serif mb-6">Expert Financial Leadership</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-12">
              Don't leave your strategic direction to chance. Partner with Mantraa for world-class CFO expertise tailored to your growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-white hover:text-mantraa-navy transition-all">
                Get Started with Mantraa
              </Link>
              <Link to="/company/profile" className="px-10 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all">
                Download Company Profile
              </Link>
            </div>
        </div>
      </div>
    </PageLayout>
  );
}

function CheckCircle(props: any) {
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
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
}
