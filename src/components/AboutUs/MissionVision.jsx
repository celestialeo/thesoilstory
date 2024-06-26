import missionImage from "../../assets/OurMission.png";
import visionImage from "../../assets/OurVision.png";

const MissionVision = () => {
  return (
    <>
      <div className="px-32 py-32 ">
        <div className="flex gap-20 items-start">
          <img
            src={visionImage}
            alt="Our Mission"
            className="rounded-xl  w-full mb-4"
          />
          <div>
            <h2
              className="text-5xl text-[#4BAF47] font-semibold"
              style={{ fontFamily: "Caveat" }}
            >
              Our Mission
            </h2>
            <p className="text-m w-[80%] mt-6">
              Our mission is simple yet profound: to connect tourists with
              authentic agricultural experiences, enhance local economies, and
              help farmers realize their full potential. We aim to provide a
              platform that allows you to immerse yourself in the charm of rural
              life, understand sustainable farming practices, and create
              unforgettable memories while supporting the hardworking farmers
              who make it all possible.
            </p>
          </div>
        </div>
        <div className="flex gap-20 items-start mt-24">
          <div>
            <h2
              className="text-5xl text-[#4BAF47] font-semibold"
              style={{ fontFamily: "Caveat" }}
            >
              Our Vision
            </h2>
            <p className="text-m w-[80%] mt-6">
              We envision a world where urban and rural communities coexist
              harmoniously, where the urban population appreciates and values
              the efforts of our farmers, and where farmers can thrive
              economically through diversified income streams. Our goal is to
              become the leading global platform for agro-tourism and bring
              humankind back to their roots.
            </p>
          </div>
          <img
            src={missionImage}
            alt="Our Vision"
            className="rounded-xl w-full mb-4"
          />
        </div>
      </div>
    </>
  );
};

export default MissionVision;
