/* eslint-disable react/prop-types */
import bgimg from "../../assets/aboutusbg.png";
import { motion } from "framer-motion";

const services = [
  {
    title: "Authentic Farm Experiences",
    description:
      "Imagine waking up to the sound of roosters crowing, milking cows at dawn, or picking fresh strawberries under the warm sun. The Soil Story offers a variety of hands-on farm activities that let you experience the joys and challenges of rural life. Our curated experiences are designed to provide an educational and fun escape from the urban hustle.",
    icon: "🧑‍🌾", // Example icon, replace with actual icon or image as needed
  },
  {
    title: "Sustainable and Eco-Friendly Tourism",
    description:
      "We are committed to promoting sustainable and eco-friendly tourism. All our partner farms adhere to green farming practices that preserve the environment. We give you the chance to learn about these practices firsthand, ultimately supporting projects that ensure the well-being of our planet for future generations.",
    icon: "🌱", // Example icon, replace with actual icon or image as needed
  },
  {
    title: "Cultural Immersion",
    description:
      "Dive deep into the rich cultural heritage of India's rural areas. Our experiences include traditional cooking classes, local music and dance performances, and the opportunity to participate in seasonal festivals. Discover the vibrant traditions that make each region unique and create lasting memories through immersive cultural experiences.",
    icon: "🎭", // Example icon, replace with actual icon or image as needed
  },
  {
    title: "Relaxation and Rejuvenation",
    description:
      "Escape the urban grind and find tranquility in the peaceful countryside. Enjoy serene nature walks, unwind in picturesque landscapes, and reconnect with nature. The Soil Story offers the perfect retreat to relax, recharge, and rejuvenate your mind and body.",
    icon: "🧘‍♀️", // Example icon, replace with actual icon or image as needed
  },
  {
    title: "Educational Programs",
    description:
      "Our educational workshops and guided tours are perfect for families, school groups, and anyone interested in learning more about agriculture. From organic farming techniques to beekeeping and cheese making, our programs are designed to be informative and engaging. Expand your knowledge and appreciation for the hard work that goes into sustainable farming.",
    icon: "📚", // Example icon, replace with actual icon or image as needed
  },
];

const WhatWeOffer = () => (
  <div className="">
    <div
      style={{ backgroundImage: `url(${bgimg})` }}
      className="bg-no-repeat bg-cover p-16 mt-32 "
    >
      <div className="h-[100vh] ">
        <center>
          <h3 className="text-3xl text-white" style={{ fontFamily: "Caveat" }}>
            Our services
          </h3>
          <h1 className="text-5xl font-semibold text-white mb-20">
            What we offer
          </h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: "linear" }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.7 },
            }}
          >
            <div className="mt-10 flex flex-wrap gap-8 justify-center h-[70vh] md:h-auto lg:h-auto overflow-y-scroll md:overflow-hidden lg:overflow-hidden">
              {services.map((service, idx) => (
                <div
                  className="p-6 px-10 bg-white shadow-lg rounded-lg w-full sm:w-1/2 lg:w-1/4"
                  key={idx}
                >
                  <div className="text-3xl">{service.icon}</div>
                  <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </center>
      </div>
    </div>
  </div>
);

export default WhatWeOffer;
