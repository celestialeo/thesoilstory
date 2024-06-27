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
        <motion.div
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "linear" }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 0 },
          }}
          initial="hidden"
          animate={{ opacity: 1 }}
        >
          <h2
            className="text-7xl text-white font-semibold mb-5"
            style={{ fontFamily: "Caveat" }}
          >
            Join Us on This Journey
          </h2>
          <p className="text-white mb-8 max-w-2xl">
            We invite you to be a part of The Soil Story community. Whether
            you’re looking to escape the city, reconnect with nature, or learn
            something new, our platform offers something for everyone. Explore
            our experiences, meet our farmers, and discover the endless
            possibilities that rural India has to offer.
          </p>
          <center>
            <JoinWaitlist btncolor="#FAB917" />
          </center>
        </motion.div>
      </div>
      {window.location.pathname === "/join-waitlist" ? <Navbar /> : ""}
    </>
  );
};

export default JoinUsCTA;
