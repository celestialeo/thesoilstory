import { useNavigate } from "react-router-dom";
import home2 from "../../assets/HomePicturescollage.png";
import { motion } from "framer-motion";

function Home2() {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    window.scrollTo(0, 0);

    navigate(link);
  };
  return (
    <div className="py-10 px-20 flex justify-center">
      <motion.div
        className="w-[50%]"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -150 },
        }}
      >
        <h2
          style={{ fontFamily: "Caveat" }}
          className="text-[#4BAF47] text-4xl"
        >
          About Us
        </h2>
        <h1 className="font-semibold text-5xl mt-2">Get to know us</h1>
        <p className="w-[70%] mt-7">
          Welcome to The Soil Story, where your weekends get a rustic twist!
          We&apos;re all about swapping city chaos for farm-fresh fun. From
          milking cows to picking strawberries, we connect you with real farm
          adventures. Join us to dig into nature, embrace the countryside, and
          create unforgettable memories. Let’s make farm life your new favourite
          story! 🌾🐄🌻
        </p>
        <button
          className="px-4 py-2 text-sm bg-[#4BAF47] text-white rounded-md mt-6"
          onClick={() => navigateTo("/the-soil-story")}
        >
          Discover More
        </button>
      </motion.div>
      <motion.div
        className="w-[40%] text-start"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 150 },
        }}
      >
        <img src={home2} alt="home2Image" />
      </motion.div>
    </div>
  );
}

export default Home2;
