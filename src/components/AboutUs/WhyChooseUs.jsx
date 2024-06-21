import backgroundImage from '../../assets/Property 1=1.png'; 


const WhyChooseUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start py-20 bg-white">
      <div className="lg:w-1/2 px-8">
        <h2 className="text-4xl font-bold mb-8">Why Choose <span className="text-green-600">Us?</span></h2>
        
        <div className="mb-8">
          <img src={sustainableIcon} alt="Sustainable Practices" className="inline-block w-8 h-8 mr-4"/>
          <h3 className="text-2xl font-bold inline-block">Sustainable Practices</h3>
          <p className="text-lg mt-2">
            We offer a user-friendly platform where you can easily browse, book, and manage your agro-tourism experiences. 
            Our seamless interface ensures a hassle-free booking process, allowing you to focus on enjoying your rural adventure. 
            Say goodbye to complicated bookings and hello to effortless planning.
          </p>
        </div>
        
        <div className="mb-8">
          <img src={communityIcon} alt="Community-Focused" className="inline-block w-8 h-8 mr-4"/>
          <h3 className="text-2xl font-bold inline-block text-gray-400">Community-Focused</h3>
          <p className="text-lg text-gray-400 mt-2">
            The Soil Story is built with the community in mind. We work closely with local farmers to ensure that our offerings 
            are genuine and beneficial to them. Your participation directly supports the livelihoods of small and medium-sized 
            farmers across India. Together, we can create a thriving ecosystem that benefits everyone involved.
          </p>
        </div>
        
        <div>
          <img src={qualityIcon} alt="Commitment to Quality" className="inline-block w-8 h-8 mr-4"/>
          <h3 className="text-2xl font-bold inline-block text-gray-400">Commitment to Quality</h3>
          <p className="text-lg text-gray-400 mt-2">
            We are dedicated to providing high-quality, memorable experiences. Our team carefully selects and vets each farm and 
            activity to ensure they meet our standards of excellence. Trust in The Soil Story to deliver exceptional and 
            unforgettable agrotourism adventures.
          </p>
        </div>
      </div>
      
      <div className="lg:w-1/2 mt-10 lg:mt-0 lg:px-8">
        <img src={backgroundImage} alt="Why Choose Us" className="rounded-lg shadow-lg w-full"/>
      </div>
    </div>
  );
};

export default WhyChooseUs;
