/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
function Header(props) {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };

  return (
    <div className="flex justify-between h-[60px] py-12 px-16 items-center">
      <img src={Logo} alt="Logo" className="bg-transparent h-24 w-24" />
      <div
        className={
          props?.text === "white"
            ? "flex gap-10 text-black"
            : "flex gap-10 text-white"
        }
      >
        <button onClick={() => navigateTo("/")}>Home</button>{" "}
        <button>The Soil Story</button>
        <button onClick={() => navigateTo("/team")}>Our Team</button>{" "}
        <button onClick={() => navigateTo("/blogs")}>Blogs</button>
        <button onClick={() => navigateTo("/contact-us")}>Contact Us</button>
        <button onClick={() => navigateTo("/partner-with-us")}>
          Partner With Us
        </button>
      </div>
      <button className="bg-black text-white h-10 w-[130px] rounded-[6px]">
        Register Now
      </button>
    </div>
  );
}

export default Header;
