
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Database, Users, Mic } from "lucide-react";

const contributionData = [
  { month: "Jan", contributions: 1200 },
  { month: "Feb", contributions: 1900 },
  { month: "Mar", contributions: 2400 },
  { month: "Apr", contributions: 3100 },
  { month: "May", contributions: 4200 },
  { month: "Jun", contributions: 5100 },
];

const stats = [
  { label: "Total Contributors", value: "12,456", icon: Users, change: "+12%" },
  { label: "Voice Recordings", value: "89,243", icon: Mic, change: "+18%" },
  { label: "Data Points", value: "234,567", icon: Database, change: "+24%" },
];

export const StatsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <stat.icon className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-600">{stat.label}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-semibold">{stat.value}</span>
                <span className="text-sm text-green-500">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-6 card-shadow">
          <h3 className="text-lg font-semibold mb-6">Monthly Contributions</h3>
          <div className="h-[300px]">
            <ChartContainer
              className="w-full h-full"
              config={{
                contributions: {
                  label: "Contributions",
                  theme: {
                    light: "#4F46E5",
                    dark: "#818CF8"
                  }
                }
              }}
            >
              <AreaChart data={contributionData}>
                <defs>
                  <linearGradient id="colorContributions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip />
                <Area
                  type="monotone"
                  dataKey="contributions"
                  stroke="#4F46E5"
                  fillOpacity={1}
                  fill="url(#colorContributions)"
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
