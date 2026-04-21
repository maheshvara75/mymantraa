import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import ContactSection from './components/ContactSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import { WhatsAppButton, ScrollToTop } from './components/FloatingActions';
import { motion } from 'motion/react';
import AboutPage from './pages/AboutPage';
import WhyUsPage from './pages/WhyUsPage';
import CSRPage from './pages/CSRPage';
import JoinUsPage from './pages/JoinUsPage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import FAQPage from './pages/FAQPage';
import BusinessSetupPage from './pages/BusinessSetupPage';
import FreezoneFormationPage from './pages/FreezoneFormationPage';
import OffshoreFormationPage from './pages/OffshoreFormationPage';
import MainlandFormationPage from './pages/MainlandFormationPage';
import BookkeepingAuditPage from './pages/BookkeepingAuditPage';
import BasicBookkeepingPage from './pages/BasicBookkeepingPage';
import OutsourcedAccountingPage from './pages/OutsourcedAccountingPage';
import StatutoryAuditPage from './pages/StatutoryAuditPage';
import InternalAuditPage from './pages/InternalAuditPage';
import StockAuditPage from './pages/StockAuditPage';
import DueDiligenceAuditPage from './pages/DueDiligenceAuditPage';
import StaffingSolutionsPage from './pages/StaffingSolutionsPage';
import BacklogAccountingPage from './pages/BacklogAccountingPage';
import VATAdvisoryPage from './pages/VATAdvisoryPage';
import VATRegistrationPage from './pages/VATRegistrationPage';
import VATDeregistrationPage from './pages/VATDeregistrationPage';
import VATAccountingPage from './pages/VATAccountingPage';
import VATReturnFilingPage from './pages/VATReturnFilingPage';
import VATAuditPage from './pages/VATAuditPage';
import VATHealthCheckPage from './pages/VATHealthCheckPage';
import CorporateTaxPage from './pages/CorporateTaxPage';
import CorporateTaxRegistrationPage from './pages/CorporateTaxRegistrationPage';
import TaxReturnFilingPage from './pages/TaxReturnFilingPage';
import TaxImpactAssessmentPage from './pages/TaxImpactAssessmentPage';
import TaxPlanningPage from './pages/TaxPlanningPage';
import CompliancePage from './pages/CompliancePage';
import ESRServicesPage from './pages/ESRServicesPage';
import UBOServicesPage from './pages/UBOServicesPage';
import AMLCompliancePage from './pages/AMLCompliancePage';
import ERPImplementationPage from './pages/ERPImplementationPage';
import AdvisoryServicesPage from './pages/AdvisoryServicesPage';
import FeasibilityStudyPage from './pages/FeasibilityStudyPage';
import PitchDeckPage from './pages/PitchDeckPage';
import BusinessValuationPage from './pages/BusinessValuationPage';
import DueDiligenceReportPage from './pages/DueDiligenceReportPage';
import StrategicPlanningPage from './pages/StrategicPlanningPage';
import CFOServicesPage from './pages/CFOServicesPage';
import CostControlPage from './pages/CostControlPage';
import ResidencyPage from './pages/ResidencyPage';
import GoldenVisaPage from './pages/GoldenVisaPage';
import EquivalencyCertificatePage from './pages/EquivalencyCertificatePage';
import TravelConciergePage from './pages/TravelConciergePage';
import BlogPage from './pages/BlogPage';
import PageLayout from './components/PageLayout';

function ContactPage() {
  return (
    <PageLayout title="Contact Us" subtitle="We're here to answer your questions and help you grow.">
      <ContactSection />
    </PageLayout>
  );
}

