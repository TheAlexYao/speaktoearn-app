
import { User, Mic, BookOpen, Clock, FileText, Database } from "lucide-react";

const activities = [
  {
    user: "Sarah M.",
    action: "earned 5.2 CUSD for Swahili voice recording",
    time: "2m ago",
  },
  {
    user: "Rahul P.",
    action: "completed Bengali translation task",
    time: "5m ago",
  },
  {
    user: "Ade O.",
    action: "reached Expert status in Yoruba",
    time: "12m ago",
  },
];

const impacts = [
  {
    label: "Hours of Voice Data",
    value: "487",
    icon: Clock,
  },
  {
    label: "Translations",
    value: "12,467",
    icon: FileText,
  },
  {
    label: "Words Preserved",
    value: "89,234",
    icon: Database,
  },
];

export const CommunityImpactSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Community Impact</h2>
          <p className="text-gray-600">Real-time contributions from our community</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 card-shadow">
            <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary/10 rounded-full p-2">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 card-shadow">
            <h3 className="font-semibold text-lg mb-4">Total Impact</h3>
            <div className="space-y-6">
              {impacts.map((impact, index) => (
                <div
                  key={impact.label}
                  className="flex items-center gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary/10 rounded-full p-3">
                    <impact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold">{impact.value}</h4>
                    <p className="text-sm text-gray-600">{impact.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
