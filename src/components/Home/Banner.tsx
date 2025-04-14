'use client';

import { motion } from 'framer-motion';
import { Rocket, Calendar, BarChart3 } from 'lucide-react';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-white py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
          Automate. Analyze. Grow.
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Sociomatic helps you manage your social presence — from seamless authentication and smart scheduling to deep post interaction analytics.
        </p>

        {/* Feature Icons */}
        <div className="flex gap-6 mt-6 flex-wrap justify-center md:justify-start">
          <motion.div
            className="flex items-center gap-2 text-blue-600"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Rocket className="w-5 h-5" />
            <span className="text-sm font-medium">Authenticate</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-purple-600"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">Schedule</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-emerald-600"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="text-sm font-medium">Analyze</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-md">
          <Image
            src="/media/home/banner1.jpeg" // Replace this with your actual image path
            alt="Sociomatic dashboard preview"
            width={600}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
