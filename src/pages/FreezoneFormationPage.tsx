import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowRight,
  CheckCircle2,
  Globe,
  ShoppingCart,
  Factory,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FreezoneFormationPage() {
  const licenseTypes = [
    { title: 'Commercial License', desc: 'Allows specialized trading in various goods.', icon: ShoppingCart },
    { title: 'Industrial License', desc: 'Required for manufacturing or industrial activities.', icon: Factory },
    { title: 'Service License', desc: 'Tailored for providing professional services or consultancy.', icon: Briefcase },
    { title: 'E-commerce License', desc: 'For online trading and digital business operations.', icon: Globe }
  ];

  const benefits = [
    { title: '100% Ownership', desc: 'Full foreign ownership of the company.' },
    { title: 'Tax Benefits', desc: 'Corporate and personal tax exemptions.' },
    { title: 'Capital Repatriation', desc: 'Full repatriation of capital and profits.' },
    { title: 'Strategic Location', desc: 'Access to world-class logistics and infrastructure.' }
  ];

  const regions = [
    { name: 'Dubai', zones: ['DMCC', 'JAFZA', 'Dubai Internet City', 'DSO', 'Dubai South', 'D3'] },
    { name: 'Abu Dhabi', zones: ['ADGM', 'KIZAD', 'TwoFour54'] },
    { name: 'Sharjah', zones: ['SHAMS', 'SAIF-Zone', 'Sharjah Publishing City'] },
    { name: 'RAK', zones: ['RAKEZ', 'RAK FTZ'] }
  ];

  return (
    <PageLayout 
      title="Free Zone Company Formation" 
      subtitle="Comprehensive guide to understanding Free Zone setup across the UAE."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* What is a Free Zone */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Free Zone Setup in the UAE</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The UAE is renowned for its successful Free Zones, which are specially designated areas offering favorable conditions for business operations. These zones provide a streamlined and beneficial environment for entrepreneurs and foreign investors.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              A Free Zone in the UAE is an economic area where companies can enjoy unique tax and customs benefits. Each zone is regulated by its own authority, providing efficient licensing and administrative support.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl">
              Start Free Zone Setup <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-6 bg-mantraa-paper rounded-3xl border border-slate-100 flex flex-col justify-center">
                <CheckCircle2 className="w-8 h-8 text-mantraa-red mb-4" />
                <h4 className="font-bold text-mantraa-navy mb-2">{benefit.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* License Types */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-mantraa-navy mb-4">Types of Free Zone Licenses</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Different licenses are available depending on your business activity and operational needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {licenseTypes.map((type, i) => (
              <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-xl transition-all group text-center">
                <div className="w-14 h-14 rounded-2xl bg-mantraa-navy/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-mantraa-navy transition-colors">
                  <type.icon className="w-7 h-7 text-mantraa-navy group-hover:text-white" />
                </div>
                <h4 className="font-bold text-mantraa-navy mb-4">{type.title}</h4>
                <p className="text-slate-500 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Major Free Zones */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-6">UAE Free Zone Jurisdictions</h2>
            <p className="text-slate-300">We assist with setup across all major Emirates and their respective zones.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h4 className="text-xl font-bold text-mantraa-gold mb-6 border-b border-white/10 pb-4">{region.name}</h4>
                <ul className="space-y-3">
                  {region.zones.map(zone => (
                    <li key={zone} className="flex items-center gap-3 text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-mantraa-gold" />
                      {zone}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="text-center bg-mantraa-paper rounded-[3rem] p-12">
            <MapPin className="w-12 h-12 text-mantraa-navy mx-auto mb-6" />
            <h3 className="text-3xl font-serif text-mantraa-navy mb-4">Choose the Best Zone for Your Business</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              With so many options, choosing the right Free Zone is critical. Our experts provide tailored comparisons to help you decide based on cost, location, and activity.
            </p>
            <Link 
              to="/contact" 
              className="px-10 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl"
            >
              Consult an Expert Now
            </Link>
        </div>
      </div>
    </PageLayout>
  );
}
