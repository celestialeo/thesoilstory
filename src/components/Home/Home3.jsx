import avatar from "../../assets/Avatar.png"; // Ensure this is set up for any custom global styles
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
const testimonials = [
  {
    name: "Karan Surana",
    age: 23,
    text: "I've always enjoyed my time at family farms and plantations, whether in Kerala's tea fields or Goa's cashew groves. The idea of The Soil Story excites me because it offers a perfect blend of nature, relaxation, and learning. Having an online platform to access such experiences would be amazing and make weekend getaways so much easier and more enjoyable.",
    image: avatar, // Replace with actual image URL
  },
  {
    name: "Faith Rosales",
    age: 25,
    text: "I'm thrilled about the launch of The Soil Story, which matches my passion for agritourism. My family and I have been fortunate to experience various agricultural activities, from harvesting crops to learning sustainable farming practices. The Soil Story offers just that – nature and fun, all in one place!",
    image: avatar, // Replace with actual image URL
  },
];

const Home3 = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <>
      <center>
        <h2
          style={{ fontFamily: "Caveat" }}
          className="text-[#4BAF47] text-4xl"
        >
          Testimonials
        </h2>
        <h1 className="font-semibold text-5xl mt-2 mb-10">
          What they Say about Agro Tourism!
        </h1>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg text-center w-[500px] mb-10">
          <div className="testimonial mb-6">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold">
              {testimonials[current].name},{" "}
              <span className="text-gray-500 text-sm">
                Age {testimonials[current].age}
              </span>
            </h2>
            <p className="text-gray-700 mt-4 text-start">
              &quot;{testimonials[current].text}&quot;
            </p>
          </div>
        </div>
      </center>
      <div className="flex justify-center gap-6 w-full">
        <button
          className=" hover:bg-gray-400 text-gray-800 font-bold rounded-full p-1 border"
          onClick={handlePrevious}
        >
          <GoArrowLeft />
        </button>
        <button
          className=" hover:bg-gray-400 text-gray-800 font-bold rounded-full p-1 border"
          onClick={handleNext}
        >
          <GoArrowRight />
        </button>
      </div>
    </>
  );
};

export default Home3;
