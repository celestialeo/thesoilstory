import Logo from "../../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Navbar() {
  return (
    <>
      <div className="bg-[#4BAF47] flex justify-start gap-20 items-center p-16 px-28 text-white">
        <div>
          <img src={Logo} alt="logo" />
          <p>Join the Waitlist! Experience something awesome</p>
          <div className="bg-white rounded-full w-[350px] py-2 px-2 flex justify-between mt-5 ps-5">
            <input
              type="text"
              placeholder="Your Email*"
              className=" rounded-full p-1"
            />
            <button className="bg-yellow-400 py-2 px-3 rounded-full text-black">
              Join Waitlist
            </button>
          </div>
        </div>
        <div className="flex align-top justify-evenly w-full">
          <div>
            <h2 className="font-bold mb-7 text-xl">Explore</h2>
            <p className="mb-4">The Soil Story</p>
            <p className="mb-4">Our Team</p>
            <p className="mb-4">Blogs</p>
            <p className="mb-4">Contact Us</p>
            <p className="mb-4">Partner With Us</p>
          </div>
          <div className="font-bold">
            <h2 className="font-bold mb-7 text-xl">Contact Info</h2>
            <div className="flex">
              <div className="">
                <div className="flex justify-start items-center gap-5 mb-4">
                  {" "}
                  <div className="glassEffect w-max p-2">
                    <MdEmail />
                  </div>
                  <p className="text-sm">
                    EMAIL:
                    <br />
                    <span className="font-light text-sm">
                      contact@thesoilstory.in
                    </span>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-5 mb-4">
                  <div className="glassEffect w-max p-2">
                    <FaPhone />
                  </div>
                  <p className="text-sm">
                    PHONE:
                    <br />
                    <span className="font-light text-sm">
                      {" "}
                      +44 7404306995 (UK) <br />
                      +91 9971396893 (India)
                    </span>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-5 mb-4">
                  <div className="glassEffect w-max p-2">
                    <FaInstagram />
                  </div>
                  <p className="text-sm">
                    INSTAGRAM:
                    <br />
                    <span className="font-light text-sm">
                      {" "}
                      @thesoilstory.in
                    </span>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-5 mb-4">
                  <div className="glassEffect w-max p-2">
                    <FaLinkedin />
                  </div>
                  <p className="text-sm">
                    LINKEDIN: <br />
                    <span className="font-light text-sm">The Soil Story</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="font-bold mb-7 text-xl">Recent Blogs</div>
        </div>
      </div>
      <span className="block text-sm text-gray-300 sm:text-center  bg-[#4BAF47] pb-10">
        © Copyright 2024. All Rights Reserved by{" "}
        <span className="text-white font-bold">shawonetcThemes</span>
      </span>
    </>
  );
}

export default Navbar;
