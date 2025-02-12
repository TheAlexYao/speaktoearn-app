
export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-xl">S</span>
      </div>
      <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        SpeakToEarn
      </span>
    </div>
  );
};
