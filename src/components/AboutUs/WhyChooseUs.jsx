import backgroundImage from "../../assets/aboutus3.png";
import { IoCheckmark } from "react-icons/io5";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const Data = [
    {
      title: "Sustainable Practices",
      desc: "We offer a user-friendly platform where you can easily browse, book, and manage your agro-tourism experiences. Our seamless interface ensures a hassle-free booking process, allowing you to focus on enjoying your rural adventure. Say goodbye to complicated bookings and hello to effortless planning",
      transition: 0.4,
    },
    {
      title: "Community-Focused",
      desc: "The Soil Story is built with the community in mind. We work closely with local farmers to ensure that our offerings are genuine and beneficial to them. Your participation directly supports the livelihoods of small and medium-sized farmers across India. Together, we can create a thriving ecosystem that benefits everyone involved.",
      transition: 0.6,
    },
    {
      title: "Commitment to Quality",
      desc: "We are dedicated to providing high-quality, memorable experiences. Our team carefully selects and vets each farm and activity to ensure they meet our standards of excellence. Trust in The Soil Story to deliver exceptional and unforgettable agrotourism adventures.",
      transition: 0.8,
    },
  ];

  return (
    <>
      <div className="flex  mb-20 px-5 py-5 md:px-32  lg:px-32 ">
        <div className=" w-[90%]">
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.6 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -150 },
            }}
          >
            Why Choose <span className="text-[#2FB95D]">Us?</span>
          </motion.h2>
          {Data.map((info, idx) => {
            return (
              <>
                <motion.div
                  className="flex gap-5 mb-8 items-start"
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  transition={{
                    duration: `1`,
                    ease: "linear",
                    delay: `${info.transition}`,
                  }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: 0 },
                  }}
                >
                  <div className="bg-[#2FB95D] p-2 rounded-lg">
                    <IoCheckmark color="white" size={30} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-2xl lg:text-2xl font-bold">
                      {info.title}
                    </h3>
                    <p className="text-xs md:text-lg lg:text-lg mt-2  w-[90%]">
                      {info.desc}
                    </p>
                  </div>
                </motion.div>
              </>
            );
          })}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: "linear" }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.5 },
          }}
        >
          <img
            src={backgroundImage}
            alt="Why Choose Us"
            className="rounded-lg shadow-lg w-full hidden md:block lg:block"
          />
        </motion.div>
      </div>
    </>
  );
};

export default WhyChooseUs;
