
export const Logo = () => {
  return (
    <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
      <div className="relative w-12 h-12">
        {/* Outer diamond shape with bottom-to-top gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary via-secondary to-[#8B5CF6] flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300 rotate-45">
          {/* Inner circle with top-to-bottom gradient */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-b from-primary via-secondary to-[#8B5CF6] flex items-center justify-center transform -rotate-45 border border-white/10">
            <span className="text-white font-bold text-xl select-none">S</span>
          </div>
        </div>
      </div>
      <span className="font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-[#8B5CF6]">
        SpeakToEarn
      </span>
    </div>
  );
};
