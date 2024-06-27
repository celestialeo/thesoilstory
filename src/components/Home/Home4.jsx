import img1 from "../../assets/Group.png";
import img2 from "../../assets/Group2.png";
import img3 from "../../assets/Group3.png";
import { motion } from "framer-motion";

function Home4() {
  const PartnerImg = [img1, img2, img3];
  return (
    <div className="mb-20">
      <h1 className="font-semibold text-5xl mt-20 mb-20 text-center ">
        Our Partners
      </h1>
      <motion.div
        className="flex justify-between px-20 items-center "
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, ease: "linear" }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 0 },
        }}
      >
        {PartnerImg.map((img, index) => {
          return (
            <>
              <img src={img} key={index} className="h-min" />
            </>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Home4;
