import Header from "../Header/Header";
import Logo from "../../assets/logo.png";
import JoinWaitlist from "../Utils/JoinWaitlist";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    window.scrollTo(0, 0);
    navigate(link);
  };
  return (
    <>
      <Header text={"white"} />
      <div className="flex-col flex items-center my-20">
        <img src={Logo} onClick={() => navigateTo("/")} className="hover:cursor-pointer"/>
        <h1
          style={{ fontFamily: "Caveat" }}
          className="text-[#4BAF47] text-7xl mb-7"
        >
          Coming soon!
        </h1>
        <h3>Until then... Join our waitlist to know about the launch</h3>
        <JoinWaitlist btncolor="#FAB917" border={true} />
      </div>
      <Navbar />
    </>
  );
}

export default Blog;
