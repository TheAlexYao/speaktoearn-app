
import { ArrowRight, Globe } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-8">
          <Globe className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-gray-600">
            Now available globally
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 gradient-text">
          Earn Crypto By Speaking Your Language
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join 847 contributors preserving languages and earning rewards while making a lasting impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="gradient-bg text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
            Connect Wallet to Start Earning
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="text-gray-700 px-8 py-3 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
