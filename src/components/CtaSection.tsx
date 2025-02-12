
import { ArrowRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Start Earning?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our global community of language contributors and start earning rewards for your skills.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="gradient-bg text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 justify-center hover:opacity-90 transition-opacity">
            Start Earning Now
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="text-gray-700 px-8 py-3 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
            View Available Tasks
          </button>
        </div>
      </div>
    </section>
  );
};
