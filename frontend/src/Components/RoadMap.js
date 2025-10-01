import React from 'react';
import { motion } from 'framer-motion';
import {
    IconTrendingUp,
    IconStar,
    IconLeaf,
    IconShield
} from '@tabler/icons-react';

const RoadMap = () => {

    const journey = [
        {
            year: "2021",
            title: "Foundation",
            description: "Enactus MNNIT was established with a vision to create positive social impact",
            icon: IconStar
        },
        {
            year: "2022",
            title: "First Projects",
            description: "Launched our initial community development and sustainability projects",
            icon: IconLeaf
        },
        {
            year: "2023",
            title: "Expansion",
            description: "Expanded our reach and developed partnerships with local organizations",
            icon: IconTrendingUp
        },
        {
            year: "2024",
            title: "Innovation",
            description: "Pioneered technology-driven solutions for social challenges",
            icon: IconShield
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

            {/* Journey Timeline */}
            <div className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our <span className="text-yellow-600">Journey</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From humble beginnings to making a significant impact in our community
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full"></div>

                        <div className="space-y-12">
                            {journey.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg z-10">
                                        <item.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'
                                        }`}>
                                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                            <div className="text-2xl font-bold text-yellow-600 mb-2">{item.year}</div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RoadMap;