
import { ArrowRight, Globe, Zap, Coins, Clock, DollarSign, Users } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "No Borders",
    description: "Contribute and earn from anywhere using just your mobile phone",
  },
  {
    icon: Zap,
    title: "Instant Rewards",
    description: "Receive payments in seconds with near-zero fees",
  },
  {
    icon: Coins,
    title: "Keep More",
    description: "Average fee of $0.001 means you keep what you earn",
  },
];

const stats = [
  {
    value: "<5s",
    label: "Average Payout Time",
    icon: Clock,
  },
  {
    value: "$12,467",
    label: "Total CUSD Paid",
    icon: DollarSign,
  },
  {
    value: "847",
    label: "Active Contributors",
    icon: Users,
  },
];

export const BuiltOnCeloSection = () => {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Built on Celo</h2>
          <p className="text-lg text-gray-600">
            Instant, borderless payments for language contributors worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg p-6 card-shadow hover:scale-105 transition-transform duration-200"
            >
              <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 animate-fade-up"
            >
              <div className="bg-primary/10 rounded-full p-3 w-fit mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-semibold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="gradient-bg text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:opacity-90 transition-opacity">
            Connect Wallet to Start
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
