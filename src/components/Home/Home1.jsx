import img1 from "../../assets/homeImg1.png";
import Header from "../Header/Header";

function Home1() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${img1})` }}
      >
        <Header />
      </div>
    </>
  );
}

export default Home1;
