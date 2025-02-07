"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Portfolio Project",
      date: "April 10, 2024",
      imgSrc: "/img/portfolio.jpeg",
      description:
        "A personal portfolio website built with React.js, Next.js, and Tailwind CSS to showcase my skills and projects.",
      link: "https://yknutezzy.netlify.app/",
    },
    {
      title: "Capstone Project",
      date: "May 20, 2024",
      imgSrc: "/img/ssic111.jpg",
      description:
        "A final-year capstone project focused on full-stack development, integrating backend and frontend technologies.",
      link: "#",
    },
    {
      title: "C&P with Python",
      date: "June 15, 2024",
      imgSrc: "/img/sscipre1.jpg",
      description:
        "A collection of Python-based projects showcasing automation, data analysis, and algorithmic problem-solving.",
      link: "#",
    },
    {
      title: "Eco Fresh",
      date: "July 5, 2024",
      imgSrc: "/img/ecofresh.png",
      description:
        "An eco-friendly e-commerce platform built with React.js and Node.js, designed for sustainable product sales.",
      link: "#",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <div className="pt-20 relative bg-gradient-to-b from-black to-gray-800 text-white min-h-screen py-16 overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 blur-3xl"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Animation */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="container mx-auto px-6 relative z-10"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto">
          A collection of my past projects and experiences showcasing my journey in web and software development.
        </p>

        <div ref={ref} className="flex flex-wrap justify-center gap-6 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02, // 🔹 Smaller hover scale (1.03 → 1.02)
                boxShadow: "0px 8px 20px rgba(255, 255, 255, 0.1)",
                transition: { duration: 0.1, ease: "easeOut" }, // 🔹 Quicker hover effect
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-900 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-100 w-72"
            >
              <a href={project.link} className="block">
                <motion.img
                  src={project.imgSrc}
                  alt={project.title}
                  className="object-cover w-full h-40 rounded-md"
                  whileHover={{ scale: 1.02 }} // 🔹 Less intense zoom effect
                  transition={{ duration: 0.1, ease: "easeOut" }} // 🔹 Instant image zoom
                />
              </a>
              <span className="block mt-3 text-xs font-semibold text-gray-400 uppercase">
                {project.date}
              </span>
              <p className="mt-1 text-lg font-semibold text-white">{project.title}</p>
              <p className="text-sm text-gray-400">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 font-semibold hover:text-blue-400 text-sm mt-2 inline-block"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
