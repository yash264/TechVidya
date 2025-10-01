import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Code, Pencil, Users, Megaphone, Search, Target, ArrowRight, MapPin } from 'lucide-react';
// import Reserach from '../assets/Teams/research.webp'
// import Design from '../assets/Teams/DESIGN.jpg'
// import Sponsorship from '../assets/Teams/SPONSORSHIP.jpg'
// import Content from '../assets/Teams/content.jpg'
// import Web from '../assets/Teams/web.jpg'
// import Fild from '../assets/Teams/field.jpg'

const departments = [
  {
    title: "WEB TEAM",
    path: "/webTeam",
    image: "Web",
    icon: Code,
    description: "Building digital experiences",
    members: "6+ Members",
    category: "Technology"
  },
  {
    title: "RESEARCH AND DEVELOPMENT",
    path: "/reserchAndDevelopment",
    image: "Reserach",
    icon: Target,
    description: "Innovating for tomorrow",
    members: "5+ Members",
    category: "Research"
  },
  {
    title: "CONTENT TEAM",
    path: "/contentDepartment",
    image: "Content",
    icon: Pencil,
    description: "Crafting compelling stories",
    members: "4+ Members",
    category: "Creative"
  },
  {
    title: "FIELD OFFICER",
    path: "/fieldOfficer",
    image: "Fild",
    icon: MapPin,
    description: "Making impact on ground",
    members: "7+ Members",
    category: "Operations"
  },
  {
    title: "DESIGN TEAM",
    path: "/designDepartment",
    image: "Design",
    icon: Pencil,
    description: "Creating visual excellence",
    members: "4+ Members",
    category: "Creative"
  },
  {
    title: "MARKETING AND SPONSORSHIP",
    path: "/marketingAndSponcership",
    image: "Sponsorship",
    icon: Megaphone,
    description: "Driving growth and partnerships",
    members: "6+ Members",
    category: "Business"
  }
];

const DepartmentCard = ({ title, path, image, icon: Icon, description, members, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <Link 
        to={path}
        className="block relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl border border-gray-100"
      >
        {/* Background Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-gray-900/20" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white border border-white/20">
              {category}
            </span>
          </div>

          {/* Hover Arrow */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/20">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Icon and Description */}
          <div className="mb-3 flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-300">{description}</p>
              <p className="text-xs text-gray-400 flex items-center gap-1">
                <Users className="w-3 h-3" />
                {members}
              </p>
            </div>
          </div>
          
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-bold text-white leading-tight mb-4">
            {title}
          </h2>
          
          {/* Animated Underline */}
          <div className="relative">
            <div className="h-0.5 w-16 bg-white/30 transition-all duration-300 group-hover:w-28 group-hover:bg-white" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Selection = () => {
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
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>6 Departments</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>30+ Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Always Growing</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Department Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {departments.map((dept, index) => (
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
                <DepartmentCard {...dept} />
              </motion.div>
            ))}
          </motion.div>


        </div>
      </motion.div>
    </div>
  );
};

export default Selection;