import Logo from "../../assets/logo.png";
function Navbar() {
  return (
    <>
      <div className="bg-[#4BAF47] flex justify-between items-center">
        <div>
          <img src={Logo} alt="logo" />
          <p>Join the Waitlist! Experience something awesome</p>
          <div className="bg-white rounded-full w-[350px] py-1 px-2 flex justify-between">
            <input
              type="text"
              placeholder="Your Email*"
              className=" rounded-full p-1"
            />
            <button className="bg-yellow-400 py-2 px-3 rounded-full">
              Join Waitlist
            </button>
          </div>
        </div>
        <div>
          <h2>Explore</h2>
          <p>The Soil Story</p>
          <p>Our Team</p>
          <p>Blogs</p>
          <p>Contact Us</p>
          <p>Partner With Us</p>
        </div>
        <div>
          <h2>Contact Info</h2>
          <p>
            Email:
            <br />
            contact@thesoilstory.in
          </p>
          <p>
            Phone:
            <br /> +44 7404306995 (UK) <br />
            +91 9971396893 (India)
          </p>
          <p>
            Instagram:
            <br /> @thesoilstory.in
          </p>
          <p>
            Linkedin: <br />
            The Soil Story
          </p>
        </div>
        <div>recent blogs</div>
      </div>
    </>
  );
}

export default Navbar;
