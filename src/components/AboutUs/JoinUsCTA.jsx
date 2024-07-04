import backgroundImage from "../../assets/Property1Active.png";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import JoinWaitlist from "../Utils/JoinWaitlist";
import { motion } from "framer-motion";

const JoinUsCTA = () => {
  return (
    <>
      {window.location.pathname === "/join-waitlist" ? (
        <Header text={"white"} />
      ) : (
        ""
      )}
      <div
        className="bg-cover bg-center flex flex-col items-center text-center py-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div>
          <motion.h2
            className="md:text-7xl lg:text-7xl text-2xl  text-white font-semibold mb-5"
            style={{ fontFamily: "Caveat" }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "linear" }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -50 },
            }}
          >
            Join Us on This Journey
          </motion.h2>
          <motion.p
            className="text-white mb-8 max-w-2xl text-xs md:text-base lg:text-base px-5 md:px-auto lg:px-auto"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "linear" }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -50 },
            }}
          >
            We invite you to be a part of The Soil Story community. Whether
            you’re looking to escape the city, reconnect with nature, or learn
            something new, our platform offers something for everyone. Explore
            our experiences, meet our farmers, and discover the endless
            possibilities that rural India has to offer.
          </motion.p>
          <motion.center
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: "linear" }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <JoinWaitlist btncolor="#FAB917" />
          </motion.center>
        </div>
      </div>
      {window.location.pathname === "/join-waitlist" ? <Navbar /> : ""}
    </>
  );
};

export default JoinUsCTA;
