import Header from "../Header/Header";
import img3 from "../../assets/Pavani.png";
import img2 from "../../assets/Yashika.png";
import img1 from "../../assets/Sankar.png";

import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Navbar from "../Navbar/Navbar";
import './src/App.css'; 

function Team() {
  const TeamData = [
    {
      name: "Sankar Venkataraman Murali",
      shortName: "Sankar V Murali",
      tag: "Founder & Chief Executive Officer (CEO)",
      shortTag: "Founder & CEO",
      about:
        "Sankar is the visionary behind The Soil Story. With a deep-rooted passion for sustainable agriculture and community empowerment, he founded The Soil Story to connect urban populations with the rural heart of India. Sankar holds an MSc in Innovation, Entrepreneurship, and Management from Imperial College Business School. His extensive experience in agricultural projects, including the successful Project Zaraat, has directly influenced over 3000 farmers by implementing sustainable and economically viable farming solutions. Sankar's leadership and dedication to sustainable development are the driving forces behind The Soil Story's mission.",
      image: img1,
    },
    {
      name: "Yashika Chandel",
      shortName: "Yashika Chandel",
      tag: "Product  Designer",
      shortTag: "Product  Designer",
      about:
        "Yashika Chandel is the creative force behind The Soil Story. It was her role as the Media and Outreach Head at Project Zaraat that truly shaped her path. In this capacity, she led initiatives to reduce post-harvest losses and promote entrepreneurship among small and marginal farmers, a role that deepened her connection to agriculture and sparked her passion for design. Her leadership and dedication to user-centred design form the bedrock of the company's mission to revolutionize agriculture through technology. Beyond her work with The Soil Story, Yashika is a full-time UX designer, channeling her expertise into creating solutions that streamline and enrich user experiences.",
      image: img2,
    },
    {
      name: "Pavani Miglani",
      shortName: "Pavani Miglani",
      tag: "Frontend  Developer",
      shortTag: "Frontend  Developer",
      about:
        "Pavani Miglani is the technical backbone of The Soil Story. Her journey began as the Head of Research and Development at Project Zaraat, where she led groundbreaking initiatives to mitigate post-harvest losses and empower small and marginal farmers through innovative solutions. This role not only deepened her connection to agriculture but also honed her analytical and problem-solving skills. Currently, Pavani excels as a Full-Stack Developer in her full-time role, mastering both frontend and backend technologies. At The Soil Story, she channels her extensive technical expertise into creating seamless, responsive, and user-friendly web interfaces. Her dedication to technical excellence and user-centric design drives our mission to revolutionize agriculture through cutting-edge technology.",
      image: img3,
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev === TeamData.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrent((prev) => (prev === 0 ? TeamData.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="w-full h-full relative">
        <Header text="white" />
        <div className="team-container">
          <div className="flex justify-between items-center w-full">
            <button
              className="hover:bg-gray-400 text-gray-800 font-bold rounded-full p-1 border"
              onClick={handlePrevious}
            >
              <GoArrowLeft />
            </button>
            <div className="flex-1 text-center">
              <div className="team-header">
                <h3>Our Team</h3>
                <h1>{TeamData[current]?.name}</h1>
                <h6>{TeamData[current]?.tag}</h6>
                <p>{TeamData[current]?.about}</p>
              </div>
              <div className="mt-8">
                <img
                  src={TeamData[current]?.image}
                  className="team-image"
                  alt={TeamData[current]?.name}
                />
              </div>
            </div>
            <button
              className="hover:bg-gray-400 text-gray-800 font-bold rounded-full p-1 border"
              onClick={handleNext}
            >
              <GoArrowRight />
            </button>
          </div>
        </div>
        <div className="team-footer">
          {TeamData?.map((data, idx) => {
            return (
              <div className="text-center" key={idx}>
                <img
                  src={data?.image}
                  alt={data?.shortName}
                  className="w-20 h-20 rounded-full object-cover mx-auto"
                />
                <div className="font-bold mt-4">{data?.shortName}</div>
                <div className="text-gray-600 text-sm">{data?.shortTag}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Team;
