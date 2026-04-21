import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Plane, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  MapPin,
  Briefcase,
  Star,
  Hotel
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TravelConciergePage() {
  const benefits = [
    { title: 'Save Time', desc: 'Detailed visa handling so you focus on your business trip.', icon: Clock },
    { title: 'Quick Service', desc: 'Expedited processing for last-minute travel needs.', icon: Zap },
    { title: 'Track System', desc: 'Continuous updates on your application status.', icon: MapPin },
    { title: 'Fix Pricing', desc: 'No hidden fees or surprise surcharges for your travel.', icon: Star }
  ];

  return (
    <PageLayout 
      title="Visa & Travel Concierge" 
      subtitle="Simplifying global travel and visa requirements for seamless mobility."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Simplified Global Mobility</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Planning travel can be complex and time-consuming, especially when dealing with visa requirements. Mantraa’s concierge service ensures that you meet all visa requirements efficiently.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We handle the entire documentation and submission process, from leisure travel to business delegations, ensuring your focus remains on the trip, not the paperwork.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-10 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl flex items-center gap-2">
                Book My Concierge <Plane className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {benefits.map((item, i) => (
               <div key={i} className="p-10 bg-mantraa-paper rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-mantraa-red transition-all">
                     <item.icon className="w-8 h-8 text-mantraa-navy group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-mantraa-navy mb-4">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-24">
            <h2 className="text-3xl font-serif text-mantraa-navy text-center mb-16">Concierge Support Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { label: 'Business Visas', icon: Briefcase, detail: 'Attending conferences or exhibitions in Europe, USA, or Asia.' },
                    { label: 'Leisure Travel', icon: Plane, detail: 'Planning holidays and family trips without visa stress.' },
                    { label: 'Hotel & Transport', icon: Hotel, detail: 'Booking premium accommodations and chauffeured services.' }
                ].map((item, i) => (
                    <div key={i} className="text-center group">
                        <div className="w-20 h-20 rounded-full bg-mantraa-paper flex items-center justify-center mb-8 mx-auto group-hover:border-mantraa-red border-2 border-transparent transition-all">
                            <item.icon className="w-10 h-10 text-mantraa-navy" />
                        </div>
                        <h4 className="text-2xl font-serif text-mantraa-navy mb-4 font-bold">{item.label}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] mx-auto">{item.detail}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Why Choice Section */}
        <div className="bg-mantraa-navy rounded-[3.5rem] p-12 lg:p-24 text-white overflow-hidden relative">
            <div className="relative z-10 flex flex-row gap-16 items-center">
                <div className="w-full text-center">
                    <h2 className="text-4xl font-serif mb-8 text-mantraa-gold">Your Personal Travel Desk</h2>
                    <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
                        Enjoy the luxury of a personal travel desk that takes care of every document requirement, allowing you to travel global with absolute peace of mind.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-mantraa-gold text-mantraa-navy rounded-full font-black hover:bg-white hover:scale-105 transition-all shadow-2xl">
                        Schedule My Trip <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <Plane className="w-[800px] h-[800px] absolute -top-1/4 -right-1/4" />
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
