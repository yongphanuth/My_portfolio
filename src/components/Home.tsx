import HeroImage from "/img/Hero1.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black to-gray-800"> {/* Reversed gradient */}
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full px-6">
        {/* Left Section - Text */}
        <div className="text-center md:text-left flex flex-col justify-center h-full">
          <motion.h2
            className="text-4xl sm:text-6xl text-white font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            I'm a Web Developer
          </motion.h2>
          <p className="text-gray-300 text-lg max-w-md mt-4">
            Passionate about building web applications that are both visually 
            appealing and functionally robust. Let's turn ideas into reality!
          </p>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <a href="#portfolio">
              <motion.button
                className="group flex items-center justify-center px-6 py-3 w-fit rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md hover:shadow-lg transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Portfolio
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  <RiArrowRightSLine size={25} />
                </span>
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Right Section - Image */}
        <motion.div
          className="w-1/3 md:w-1/4" // Adjust width here
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={HeroImage}
            alt="my-profile"
            className="rounded-2xl mx-auto shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
