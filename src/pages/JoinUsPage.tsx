import PageLayout from '../components/PageLayout';
import { motion } from 'motion/react';
import { Briefcase, Rocket, Users, GraduationCap } from 'lucide-react';

export default function JoinUsPage() {
  return (
    <PageLayout 
      title="Join Us" 
      subtitle="Elevate your career in advisory and accounting services."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-serif text-mantraa-navy mb-6">Build Your Future with Mantraa</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Are you ready to elevate your career in advisory and accounting services? At Mantraa Advisory Services, we believe in nurturing talent and fostering an environment where growth, collaboration, and excellence thrive.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            We’re looking for passionate individuals who are dedicated to providing top-notch advisory, financial, and accounting solutions for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-12 bg-white rounded-[2rem] shadow-xl border border-slate-100">
            <div className="w-16 h-16 rounded-2xl bg-mantraa-navy/5 flex items-center justify-center mb-8">
              <Users className="w-8 h-8 text-mantraa-navy" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-mantraa-navy mb-4">Who We’re Looking For?</h3>
            <p className="text-slate-600 leading-relaxed">
              Passionate professionals with a commitment to excellence, integrity, and client satisfaction. We value collaborative spirits who are eager to solve complex challenges.
            </p>
          </div>
          <div className="p-12 bg-white rounded-[2rem] shadow-xl border border-slate-100">
            <div className="w-16 h-16 rounded-2xl bg-mantraa-red/5 flex items-center justify-center mb-8">
              <Rocket className="w-8 h-8 text-mantraa-red" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-mantraa-navy mb-4">How to Join Us?</h3>
            <p className="text-slate-600 leading-relaxed">
              If you’re driven to make a difference and eager to grow properly in your career, we want to hear from you. Explore our opportunities and send us your profile today.
            </p>
          </div>
        </div>

        <div className="bg-mantraa-paper rounded-[3rem] p-12 lg:p-20 flex flex-col items-center text-center">
          <h2 className="text-3xl font-serif text-mantraa-navy mb-6">Ready to take the next step?</h2>
          <p className="text-slate-600 max-w-2xl mb-10">
            Contact us today to learn more about career opportunities at Mantraa Advisory Services and how you can become part of our growing team.
          </p>
          <a
            href="mailto:avani@mantraa.ae"
            className="bg-mantraa-navy text-white px-10 py-4 rounded-full font-bold hover:bg-mantraa-red transition-all shadow-xl"
          >
            Submit Your Application
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
