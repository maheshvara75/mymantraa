import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(result.message);
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setMessage(result.message || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Could not connect to the server.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-mantraa-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Info Side */}
            <div className="bg-mantraa-navy p-12 lg:p-20 text-white">
              <h2 className="text-4xl font-serif mb-8">Get in Touch</h2>
              <p className="text-slate-300 mb-12 text-lg">
                Have questions about setting up your business in the UAE? Our experts are here to help you navigate the process.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-mantraa-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-xl font-medium">info@mantraa.ae</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-mantraa-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-xl font-medium">+971 4 XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-mantraa-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-widest mb-1">Our Office</p>
                    <p className="text-xl font-medium">Business Bay, Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-12 lg:p-20">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <CheckCircle2 className="w-20 h-20 text-green-500" />
                  <h3 className="text-2xl font-serif font-bold text-mantraa-navy">Message Sent!</h3>
                  <p className="text-slate-500">{message}</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-mantraa-red font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input
                        name="name"
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mantraa-navy focus:ring-2 focus:ring-mantraa-navy/10 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input
                        name="email"
                        required
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mantraa-navy focus:ring-2 focus:ring-mantraa-navy/10 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Service Interested In</label>
                    <select 
                      name="service"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mantraa-navy focus:ring-2 focus:ring-mantraa-navy/10 outline-none transition-all bg-white"
                    >
                      <option>Business Setup</option>
                      <option>Tax & VAT Advisory</option>
                      <option>Audit & Bookkeeping</option>
                      <option>CFO Services</option>
                      <option>UAE Residency</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mantraa-navy focus:ring-2 focus:ring-mantraa-navy/10 outline-none transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                      <AlertCircle className="w-4 h-4" />
                      {message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-mantraa-red text-white font-bold rounded-xl hover:bg-mantraa-navy transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
