
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientContainer } from "@/components/GradientContainer";
import { Check, X, ArrowLeft, RotateCcw } from "lucide-react";

const EvaluationResult = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Get evaluation data from URL parameters
  const score = parseInt(searchParams.get("score") || "0");
  const feedback = searchParams.get("feedback") || "";
  const taskId = searchParams.get("taskId") || "";
  const passed = score >= 70; // Consider scores 70 and above as passing

  const handleTryAgain = () => {
    navigate(`/task/${taskId}`);
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
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Evaluation Result
            </h1>

            <div className="space-y-6">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                <div className={`rounded-full p-3 mb-4 ${
                  passed 
                    ? "bg-success/10 text-success" 
                    : "bg-destructive/10 text-destructive"
                }`}>
                  {passed 
                    ? <Check className="w-8 h-8" /> 
                    : <X className="w-8 h-8" />
                  }
                </div>
                
                <div className="text-xl font-semibold mb-2">
                  Decision: {passed ? "Pass" : "Fail"}
                </div>
                
                <div className="text-lg text-gray-600 mb-4">
                  Score: {score}/100
                </div>
              </div>

              {feedback && (
                <div className="bg-muted p-4 rounded-lg">
                  <h2 className="font-semibold text-gray-900 mb-2">
                    Feedback
                  </h2>
                  <p className="text-gray-600">
                    {feedback}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="flex-1"
                  onClick={() => navigate("/tasks")}
                >
                  Return to Task List
                </Button>
                
                {!passed && (
                  <Button 
                    variant="outline"
                    onClick={handleTryAgain}
                    className="flex-1"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluationResult;
