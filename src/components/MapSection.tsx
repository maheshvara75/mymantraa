import { motion } from 'motion/react';

export default function MapSection() {
  return (
    <section className="bg-mantraa-paper py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-4 rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden"
        >
          <div className="aspect-[21/9] w-full rounded-[1.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.3317764124933!2d55.454932!3d25.326555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f590b07f87c4f%3A0xc33e144a1b028c24!2sSharjah%20Publishing%20City%20Free%20Zone!5e0!3m2!1sen!2sae!4v1713684800000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 px-4 pb-2">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-serif text-mantraa-navy font-bold">Visit Our Office</h3>
              <p className="text-slate-500 text-sm">Business Centre, Sharjah Publishing City Free Zone, Sharjah, UAE.</p>
            </div>
            <a 
              href="https://maps.app.goo.gl/9ZpY9WzB3uX5r2XU7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-mantraa-navy text-white text-sm font-bold rounded-full hover:bg-mantraa-red transition-colors"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
