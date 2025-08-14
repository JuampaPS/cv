import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Background3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating 3D Shapes */}
      
      {/* Large Wireframe Cube */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          rotateZ: [0, 180]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`
        }}
      >
        <div className="w-full h-full border border-white/30 relative">
          {/* Front face */}
          <div className="absolute inset-0 border border-white/20"></div>
          {/* Back face */}
          <div className="absolute inset-0 border border-white/20 transform translate-z-32"></div>
          {/* Connecting lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-px bg-white/20"></div>
            <div className="absolute top-0 left-0 w-px h-full bg-white/20"></div>
            <div className="absolute top-0 right-0 w-px h-full bg-white/20"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/20"></div>
          </div>
        </div>
      </motion.div>

      {/* Floating Orbital Ring */}
      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full border border-white/20 rounded-full relative">
          <div className="absolute inset-2 border border-white/10 rounded-full"></div>
          <div className="absolute inset-4 border border-white/5 rounded-full"></div>
          {/* Orbital dots */}
          <motion.div
            className="absolute top-0 left-1/2 w-2 h-2 bg-white/40 rounded-full"
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              transformOrigin: "12px 12px"
            }}
          />
        </div>
      </motion.div>

      {/* Geometric Pyramid */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-20 h-20"
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 180, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full relative">
          {/* Base */}
          <div className="absolute bottom-0 left-1/2 w-16 h-16 border border-white/25 transform -translate-x-1/2 rotate-45"></div>
          {/* Sides */}
          <div className="absolute bottom-0 left-1/2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-transparent border-b-white/15 transform -translate-x-1/2"></div>
        </div>
      </motion.div>

      {/* Floating Numbers/Coordinates */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-white/30 font-mono text-sm"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        391506 8484
      </motion.div>

      {/* Connection Lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Large Wireframe Sphere (Globe) */}
      <motion.div
        className="absolute bottom-20 right-1/4 w-40 h-40"
        animate={{
          rotateY: [0, 360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full relative">
          {/* Latitude lines */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 w-full h-px bg-white/20 transform -translate-x-1/2"
              style={{
                top: `${(i + 1) * 12.5}%`,
                transform: `translateX(-50%) scaleY(${Math.cos((i + 1) * Math.PI / 8)})`
              }}
            />
          ))}
          {/* Longitude lines */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-full h-full border-l border-white/20 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translateX(-50%) translateY(-50%) rotateZ(${i * 30}deg)`
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Abstract Angular Shapes */}
      <motion.div
        className="absolute top-1/3 left-10 w-16 h-16"
        animate={{
          rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full relative">
          <div className="absolute inset-0 border border-white/20 transform rotate-45"></div>
          <div className="absolute inset-0 border border-white/15 transform -rotate-45"></div>
          <div className="absolute inset-0 border border-white/10 transform rotate-90"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default Background3D;

