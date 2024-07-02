import Header from "../Header/Header";
import img3 from "../../assets/Pavani.png";
import img2 from "../../assets/Yashika.png";
import img1 from "../../assets/Sankar.png";
import img4 from "../../assets/PavaniAvatar.jpeg";
import img5 from "../../assets/YashikaAvatar.jpeg";
import img6 from "../../assets/SanskarAvtar.jpeg";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Navbar from "../Navbar/Navbar";
function Team() {
  const TeamData = [
    {
      name: "Sankar Venkataraman Murali",
      shortName: "Sankar V Murali",
      tag: "Founder & Chief Executive Officer (CEO)",
      shortTag: "Founder & CEO",
      about:
        "Sankaris the visionary behind The Soil Story. With a deep-rooted passion for sustainable agriculture and community empowerment, he founded The Soil Story to connect urban populations with the rural heart of India. Sankar holds an MSc in Innovation, Entrepreneurship, and Management from Imperial College Business School. His extensive experience in agricultural projects, including the successful Project Zaraat, has directly influenced over 3000 farmers by implementing sustainable and economically viable farming solutions. Sankar's leadership and dedication to sustainable development are the driving forces behind The Soil Story's mission.",
      image: img1,
      avatar: img6,
    },
    {
      name: "Yashika Chandel",
      shortName: "Yashika Chandel",
      tag: "Product  Designer",
      shortTag: "Product  Designer",
      about:
        "Yashika Chandel is the creative force behind The Soil Story. It was her role as the Media and Outreach Head at Project Zaraat that truly shaped her path. In this capacity, she led initiatives to reduce post-harvest losses and promote entrepreneurship among small and marginal farmers, a role that deepened her connection to agriculture and sparked her passion for design. Her leadership and dedication to user-centred design form the bedrock of the company's mission to revolutionize agriculture through technology. Beyond her work with The Soil Story, Yashika is a full-time UX designer, channeling her expertise into creating solutions that streamline and enrich user experiences.",
      image: img2,
      avatar: img5,
    },
    {
      name: "Pavani Miglani",
      shortName: "Pavani Miglani",
      tag: "Frontend  Developer",
      shortTag: "Frontend  Developer",
      about:
        "Pavani Miglani is the technical backbone of The Soil Story. Her journey began as the Head of Research and Development at Project Zaraat, where she led groundbreaking initiatives to mitigate post-harvest losses and empower small and marginal farmers through innovative solutions. This role not only deepened her connection to agriculture but also honed her analytical and problem-solving skills. Currently, Pavani excels as a Full-Stack Developer in her full-time role, mastering both frontend and backend technologies. At The Soil Story, she channels her extensive technical expertise into creating seamless, responsive, and user-friendly web interfaces. Her dedication to technical excellence and user-centric design drives our mission to revolutionize agriculture through cutting-edge technology.",
      image: img3,
      avatar: img4,
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
        <div className="flex justify-between px-40  items-center gap-10">
          <button
            className=" hover:bg-gray-400 text-gray-800 font-bold rounded-full p-1 border "
            onClick={handlePrevious}
          >
            <GoArrowLeft />
          </button>
          <div className="w-full mt-[-10%]">
            <h3
              style={{ fontFamily: "Caveat" }}
              className="text-[#4BAF47] text-4xl mb-5"
            >
              Our Team
            </h3>
            <h1 className="text-6xl font-semibold mb-2">
              {TeamData[current]?.name}
            </h1>
            <h6 className="text-sm text-[#714015]">{TeamData[current]?.tag}</h6>
            <p className="w-[80%] mt-6">{TeamData[current]?.about}</p>
          </div>
          <div>
            <img src={TeamData[current]?.image} />
          </div>
          <button
            className=" hover:bg-gray-400 text-gray-800 font-bold rounded-full p-1 border"
            onClick={handleNext}
          >
            <GoArrowRight />
          </button>
        </div>
        <div className="flex justify-start z-10 py-5 glassEffect2 absolute bottom-0 w-full rounded-none rounded-t-lg px-36 gap-14">
          {TeamData?.map((data, idx) => {
            return (
              <>
                <div className="text-center hover:scale-[1.1] " key={idx}>
                  <img
                    src={data?.avatar}
                    alt={data?.shortName}
                    className="mx-auto rounded-full w-[77px]"
                  />
                  <div className="font-bold mt-4">{data?.shortName}</div>
                  <div className="text-gray-600 text-sm">{data?.shortTag}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Team;
