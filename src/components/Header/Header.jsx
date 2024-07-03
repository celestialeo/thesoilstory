/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png";

function Header(props) {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      className="flex justify-between lg:flex lg:justify-around h-[60px] py-4 px-6 items-center md:px-16 md:py-12 "
      whileInView="visible"
      transition={{ duration: 1, ease: "linear" }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 0 },
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img
        src={Logo}
        alt="Logo"
        className="bg-transparent h-16 w-16 md:h-24 md:w-24 hover:cursor-pointer"
        onClick={() => navigateTo("/")}
      />
      <div className="flex md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col gap-4 absolute top-16 right-0 w-[50%] bg-gray-500 rounded-lg p-6 md:flex md:flex-row md:static md:w-auto md:bg-transparent md:gap-10 lg:flex lg:flex-row lg:static lg:w-auto lg:bg-transparent lg:gap-10 ${
          props?.text === "white" ? "text-black" : "text-white"
        }`}
      >
        <button onClick={() => navigateTo("/")}>Home</button>
        <button onClick={() => navigateTo("/the-soil-story")}>
          The Soil Story
        </button>
        <button onClick={() => navigateTo("/team")}>Our Team</button>
        <button onClick={() => navigateTo("/blogs")}>Blogs</button>
        <button onClick={() => navigateTo("/contact-us")}>Contact Us</button>
        <button onClick={() => navigateTo("/partner-with-us")}>
          Partner With Us
        </button>
        <button
          className="bg-black text-white h-10 w-[130px] rounded-[6px] md:ml-4 block md:hidden lg:hidden"
          onClick={() => navigateTo("/join-waitlist")}
        >
          Register Now
        </button>
      </div>
      <button
        className="bg-black text-white h-10 w-[130px] rounded-[6px] md:ml-4 hidden lg:block md:block"
        onClick={() => navigateTo("/join-waitlist")}
      >
        Register Now
      </button>
    </motion.div>
  );
}

export default Header;
