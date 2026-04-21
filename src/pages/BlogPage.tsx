import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Tag, 
  Search,
  ChevronRight,
  Newspaper
} from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'New UAE Corporate Tax: What it Means for Your Small Business',
    excerpt: 'The 9% corporate tax is now in effect. Learn about the thresholds and relief mechanisms available for SMEs in the UAE.',
    category: 'Corporate Tax',
    date: 'April 15, 2024',
    author: 'Tax Expert',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Top 5 Benefits of Setting Up Your Company in a Dubai Free Zone',
    excerpt: 'From 100% foreign ownership to zero tax benefits, explore why Dubai Free Zones remain the top choice for global entrepreneurs.',
    category: 'Business Setup',
    date: 'March 22, 2024',
    author: 'Setup Consultant',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'The Essential VAT Guide for Non-Resident Businesses',
    excerpt: 'Operating in the UAE from abroad? Understand your VAT liabilities and reverse charge mechanism responsibilities.',
    category: 'VAT Advisory',
    date: 'February 10, 2024',
    author: 'Audit Manager',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
  }
];

export default function BlogPage() {
  return (
    <PageLayout 
      title="Our Blog" 
      subtitle="Insights, updates, and expert opinions on doing business in the UAE."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Search & Categories */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="flex gap-4 overflow-x-auto pb-4 w-full md:w-auto no-scrollbar">
                {['All', 'Taxation', 'Audit', 'Setup', 'Compliance', 'Advisory'].map((cat) => (
                    <button key={cat} className="px-6 py-2 rounded-full border border-slate-200 text-sm font-bold hover:bg-mantraa-navy hover:text-white transition-all whitespace-nowrap">
                        {cat}
                    </button>
                ))}
            </div>
            <div className="relative w-full md:w-80">
                <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full pl-12 pr-6 py-3 bg-mantraa-paper rounded-full border border-slate-100 focus:outline-none focus:ring-2 focus:ring-mantraa-navy/10 font-medium text-sm"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
        </div>

        {/* Featured Post */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
        >
            <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-slate-50 flex flex-col lg:flex-row group">
                <div className="lg:w-1/2 overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1454165833767-131438967b67?auto=format&fit=crop&q=80&w=1000" 
                        alt="Featured Post" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                    />
                </div>
                <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-mantraa-red mb-6">
                        <Tag className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Industry News</span>
                    </div>
                    <h2 className="text-4xl font-serif text-mantraa-navy mb-6 group-hover:text-mantraa-red transition-colors">
                        The Evolution of UAE Compliance Standards in 2024
                    </h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Explore the sweeping changes in Economic Substance Regulations and UBO transparency as the UAE aligns with global OECD fairness standards.
                    </p>
                    <div className="flex items-center gap-8 text-xs text-slate-400 mb-10">
                        <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> May 1, 2024</div>
                        <div className="flex items-center gap-2"><User className="w-4 h-4" /> Admin Team</div>
                    </div>
                    <button className="flex items-center gap-3 font-black text-mantraa-navy group-hover:gap-5 transition-all">
                        Read Featured Article <ArrowRight className="w-5 h-5 text-mantraa-red" />
                    </button>
                </div>
            </div>
        </motion.div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, i) => (
                <motion.div 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col group"
                >
                    <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 relative">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full text-[10px] font-bold text-mantraa-navy shadow-lg">
                            {post.category}
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] text-slate-400 mb-4">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> By {post.author}</span>
                    </div>
                    <h3 className="text-xl font-bold text-mantraa-navy mb-4 group-hover:text-mantraa-red transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                    </p>
                    <button className="mt-auto flex items-center gap-2 text-xs font-bold text-mantraa-navy group-hover:text-mantraa-red transition-colors">
                        Read More <ChevronRight className="w-4 h-4" />
                    </button>
                </motion.div>
            ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-24 bg-mantraa-paper rounded-[3rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-16 border border-slate-50">
            <div className="lg:w-1/2">
                <Newspaper className="w-16 h-16 text-mantraa-red mb-8" />
                <h2 className="text-4xl font-serif text-mantraa-navy mb-6">Stay informed.</h2>
                <p className="text-slate-600 text-lg">
                    Subscribe to our newsletter to receive the latest UAE regulatory updates and business insights directly to your inbox.
                </p>
            </div>
            <div className="lg:w-1/2 w-full">
                <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="flex-grow px-8 py-5 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-mantraa-navy/10 font-bold"
                    />
                    <button className="px-10 py-5 bg-mantraa-navy text-white rounded-full font-black hover:bg-mantraa-red transition-all shadow-xl whitespace-nowrap">
                        Subscribe Now
                    </button>
                </div>
                <p className="text-[10px] text-slate-400 mt-4 px-6 italic">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </div>
      </div>
    </PageLayout>
  );
}
