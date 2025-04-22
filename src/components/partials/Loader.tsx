import React from "react";
import { motion } from "framer-motion";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
      <div className="flex items-end space-x-2 h-8">
        {[0, 0.1, 0.2,].map((delay, index) => (
          <motion.div
            key={index}
            className="w-[9px] bg-blue-400 rounded-sm"
            style={{ height: '100%', originY: 1 }}
            animate={{
              scaleY: [1, 1.4, 1.2, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
