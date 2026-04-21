import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck,
  Building,
  Scale,
  Calculator
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    category: 'VAT (Value Added Tax)',
    icon: Scale,
    questions: [
      {
        q: 'Who should register mandatory for VAT in UAE?',
        a: 'A business must register for VAT if its taxable supplies and imports exceed AED 375,000 within the preceding 12 months. Upon registration, the Federal Tax Authority will issue a Tax Registration Number (TRN).'
      },
      {
        q: 'When is VAT registration voluntary?',
        a: 'A business can register for VAT voluntarily if its taxable supplies and imports exceed AED 187,500 within the preceding 12 months, or if it expects them to exceed this threshold in the next 30 days.'
      },
      {
        q: 'What is the standard VAT rate in the UAE?',
        a: 'The standard VAT rate is 5%, which applies to most goods and services. Some sectors are zero-rated or exempt.'
      },
      {
        q: 'How often do businesses need to file VAT returns?',
        a: 'Most businesses are required to file VAT returns on a quarterly basis. However, some large businesses or those with high turnover may be required to file monthly.'
      }
    ]
  },
  {
    category: 'Corporate Tax',
    icon: Building,
    questions: [
      {
        q: 'What is the Corporate Tax rate in the UAE?',
        a: 'Corporate Tax is applied at a standard rate of 9% for taxable income exceeding AED 375,000. Income up to this threshold is taxed at 0% to support startups and small businesses.'
      },
      {
        q: 'Who is subject to UAE Corporate Tax?',
        a: 'UAE Corporate Tax applies to all UAE businesses and commercial activities, individuals who conduct business in the UAE, and certain non-resident organizations.'
      },
      {
        q: 'Are Free Zone companies exempt from Corporate Tax?',
        a: 'Free Zone entities can benefit from a 0% Corporate Tax rate if they maintain adequate substance and derive "Qualifying Income" as per the FTA regulations.'
      }
    ]
  },
  {
    category: 'Accounting and Bookkeeping',
    icon: Calculator,
    questions: [
      {
        q: 'Is it mandatory for UAE companies to maintain books of accounts?',
        a: 'Yes, as per the UAE Commercial Companies Law and Tax Laws, all businesses must keep proper accounting records for at least 5 years from the end of the financial year.'
      },
      {
        q: 'What are the benefits of outsourcing accounting services?',
        a: 'Outsourcing ensures accuracy, compliance with local laws, access to expert financial insights, and significant cost savings compared to maintaining a full-time in-house team.'
      },
      {
        q: 'What are management information system (MIS) reports?',
        a: 'MIS reports provide real-time financial snapshots of your business performance, helping owners make data-driven decisions regarding profitability, cash flow, and growth.'
      }
    ]
  },
  {
    category: 'Residency and Golden Visa',
    icon: ShieldCheck,
    questions: [
      {
        q: 'What is the UAE Golden Visa?',
        a: 'The Golden Visa is a long-term residency program for 5 or 10 years, allowing foreigners to live, work, and study in the UAE without a local sponsor and with 100% ownership of their business.'
      },
      {
        q: 'Who can apply for a Golden Visa?',
        a: 'Eligibility categories include investors, entrepreneurs, specialized talents (doctors, PhD holders), extraordinary students, and frontline heroes.'
      },
      {
        q: 'What are the benefits of the Dubai Golden Visa?',
        a: 'Benefits include long-term residency, self-sponsorship, sponsoring family members, sponsoring an unlimited number of domestic helpers, and the Esaad privilege card.'
      },
      {
        q: 'How long does the Golden Visa application process take?',
        a: 'Typically, the process takes 7 to 15 working days once all documentation is approved and attested, depending on the category and portal processing times.'
      }
    ]
  }
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-mantraa-red' : 'text-mantraa-navy group-hover:text-mantraa-red'}`}>
          {q}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-mantraa-red text-white' : 'bg-mantraa-paper text-mantraa-navy group-hover:bg-mantraa-navy group-hover:text-white'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-slate-600 leading-relaxed text-sm">
          {a}
        </p>
      </motion.div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <PageLayout 
      title="FAQ's" 
      subtitle="Quick answers to frequently asked questions about business and compliance in the UAE."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="text-center mb-16">
            <HelpCircle className="w-16 h-16 text-mantraa-red mx-auto mb-6" />
            <h2 className="text-4xl font-serif text-mantraa-navy mb-4">How can we help?</h2>
            <p className="text-slate-600">Select a category below to find the answers you're looking for.</p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-16">
            {faqData.map((section, sectionIdx) => (
                <motion.div 
                    key={sectionIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sectionIdx * 0.1 }}
                >
                    <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-mantraa-paper">
                        <div className="p-3 bg-mantraa-navy rounded-xl">
                            <section.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-serif text-mantraa-navy">{section.category}</h3>
                    </div>
                    <div className="bg-white rounded-[2rem] p-4 lg:p-10 shadow-sm border border-slate-50">
                        {section.questions.map((faq, faqIdx) => (
                            <FAQItem key={faqIdx} q={faq.q} a={faq.a} />
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>

        {/* CTA */}
        <div className="mt-24 p-12 bg-mantraa-navy rounded-[3rem] text-white text-center relative overflow-hidden">
            <div className="relative z-10">
                <MessageCircle className="w-16 h-16 text-mantraa-gold mx-auto mb-8 animate-bounce" />
                <h3 className="text-3xl font-serif mb-6">Didn't find your answer?</h3>
                <p className="text-slate-400 mb-12 max-w-xl mx-auto">
                    Our consultants are ready to provide you with personalized advice for your unique business situation.
                </p>
                <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-3 px-10 py-5 bg-mantraa-red rounded-full font-black hover:bg-white hover:text-mantraa-navy transition-all shadow-2xl"
                >
                    Ask a Direct Question <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-mantraa-gold/10 blur-[80px] rounded-full" />
        </div>
      </div>
    </PageLayout>
  );
}
