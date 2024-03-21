import { Link } from "react-router-dom"
import Sline from "../assets/images/Sline.svg";
import Vectorhead from "../assets/images/Vectorhead.svg";

function Header() {
  const handleClick = () => {
  
    console.log("Button clicked!");
  };
  return (
    <div className= "header w-full fixed px-4 top-0 z-50 bg-[#1E3448]  lg:bg-white">
    <div className="h-[44px] flex justify-between items-center">
      <div className="logo flex mx-auto ">
        <img src={Sline} alt="S-Line" />
        <img src={Vectorhead} alt="line" />
        <h1 className="text-[#0065FE] font-bold text-3xl">SCISSOR</h1>
      </div>
      <div className="flex p-5 ">
          <ul className="flex gap-10 items-center capitalize">
            <li className="my-urls text-[#0065FE]">
             <a href="#url">my urls</a></li>
          <li><a href="#features">features</a></li>
          <li><a href="#price">pricing</a></li>
          <li><a href="#analysis">analysis</a></li>
          <li><a href="#faQs">fAQs</a></li>
        </ul>
      </div>
      <div className="flex gap-5 items-center mx-auto">
        <p className="text-[#0065FE] capitalize">
         <Link to="/Login">
          log in
         </Link>
        </p>
        <div className="rounded-full bg-[#0065FE] text-white w-32 py-1.5 px-3 flex text-center justify-center">
          {" "}
          <Link to="/free">
          {/* <Button label="try for free" onClick={handleClick} /> */}
          <button onClick={handleClick}> Try for free </button>
      
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
export default Header;
