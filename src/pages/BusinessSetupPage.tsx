import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowRight,
  Building2,
  Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BusinessSetupPage() {
  const benefits = [
    {
      title: 'Strategic Location',
      desc: 'The UAE serves as a gateway between the East and West, providing businesses with access to some of the world\'s fastest-growing markets across the Middle East, Africa, and Asia.',
      icon: Globe
    },
    {
      title: 'Business-Friendly Regulations',
      desc: 'The UAE government has implemented various reforms to simplify the process of starting and operating a business, including 100% foreign ownership in many sectors.',
      icon: Building2
    },
    {
      title: 'Favorable Tax Environment',
      desc: 'With competitive corporate tax rates and a wide network of double taxation treaties, the UAE offers one of the most efficient tax environments globally for business growth.',
      icon: Scale
    },
    {
      title: 'Advanced Infrastructure',
      desc: 'World-class airports, ports, telecommunications, and industrial zones provide a robust foundation for businesses to operate effectively and expand their reach.',
      icon: Zap
    },
    {
      title: 'Confidentiality and Privacy',
      desc: 'The UAE provides strong legal frameworks to protect business interests and maintain high levels of confidentiality for investors and entrepreneurs.',
      icon: ShieldCheck
    },
    {
      title: 'High-Quality Lifestyle',
      desc: 'Beyond business, the UAE offers a safe, cosmopolitan environment with premium healthcare, education, and entertainment, attracting top global talent.',
      icon: Users
    }
  ];

  const steps = [
    { title: 'Determine the Business Activity', desc: 'Identify the legal structure and activities your business will perform.' },
    { title: 'Choose the Jurisdiction', desc: 'Decide between Mainland, Free Zone, or Offshore based on your needs.' },
    { title: 'Select a Trade Name', desc: 'Ensure the name follows UAE regulations and is unique.' },
    { title: 'Apply for Initial Approval', desc: 'Secure the go-ahead from respective authorities to proceed.' },
    { title: 'Draft Legal Documents', desc: 'Prepare the Memorandum of Association (MOA) and other necessary paperwork.' },
    { title: 'obtain Business License', desc: 'Finalize registration and receive your official operating license.' }
  ];

  return (
    <PageLayout 
      title="Business Setup Services" 
      subtitle="Comprehensive solutions for starting your venture in the UAE's thriving economy."
    >
      {/* Hero Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Why Register a Company in the UAE?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The United Arab Emirates (UAE) stands out as a prime destination for entrepreneurs and businesses, offering a plethora of advantages that make it an attractive choice for company registration. 
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Whether you're looking to set up in Dubai, Sharjah, Ras Al Khaimah (RAK), or Abu Dhabi, the UAE provides a stable and dynamic environment designed to foster innovation and cross-border trade.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-lg flex items-center gap-2"
              >
                Register Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, i) => (
              <div key={i} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-mantraa-paper flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-mantraa-navy" />
                </div>
                <h4 className="font-bold text-mantraa-navy mb-2">{benefit.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Setup Options Area */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-20 text-white mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-6">Business Setup Jurisdictions</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Choose the right path for your business based on your specific requirements and operational goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Mainland', 
                desc: 'Operate freely within the UAE market and take on government contracts with 100% foreign ownership for many activities.',
                href: '/services/business-setup/mainland'
              },
              { 
                title: 'Free Zone', 
                desc: 'Benefit from specialized zones offering 100% ownership, tax exemptions, and duty-free trade with streamlined procedures.',
                href: '/services/business-setup/freezone'
              },
              { 
                title: 'Offshore', 
                desc: 'A cost-effective solution for international asset protection, tax planning, and managing global business interests.',
                href: '/services/business-setup/offshore'
              }
            ].map((option, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group">
                <h3 className="text-2xl font-serif font-bold mb-4 text-mantraa-gold">{option.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {option.desc}
                </p>
                <Link to={option.href} className="text-white font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Steps */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-mantraa-navy mb-6">How to Register a Company in the UAE?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our systematic approach ensures a smooth and compliant setup process for your new venture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-12 h-12 rounded-full border-2 border-mantraa-red flex items-center justify-center shrink-0 text-mantraa-red font-bold">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-mantraa-navy mb-2">{step.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
            <h3 className="text-3xl font-serif text-mantraa-navy mb-8">Ready to bring your business to the UAE?</h3>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-2xl group"
            >
              Get Started with Mantraa
              <CheckCircle2 className="ml-3 w-6 h-6 group-hover:scale-110 transition-transform" />
            </Link>
        </div>
      </div>
    </PageLayout>
  );
}
