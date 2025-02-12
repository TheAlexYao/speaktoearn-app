
export const Logo = () => {
  return (
    <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <span className="text-white font-bold text-2xl">S</span>
      </div>
      <span className="font-bold text-2xl md:text-3xl gradient-text">
        SpeakToEarn
      </span>
    </div>
  );
};
