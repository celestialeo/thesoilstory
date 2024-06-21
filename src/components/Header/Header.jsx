import Logo from "../../assets/logo.png";
function Header() {
  return (
    <div className="flex justify-between h-[60px] py-12 px-16 items-center">
      <img src={Logo} alt="Logo" className="bg-transparent h-24 w-24" />
      <div className="flex gap-10 text-white">
        <button>Home</button> <button>The Soil Story</button>
        <button>Our Team</button> <button>Blogs</button>
        <button>Contact Us</button>
        <button> Partner With Us</button>
      </div>
      <button className="bg-black text-white h-10 w-[130px] rounded-[6px]">
        Register Now
      </button>
    </div>
  );
}

export default Header;
