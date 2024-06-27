import Logo from "../../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import JoinWaitlist from "../Utils/JoinWaitlist";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const SendEmail = () => {
    var subject = "Let's Connect!";
    var body = "Hello,I'm [Your Name]!,would love to have chat with you!";
    window.location.href = `mailto:contact@thesoilstory.in?subject=${subject}&body=${body}`;
  };
  const navigate = useNavigate();
  const navigateTo = (link) => {
    window.scrollTo(0, 0);
    navigate(link);
  };

  return (
    <>
      <div className="footerImage">
        <div className="bg-transparent flex justify-start gap-20 items-center p-16 px-28 text-white">
          <div>
            <img src={Logo} alt="logo" />
            <p>Join the Waitlist! Experience something awesome</p>
            <JoinWaitlist btncolor="#FAB917" />
          </div>
          <div className="flex align-top justify-evenly w-full">
            <div>
              <h2 className="font-bold mb-7 text-xl">Explore</h2>
              <p className="mb-4" onClick={() => navigateTo("/the-soil-story")}>
                The Soil Story
              </p>
              <p className="mb-4" onClick={() => navigateTo("/team")}>
                Our Team
              </p>
              <p className="mb-4" onClick={() => navigateTo("/blogs")}>
                Blogs
              </p>
              <p className="mb-4" onClick={() => navigateTo("/contact-us")}>
                Contact Us
              </p>
              <p
                className="mb-4"
                onClick={() => navigateTo("/partner-with-us")}
              >
                Partner With Us
              </p>
            </div>
            <div className="font-bold">
              <h2 className="font-bold mb-7 text-xl">Contact Info</h2>
              <div className="flex">
                <div className="">
                  <div
                    className="flex justify-start items-center gap-5 mb-4 hover:cursor-pointer"
                    onClick={SendEmail}
                  >
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
                  <div className="flex justify-start items-center gap-5 mb-4 ">
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
                  <div
                    className="flex justify-start items-center gap-5 mb-4 hover:cursor-pointer"
                    onClick={() =>
                      window.open("https://www.instagram.com/thesoilstory.in/")
                    }
                  >
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
                  <div
                    className="flex justify-start items-center gap-5 mb-4 hover:cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/thesoilstory/"
                      )
                    }
                  >
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
        <span className="block text-sm text-gray-300 sm:text-center  bg-transparent pb-10">
          © Copyright 2024. All Rights Reserved by{" "}
          <span className="text-white font-bold">shawonetcThemes</span>
        </span>
      </div>
    </>
  );
}

export default Navbar;
