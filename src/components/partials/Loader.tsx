import React from "react";
import { motion } from "framer-motion";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <motion.div
        className="w-12 h-12 rounded-full border-4 border-purple-500 border-t-transparent shadow-[0_0_30px_#a855f7] backdrop-blur-md"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
          boxShadow: [
            "0 0 30px #a855f7",
            "0 0 50px #a855f7",
            "0 0 30px #a855f7",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Loader;
