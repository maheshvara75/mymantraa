import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  Package, 
  Search, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2,
  Box,
  ClipboardCheck,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StockAuditPage() {
  const objectives = [
    { title: 'Accuracy', desc: 'Confirm that inventory records match physical levels exactly.' },
    { title: 'Existence', desc: 'Physically verify the presence of all stock items in your custody.' },
    { title: 'Ownership Rights', desc: 'Verify that the company holds the legal rights to the inventory.' },
    { title: 'Value', desc: 'Assess the current market value and condition of the stock.' }
  ];

  return (
    <PageLayout 
      title="Stock Audit" 
      subtitle="Ensuring inventory accuracy and asset protection for your business."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-mantraa-navy mb-8">Inventory Verification & Protection</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Stock Audit Services, also known as inventory verification services, are essential for monitoring, protecting, and supervising your stock. These services aim to verify the accuracy, existence, and ownership rights of items in your company’s inventory.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Effective inventory management is the backbone of any product-based business. Mantraa Advisory Service provides methodical stock audits that minimize discrepancies and prevent loss through organized verification.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-8 py-4 bg-mantraa-navy text-white rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl flex items-center gap-2">
                Verify Your Stock <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {objectives.map((obj, i) => (
              <div key={i} className="p-8 bg-mantraa-paper rounded-[2.5rem] border border-slate-50 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:bg-mantraa-navy transition-colors shadow-sm">
                  <ClipboardCheck className="w-6 h-6 text-mantraa-red group-hover:text-white" />
                </div>
                <h4 className="font-bold text-mantraa-navy mb-3">{obj.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How We Help Section */}
        <div className="bg-mantraa-navy rounded-[3rem] p-12 lg:p-24 text-white relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-8 text-mantraa-gold">How Mantraa Facilitates Your Growth</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                By performing regular stock audits, we help you identify slow-moving items, prevent stock-outs, and ensure your balance sheet reflects the true value of your assets.
              </p>
              <div className="space-y-6">
                {[
                  'Periodic physical verification of stock.',
                  'Reconciliation with book records.',
                  'Identification of surplus or obsolete stock.',
                  'Third-party verification for audit compliance.'
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-mantraa-gold flex items-center justify-center shrink-0">
                      <Zap className="w-3 h-3 text-mantraa-navy" />
                    </div>
                    <span className="text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-md">
              <Box className="w-16 h-16 text-mantraa-gold mb-8 mx-auto" />
              <p className="text-lg text-slate-300 italic mb-8 text-center">
                "Precision in inventory management leads to operational excellence. Let us handle the verification while you focus on sales."
              </p>
              <Link to="/contact" className="w-full inline-flex items-center justify-center px-8 py-4 bg-white text-mantraa-navy rounded-full font-bold hover:bg-mantraa-red hover:text-white transition-all shadow-xl">
                Inquire about Stock Audit
              </Link>
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-mantraa-gold/10 blur-[100px] rounded-full" />
        </div>
      </div>
    </PageLayout>
  );
}
