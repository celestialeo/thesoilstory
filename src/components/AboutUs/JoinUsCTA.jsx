import backgroundImage from '../../assets/Property1=Active.png'; 

const JoinUsCTA = () => {
    return (
      <div
        className="bg-cover bg-center flex flex-col items-center text-center py-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h2 className="text-4xl text-white font-bold mb-4">Join Us on This Journey</h2>
        <p className="text-white mb-8 max-w-2xl">
          We invite you to be a part of The Soil Story community. Whether you’re looking to escape the city,
          reconnect with nature, or learn something new, our platform offers something for everyone. Explore
          our experiences, meet our farmers, and discover the endless possibilities that rural India has to offer.
        </p>
        <div className="bg-white rounded-full w-[350px] py-1 px-2 flex justify-between">
          <input
            type="email"
            placeholder="Your Email*"
            className="rounded-full p-1 flex-grow"
          />
          <button className="bg-yellow-400 py-2 px-3 rounded-full">
            Join Waitlist
          </button>
        </div>
      </div>
    );
  };
  
  export default JoinUsCTA;