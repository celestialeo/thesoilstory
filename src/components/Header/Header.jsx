/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/logo.png";
function Header(props) {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };

  return (
    <motion.div
      className="flex justify-between h-[60px] py-12 px-16 items-center"
      whileInView="visible"
      transition={{ duration: 1, ease: "linear" }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 0 },
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img src={Logo} alt="Logo" className="bg-transparent h-24 w-24" />
      <div
        className={
          props?.text === "white"
            ? "flex gap-10 text-black"
            : "flex gap-10 text-white"
        }
      >
        <button onClick={() => navigateTo("/")}>Home</button>{" "}
        <button onClick={() => navigateTo("/the-soil-story")}>
          The Soil Story
        </button>
        <button onClick={() => navigateTo("/team")}>Our Team</button>{" "}
        <button onClick={() => navigateTo("/blogs")}>Blogs</button>
        <button onClick={() => navigateTo("/contact-us")}>Contact Us</button>
        <button onClick={() => navigateTo("/partner-with-us")}>
          Partner With Us
        </button>
      </div>
      <button
        className="bg-black text-white h-10 w-[130px] rounded-[6px]"
        onClick={() => navigateTo("/join-waitlist")}
      >
        Register Now
      </button>
    </motion.div>
  );
}

export default Header;
