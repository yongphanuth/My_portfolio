import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocailLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tl-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/yongphanuth",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "#",
      style: "rounded-br-md",
      download: "true",
    },
  ];

  return (
    <div className="fixed top-[35%] left-0 flex flex-col space-y-4 items-center z-50">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-start items-center w-44 h-14 bg-gray-500 text-white hover:bg-gray-700 px-4 rounded-md ml-[-100px] hover:ml-[-10px] duration-300 transform hover:scale-105 ${style}`}
          >
            <a
              className="flex justify-between items-center w-full"
              href={href}
              download={download}
              target="_blank"
              rel="noopener noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocailLinks;
