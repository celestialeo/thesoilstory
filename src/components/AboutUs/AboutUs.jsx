import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import JoinUsCTA from "./JoinUsCTA";
import MissionVision from "./MissionVision";
import OurStory from "./OurStory";
import WhatWeOffer from "./WhatWeOffer";
import WhyChooseUs from "./WhyChooseUs";

function AboutUs() {
  return (
    <>
      <Header text={"white"} />
      <OurStory />
      <WhatWeOffer />
      <MissionVision />
      <WhyChooseUs />
      <JoinUsCTA />
      <Navbar />
    </>
  );
}

export default AboutUs;
