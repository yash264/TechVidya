import { useState, useEffect, useMemo } from "react";
import { cn } from "../utils";
import { motion } from "motion/react";

export const Meteors = ({ className }) => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () =>
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
  
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const number = useMemo(() => {
    if (screenSize.width < 340) return 40; // mobile
    if (screenSize.width < 640) return 70; // tablet
    if (screenSize.width < 1440) return 100; // desktop
    return 120;
  }, [screenSize]);

  const meteors = useMemo(() => Array.from({ length: number }, (_, i) => i), [number]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>

      {meteors.map((idx) => {

        return (
          <span
            key={`meteor-${idx}`}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className
            )}
            style={{
              top: `${Math.random() * window.innerHeight - 80}px`,
              left: `${Math.random() * window.innerWidth - 80}px`,
              animationDelay: `${Math.random() * 0.5}s`,
              animationDuration: `${Math.floor(Math.random() * 3 + 2)}s`,
            }}></span>
        );
      })}
    </motion.div>
  );
};