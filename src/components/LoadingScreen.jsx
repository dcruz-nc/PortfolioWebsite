import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center">
      {/* Content */}
      <div className="text-center px-4 sm:px-0">
        <div className="mb-8 text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white/90 backdrop-blur-sm bg-white/5 px-6 sm:px-8 py-4 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          {text}
          <span className="animate-blink ml-2 text-blue-400 backdrop-blur-sm bg-blue-500/10 px-2 py-1 rounded-lg border border-blue-400/20">|</span>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-20 h-20 sm:w-24 sm:h-24 bg-cyan-500/5 rounded-full blur-3xl"></div>
    </div>
  );
};
