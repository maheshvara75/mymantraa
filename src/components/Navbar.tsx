import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone, Mail, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, NavItem } from '../constants';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <span className={cn(
                "text-2xl font-serif font-bold tracking-tighter transition-colors duration-300",
                scrolled ? "text-mantraa-navy" : "text-mantraa-navy"
              )}>
                M<span className="text-mantraa-red">Λ</span>NTR<span className="text-mantraa-red">ΛΛ</span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.3em] font-sans font-semibold text-slate-500">
                Advisory Services
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    'flex items-center text-sm font-medium transition-colors duration-200 py-2',
                    scrolled ? 'text-slate-700 hover:text-mantraa-red' : 'text-mantraa-navy hover:text-mantraa-red'
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-0 w-64 bg-white shadow-xl rounded-lg overflow-hidden border border-slate-100"
                    >
                      <div className="py-2">
                        {item.children.map((child) => (
                          <div key={child.label} className="relative group/sub">
                            <Link
                              to={child.href}
                              className="block px-4 py-2 text-sm text-slate-700 hover:bg-mantraa-paper hover:text-mantraa-navy transition-colors"
                            >
                              {child.label}
                            </Link>
                            {child.children && (
                              <div className="hidden group-hover/sub:block absolute left-full top-0 w-64 bg-white shadow-xl rounded-lg border border-slate-100">
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.label}
                                    to={subChild.href}
                                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-mantraa-paper hover:text-mantraa-navy transition-colors"
                                  >
                                    {subChild.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <Link
              to="/contact"
              className="bg-mantraa-navy text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-mantraa-red transition-colors duration-300 shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-mantraa-navy p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-mantraa-navy"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-3 py-1 text-sm text-slate-500 hover:text-mantraa-navy"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
