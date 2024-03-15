import slashvector from "../assets/images/slashvector.svg";
import seamlink from "../assets/images/seamlink.svg";
import arrow from "../assets/images/arrow.svg";
import Vector2 from "../assets/images/Vector2.svg";
import Rectangle from "../assets/images/Rectangle.svg";
import Ellipse from "../assets/images/Ellipse.svg";
// import Button from "./Button";
import { Link } from "react-router-dom";

export default function Hero() {
  const handleClick = () => {
    // Your click event logic
    console.log("Button clicked!");
  };
  return (
    <>
      <div className="hero mt-1">
        <div className=" flex justify-center">
          <div className="font-bold text-center flex flex-col   ">
            <div className=" block">
              <h1 className=" text-4xl mt-9 mb-9 p-6  leading-10">
                Optimize Your Online Experience with Our
                <span className="flex gap-2 justify-center mt-9 ">
                  Advanced
                  <span className="flex relative text-[#0065FE] gap-2">
                    URL Shortening
                    <img
                      src={slashvector}
                      alt="vec"
                      className="absolute top-full"
                    />
                  </span>
                  Solution
                </span>
              </h1>
              <div className="flex justify-center mt-9">
                <p className="w-1/2 ">
                  Personalize your shortened URLs to align with your brand
                  identity. Utilize custom slugs, branded links, and domain
                  customization options to reinforce your brand presence and
                  enhance user engagement.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-9  gap-9">
              <Link to={"/signup"}>
                <button
                  className=" rounded-full bg-[#0065FE] text-white w-32 py-1.5 px-3 text-center "
                  onClick={handleClick}
                >
                  Sign up
                </button>
              </Link>
              <p className="text-[#0065FE]">Learn more</p>
            </div>
          </div>
        </div>
        <div className=" relative flex justify-center p-5 right-9 mt-9">
          <img src={Vector2} alt="vecsphere" />
          <div className=" bg-[#FEFEFE] absolute right-9 p-9 border rounded-lg border-[#0065FE] ">
            <div className="flex flex-col">
              <div className="seaming-sec flex">
                <div className="flex ">
                  <img src={seamlink} alt="slink " className="w-14 h-14" />
                  <img src={seamlink} alt="slink" className="w-14 h-14" />
                  <img src={seamlink} alt="slink" className="w-14 h-14" />
                </div>
                <img src={arrow} alt="arrow" />
                <img src={seamlink} alt="slink" className="w-14 h-14" />
              </div>
              <p className="w-full  ">
                Seamlessly transform your long URLs into concise and shareable
                links with just few clicks.
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative top-6
         "
        >
          <div className="">
            <img src={Rectangle} alt="rectangle" />
          </div>
          <div className="absolute top-5 left-64">
            <img src={Ellipse} alt=" ellipse" />
          </div>
        </div>
      </div>
    </>
  );
}
