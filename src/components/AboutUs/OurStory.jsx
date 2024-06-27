import leaf from "../../assets/leaf.png";
import about0 from "../../assets/aboutus0.png";
import { motion } from "framer-motion";

function OurStory() {
  return (
    <>
      <motion.div
        className="flex justify-center items-center"
        whileInView="visible"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "linear" }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 0 },
        }}
      >
        <h1 className="text-4xl font-semibold">
          Our &lsquo;&lsquo;Soil Story&rsquo;&rsquo;
        </h1>
        <img src={leaf} alt="laef" className="w-20" />
      </motion.div>
      <motion.center
        whileInView="visible"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "linear" }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 0 },
        }}
      >
        <p className="w-[70%] mb-10">
          At The Soil Story, we believe in the magic of the countryside and the
          transformative power of authentic experiences. Our mission is to
          bridge the gap between urban dwellers and rural communities, fostering
          a deeper appreciation for the agricultural roots that sustain us all.
          Whether you&quot;re a city dweller yearning for a breath of fresh air
          or a curious traveller seeking unique experiences, we invite you to
          explore the enchanting world of agrotourism with us.
        </p>
        <img src={about0} alt="bg" />
      </motion.center>
    </>
  );
}

export default OurStory;
