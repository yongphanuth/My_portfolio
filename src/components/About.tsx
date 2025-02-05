import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center py-16 px-6 pt-20">
      {/* Background Animation (Matches Portfolio but Reversed) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-10 blur-3xl"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center relative z-10"
      >
        <h2 className="text-3xl font-bold border-b-4 border-gray-500 inline-block pb-2">
          About Me
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-lg leading-relaxed mt-6 text-gray-300"
        >
          I'm <span className="font-semibold text-white">Phanuth Yong</span>, a
          web and software developer passionate about creating scalable and
          efficient applications. My expertise spans both front-end and
          back-end development, with a strong focus on delivering high-quality
          solutions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-6 text-lg text-gray-300"
        >
          I’m always open to new opportunities and collaborations. Let’s build
          something great together!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
 