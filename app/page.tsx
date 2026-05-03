"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 overflow-hidden">
      
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[20vw] font-black italic tracking-tighter">SPEED</h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter">
          RUNGGALDIER<span className="text-[#dfff00]">.</span>
        </h1>
        
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="h-[2px] w-12 bg-[#dfff00]"></div>
          <p className="text-sm md:text-lg font-light tracking-[0.3em] uppercase opacity-80">
            Portfolio 2026 // Creative Dev
          </p>
          <div className="h-[2px] w-12 bg-[#dfff00]"></div>
        </div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "#dfff00", color: "#000" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="mt-16 px-10 py-4 border-2 border-[#dfff00] text-[#dfff00] font-bold uppercase italic tracking-widest"
      >
        Enter Gallery
      </motion.button>
    </main>
  );
}