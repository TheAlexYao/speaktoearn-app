
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
    <section className="py-20 px-4 bg-gradient-to-b from-muted to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Built on Celo</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Instant, borderless payments for language contributors worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/10 rounded-full p-4 w-fit mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-6">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-3 gradient-text">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="gradient-bg text-white px-10 py-4 rounded-full font-medium flex items-center gap-2 mx-auto hover:opacity-90 transition-opacity shadow-lg">
            Connect Wallet to Start
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
