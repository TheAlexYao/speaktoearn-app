
import { Book, Check, Flag } from "lucide-react";

const languages = [
  { 
    name: "Swahili", 
    tasks: 47,
    region: "East Africa",
    weeklyGrowth: "+12%"
  },
  { 
    name: "Bengali", 
    tasks: 38,
    region: "South Asia",
    weeklyGrowth: "+8%"
  },
  { 
    name: "Kurdish", 
    tasks: 31,
    region: "Middle East",
    weeklyGrowth: "+15%"
  },
  { 
    name: "Telugu", 
    tasks: 28,
    region: "South India",
    weeklyGrowth: "+10%"
  },
  { 
    name: "Yoruba", 
    tasks: 25,
    region: "West Africa",
    weeklyGrowth: "+7%"
  },
];

export const HighDemandSection = () => {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4">
            <Book className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-600">High Demand</span>
          </div>
          <h2 className="text-3xl font-semibold mb-4">
            Most Requested Languages
          </h2>
          <p className="text-gray-600">
            Average Reward: <span className="font-semibold">5.8 CUSD</span> per task
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {languages.map((lang, index) => (
            <div
              key={lang.name}
              className="bg-white rounded-lg p-6 card-shadow hover:scale-105 transition-transform duration-200 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Flag className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold text-lg">{lang.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{lang.region}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600">{lang.tasks} tasks</p>
                    <span className="text-xs text-success-500 font-medium">
                      {lang.weeklyGrowth}
                    </span>
                  </div>
                </div>
                <div className="bg-primary/10 rounded-full p-2">
                  <Check className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
