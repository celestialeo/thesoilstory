import backgroundImage from "../../assets/aboutus3.png";
import { IoCheckmark } from "react-icons/io5";
const WhyChooseUs = () => {
  const Data = [
    {
      title: "Sustainable Practices",
      desc: "We offer a user-friendly platform where you can easily browse, book, and manage your agro-tourism experiences. Our seamless interface ensures a hassle-free booking process, allowing you to focus on enjoying your rural adventure. Say goodbye to complicated bookings and hello to effortless planning",
    },
    {
      title: "Community-Focused",
      desc: "The Soil Story is built with the community in mind. We work closely with local farmers to ensure that our offerings are genuine and beneficial to them. Your participation directly supports the livelihoods of small and medium-sized farmers across India. Together, we can create a thriving ecosystem that benefits everyone involved.",
    },
    {
      title: "Commitment to Quality",
      desc: "We are dedicated to providing high-quality, memorable experiences. Our team carefully selects and vets each farm and activity to ensure they meet our standards of excellence. Trust in The Soil Story to deliver exceptional and unforgettable agrotourism adventures.",
    },
  ];

  return (
    <>
      <div className="flex px-32 mb-20">
        <div className=" w-[90%]">
          <h2 className="text-4xl font-bold mb-14">
            Why Choose <span className="text-[#2FB95D]">Us?</span>
          </h2>
          {Data.map((info, idx) => {
            return (
              <>
                <div className="flex gap-5   mb-8 items-start" key={idx}>
                  <div className="bg-[#2FB95D] p-2 rounded-lg">
                    <IoCheckmark color="white" size={30} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{info.title}</h3>
                    <p className="text-lg mt-2  w-[90%]">{info.desc}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div>
          <img
            src={backgroundImage}
            alt="Why Choose Us"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
