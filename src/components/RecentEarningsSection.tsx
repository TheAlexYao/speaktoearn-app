
import { DollarSign, ChartBar, UserPlus } from "lucide-react";

const earningsStats = [
  {
    label: "Top Earner Today",
    value: "24.5 CUSD",
    icon: DollarSign,
  },
  {
    label: "Average Daily Earning",
    value: "14.72 CUSD",
    icon: ChartBar,
  },
  {
    label: "New Users This Week",
    value: "+126",
    icon: UserPlus,
    trend: "up",
  },
];

export const RecentEarningsSection = () => {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Recent Earnings</h2>
          <p className="text-gray-600">See what our community is earning</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {earningsStats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white rounded-lg p-6 card-shadow hover:scale-105 transition-transform duration-200 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