function ServicePage({ title, description }: { title: string; description: string }) {
  return (
    <PageLayout title={title} subtitle={description}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-100">
          <h2 className="text-3xl font-serif text-mantraa-navy mb-6">Expert {title}</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Our {title.toLowerCase()} are designed to provide you with the most efficient and compliant solutions in the UAE. We handle the complexities so you can focus on your core business operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-mantraa-navy text-xl">What we offer:</h4>
              <ul className="space-y-3">
                {['Expert Consultation', 'End-to-End Processing', 'Compliance Assurance', 'Strategic Planning'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <div className="w-2 h-2 rounded-full bg-mantraa-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-mantraa-paper p-8 rounded-2xl">
              <h4 className="font-bold text-mantraa-navy text-xl mb-4">Ready to start?</h4>
              <p className="text-slate-600 mb-6">Contact our experts today for a personalized consultation.</p>
              <button className="w-full py-3 bg-mantraa-navy text-white rounded-xl font-bold hover:bg-mantraa-red transition-colors">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

function ScrollToTopOnNav() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <ServicesGrid />
      
      {/* Why Us Section */}
      <section className="py-24 bg-mantraa-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-mantraa-gold uppercase tracking-widest mb-4">Why Choose Mantraa?</h2>
              <p className="text-4xl md:text-5xl font-serif mb-8">Excellence in Every Detail</p>
              <div className="space-y-6">
                {[
                  { title: 'Expert Knowledge', desc: 'Deep understanding of UAE laws and regulations.' },
                  { title: 'Tailored Solutions', desc: 'Personalized approach for every business size.' },
                  { title: 'Transparent Process', desc: 'Clear communication and honest advisory.' },
                  { title: 'End-to-End Support', desc: 'From setup to compliance and growth.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-mantraa-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-mantraa-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                  alt="Team Meeting"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-mantraa-red p-8 rounded-3xl shadow-2xl">
                <p className="text-4xl font-serif font-bold">15+</p>
                <p className="text-sm uppercase tracking-widest">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection />
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTopOnNav />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/company/about" element={<AboutPage />} />
            <Route path="/company/why-us" element={<WhyUsPage />} />
            <Route path="/company/csr" element={<CSRPage />} />
            <Route path="/company/join-us" element={<JoinUsPage />} />
            <Route path="/company/profile" element={<CompanyProfilePage />} />
            <Route path="/resources/blog" element={<BlogPage />} />
            <Route path="/resources/faqs" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Business Setup */}
            <Route path="/services/business-setup" element={<BusinessSetupPage />} />
            <Route path="/services/business-setup/freezone" element={<FreezoneFormationPage />} />
            <Route path="/services/business-setup/offshore" element={<OffshoreFormationPage />} />
            <Route path="/services/business-setup/mainland" element={<MainlandFormationPage />} />

            {/* Bookkeeping & Audit */}
            <Route path="/services/bookkeeping" element={<BookkeepingAuditPage />} />
            <Route path="/services/bookkeeping/mis" element={<BasicBookkeepingPage />} />
            <Route path="/services/bookkeeping/outsourced" element={<OutsourcedAccountingPage />} />
            <Route path="/services/bookkeeping/statutory" element={<StatutoryAuditPage />} />
            <Route path="/services/bookkeeping/internal" element={<InternalAuditPage />} />
            <Route path="/services/bookkeeping/stock" element={<StockAuditPage />} />
            <Route path="/services/bookkeeping/due-diligence" element={<DueDiligenceAuditPage />} />
            <Route path="/services/bookkeeping/staffing" element={<StaffingSolutionsPage />} />
            <Route path="/services/bookkeeping/backlog" element={<BacklogAccountingPage />} />
            
            {/* VAT */}
            <Route path="/services/vat" element={<VATAdvisoryPage />} />
            <Route path="/services/vat/registration" element={<VATRegistrationPage />} />
            <Route path="/services/vat/deregistration" element={<VATDeregistrationPage />} />
            <Route path="/services/vat/accounting" element={<VATAccountingPage />} />
            <Route path="/services/vat/return" element={<VATReturnFilingPage />} />
            <Route path="/services/vat/audit" element={<VATAuditPage />} />
            <Route path="/services/vat/health-check" element={<VATHealthCheckPage />} />

            {/* Corporate Tax */}
            <Route path="/services/corporate-tax" element={<CorporateTaxPage />} />
            <Route path="/services/corporate-tax/registration" element={<CorporateTaxRegistrationPage />} />
            <Route path="/services/corporate-tax/return" element={<TaxReturnFilingPage />} />
            <Route path="/services/corporate-tax/impact" element={<TaxImpactAssessmentPage />} />
            <Route path="/services/corporate-tax/planning" element={<TaxPlanningPage />} />

            {/* Compliance */}
            <Route path="/services/compliance" element={<CompliancePage />} />
            <Route path="/services/compliance/esr" element={<ESRServicesPage />} />
            <Route path="/services/compliance/ubo" element={<UBOServicesPage />} />
            <Route path="/services/compliance/aml" element={<AMLCompliancePage />} />
            <Route path="/services/compliance/erp" element={<ERPImplementationPage />} />

            {/* Advisory */}
            <Route path="/services/advisory" element={<AdvisoryServicesPage />} />
            <Route path="/services/advisory/feasibility" element={<FeasibilityStudyPage />} />
            <Route path="/services/advisory/pitch-deck" element={<PitchDeckPage />} />
            <Route path="/services/advisory/valuation" element={<BusinessValuationPage />} />
            <Route path="/services/advisory/due-diligence" element={<DueDiligenceReportPage />} />
            <Route path="/services/advisory/strategic" element={<StrategicPlanningPage />} />

            {/* CFO Services */}
            <Route path="/services/cfo" element={<CFOServicesPage />} />
            <Route path="/services/cfo/outsource" element={<OutsourcedAccountingPage />} />
            <Route path="/services/cfo/budgeting" element={<ServicePage title="Budgeting and Forecasting" description="Plan your financial future with confidence." />} />
            <Route path="/services/cfo/strategy" element={<CostControlPage />} />

            {/* Residency */}
            <Route path="/services/residency" element={<ResidencyPage />} />
            <Route path="/services/residency/golden-visa" element={<GoldenVisaPage />} />
            <Route path="/services/residency/equivalency" element={<EquivalencyCertificatePage />} />
            <Route path="/services/residency/visa" element={<TravelConciergePage />} />

            {/* Fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <MapSection />
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </Router>
  );
}
