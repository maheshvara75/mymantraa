import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Star, TrendingUp } from 'lucide-react';

export default function WhyUsPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Integrity & Trust',
      desc: 'At Mantraa Advisory Services, every endeavour is guided by our core values that are founded upon mutual trust and respect. We are committed to serving our clients with integrity.'
    },
    {
      icon: Heart,
      title: 'Exceptional Service',
      desc: 'We strive to provide exceptional service, going above and beyond to ensure our clients receive the best possible advisory and accounting solutions.'
    },
    {
      icon: Star,
      title: 'Quality Deliverables',
      desc: 'Our focus is on delivering high-quality results that add real value to your business operations and strategic goals.'
    },
    {
      icon: TrendingUp,
      title: 'Tangible Results',
      desc: 'We help our clients achieve tangible results in an ever-changing business landscape through dedicated support and expert guidance.'
    }
  ];

  return (
    <PageLayout 
      title="Why Us?" 
      subtitle="Excellence, Integrity, and Value-Added Service in everything we do."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-serif text-mantraa-navy mb-6">Your Strategic Partner for Growth</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Mantraa Advisory Services is dedicated to providing high-quality solutions tailored to your unique business needs. Our approach combines deep local expertise with international standards of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-white rounded-[2rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-mantraa-navy/5 flex items-center justify-center mb-8">
                <value.icon className="w-8 h-8 text-mantraa-navy" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-mantraa-navy mb-4">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-20 text-white overflow-hidden relative">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl font-serif mb-6">Commitment to Excellence</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              In an ever-changing business environment, we remain constant in our dedication to your success. Our expert team ensures that every project is handled with the utmost professionalism and care.
            </p>
            <button className="bg-mantraa-red text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-mantraa-navy transition-all">
              Experience the Mantraa Difference
            </button>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 translate-x-1/2" />
        </div>
      </div>
    </PageLayout>
  );
}
