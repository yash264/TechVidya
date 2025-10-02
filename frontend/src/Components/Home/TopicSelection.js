import React from 'react';
import { motion } from 'framer-motion';
import { QuizTopics } from "../../Helpers/QuizTopics";
import { CategoryData } from '../../Helpers/CategoryData';


const TopicSelection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-white to-gray-100 overflow-hidden">

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative pt-20 md:pt-28 pb-20 z-10"
      >
        <div className="container mx-auto px-4">

          {/* Header Section */}
          <motion.div
            variants={headerVariants}
            className="text-center mb-20"
          >

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight relative inline-block">
              Topics{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
                Selection
              </span>
              <span className="block h-1 w-2/3 mx-auto mt-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse" />
            </h1>

            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our quizzes cover a variety of topics —
                designed to challenge your mind and boost your learning. 🚀
              </p>
            </div>
          </motion.div>

          {/* Department Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {CategoryData.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.12,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                <div className="group relative rounded-3xl bg-white/60 backdrop-blur-xl border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-400/50">
                  <QuizTopics
                    {...item}
                  />
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </div>

  );
};

export default TopicSelection;