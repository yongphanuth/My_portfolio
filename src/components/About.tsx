const About = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center py-16 px-6">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline-block pb-2">
          About Me
        </h2>

        <p className="text-lg leading-relaxed mt-6">
          I'm <span className="font-semibold text-blue-400">Phanuth Yong</span>,
          a web and software developer passionate about creating scalable and
          efficient applications. My expertise spans front-end and back-end
          technologies, with a focus on delivering high-quality solutions.
        </p>

        <p className="mt-6 text-lg">
          I'm always open to new opportunities and collaborations. Let's build
          something great together!
        </p>
      </div>
    </section>
  );
};

export default About;
