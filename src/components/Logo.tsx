
export const Logo = () => {
  return <div className="flex items-center gap-3">
      <div className="relative w-12 h-12">
        {/* Outer diamond with 3D effect and richer gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center shadow-lg rotate-45 hover:scale-105 transition-transform duration-300">
          {/* Inner diamond with sophisticated gradient and glass effect */}
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#0EA5E9]/90 via-[#8B5CF6]/80 to-[#6366F1]/90 flex items-center justify-center transform backdrop-blur-sm border border-white/30 shadow-inner">
            <span className="font-bold text-xl select-none text-white/90 -rotate-45 drop-shadow-lg">S</span>
          </div>
        </div>
      </div>
      <span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#0EA5E9] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
        SpeakToEarn
      </span>
    </div>;
};
