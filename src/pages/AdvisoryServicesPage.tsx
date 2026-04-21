import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Lightbulb, 
  Target, 
  ArrowRight,
  TrendingUp,
  Gem,
  Coffee,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdvisoryServicesPage() {
  const advisoryServices = [
    { 
      title: 'Consulting Services', 
      desc: 'Customized Ad-Hoc Market Consulting and strategic advice tailored to your industry.', 
      icon: Lightbulb 
    },
    { 
      title: 'Valuation Services', 
      desc: 'Expert business valuation using data-driven insights and international standards.', 
      icon: TrendingUp 
    },
    { 
      title: 'Strategic Advisory', 
      desc: 'High-quality strategic advice for long-term growth and operational efficiency.', 
      icon: Target 
    },
    { 
      title: 'Hotels & Hospitality', 
      desc: 'Specialized advisory services for the vibrant hospitality sector in the UAE.', 
      icon: Coffee 
    }
  ];

  return (
    <PageLayout 
      title="Advisory Services" 
      subtitle="Your trusted partner for high-quality, data-driven insights and strategic advice."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Empowering Businesses with Strategic Insight</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Mantraa Advisory Service stands as a trusted leader for businesses seeking data-driven insights and high-level strategic direction. Our advisory services cater to a wide range of industries and business sizes.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We leverage our international experience and deep analytical expertise to deliver valuable outcomes, helping you navigate complex market dynamics with confidence.
            </p>
            <div className="flex gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-mantraa-paper flex items-center justify-center overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/${i + 20}/100/100`} 
                      alt="Expert" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-mantraa-navy">Expert Partners</p>
                <p className="text-xs text-slate-500">Global Perspective, Local Insight</p>
              </div>
            </div>
          </motion.div>
          
          <div className="relative group">
            <div className="rounded-[4rem] overflow-hidden rotate-2 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                alt="Advisory Session" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-8 -left-8 bg-mantraa-gold p-8 rounded-full shadow-2xl">
              <BarChart3 className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-mantraa-navy mb-4">Core Advisory Specializations</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our expertise spans high-value services designed to maximize your business potential.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisoryServices.map((service, i) => (
              <div 
                key={i} 
                className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-mantraa-red transition-all group flex items-start gap-8"
              >
                <div className="w-16 h-16 rounded-3xl bg-mantraa-paper flex items-center justify-center shrink-0 group-hover:bg-mantraa-red transition-colors">
                  <service.icon className="w-8 h-8 text-mantraa-navy group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-serif font-bold text-mantraa-navy mb-4">{service.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-mantraa-red font-bold group-hover:gap-4 transition-all">
                    Explore Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Focus */}
        <div className="bg-mantraa-navy rounded-[4rem] p-12 lg:p-24 text-white text-center">
            <Gem className="w-16 h-16 text-mantraa-gold mx-auto mb-8" />
            <h2 className="text-4xl font-serif mb-8">International Experience, Local Excellence</h2>
            <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
              Whether you are an SME or a large multinational, our advisory services are tailored to the unique regulatory and economic environment of the UAE. We bring a global standard of excellence to every project.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Market Insights', icon: Globe },
                { label: 'Hospitality', icon: Coffee },
                { label: 'Strategic Advice', icon: Target },
                { label: 'Customized Ad-Hoc', icon: Lightbulb }
              ].map(item => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-mantraa-gold" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
