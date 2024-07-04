import img1 from "../../assets/Partnerwithus.png";
import img2 from "../../assets/support.png";
import img3 from "../../assets/Illustration.png";
import Header from "../Header/Header";
import { PiPenNibStraight } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";

function Joinus() {
  const data = [
    {
      title: "Increased Revenue",
      description:
        "Diversify your income by hosting tourists on your farm. Agrotourism offers a new revenue stream that complements your existing agricultural activities.",
      transition: 0,
    },
    {
      title: "Community Support",
      description:
        "Be a part of a network that values and promotes sustainable farming practices. Collaborate with other like-minded farmers and organizations to enhance your impact.",
      transition: 0.4,
    },
    {
      title: "Marketing Assistance",
      description:
        "Gain visibility through our platform. We help promote your farm and experiences to a wide audience of urban tourists eager to connect with nature.",
      transition: 0.6,
    },
    {
      title: "Capacity Building",
      description:
        "Access resources and training to improve your hospitality and tourism services. Learn best practices in agrotourism to offer unforgettable experiences to your visitors.",
      transition: 0.8,
    },
    {
      title: "Direct Market Access",
      description:
        "Sell your farm products directly to visitors, enhancing your profit margins and building a loyal customer base.",
      transition: 1,
    },
    {
      title: "Corporate Social Responsibility",
      description:
        "We actively collaborate with corporations to improve the state of agriculture through their Corporate Social Responsibility initiatives and promote agrotourism in India.",
      transition: 1.2,
    },
  ];
  const steps = [
    {
      number: 1,
      title: "Fill Out the Application",
      description:
        "Provide us with details about your farm and the experiences you offer. This helps us understand your unique offerings and how they align with our mission.",
      transition: 0,
    },
    {
      number: 2,
      title: "Get Vetted",
      description:
        "Our team will visit your farm to ensure it meets our quality and sustainability standards. This process helps us maintain high standards for our visitors.",
      transition: 0.5,
    },
    {
      number: 3,
      title: "Start Hosting",
      description:
        "Once approved, you can start hosting visitors and sharing your farm life with them. We provide ongoing support to help you succeed.",
      transition: 1,
    },
  ];

  return (
    <>
      <Header text={"white"} />
      <div className="md:px-20 lg:md:px-20 px-5 py-10 w-full flex justify-center">
        <div
          style={{ backgroundImage: `url(${img1})` }}
          className="bg-no-repeat bg-cover flex md:px-20 lg:md:px-20 px-10 py-16 w-[90%] rounded-3xl"
        >
          <div className="flex-row flex flex-wrap justify-start p-0 text-white gap-7">
            <h1 className="text-4xl font-bold">How to become a Partner</h1>
            <p className="md:w-[70%] lg:w-[70%]">
              The Soil Story is on a mission to bridge the gap between urban and
              rural communities by promoting sustainable and authentic farm
              experiences. We are looking for passionate farmers and
              organizations to join us as partners in this exciting journey.
              Together, we can create unique, enriching experiences that not
              only benefit visitors but also provide valuable support to rural
              communities
            </p>
            <h3 style={{ fontFamily: "Caveat" }} className="text-3xl">
              Join Us in Promoting Sustainable Agrotourism...
            </h3>
          </div>
          <motion.img
            src={img2}
            alt="img2"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, ease: "linear" }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            className="hidden md:block lg:block"
          />
        </div>
      </div>
      <div>
        <h1 className="text-center text-4xl font-semibold my-20">
          Why Partner with us?
        </h1>
        <div className="mx-auto flex flex-wrap flex-col md:flex-row lg:flex-row justify-around md:px-40 lg:md:px-40 px-10 ">
          {data.map((x, idx) => {
            {
              return (
                <>
                  <motion.div
                    className="w-[33%] mb-10"
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    transition={{
                      duration: `1.2`,
                      ease: "linear",
                      delay: `${x.transition}`,
                    }}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 0 },
                    }}
                    viewport={{ once: true }}
                  >
                    <div
                      id={idx}
                      className="card border-t-2 border-gray-100 rounded-lg p-4 m-2  flex-0 w-[350px]"
                    >
                      <PiPenNibStraight
                        color="#4BAF47"
                        size={"30px"}
                        className="my-6"
                      />
                      <h3 className="font-bold mb-4">{x?.title}</h3>
                      <p className="text-gray-500">{x?.description}</p>
                    </div>
                  </motion.div>
                </>
              );
            }
          })}
        </div>
      </div>

      <h1 className="text-4xl font-bold my-14 text-center">
        How to Become a Partner
      </h1>
      <div className="container mx-auto p-4 md:px-48 lg:md:px-48 px-10">
        <div className="relative flex justify-around items-start mt-10">
          {steps.map((step) => (
            <>
              {step.number === 1 ? (
                ""
              ) : (
                <motion.hr
                  className="w-full h-[1px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700"
                  initial="hidden"
                  whileInView="visible"
                  transition={{
                    duration: `1.2`,
                    ease: "linear",
                    delay: `${step.transition}`,
                  }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: 0 },
                  }}
                  viewport={{ once: true }}
                ></motion.hr>
              )}
              <motion.div
                key={step.number}
                className="flex flex-col items-center z-10"
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: `1.2`,
                  ease: "linear",
                  delay: `${step.transition}`,
                }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 0 },
                }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center items-center h-12 w-12 bg-green-500 rounded-full text-white text-xl font-bold">
                  {step.number}
                </div>
                <h2 className="mt-4 text-xl font-semibold text-center">
                  {step.title}
                </h2>
                <p className="mt-2 text-center text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            </>
          ))}
        </div>
      </div>

      <div className="mt-56 flex md:px-32 lg:md:px-32 px-5 relative items-start">
        <motion.div
          className="pb-32"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "linear" }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
        >
          <h1 className="text-4xl font-bold mb-10">Register Your Interest</h1>
          <p className="md:w-[65%] lg:w-[65%] w-full mb-10">
            Ready to join The Soil Story family? Click on the link given below
            and fill out the form below to express your interest in becoming a
            partner. Our team will review your application and get in touch with
            you to discuss the next steps. We look forward to partnering with
            you to promote sustainable agrotourism and create unforgettable
            experiences for our visitors. Thank you for your interest in The
            Soil Story!
          </p>
          <button
            className="flex gap-5 rounded-md bg-[#1D1D1D] text-white p-4 justify-center items-center"
            onClick={() => window.open("https://forms.gle/xvedy8S7DvvVnuR37")}
          >
            Fill Registration form <GoArrowRight />
          </button>
        </motion.div>
        <motion.div
          className="absolute bottom-0 right-0 hidden md:block lg:block"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "linear" }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
        >
          <img src={img3} alt="img" className="" />
        </motion.div>
      </div>
      <Navbar />
    </>
  );
}

export default Joinus;
