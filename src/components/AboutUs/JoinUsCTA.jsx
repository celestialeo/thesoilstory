import backgroundImage from "../../assets/Property1Active.png";
import JoinWaitlist from "../Utils/JoinWaitlist";

const JoinUsCTA = () => {
  return (
    <div
      className="bg-cover bg-center flex flex-col items-center text-center py-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2
        className="text-7xl text-white font-semibold mb-5"
        style={{ fontFamily: "Caveat" }}
      >
        Join Us on This Journey
      </h2>
      <p className="text-white mb-8 max-w-2xl">
        We invite you to be a part of The Soil Story community. Whether you’re
        looking to escape the city, reconnect with nature, or learn something
        new, our platform offers something for everyone. Explore our
        experiences, meet our farmers, and discover the endless possibilities
        that rural India has to offer.
      </p>
      <JoinWaitlist btncolor="#FAB917" />
    </div>
  );
};

export default JoinUsCTA;
