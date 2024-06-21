/* eslint-disable react/prop-types */

function JoinWaitlist(props) {
  return (
    <div>
      <div className="bg-white rounded-full w-[350px] py-2 px-2 flex justify-between mt-5 ps-5">
        <input
          type="text"
          placeholder="Your Email*"
          className=" rounded-full p-1"
        />
        <button className="py-2 px-3 rounded-full text-black" style={{backgroundColor:`${props.btncolor}`}}>
          Join Waitlist
        </button>
      </div>
    </div>
  );
}

export default JoinWaitlist;
