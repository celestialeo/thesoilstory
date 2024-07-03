/* eslint-disable react/prop-types */
import avatar from "../../assets/karan.jpg";
import avatar2 from "../../assets/Faith.jpg";
import avatar3 from "../../assets/Marie.png";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
const getTouches = (evt) => {
  return evt.touches || evt.originalEvent.touches; // browser API
};

const Home3 = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    enableSwipe: true,
    config: config.gentle,
    xDown: null,
    yDown: null,
  });

  const handleNext = () => {
    setState((prevState) => ({
      ...prevState,
      goToSlide: prevState.goToSlide + 1,
    }));
  };

  const handlePrevious = () => {
    setState((prevState) => ({
      ...prevState,
      goToSlide: prevState.goToSlide - 1,
    }));
  };
  const testimonials = [
    {
      name: "Karan Surana",
      age: 23,
      text: "I've always enjoyed my time at family farms and plantations, whether in Kerala's tea fields or Goa's cashew groves. The idea of The Soil Story excites me because it offers a perfect blend of nature, relaxation, and learning. Having an online platform to access such experiences would be amazing and make weekend getaways so much easier and more enjoyable.",
      image: avatar, // Replace with actual image URL
    },
    {
      name: "Faith Ibrahim",
      age: 25,
      text: "I'm thrilled about the launch of The Soil Story, which matches my passion for agritourism. My family and I have been fortunate to experience various agricultural activities, from harvesting crops to learning sustainable farming practices. The Soil Story offers just that – nature and fun, all in one place!",
      image: avatar2, // Replace with actual image URL
    },
    {
      name: "Marie Munzi",
      age: 24,
      text: "My visits to farms have always been magical, from enjoying picnics in parks to dinners with friends. My childhood visit to a farm in Pune left a lasting impression. I'd love an online platform like The Soil Story to easily access these enriching experiences and connect more deeply with nature",
      image: avatar3, // Replace with actual image URL
    },
  ];
  const TestimonialCard = ({ testimonial, id }) => (
    <div
      className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg text-center w-[500px] mb-10 hover:cursor-pointer"
      onClick={() => setState((prevState) => ({ ...prevState, goToSlide: id }))}
    >
      <div className="testimonial mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-bold">
          {testimonial.name},{" "}
          <span className="text-gray-500 text-sm">Age {testimonial.age}</span>
        </h2>
        <p className="text-gray-700 mt-4 text-start">
          &quot;{testimonial.text}&quot;
        </p>
      </div>
    </div>
  );

  const slides = testimonials.map((testimonial, index) => ({
    key: index,
    content: <TestimonialCard testimonial={testimonial} id={index} />,
  }));

  const handleTouchStart = (evt) => {
    if (!state.enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    setState((prevState) => ({
      ...prevState,
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY,
    }));
  };

  const handleTouchMove = (evt) => {
    if (!state.enableSwipe || (!state.xDown && !state.yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = state.xDown - xUp;
    let yDiff = state.yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        // left swipe
        setState((prevState) => ({
          ...prevState,
          goToSlide: prevState.goToSlide + 1,
          xDown: null,
          yDown: null,
        }));
      } else {
        // right swipe
        setState((prevState) => ({
          ...prevState,
          goToSlide: prevState.goToSlide - 1,
          xDown: null,
          yDown: null,
        }));
      }
    }
  };
  return (
    <>
      <center className="scale-50 md:scale-100 lg:scale-100">
        <h2
          style={{ fontFamily: "Caveat" }}
          className="text-[#4BAF47] text-4xl"
        >
          Testimonials
        </h2>
        <h1 className="font-semibold text-5xl mt-2">
          What they Say about Agro Tourism!
        </h1>
        <div
          className="mx-auto w-full max-w-6xl my-60"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <Carousel
            slides={slides}
            goToSlide={state.goToSlide}
            showNavigation={false}
            offsetRadius={2}
            animationConfig={config.gentle}
            enableSwipe={true}
          />
        </div>
      </center>
      <div className="flex justify-center gap-6 w-full mt-[-50px] md:mt-[450px] lg:mt-[450px] z-10">
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
