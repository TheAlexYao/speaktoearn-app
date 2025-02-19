
import { ArrowRight, Globe, Users, Mic, Database } from "lucide-react";
import { Logo } from "./Logo";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    label: "Total Contributors",
    value: "12,456",
    icon: Users,
    change: "+12%",
  },
  {
    label: "Voice Recordings",
    value: "89,243",
    icon: Mic,
    change: "+18%",
  },
  {
    label: "Data Points",
    value: "234,567",
    icon: Database,
    change: "+24%",
  },
];

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen pt-24 pb-20 px-4 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl floating" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/10 blur-3xl floating" style={{
          animationDelay: '1s'
        }} />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="flex justify-center mb-10 animate-fade-up">
          <Logo />
        </div>
        
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-sm rounded-full px-6 py-2.5 mb-10 animate-fade-up hover:scale-105 transition-transform duration-300">
          <Globe className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-gray-600">
            Now available globally
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text leading-tight animate-fade-up px-[2px]">
          Earn Crypto By Speaking Your Language
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up glass-card p-6 rounded-2xl">
          Join 847 active contributors preserving languages and earning rewards while making a lasting impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-up">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-semibold">{stat.value}</h3>
                    <span className="text-sm font-medium text-success-500">
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up">
          <button 
            onClick={() => navigate('/connect-wallet')}
            className="w-full sm:w-auto gradient-bg text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Connect Wallet to Start Earning
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto text-gray-700 px-8 py-4 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
