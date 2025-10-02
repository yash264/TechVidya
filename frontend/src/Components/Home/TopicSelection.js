import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
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
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(14,165,233,0.05)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(99,102,241,0.05)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,_rgba(34,197,94,0.05)_0%,_transparent_50%)]" />
      </div>

      {/* Main Content */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative pt-20 md:pt-28 pb-16"
      >
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <motion.div 
            variants={headerVariants}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
                <Search className="w-4 h-4 mr-2" />
                Explore Our Teams
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
                Departments
              </span>
            </h1>
            
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Discover the specialized teams driving innovation and creating meaningful impact
              </p>
            </div>
          </motion.div>

          {/* Department Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
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
                      delay: index * 0.1,
                      ease: "easeOut" 
                    }
                  }
                }}
              >
                <QuizTopics {...item} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default TopicSelection;