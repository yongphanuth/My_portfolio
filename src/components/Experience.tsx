"use client";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Service",
      company: "Bonchon",
      date: "2022 - 2023",
      description: "Worked in a customer service role, providing excellent service to customers and supporting the operations of the restaurant.",
    },
    {
      title: "Associate Project of Machine Learning",
      company: "Digital Divide Data Cambodia",
      date: "2023 - 2024",
      description: "Involved in machine learning projects, with duties including task labeling, task monitoring, assigning tasks, and providing support in the absence of the team leader.",
    },
  ];

  return (
    <div className="pt-20 relative bg-gradient-to-b from-gray-800 to-black text-white min-h-screen py-16 overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-10 blur-3xl"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Content */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="container mx-auto px-6 relative z-10"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto">
          A timeline of my journey in various roles across customer service and machine learning.
        </p>

        <div className="flex flex-col items-center gap-8 mt-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-96"
            >
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-sm text-gray-400">{exp.company} | {exp.date}</p>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Experience;
