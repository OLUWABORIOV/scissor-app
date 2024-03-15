// import React from 'react'
import Vectorsphere from "../assets/images/Vectorsphere.svg";
import checkcircle from "../assets/images/checkcircle.svg";
// import Button from "./Button";
import { Link } from "react-router-dom"

function PriceSection() {
    const handleClick = () => {
        console.log('button clicked')
    };
  return (
    <div className="mt-16 p-12" id="price">
    <div className="flex justify-center mb-12">
      <div className="flex flex-col ">
        <div className="flex gap-2 justify-center" >
          <div>
            <img src={Vectorsphere} alt="vline " />
          </div>
          <h1 className="font-bold text-2xl tracking-wider">
            A <span className="text-blue-700">price perfect </span> for your
            needs.
          </h1>
        </div>
        <p className="text-xs flex flex-col text-center">
          From catering for your personal, business, event, socials needs, you
          can be <span className="justify-center flex"> rest assured we have you in mind in our pricing.</span>
        </p>
      </div>
      </div>
     
      <div className="flex justify-center mt-12 ">
        <div className="basic border border-blue-700 border-r-0text-center mt-9 mb-9 p-5  rounded-xl ">
            <h3 className="mt-5 mb-5 text-3xl">Basic</h3>
            <div className="mb-6 gap-5 flex flex-col font-bold">
                <h1 className="text-4xl ">Free</h1>
                <p>Free plans for all users</p>
            </div>
            <div className="flex justify-center">
            <div className="flex flex-col gap-6">
                <p className="flex gap-2 capitalize"><img src={checkcircle} alt="check" />unlimited URL Shortening</p>
                <p className="flex gap-2 capitalize"><img src={checkcircle} alt="check" />basic link analytics</p>
                <p className="flex gap-2 capitalize"><img src={checkcircle} alt="check" />customizable short links</p>
                <p className="flex gap-2 capitalize"><img src={checkcircle} alt="check" /> standard supported</p>
                 <p className="flex gap-2 capitalize"><img src={checkcircle} alt="check" /> ad supported</p>
            </div>
            </div>
        </div>
        <div className="basic border border-black  bg-[#1E3448]  p-9 text-white rounded-xl">
            <h3 className="mt-5 mb-5 text-3xl capitalize">professional</h3>
            <div className="mb-6 gap-5 flex flex-col font-bold">
                <h1 className="text-4xl ">$15k/month</h1>
                <p>ideal for business creators</p>
            </div>
            <div className="flex justify-center">
            <div className="flex flex-col gap-6">
                <p className="flex gap-2 capitalize"><img src={checkcircle} alt="check" />enhanced link analytics</p>
                <p className="flex gap-2 capitalize"><img src={checkcircle} alt="check" />custom branded domains</p>
                <p className="flex gap-2 capitalize"><img src={checkcircle} alt="check" />advanced link customization</p>
                <p className="flex gap-2 capitalize"><img src={checkcircle} alt="check" /> priority support</p>
                 <p className="flex gap-2 capitalize"><img src={checkcircle} alt="check" /> ad-free experience</p>
            </div>
            </div>
        </div>
        <div className="basic  border border-blue-700 border-l-0 text-center mt-9 mb-9 p-5 rounded-xl  ">
            <h3 className="mt-5 mb-5 text-3xl capitalize">teams</h3>
            <div className="mb-6 gap-5 flex flex-col font-bold">
                <h1 className="text-4xl">$25/month</h1>
                <p>Share with up to 10 users</p>
            </div>
            <div className="flex justify-center">
            <div className="flex flex-col gap-6">
                <p className="flex gap-2 capitalize "><img src={checkcircle} alt="check" />team collaboration</p>
                <p className="flex gap-2 capitalize"><img src={checkcircle} alt="check" />user roles and permission</p>
                <p className="flex gap-2 capitalize"><img src={checkcircle} alt="check" />enhanced security</p>
                <p className="flex gap-2 capitalize"><img src={checkcircle} alt="check" /> API access</p>
                 <p className="flex gap-2 capitalize"><img src={checkcircle} alt="check" /> dedicated account manager</p>
            </div>
            </div>
        </div>
      </div>
      <div className="flex justify-center mt-9 gap-7">
        <Link to="Login">
        <button className=" pl-9 pr-9 pt-2 pb-2 rounded-full text-[#0065FE] border border-[#0065FE]" onClick={handleClick}>
          {/* <Button label=" Get Custom Pricing" onClick={handleClick}/> */}
          Get Custom Pricing
          </button>
          </Link>
          <Link to = "Login">
        <button className=" pl-9 pr-9 pt-2 pb-2  bg-[#0065FE] rounded-full  text-white  border border-[#0065FE]" onClick={handleClick}>
          {/* <Button label=" Select Pricing" onClick={handleClick} /> */}
          Select Pricing
          </button>
          </Link>
      </div>
    </div>
  );
}

export default PriceSection;
