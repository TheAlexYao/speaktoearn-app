
export const Logo = () => {
  return <div className="flex items-center gap-3">
      <div className="relative w-12 h-12">
        {/* Outer diamond with advanced gradient and animation */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center shadow-lg rotate-45 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
          {/* Inner diamond with glass morphism and sophisticated gradient */}
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#6366F1]/90 via-[#8B5CF6]/80 to-[#0EA5E9]/90 flex items-center justify-center transform backdrop-blur-sm border border-white/40 shadow-inner hover:border-white/60 transition-all duration-300">
            {/* Letter with enhanced visibility and 3D effect */}
            <span className="font-bold text-xl select-none text-white/95 -rotate-45 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform duration-300">S</span>
          </div>
        </div>
      </div>
      <span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#0EA5E9] bg-clip-text text-transparent hover:scale-105 transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(99,102,241,0.3)]">
        SpeakToEarn
      </span>
    </div>;
};
