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
              <li>
                <Link to="/company/about" className="hover:text-mantraa-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-mantraa-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/resources/blog" className="hover:text-mantraa-gold transition-colors">Resources</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-mantraa-gold transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-mantraa-gold transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link to="/services/business-setup" className="hover:text-mantraa-gold transition-colors">Business Setup</Link>
              </li>
              <li>
                <Link to="/services/bookkeeping" className="hover:text-mantraa-gold transition-colors">Bookkeeping & Audit</Link>
              </li>
              <li>
                <Link to="/services/vat" className="hover:text-mantraa-gold transition-colors">VAT Advisory</Link>
              </li>
              <li>
                <Link to="/services/corporate-tax" className="hover:text-mantraa-gold transition-colors">Corporate Tax</Link>
              </li>
              <li>
                <Link to="/services/cfo" className="hover:text-mantraa-gold transition-colors">CFO Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-mantraa-red shrink-0" />
                <span>Business Centre, Sharjah Publishing City Free Zone, Sharjah, UAE.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-mantraa-red shrink-0" />
                <span>+971 4 325 8784</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-mantraa-red shrink-0" />
                <span>avani@mantraa.ae</span>
              </li>
              <li className="pt-2 text-xs border-t border-white/10 uppercase tracking-widest text-slate-500">
                Mon – Sat: 9:00AM – 6:00PM
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
