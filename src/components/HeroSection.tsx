
import { ArrowRight, Globe } from "lucide-react";
import { Logo } from "./Logo";

export const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="max-w-4xl mx-auto text-center relative animate-fade-in">
        <div className="flex justify-center mb-10">
          <Logo />
        </div>
        <div className="inline-flex items-center gap-2 bg-white shadow-sm rounded-full px-6 py-2.5 mb-10">
          <Globe className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-gray-600">
            Now available globally
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text leading-tight">
          Earn Crypto By Speaking Your Language
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join 847 contributors preserving languages and earning rewards while making a lasting impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto gradient-bg text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg">
            Connect Wallet to Start Earning
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto text-gray-700 px-8 py-4 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
