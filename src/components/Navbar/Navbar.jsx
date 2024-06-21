import Logo from "../../assets/logo.png";
function Navbar() {
  return (
    <>
      <div className="bg-[#4BAF47]">
        <div>
          <img src={Logo} alt="logo" />
          <p>Join the Waitlist! Experience something awesome</p>
          <div className="bg-white rounded-full w-[300px] py-3 px-3">
            <input type="text" placeholder="Your Email*" />
            <button>Join Waitlist</button>
          </div>
        </div>
        <div>explore</div>
        <div>contact</div>
        <div>recent blogs</div>
      </div>
    </>
  );
}

export default Navbar;
