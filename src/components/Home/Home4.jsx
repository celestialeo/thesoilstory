import img1 from "../../assets/Group.png";
import img2 from "../../assets/Group2.png";
import img3 from "../../assets/Group3.png";

function Home4() {
  const PartnerImg = [img1, img2, img3];
  return (
    <div className="mb-20">
      <h1 className="font-semibold text-5xl mt-20 mb-20 text-center ">
        Our Partners
      </h1>
      <div className="flex justify-between px-20 items-center ">
        {PartnerImg.map((img, index) => {
          return (
            <>
              <img src={img} key={index} className="h-min" />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home4;
