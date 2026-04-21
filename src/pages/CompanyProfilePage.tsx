import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { BookOpen, MapPin, Globe, Compass, Download } from 'lucide-react';

export default function CompanyProfilePage() {
  const downloadProfile = () => {
    // This assumes the PDF is placed in the public folder
    const link = document.createElement('a');
    link.href = '/mantraa-company-profile.pdf';
    link.download = 'Mantraa_Company_Profile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PageLayout 
      title="Company Profile" 
      subtitle="Discover Mantraa Advisory Services, your trusted partner for expert business consulting."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-6">Our Company Profile</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Mantraa Advisory Services specializes in guiding organizations towards growth, operational efficiency, and lasting success. We serve as a trusted partner for expert business consulting and strategic solutions in the UAE.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our team brings deep industry insights and personalized service to every project. Let us help you unlock new opportunities and navigate complex challenges with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button
                onClick={downloadProfile}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-mantraa-red text-white rounded-full font-bold hover:bg-mantraa-navy transition-all shadow-lg group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Download Full Profile (PDF)
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-mantraa-paper rounded-2xl">
                <h4 className="text-3xl font-serif font-bold text-mantraa-navy">15+</h4>
                <p className="text-sm text-slate-500 uppercase tracking-widest">Years in UAE</p>
              </div>
              <div className="p-6 bg-mantraa-paper rounded-2xl">
                <h4 className="text-3xl font-serif font-bold text-mantraa-navy">500+</h4>
                <p className="text-sm text-slate-500 uppercase tracking-widest">Clients Served</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                alt="Architecture"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-mantraa-gold p-8 rounded-3xl shadow-xl hidden md:block">
              <BookOpen className="w-8 h-8 text-white mb-2" />
              <p className="text-white font-bold">Expert Solutions</p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-slate-100 pt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-mantraa-navy mb-4">Strategic Excellence</h2>
            <p className="text-slate-500 max-w-2xl mx-auto italic">
              "We symbolize growth, operational efficiency, and lasting success."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: MapPin, title: 'UAE Expertise', text: 'Headquartered in Dubai, we have deep roots in the UAE business landscape.' },
              { icon: Globe, title: 'Global Standards', text: 'Our advisory services are delivered according to the highest international standards.' },
              { icon: Compass, title: 'Strategic Solutions', text: 'We provide clear direction for complex business challenges.' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-mantraa-navy/5 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-mantraa-navy" />
                </div>
                <h4 className="text-xl font-bold text-mantraa-navy mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
