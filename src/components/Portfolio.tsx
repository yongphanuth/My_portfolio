import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      title: "Portfolio Project",
      date: "April 10, 2024",
      imgSrc: "/img/portfolio.jpeg",
      description:
        "A personal portfolio website built with React.js, Next.js, and Tailwind CSS to showcase my skills and projects.",
      link: "#",
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

  return (
    <div className=" pt-20 relative bg-gradient-to-b from-black to-gray-800 text-white min-h-screen py-16 overflow-hidden">
      {/* Smooth Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 blur-3xl"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 relative z-10"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto">
          A collection of my past projects and experiences showcasing my journey in web and software development.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6, // Slightly longer for smoother animation
                delay: index * 0.2,
                ease: "easeOut", // Smoother easing function
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(255, 255, 255, 0.2)", // Slightly bigger shadow
                transition: {
                  scale: { type: "spring", stiffness: 200, damping: 15 }, // Smoother scale transition
                  boxShadow: { duration: 0.3 }, // Smooth shadow transition
                },
              }}
              className="bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-72"
            >
              <a href={project.link} className="block">
                <motion.img
                  src={project.imgSrc}
                  alt={project.title}
                  className="object-cover w-full h-40 rounded-md"
                  whileHover={{ scale: 1.02 }} // Make image scale smoothly
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    duration: 0.4, // Smooth image scale transition
                  }}
                />
              </a>
              <span className="block mt-3 text-xs font-semibold text-gray-400 uppercase">{project.date}</span>
              <p className="mt-1 text-lg font-semibold text-white">{project.title}</p>
              <p className="text-sm text-gray-400">{project.description}</p>
              <a href={project.link} className="text-blue-500 font-semibold hover:text-blue-400 text-sm mt-2 inline-block">
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
