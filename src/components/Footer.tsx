// import React from 'react'
import Sline from "../assets/images/Sline.svg";
import Vectorsphere from "../assets/images/Vectorsphere.svg";

function Footer() {
  return (
    <div className=" flex justify-center relative" id="features">
      <div className="flex gap-56  mt-12 ">
      <div>
        <div className="logo flex gap-1.5  ">
          <img src={Sline} alt="S-Line" />
          <img src={Vectorsphere} alt="line" />
          <h1 className="text-black font-bold text-3xl">SCISSOR</h1>
        </div>
        {/* i need to import my socials in here, twitter, linkedin, instagram and facebbok */}
      </div>
      <div className="grid grid-cols-4 gap-12 capitalize w-full  ">
        <div className="flex flex-col gap-20">
          <div>
            <h4 className="font-bold mb-5">why scissor?</h4>
            <p>Scissor 101</p>
            <p>Integrations & API</p>
            <p>Pricing</p>
          </div>
          <div>
            <h4 className="font-bold mb-5">resorces</h4>
            <p>Blog </p>
            <p>Resource Library</p>
            <p> Developers </p>
            <p> APP Connectors </p>
            <p>Support </p>
            <p>Trust Center </p>
            <p>Browser Extension </p>
            <p>Mobile App</p>
          </div>
        </div>
        <div className="flex  flex-col gap-16">
            <div>
                <h4 className="font-bold mb-5">
                    solutions
                </h4>
                <p>Social Media </p>
                <p>Digital Marketing </p>
                <p>Customer Service</p>
                <p> For Developers</p>
            </div>
            <div>
                <h4 className="font-bold mb-5">features</h4>
                <p>Branded Links </p>
                <p>Mobile Links </p>
                <p>Campaign </p>
                <p>Management & Analytics </p>
                <p>QR Code generation</p>
                <p></p>
            </div>
        </div>
        <div className="flex flex-col gap-24">
            <div>
                <h4 className="font-bold mb-5">
                    products
                </h4>
                <p>Link Management</p>
                <p> QR Codes </p>
                <p>Link-in-bio</p>
                </div>
                <div>
                    <h4 className="font-bold mb-5">legal</h4>
                    <p>Privacy Policy </p>
                    <p>Cookie Policy </p>
                    <p>Terms of Service </p>
                    <p>Acceptable Use Policy </p>
                    <p>Code of Conduct</p>
                </div>
        </div>
        <div>
                    <h4 className="font-bold mb-5 ">company</h4>
                    <p>About</p>
                    <p> Scissor</p>
                    <p> Careers</p>
                    <p> Partners </p>
                    <p>Press</p>
                    <p>Contact </p>
                    <p>Reviews</p>
                </div>
      </div>
      </div>
      <footer className=" absolute top-full right-9 mt-12  ">
        <p className="flex gap-1 ">Terms of Service <img src={Vectorsphere} alt="line"/> Security <img src={Vectorsphere} alt="line" /> Scissor 2023</p>
      </footer>
    </div>
  );
}

export default Footer;
