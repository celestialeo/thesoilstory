/* eslint-disable react/prop-types */

import { useState } from "react";

function JoinWaitlist(props) {
  const [Email, setEmail] = useState("");

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
    <form onSubmit={handleSubmit}>
      <div
        className={
          props.border === true
            ? "bg-white rounded-full w-[350px] py-2 px-2 flex justify-between mt-5 ps-5 border-gray-300 border-2"
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
  );
}

export default JoinWaitlist;
