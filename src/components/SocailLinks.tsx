
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocailLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          linkedin <FaLinkedin size={25} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
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
      href: "mailto:foo@gmail.com"
      
    },
    {
      id: 4,
      child: (
        <>
          Resume<BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "#",
      style: "rounded-br-md",
      download: 'true'
    },
  ];

  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id, child, href, style, download})=> (
            <li key = {id} className={"flex justify-between items-ceter h-14 w-40 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300" + " "+ style }>
            <a
              className="flex justify-between items-center w-full text-white "
              href={href}
              download={download}
              target=" _blank"
            >
              <>
                {child}
              </>
            </a>
          </li>

        ))}
        
      </ul>
    </div>
  );
};

export default SocailLinks;
