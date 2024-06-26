import Header from "../Header/Header";
import img1 from "../../assets/Contactus1.png";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
function Contactus() {
    const SendEmail = () => {
      var subject = "Let's Connect!";
      var body = "Hello,I'm [Your Name]!,would love to have chat with you!";
      window.location.href = `mailto:contact@thesoilstory.in?subject=${subject}&body=${body}`;
    };
  return (
    <>
      <Header text="white" />
      <div className="flex justify-center w-full mt-5">
        <div
          style={{ backgroundImage: `url(${img1})` }}
          className="p-10 bg-no-repeat w-[80%] "
        >
          <center>
            <h2
              style={{ fontFamily: "Caveat" }}
              className="text-white text-4xl mt-10"
            >
              Contact Us
            </h2>
            <h1 className="font-semibold text-5xl mt-2 mb-6 text-white">
              Get in Touch
            </h1>
            <p className="w-[35%] text-white text-base mb-30 h-[125px]">
              We&apos;d love to hear from you! Whether you have a question, need
              assistance, or want to share your feedback, our team is here to
              help. Reach out to us using any of the methods below.
            </p>
          </center>
        </div>
      </div>
      <div className="flex gap-20 justify-center mt-10 mb-20">
        <div
          className="text-center w-[250px] h-[250px] border hover:cursor-pointer "
          onClick={SendEmail}
        >
          <h3 className="mt-5 mb-8 text-xl font-semibold">Email</h3>
          <button className=" hover:bg-[#4BAF47] text-[#4BAF47]  hover:text-white font-bold rounded-full p-3 border ">
            <MdEmail size="40px" />
          </button>
          <h4 className=" mt-10">contact@thesoilstory.in</h4>
        </div>
        <div className="text-center w-[250px] h-[250px] border ">
          <h3 className="mt-5 mb-8 text-xl font-semibold">Phone</h3>
          <button className=" hover:bg-[#4BAF47] text-[#4BAF47]  hover:text-white font-bold rounded-full p-3 border">
            <FaPhone size="40px" />
          </button>
          <h4 className="mt-10">
            +44 7404306995 (UK),
            <br />
            +91 9971396893 (India)
          </h4>
        </div>
        <div className="text-center w-[250px] h-[250px] border ">
          <h3 className="mt-5 mb-4 text-xl font-semibold">Social Media</h3>
          <div className="px-7">
            <div
              className="flex justify-start items-center gap-5 mb-5 hover:cursor-pointer"
              onClick={() =>
                window.open("https://www.instagram.com/thesoilstory.in/")
              }
            >
              <button className=" hover:bg-[#4BAF47] text-[#4BAF47]  hover:text-white font-bold rounded-full p-2 border">
                <FaInstagram size="20px" />
              </button>
              <h4 className="text-xs text-start">
                <span className="text-bold ">Instagram</span>
                <br />
                @thesoilstory.in
              </h4>
            </div>
            <div
              className="flex justify-start items-center gap-5 mb-5 hover:cursor-pointer"
              onClick={() =>
                window.open("https://www.linkedin.com/company/thesoilstory/")
              }
            >
              <button className=" hover:bg-[#4BAF47] text-[#4BAF47]  hover:text-white font-bold rounded-full p-2 border">
                <FaLinkedin size="20px" />
              </button>
              <h4 className="text-xs text-start">
                <span className="text-bold ">LinkedIn</span>
                <br />
                The Soil Story
              </h4>
            </div>
            <div
              className="flex justify-start items-center gap-5 mb-5 hover:cursor-pointer"
              onClick={() =>
                window.open(
                  "https://youtube.com/@thesoilstory?si=MUM4eXeoDNAE6bri"
                )
              }
            >
              <button className=" hover:bg-[#4BAF47] text-[#4BAF47]  hover:text-white font-bold rounded-full p-2 border">
                <FaYoutube size="20px" />
              </button>
              <h4 className="text-xs text-start">
                <span className="text-bold ">YouTube</span>
                <br />
                @thesoilstory.in
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Contactus;
