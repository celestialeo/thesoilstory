import { useState } from "react";
import img1 from "../../assets/homeImg1.png";
import Header from "../Header/Header";

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
        alert("You have been added to Waitlist successfully!");
        // setFormData({ email: "" });
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
        <div className="text-center p-20 h-[100vh]">
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
        </div>
      </div>
    </>
  );
}

export default Home1;
