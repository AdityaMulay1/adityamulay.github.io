import React, { useEffect } from 'react';
import { Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const ColorPicker = () => {
  useEffect(() => {
    const rand1 = 120 + Math.floor(Math.random() * 240);
    const rand2 = rand1 - 80 + (Math.floor(Math.random() * 60) - 30);
    
    document.documentElement.style.setProperty('--hue1', rand1.toString());
    document.documentElement.style.setProperty('--hue2', rand2.toString());
  }, []);

  const handleHue1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty('--hue1', e.target.value);
  };

  const handleHue2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty('--hue2', e.target.value);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="color-picker"
    >
      <div className="flex items-center gap-2 mb-3">
        <Palette className="text-cyan-400 animate-pulse" size={18} />
        <h3 className="text-white font-bold text-sm md:text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pick Colors!</h3>
      </div>
      
      <div className="space-y-2 md:space-y-3">
        <div>
          <label className="block text-xs md:text-sm text-cyan-300 mb-1 font-medium">Primary</label>
          <input
            type="range"
            min="0"
            max="360"
            defaultValue="255"
            onChange={handleHue1Change}
            className="w-full h-2 md:h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(90deg, 
                hsl(0, 70%, 50%), hsl(60, 70%, 50%), hsl(120, 70%, 50%), 
                hsl(180, 70%, 50%), hsl(240, 70%, 50%), hsl(300, 70%, 50%), hsl(360, 70%, 50%))`
            }}
          />
        </div>
        
        <div>
          <label className="block text-xs md:text-sm text-purple-300 mb-1 font-medium">Secondary</label>
          <input
            type="range"
            min="0"
            max="360"
            defaultValue="222"
            onChange={handleHue2Change}
            className="w-full h-2 md:h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(90deg, 
                hsl(0, 70%, 50%), hsl(60, 70%, 50%), hsl(120, 70%, 50%), 
                hsl(180, 70%, 50%), hsl(240, 70%, 50%), hsl(300, 70%, 50%), hsl(360, 70%, 50%))`
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ColorPicker;