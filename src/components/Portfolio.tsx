const Portfolio = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-600">
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Portfoilo
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-400 lg:mx-0">
                A collection of my past projects and experiences showcasing my
                journey in web and software development.
              </p>
            </div>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
            <div className="overflow-hidden bg-gradient-to-t from-gray-400 to-yellow-100 rounded shadow hover:bg-gradient-to-b">
              <div className="p-5">
                <div className="relative">
                  <a
                    href="http://localhost:5173/"
                    title=""
                    className="block aspect-w-4 aspect-h-3"
                  >
                    <img
                      className="object-cover w-full h-60"
                      src="/img/portfolio.jpeg"
                      alt="Portfolio Project"
                    />
                  </a>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {" "}
                  April 10, 2024{" "}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    Portfolio Project{" "}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  A personal portfolio website built with React.js, Next.js, and
                  Tailwind CSS to showcase my skills and projects.
                </p>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="overflow-hidden bg-gradient-to-t from-gray-400 to-yellow-100 rounded shadow hover:bg-gradient-to-b">
              <div className="p-5">
                <div className="relative">
                  <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                    <img
                      className="object-cover w-full h-60"
                      src="/img/ssic111.jpg"
                      alt="Capstone Project"
                    />
                  </a>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {" "}
                  May 20, 2024{" "}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    Capstone Project{" "}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  A final-year capstone project focused on full-stack
                  development, integrating backend and frontend technologies.
                </p>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="overflow-hidden bg-gradient-to-t from-gray-400 to-yellow-100 rounded shadow hover:bg-gradient-to-b">
              <div className="p-5">
                <div className="relative">
                  <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                    <img
                      className="object-cover w-full h-60"
                      src="/img/sscipre1.jpg"
                      alt="Python Programming"
                    />
                  </a>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {" "}
                  June 15, 2024{" "}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    C&P with Python{" "}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  A collection of Python-based projects showcasing automation,
                  data analysis, and algorithmic problem-solving.
                </p>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
