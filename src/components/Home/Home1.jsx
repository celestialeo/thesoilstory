import { useState } from "react";
import img1 from "../../assets/homeImg1.png";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { FaLink } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";

function Home1() {
  // const [formData, setFormData] = useState({
  //   email: "",
  // });
  const [Email, setEmail] = useState("");
  // const handleChange = (e) => {
  //   const { email, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [email]: value,
  //   }));
  // };
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${img1})` }}
        className="bg-no-repeat bg-cover"
      >
        <Header />
        <motion.div
          className="text-center p-20 h-[100vh]"
          whileInView="visible"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "linear" }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 0 },
          }}
        >
          <h1 className="font-extrabold text-6xl text-white mt-32">
            Reset your Weekends
          </h1>
          <h1 className="font-semibold text-6xl text-white mt-4">
            Escape to Rural Bliss!
          </h1>
          <h2
            className="text-5xl text-white mt-6"
            style={{ fontFamily: "Caveat" }}
          >
            Launching Soon!
          </h2>
          <center>
            <form onSubmit={handleSubmit}>
              <div className="bg-transparent rounded-full w-[450px] py-1 px-2 flex justify-between mt-5 ps-5 border-white border-2">
                <input
                  placeholder=" Email*"
                  className=" rounded-full p-1 bg-transparent text-white border-0 focus:outline-none"
                  type="email"
                  id="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="py-2 px-3 rounded-full text-black bg-white text-sm font-semibold"
                  type="submit"
                >
                  Join Waitlist &gt;
                </button>
              </div>
            </form>
          </center>
        </motion.div>
      </div>
      {isDone === true ? (
        <>
          <div className="popup-main">
            <div className="bg-white text-center p-10 rounded-3xl popup-box w-max">
              <div
                className="flex justify-end"
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
                <div className="glassEffect w-max p-2 shadow-inner rounded-full">
                  <SocialIcon
                    network="whatsapp"
                    style={{ height: 40, width: 40 }}
                  />
                </div>
                <div className="glassEffect w-max p-2 shadow-inner rounded-full">
                  <SocialIcon
                    network="linkedin"
                    style={{ height: 40, width: 40 }}
                  />{" "}
                </div>
                <div className="glassEffect w-max p-2 shadow-inner rounded-full">
                  <SocialIcon network="x" style={{ height: 40, width: 40 }} />
                </div>
                <div className="glassEffect w-max p-2 shadow-inner rounded-full">
                  <FaLink color="black" size={"40"} />
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

export default Home1;
