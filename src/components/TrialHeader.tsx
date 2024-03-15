
import { Link } from "react-router-dom";
import Sline from "../assets/images/Sline.svg";
import Vectorhead from "../assets/images/Vectorhead.svg";

function TrialHeader() {
  return (
    <div className="header w-full flex items-center fixed px-4 h-[80px] top-0 z-50 bg-red-100  md:bg-slate-500  ">
      <div className="logo flex mx-auto ">
        <img src={Sline} alt="S-Line" />
        <img src={Vectorhead} alt="line" />
        <h1 className="text-[#0065FE] font-bold text-3xl">SCISSOR</h1>
      </div>
      <div className="flex gap-7 items-center mx-auto">
        <Link to="/signup">
          <button className="text-black capitalize px-4 py-1 border rounded-md cursor-pointer bg-white text-[18px] ">
            sign up
          </button>
        </Link>
        <Link to="/">
          <button className="text-black capitalize px-4 py-1 border rounded-md cursor-pointer bg-white text-[18px] ">
            back
          </button>
        </Link>
      </div>
    </div>
    // </div>
  );
}
export default TrialHeader;
