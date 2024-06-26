import img1 from "../../assets/Partnerwithus.png";
import img2 from "../../assets/support.png";
import img3 from "../../assets/Illustration.png";
import Header from "../Header/Header";
import { PiPenNibStraight } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import Navbar from "../Navbar/Navbar";
function Joinus() {
  const data = [
    {
      title: "Increased Revenue",
      description:
        "Diversify your income by hosting tourists on your farm. Agrotourism offers a new revenue stream that complements your existing agricultural activities.",
    },
    {
      title: "Community Support",
      description:
        "Be a part of a network that values and promotes sustainable farming practices. Collaborate with other like-minded farmers and organizations to enhance your impact.",
    },
    {
      title: "Marketing Assistance",
      description:
        "Gain visibility through our platform. We help promote your farm and experiences to a wide audience of urban tourists eager to connect with nature.",
    },
    {
      title: "Capacity Building",
      description:
        "Access resources and training to improve your hospitality and tourism services. Learn best practices in agrotourism to offer unforgettable experiences to your visitors.",
    },
    {
      title: "Direct Market Access",
      description:
        "Sell your farm products directly to visitors, enhancing your profit margins and building a loyal customer base.",
    },
    {
      title: "Direct Market Access",
      description:
        "Sell your farm products directly to visitors, enhancing your profit margins and building a loyal customer base.",
    },
  ];
  const steps = [
    {
      number: 1,
      title: "Fill Out the Application",
      description:
        "Provide us with details about your farm and the experiences you offer. This helps us understand your unique offerings and how they align with our mission.",
    },
    {
      number: 2,
      title: "Get Vetted",
      description:
        "Our team will visit your farm to ensure it meets our quality and sustainability standards. This process helps us maintain high standards for our visitors.",
    },
    {
      number: 3,
      title: "Start Hosting",
      description:
        "Once approved, you can start hosting visitors and sharing your farm life with them. We provide ongoing support to help you succeed.",
    },
  ];

  return (
    <>
      <Header text={"white"} />
      <div className="px-20 py-10 w-full flex justify-center">
        <div
          style={{ backgroundImage: `url(${img1})` }}
          className="bg-no-repeat bg-cover flex px-20 py-16 w-[90%] rounded-3xl"
        >
          <div className="flex-row flex flex-wrap justify-start p-0 text-white">
            <h1 className="text-4xl font-bold">How to become a Partner</h1>
            <p className="w-[70%]">
              The Soil Story is on a mission to bridge the gap between urban and
              rural communities by promoting sustainable and authentic farm
              experiences. We are looking for passionate farmers and
              organizations to join us as partners in this exciting journey.
              Together, we can create unique, enriching experiences that not
              only benefit visitors but also provide valuable support to rural
              communities
            </p>
            <h3 style={{ fontFamily: "Caveat" }} className="text-3xl">
              Join Us in Promoting Sustainable Agrotourism...
            </h3>
          </div>
          <img src={img2} alt="img2" />
        </div>
      </div>
      <div>
        <h1 className="text-center text-4xl font-semibold my-20">
          Why Partner with us?
        </h1>
        <div className="mx-auto flex flex-wrap justify-around px-40 ">
          {data.map((x, idx) => {
            {
              return (
                <>
                  <div className="w-[33%] mb-10">
                    <div
                      id={idx}
                      className="card border-t-2 border-gray-100 rounded-lg p-4 m-2  flex-0 w-[350px]"
                    >
                      <PiPenNibStraight
                        color="#4BAF47"
                        size={"30px"}
                        className="my-6"
                      />
                      <h3 className="font-bold mb-4">{x?.title}</h3>
                      <p className="text-gray-500">{x?.description}</p>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>

      <h1 className="text-4xl font-bold my-14 text-center">
        How to Become a Partner
      </h1>
      <div className="container mx-auto p-4">
        <div className="relative flex justify-around items-start mt-10">
          {steps.map((step) => (
            <>
              {step.number === 1 ? (
                ""
              ) : (
                <hr className="w-full h-[1px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700"></hr>
              )}
              <div
                key={step.number}
                className="flex flex-col items-center z-10"
              >
                <div className="flex justify-center items-center h-12 w-12 bg-green-500 rounded-full text-white text-xl font-bold">
                  {step.number}
                </div>
                <h2 className="mt-4 text-xl font-semibold text-center">
                  {step.title}
                </h2>
                <p className="mt-2 text-center text-gray-600">
                  {step.description}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="mt-56 flex px-32 relative items-start">
        <div className="pb-32">
          <h1 className="text-4xl font-bold mb-10">Register Your Interest</h1>
          <p className="w-[65%] mb-10">
            Ready to join The Soil Story family? Click on the link given below
            and fill out the form below to express your interest in becoming a
            partner. Our team will review your application and get in touch with
            you to discuss the next steps. We look forward to partnering with
            you to promote sustainable agrotourism and create unforgettable
            experiences for our visitors. Thank you for your interest in The
            Soil Story!
          </p>
          <button className="flex gap-5 rounded-md bg-[#1D1D1D] text-white p-4 justify-center items-center">
            Fill Registration form <GoArrowRight />
          </button>
        </div>
        <div className="absolute bottom-0 right-0">
          <img src={img3} alt="img" className="" />
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Joinus;
