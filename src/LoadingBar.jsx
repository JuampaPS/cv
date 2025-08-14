import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Background3D from './Background3D';

function LoadingBar() {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simular carga progresiva
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShowContent(true);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (showContent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <Background3D />
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/60 text-sm font-light mb-8"
        >
          jpps
        </motion.div>

        {/* Main prompt */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-16 leading-tight tracking-wide"
        >
          Kontrollera din förmåga att ansluta
        </motion.h1>

        {/* Progress bar - SIMPLIFIED AND WORKING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-4xl mx-auto mb-12"
        >
          {/* Status indicator */}
          <div className="text-center mb-6">
            <motion.div
              className="inline-flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-full border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-base font-medium">System aktivt</span>
            </motion.div>
          </div>
          
          {/* Progress Bar Container - WHITE RECTANGULAR LIKE STYKOVKA */}
          <div className="bg-white/10 h-20 rounded-none overflow-hidden border-2 border-white/30 relative shadow-2xl">
            {/* Progress indicator above bar */}
            <div className="absolute -top-8 left-0 w-full text-center">
              <span className="text-white text-sm font-bold bg-black/50 px-2 py-1 rounded">
                Laddar system... {progress}%
              </span>
            </div>
            
            {/* Progress Bar Fill - WHITE RECTANGULAR */}
            <div 
              className="bg-white h-full relative shadow-lg"
              style={{
                width: `${progress}%`,
                transition: 'width 0.3s ease-out',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(45deg, transparent 40%, rgba(0,0,0,0.1) 50%, transparent 60%)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
            </div>
            
            {/* Progress percentage inside bar - BLACK TEXT ON WHITE */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-black text-3xl font-bold z-10 tracking-wider">
                {progress}%
              </span>
            </div>
          </div>
          
          {/* Progress info below */}
          <div className="flex justify-between items-center mt-6">
            <span className="text-white text-6xl font-bold tracking-wider">{progress}%</span>
            <span className="text-white/90 text-2xl font-medium max-w-md text-right">
              {progress < 25 ? "Laddar system..." : 
               progress < 50 ? "Ansluter till nätverk..." : 
               progress < 75 ? "Slutför anslutning..." :
               progress < 95 ? "Kontrollerar kompatibilitet..." :
               "Klar att starta..."}
            </span>
          </div>
        </motion.div>

        {/* 3D geometric element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Main geometric shape */}
            <div className="w-48 h-48 border-2 border-white/40 relative transform rotate-45">
              <div className="absolute inset-0 border-2 border-white/20 transform rotate-45"></div>
              <div className="absolute inset-0 border-2 border-white/10 transform -rotate-45"></div>
            </div>
            
            {/* Orbital elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-2 border-white/30 rounded-full"></div>
            <div className="absolute -top-6 -right-6 w-10 h-10 border-2 border-white/40 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-white/50 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-14 h-14 border-2 border-white/35 rounded-full"></div>
            
            {/* Connection lines */}
            <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-white/20 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-0.5 h-32 bg-white/20 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </motion.div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-white/60 text-lg font-medium mt-8"
        >
          Initierar kreativt system...
        </motion.p>
      </div>
    </div>
  );
}

export default LoadingBar;
