import img1 from "../../assets/homeImg1.png";
import Header from "../Header/Header";

function Home1() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${img1})` }}
        className="bg-no-repeat bg-cover"
      >
        <Header />
        <div className="text-center p-20 h-[100vh]">
          <h1 className="font-extrabold text-6xl text-white mt-32">
            Reset your Weekends
          </h1>
          <h1 className="font-semibold text-6xl text-white mt-4">
            Escape to Rural Bliss!
          </h1>
          <h2
            className="text-5xl text-white mt-6"
            style={{ fontFamily: "Caveat" }}
          >
            Launching Soon!
          </h2>
          <center>
            <div className="bg-transparent rounded-full w-[450px] py-1 px-2 flex justify-between mt-5 ps-5 border-white border-2">
              <input
                type="text"
                placeholder=" Email*"
                className=" rounded-full p-1 bg-transparent "
              />
              <button className="py-2 px-3 rounded-full text-black bg-white text-sm font-semibold">
                Join Waitlist &gt;
              </button>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}

export default Home1;
