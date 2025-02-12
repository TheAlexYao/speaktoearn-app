
export const Logo = () => {
  return <div className="flex items-center gap-3">
      <div className="relative w-12 h-12">
        {/* Outer diamond shape with a more vibrant gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-secondary to-[#0EA5E9] flex items-center justify-center shadow-lg rotate-45">
          {/* Inner diamond shape with inverted gradient for contrast */}
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#0EA5E9] via-secondary to-primary flex items-center justify-center transform border border-white/20">
            <span className="font-bold text-xl select-none text-slate-50 -rotate-45">S</span>
          </div>
        </div>
      </div>
      <span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        SpeakToEarn
      </span>
    </div>;
};
