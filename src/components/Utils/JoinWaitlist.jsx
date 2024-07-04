/* eslint-disable react/prop-types */

import { useState } from "react";
import logo from "../../assets/logo.png";
import { SocialIcon } from "react-social-icons";
import { FaLink } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
function JoinWaitlist(props) {
  const [Email, setEmail] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [copyStatus, setCopyStatus] = useState("Click to Copy!");
  const SendEmail = () => {
    var subject = "Let's Connect!";
    var body = "Hello,I'm [Your Name]!,would love to have chat with you!";
    window.location.href = `mailto:contact@thesoilstory.in?subject=${subject}&body=${body}`;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Email === "") {
      alert("Please Add Email!");
      return;
    }
    const formUrl =
      "https://docs.google.com/forms/u/1/d/e/1FAIpQLSd9nF7rSOwEpXqvL9SkkKDFgKEJkZSJtlVDwP4OdBQ7mnA9gQ/formResponse";
    const data = new FormData();

    data.append("entry.937417346", Email); // Replace with actual field name

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: data,
    })
      .then(() => {
        // alert("You have been added to Waitlist successfully!");
        // setFormData({ email: "" });
        setIsDone(true);
        // document.body.style = `opacity:0.4`;
        // document.getElementsByClassName("popup-main").style = `opacity:1`;
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className={
            props.border === true
              ? "bg-white rounded-full w-[350px] py-2 px-2 flex justify-between mt-5 ps-5 border-gray-300 border-2 "
              : "bg-white rounded-full w-[350px] py-2 px-2 flex justify-between mt-5 ps-5 "
          }
        >
          <input
            type="email"
            id="email"
            placeholder="Your Email*"
            className="rounded-full p-1 focus:outline-none text-black"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="py-2 px-3 rounded-full text-black"
            style={{ backgroundColor: `${props.btncolor}` }}
            type="submit"
          >
            Join Waitlist
          </button>
        </div>
      </form>
      {isDone === true ? (
        <>
          <div className="popup-main ">
            <div className="bg-white text-center p-10 rounded-3xl popup-box w-max">
              <div
                className="flex justify-end hover:cursor-pointer"
                onClick={() => setIsDone(false)}
              >
                <IoCloseCircleOutline size={30} color="black" />
              </div>
              <center>
                <img src={logo} />
              </center>
              <h1
                className="text-[#714015] text-4xl font-bold"
                style={{ fontFamily: "Caveat" }}
              >
                Yay, you’re on the waitlist!
              </h1>

              <p className="text-black">
                Thank you for showing interest in The Soil Story. Skip ahead in
                line by referring friends using this link below
              </p>
              <p>Share with friends...</p>
              <div className="flex justify-center gap-2 mt-5">
                <div className="glassEffect w-max p-2 shadow-inner rounded-full hover:cursor-pointer">
                  <SocialIcon
                    network="email"
                    style={{ height: 40, width: 40 }}
                    onClick={SendEmail}
                  />
                </div>
                <div className="glassEffect w-max p-2 shadow-inner rounded-full hover:cursor-pointer">
                  <SocialIcon
                    network="linkedin"
                    style={{ height: 40, width: 40 }}
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/thesoilstory/"
                      )
                    }
                  />{" "}
                </div>
                <div className="glassEffect w-max p-2 shadow-inner rounded-full hover:cursor-pointer">
                  <SocialIcon
                    network="instagram"
                    style={{ height: 40, width: 40 }}
                    onClick={() =>
                      window.open("https://www.instagram.com/thesoilstory.in/")
                    }
                  />
                </div>
                <div className="glassEffect w-max p-2 shadow-inner rounded-full">
                  <div className="group relative flex justify-center">
                    <button className="rounded text-sm text-white shadow-sm">
                      <FaLink
                        color="black"
                        size={"40"}
                        onClick={() => {
                          navigator.clipboard.writeText(
                            "https://www.thesoilstory.in/"
                          );
                          setCopyStatus("Copied!");
                        }}
                      />
                    </button>
                    <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                      {copyStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default JoinWaitlist;
