
import { Book, Check } from "lucide-react";

const languages = [
  { name: "Swahili", tasks: 47 },
  { name: "Bengali", tasks: 38 },
  { name: "Kurdish", tasks: 31 },
  { name: "Telugu", tasks: 28 },
  { name: "Yoruba", tasks: 25 },
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
                  <h3 className="font-semibold text-lg mb-2">{lang.name}</h3>
                  <p className="text-gray-600">{lang.tasks} tasks available</p>
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
