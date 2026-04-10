import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-3xl font-serif font-bold tracking-tighter">
                M<span className="text-mantraa-red">Λ</span>NTR<span className="text-mantraa-red">ΛΛ</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-semibold text-slate-500">
                Advisory Services
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading business advisory firm in the UAE providing end-to-end solutions for company formation, tax compliance, and strategic growth.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mantraa-red transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {['About Us', 'Services', 'Resources', 'Contact Us', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-mantraa-gold transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {[
                'Business Setup',
                'Bookkeeping & Audit',
                'VAT Advisory',
                'Corporate Tax',
                'CFO Services'
              ].map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-mantraa-gold transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-mantraa-red shrink-0" />
                <span>Business Bay, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-mantraa-red shrink-0" />
                <span>+971 4 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-mantraa-red shrink-0" />
                <span>info@mantraa.ae</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Mantraa Advisory Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
