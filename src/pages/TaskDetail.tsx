
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { GradientContainer } from "@/components/GradientContainer";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const TASK_DATA = {
  paraphrase: {
    title: "Paraphrase a Financial Report Sentence",
    instructions: "You will be provided with a sentence taken from a quarterly financial report. Your job is to rewrite the sentence in your own words without changing its meaning. Ensure your version is clear, natural, and grammatically correct.",
    originalText: "According to the company's quarterly report, revenue grew by 12% compared to the previous quarter despite a downturn in global markets.",
    exampleParaphrase: "The quarterly report shows that the company's revenue increased by 12% from the last quarter, even though global markets were declining.",
    reward: "0.25 CUSD",
  },
  factual: {
    title: "Correct a Misstated Fact",
    instructions: "Review the provided statement and verify its factual accuracy. If the statement is incorrect, rewrite it with the correct information and include a brief explanation of your correction.",
    originalText: "The capital of Australia is Sydney.",
    exampleParaphrase: "The capital of Australia is Canberra. While Sydney is the largest city, Canberra is the political center.",
    reward: "0.15 CUSD",
  }
};

const TaskDetail = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [paraphrase, setParaphrase] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const taskData = TASK_DATA[taskId as keyof typeof TASK_DATA];
  
  if (!taskData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Task not found</h1>
          <Link to="/tasks" className="text-primary hover:underline">
            Return to Tasks
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async () => {
    setIsSubmitting(true);
    toast.info("Submitting your response...");

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate evaluation
      const score = Math.floor(Math.random() * 30) + 70;
      const feedbackMessages = {
        paraphrase: "Your paraphrase is clear and accurate, but consider varying the sentence structure slightly for better fluency.",
        factual: "Good correction and explanation. Your response accurately identifies and explains the error.",
      };
      
      const feedback = taskId && feedbackMessages[taskId as keyof typeof feedbackMessages];
      
      // Simulate successful evaluation
      toast.success("Evaluation complete!");
      
      if (score >= 70) {
        toast.success(`Task passed! Processing reward of ${taskData.reward}...`);
      }

      // Simulate blockchain delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Navigate to result page with transaction data
      navigate(`/evaluation?score=${score}&feedback=${encodeURIComponent(feedback || "")}&taskId=${taskId}&txHash=${encodeURIComponent("0x123...abc")}`);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClear = () => {
    setParaphrase("");
  };

  return (
    <div className="relative min-h-screen pb-8">
      <GradientContainer />
      
      <div className="relative z-10">
        <div className="max-w-2xl mx-auto px-4 pt-6">
          <Link 
            to="/tasks" 
            className="inline-flex items-center text-sm text-primary hover:text-primary/90 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Tasks
          </Link>
          
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {taskData.title}
            </h1>
            <div className="text-sm text-primary font-medium mb-6">
              Reward: {taskData.reward}
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Task Instructions
                </h2>
                <p className="text-gray-600">
                  {taskData.instructions}
                </p>
              </section>

              <section className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Example
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-gray-900 mb-1">
                      {taskId === "factual" ? "Input Statement:" : "Original Sentence:"}
                    </div>
                    <p className="text-gray-600">{taskData.originalText}</p>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">
                      {taskId === "factual" ? "Expected Correction:" : "Expected Paraphrase:"}
                    </div>
                    <p className="text-gray-600">{taskData.exampleParaphrase}</p>
                  </div>
                </div>
              </section>

              <section>
                <label 
                  htmlFor="paraphrase" 
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  {taskId === "factual" 
                    ? "Enter your corrected statement and explanation here:" 
                    : "Enter your paraphrase below:"}
                </label>
                <Textarea
                  id="paraphrase"
                  value={paraphrase}
                  onChange={(e) => setParaphrase(e.target.value)}
                  placeholder={taskId === "factual" 
                    ? "Write your correction and explanation here..." 
                    : "Write your paraphrase here..."}
                  className="min-h-[120px] mb-4"
                />
                <div className="flex gap-3">
                  <Button 
                    onClick={handleSubmit}
                    className="flex-1"
                    disabled={isSubmitting || !paraphrase.trim()}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleClear}
                    disabled={isSubmitting}
                  >
                    Clear
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
