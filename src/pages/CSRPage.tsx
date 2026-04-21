import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { Leaf, Users, Globe, Award } from 'lucide-react';

export default function CSRPage() {
  return (
    <PageLayout 
      title="Corporate Social Responsibility" 
      subtitle="Driving sustainable practices and empowering communities for a better tomorrow."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-6">Our Philanthropy</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              At Mantraa Advisory Services, we believe that business growth should coexist with social and environmental progress. Our CSR initiatives are designed to create lasting value for all stakeholders.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-2xl aspect-video"
          >
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000"
              alt="CSR Commitment"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Community CSR */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-mantraa-paper rounded-[3rem] p-12 lg:p-16 border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <Users className="w-6 h-6 text-mantraa-red" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-mantraa-navy">Community Social Responsibility</h3>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Mantraa, Corporate Social Responsibility (CSR) could be defined as a guiding principle to drive sustainable business practices that positively impact society, the environment, and the economy. Mantraa’s CSR mantra may include initiatives focused on environmental stewardship, ethical practices, community support, and responsible innovation. By integrating CSR into its core operations, Mantraa aims to foster trust, enhance brand value, and contribute meaningfully to the communities it serves while maintaining a commitment to long-term growth and ethical integrity.
            </p>
          </motion.div>
        </div>

        {/* Sustainability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-white rounded-[3rem] shadow-xl border border-slate-50"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-mantraa-navy/5 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-mantraa-navy" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-mantraa-navy">Sustainability</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              At Mantraa, Corporate Social Responsibility (CSR) is deeply rooted in sustainability, driving efforts to minimize environmental impact and promote eco-friendly practices. The company integrates sustainable solutions across its operations, prioritizing energy efficiency, waste reduction, and responsible sourcing.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Mantraa collaborates with local communities to promote environmental awareness and conservation projects, fostering a culture of sustainability. Through continuous innovation, Mantraa aims to set an example in reducing carbon footprint and supporting a greener future. These initiatives reflect Mantraa’s commitment to creating lasting positive change for both society and the planet.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1000"
              alt="Sustainability"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Women Empowerment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-16 text-white overflow-hidden relative"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-mantraa-gold" />
              </div>
              <h3 className="text-3xl font-serif font-bold">Women Empowerment</h3>
            </div>
            <div className="inline-block bg-mantraa-red px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              100% Women-Led Initiative
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-slate-200 text-lg leading-relaxed">
                  Mantraa’s CSR initiatives are fully driven by a 100% women workforce, reflecting its strong commitment to women empowerment in both vision and execution. The program focuses on providing education, skill development, and pathways to economic independence for women.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Through financial literacy programs and leadership training led entirely by women professionals, along with collaborations with local women-led organizations, Mantraa actively supports aspiring female entrepreneurs.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-slate-300 leading-relaxed">
                  The company further strengthens its impact by investing in mentorship programs conducted by experienced women mentors, guiding participants through their professional journeys. By implementing inclusive policies designed and managed by women, Mantraa ensures equal access to growth opportunities and leadership roles.
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="italic text-mantraa-gold text-sm leading-relaxed">
                    "This women-led approach not only empowers individuals but also creates a powerful ecosystem of support, reinforcing Mantraa’s belief that when women lead, communities grow stronger and progress becomes truly sustainable."
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-mantraa-gold/10 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full" />
        </motion.div>
      </div>
    </PageLayout>
  );
}
