import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    institution: "Royal University of Phnom Penh",
    duration: "2022 - 2026",
    field: "Computer Science",
    logo: "/img/imgtool/Rupp_logo.png",
  },
  {
    id: 2,
    institution: "Royal University of Phnom Penh",
    duration: "2022 - 2026",
    field: "Computer Science",
    logo: "/img/imgtool/Rupp_logo.png",
  },
  {
    id: 3,
    institution: "Royal University of Phnom Penh",
    duration: "2022 - 2026",
    field: "Computer Science",
    logo: "/img/imgtool/Rupp_logo.png",
  },
  {
    id: 4,
    institution: "Royal University of Phnom Penh",
    duration: "2022 - 2026",
    field: "Computer Science",
    logo: "/img/imgtool/Rupp_logo.png",
  },
];

const Education = () => {
  return (
    <div className="pt-20 relative bg-gradient-to-b from-black to-gray-800 text-white min-h-screen py-16 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 blur-3xl"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A timeline of my journey in web development, database administration, and software engineering.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 sm:px-10">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="bg-gray-900 p-5 rounded-lg shadow-md flex flex-col items-center text-center w-72 mx-auto"
          >
            <img
              src={edu.logo}
              alt={edu.institution}
              className="h-24 w-24 mb-4 object-contain"
            />
            <p className="text-sm text-gray-400">{edu.institution} | {edu.duration}</p>
            <p className="text-gray-300 mt-2 font-semibold">{edu.field}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
