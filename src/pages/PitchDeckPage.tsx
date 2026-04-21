import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Target, 
  Zap, 
  ArrowRight,
  TrendingUp,
  Layout,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PitchDeckPage() {
  const process = [
    { title: 'Consultation', desc: 'Understanding your business vision and investment goals.', icon: MessageCircle },
    { title: 'Content Refinement', desc: 'Distilling your message for maximum clarity and impact.', icon: Target },
    { title: 'Design', desc: 'Creating a visual narrative that captivates your audience.', icon: Layout },
    { title: 'Final Publish', desc: 'Polished assets ready for presentation to high-value investors.', icon: Sparkles }
  ];

  return (
    <PageLayout 
      title="Pitch Deck Preparation" 
      subtitle="Crafting high-impact visual narratives to captivate investors and secure funding."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Elevate Your Pitch</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              In today’s competitive market, crafting an impactful pitch deck is crucial for securing investment and making a memorable impression. At Mantraa Advisory Service, we specialize in creating decks that tell your story.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We DISTILL complex business models into clear, investor-ready presentations. Our process combines deep financial understanding with professional visual design to elevate your business vision.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-xl flex items-center gap-2">
                Create My Deck <Zap className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="relative group">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-700 aspect-video">
                <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" 
                    alt="Pitch Deck Design" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-mantraa-navy p-8 rounded-3xl shadow-2xl text-white">
                <BarChart className="w-10 h-10 text-mantraa-gold mb-2" />
                <p className="text-sm font-bold">Investor Ready</p>
                <p className="text-[10px] opacity-60 uppercase tracking-widest">Fundraising Support</p>
            </div>
          </div>
        </div>

        {/* Four steps */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif text-mantraa-navy text-center mb-16">Our Four-Step Creative Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((step, i) => (
                    <div key={i} className="p-10 bg-mantraa-paper rounded-[3rem] border border-slate-50 hover:-translate-y-2 transition-all group flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-mantraa-red transition-all">
                            <step.icon className="w-8 h-8 text-mantraa-navy group-hover:text-white" />
                        </div>
                        <p className="text-mantraa-red text-xs font-black mb-2">STEP 0{i+1}</p>
                        <h4 className="text-lg font-bold text-mantraa-navy mb-4">{step.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Why choose */}
        <div className="bg-mantraa-navy rounded-[3.5rem] p-12 lg:p-24 text-white overflow-hidden relative">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-serif mb-8 text-mantraa-gold">Why Choose a Pitch Deck Expert?</h2>
                    <p className="text-slate-300 mb-8 leading-relaxed">
                        General designers often lack the financial depth required for investor meetings. We combine strategic consulting with high-end design to ensure your deck is beautiful AND bankable.
                    </p>
                    <div className="space-y-4">
                        {[
                            'Clear articulation of Value Prop.',
                            'Accurate Market Size (TAM/SAM/SOM) layout.',
                            'Compelling growth roadmap visuals.',
                            'Professional high-resolution deliverables.'
                        ].map((point, i) => (
                            <div key={i} className="flex gap-4 items-center">
                                <div className="w-2 h-2 rounded-full bg-mantraa-gold" />
                                <span className="text-sm border-b border-white/10 pb-1 w-full">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-md text-center">
                    <TrendingUp className="w-16 h-16 text-mantraa-gold mx-auto mb-8" />
                    <h3 className="text-2xl font-serif mb-6">Ready to impress?</h3>
                    <p className="text-slate-400 mb-12">
                        Get a bespoke deck that highlights your potential and secures the interest of UAE venture capitalists and angels.
                    </p>
                    <Link to="/contact" className="px-12 py-5 bg-white text-mantraa-navy rounded-full font-black hover:bg-mantraa-red hover:text-white transition-all shadow-2xl">
                        Schedule an Intake Call <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <Sparkles className="w-[800px] h-[800px] absolute -bottom-1/4 -right-1/4" />
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
