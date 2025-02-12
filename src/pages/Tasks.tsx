
import { BottomNav } from "@/components/BottomNav";
import { GradientContainer } from "@/components/GradientContainer";

const Tasks = () => {
  return (
    <div className="relative min-h-screen pb-16">
      <GradientContainer />
      <div className="relative z-10">
        <div className="max-w-lg mx-auto px-4 pt-8">
          <h1 className="text-2xl font-bold text-white mb-6">Available Tasks</h1>
          
          {/* Task List */}
          <div className="space-y-4">
            {[1, 2, 3].map((task) => (
              <div
                key={task}
                className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Record 10 Phrases</h3>
                  <span className="text-sm font-medium text-primary">$5.00</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Help preserve your language by recording common phrases
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Est. time: 5 mins</span>
                  <button className="px-4 py-1.5 bg-primary text-white text-sm rounded-full hover:bg-primary/90 transition-colors">
                    Start Task
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Tasks;
