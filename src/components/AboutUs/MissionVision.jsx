import missionImage from '../../assets/OurMission.png'; 
import visionImage from '../../assets/OurVision.png'; 

const MissionVision = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start py-20 bg-white">
      <div className="lg:w-1/2 px-8 mb-10 lg:mb-0">
        <h2 className="text-4xl font-bold mb-4 text-green-600">Our Mission</h2>
        <img src={missionImage} alt="Our Mission" className="rounded-lg shadow-lg w-full mb-4" />
        <p className="text-lg">
          Our mission is simple yet profound: to connect tourists with authentic agricultural experiences, enhance local economies, and help farmers realize their full potential. 
          We aim to provide a platform that allows you to immerse yourself in the charm of rural life, understand sustainable farming practices, and create unforgettable memories while supporting the hardworking farmers who make it all possible.

        </p>
      </div>
      <div className="lg:w-1/2 px-8">
        <h2 className="text-4xl font-bold mb-4 text-green-600">Our Vision</h2>
        <img src={visionImage} alt="Our Vision" className="rounded-lg shadow-lg w-full mb-4" />
        <p className="text-lg">
          We envision a world where urban and rural communities coexist harmoniously, where the urban population appreciates and values the efforts of our farmers, and where farmers can thrive economically through diversified income streams. 
          Our goal is to become the leading global platform for agro-tourism and bring humankind back to their roots.
        </p>
      </div>
    </div>
  );
};

export default MissionVision;