
export const Logo = () => {
  return (
    <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
      <div className="relative w-12 h-12">
        {/* Outer diamond shape with bright gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#FEF7CD] via-[#FEC6A1] to-[#D946EF] flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300 rotate-45">
          {/* Inner circle with complementary gradient */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#33C3F0] via-[#1EAEDB] to-[#9b87f5] flex items-center justify-center transform -rotate-45 border border-white/10">
            <span className="text-white font-bold text-xl select-none">S</span>
          </div>
        </div>
      </div>
      <span className="font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#FEF7CD] via-[#FEC6A1] to-[#D946EF]">
        SpeakToEarn
      </span>
    </div>
  );
};
