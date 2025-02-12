
export const Logo = () => {
  return (
    <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-secondary to-[#8B5CF6] flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <span className="text-white font-bold text-xl">S</span>
        </div>
      </div>
      <span className="font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-[#8B5CF6]">
        SpeakToEarn
      </span>
    </div>
  );
};
