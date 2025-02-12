
import { Wallet, Mic, CheckCircle, DollarSign } from "lucide-react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Choose Your Task",
    description: "Select from voice recording, translation, or review tasks",
    icon: Mic,
    stats: "Reward Range: 3-12 CUSD per task",
  },
  {
    title: "Submit Your Work",
    description: "Record voice clips or translate text in your language",
    icon: CheckCircle,
    stats: "Average Time: 5-15 minutes",
  },
  {
    title: "Get Verified",
    description: "AI-powered instant quality checks",
    icon: CheckCircle,
    stats: "Average Accept Rate: 84%",
  },
  {
    title: "Earn Crypto",
    description: "Instant payments in CUSD to your wallet",
    icon: DollarSign,
    stats: "Already Paid: $12,467 CUSD",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
          <p className="text-gray-600">Simple steps to start earning</p>
        </div>
        
        <div className="flex overflow-x-auto pb-4 gap-6 snap-x snap-mandatory">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex-none w-[280px] snap-center bg-white rounded-lg p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <p className="text-sm font-medium text-primary">{step.stats}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="gradient-bg text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:shadow-lg transition-all duration-300">
            Start Contributing Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
