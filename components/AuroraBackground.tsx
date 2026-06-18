import React from 'react';

const AuroraBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute -inset-[50%] opacity-50 blur-[80px]">
        <div className="absolute top-1/2 left-1/2 w-[50vh] h-[50vh] bg-purple-500/30 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen animate-aurora-1"></div>
        <div className="absolute top-1/2 left-1/2 w-[60vh] h-[60vh] bg-blue-500/30 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen animate-aurora-2 animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-[40vh] h-[40vh] bg-red-500/30 dark:bg-red-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen animate-aurora-3 animation-delay-4000"></div>
      </div>
      <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-[1px]"></div>
    </div>
  );
};

export default AuroraBackground;
