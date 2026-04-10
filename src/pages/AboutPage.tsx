import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { Target, Eye, Award, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <PageLayout 
      title="About Mantraa" 
      subtitle="Your trusted partner in the UAE business landscape since 2008."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-6">Our Story</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Mantraa was founded with a vision to simplify the complexities of doing business in the UAE. Over the years, we have grown into a leading advisory firm, serving hundreds of clients across various industries.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our team of experts brings decades of combined experience in business setup, tax advisory, and financial management. We pride ourselves on our integrity, transparency, and commitment to our clients' success.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
              alt="Office"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-12 bg-white rounded-[2rem] shadow-xl border border-slate-100">
            <div className="w-16 h-16 rounded-2xl bg-mantraa-navy/5 flex items-center justify-center mb-8">
              <Target className="w-8 h-8 text-mantraa-navy" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-mantraa-navy mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide world-class business advisory services that empower entrepreneurs and corporations to thrive in the UAE's dynamic economy through compliance and strategic excellence.
            </p>
          </div>
          <div className="p-12 bg-white rounded-[2rem] shadow-xl border border-slate-100">
            <div className="w-16 h-16 rounded-2xl bg-mantraa-red/5 flex items-center justify-center mb-8">
              <Eye className="w-8 h-8 text-mantraa-red" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-mantraa-navy mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the most trusted and innovative business advisory partner in the Middle East, recognized for our ethical practices and transformative impact on our clients' growth.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-mantraa-navy mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Integrity', desc: 'Unwavering commitment to ethical practices.' },
              { icon: Users, title: 'Client-Centric', desc: 'Your success is our primary motivation.' },
              { icon: Award, title: 'Excellence', desc: 'Striving for perfection in every service.' },
              { icon: Award, title: 'Innovation', desc: 'Modern solutions for modern business challenges.' }
            ].map((value, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-mantraa-gold/10 flex items-center justify-center mx-auto">
                  <value.icon className="w-6 h-6 text-mantraa-gold" />
                </div>
                <h4 className="text-xl font-bold text-mantraa-navy">{value.title}</h4>
                <p className="text-slate-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
