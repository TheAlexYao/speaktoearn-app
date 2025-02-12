
export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12">
        {/* Outer diamond shape with top-down bright gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b dark:from-[#0EA5E9] dark:via-[#0284C7] dark:to-[#0369A1] from-[#60A5FA] via-[#3B82F6] to-[#2563EB] flex items-center justify-center shadow-lg rotate-45">
          {/* Inner circle with bottom-up gradient */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-t dark:from-[#0EA5E9] dark:via-[#0284C7] dark:to-[#0369A1] from-[#60A5FA] via-[#3B82F6] to-[#2563EB] flex items-center justify-center transform -rotate-45 border border-white/10">
            <span className="text-white font-bold text-xl select-none">S</span>
          </div>
        </div>
      </div>
      <span className="font-bold text-2xl md:text-3xl dark:text-white text-gray-900 drop-shadow">
        SpeakToEarn
      </span>
    </div>
  );
};
