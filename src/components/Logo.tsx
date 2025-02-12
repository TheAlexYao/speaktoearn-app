
export const Logo = () => {
  return <div className="flex items-center gap-3">
      <div className="relative w-12 h-12">
        {/* Outer diamond shape with left-to-right gradient (appears bottom-up when rotated) */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4F46E5] to-[#0EA5E9] flex items-center justify-center shadow-lg rotate-45">
          {/* Inner diamond shape with same gradient direction as outer diamond */}
          <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#4F46E5] flex items-center justify-center transform border border-white/10">
            <span className="font-bold text-xl select-none text-slate-50 -rotate-45">S</span>
          </div>
        </div>
      </div>
      <span className="font-bold text-2xl md:text-3xl drop-shadow dark:text-slate-50 text-gray-900">
        SpeakToEarn
      </span>
    </div>;
};
