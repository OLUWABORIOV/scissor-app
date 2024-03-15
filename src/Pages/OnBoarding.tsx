import * as React from "react";
import Sline from "../assets/images/Sline.svg";
import Vectorhead from "../assets/images/Vectorhead.svg";
import slashvector from "../assets/images/slashvector.svg";
import seamlink from "../assets/images/seamlink.svg";
import arrow from "../assets/images/arrow.svg";
import Vector2 from "../assets/images/Vector2.svg";
import Rectangle from "../assets/images/Rectangle.svg";
import Ellipse from "../assets/images/Ellipse.svg";
import { Link } from "react-router-dom";
import {auth} from '../config/firebaseConfig'
import Vectorsphere from "../assets/images/Vectorsphere.svg";
import edit from "../assets/images/edit.svg";
import grid from "../assets/images/grid.svg";
import activity from "../assets/images/activity.png";


import {
  // Button,
  FaqSection,
  Footer,
  LastSection,
  PriceSection,
  // UrlSection,
} from "../components";

interface IOnBoardingProps {}

const OnBoarding: React.FunctionComponent<IOnBoardingProps> = () => {

  return (
    <div>
      <div className="header w-full fixed  top-0 z-50 bg-red-100  md:bg-slate-500  lg:bg-white">
        <div className="header flex justify-between px-5  z-auto bg-slate-700 ">
          <div className="logo flex  justify-center items-center ">
            <img src={Sline} alt="S-Line" />
            <img src={Vectorhead} alt="line" />
            <h1 className="text-[#0065FE] font-bold text-3xl">SCISSOR</h1>
          </div>

          <div className="flex p-5 ">
            <ul className="flex gap-10 items-center capitalize text-white">
              <li className="my-urls text-[#0065FE]">
                <a href = "#url">my urls</a>
              </li>
              
              <li>
                <a href="#features">features</a>
              </li>
              <li>
                <a href="#price">pricing</a>
              </li>
              <li>
                <a href="">analysis</a>
              </li>
              <li>
                <a href="#faQs">fAQs</a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center gap-5">
            <p className="message text-[18px] text-white">
              Welcome, {auth.currentUser?.email || 'anonymous'}
            </p>
            <button className="text-slate-700 bg-white hover:bg-slate-500 cursor-pointer py-2 px-5 rounded-md">
              Log out
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="hero mt-1">
          <div className=" flex justify-center">
            <div className="font-bold text-center flex flex-col   ">
              <div className=" block">
                <h1 className=" text-4xl mt-9 mb-9 p-6  leading-10">
                  Optimize Your Online Experience with Our
                  <span className="flex gap-2 justify-center mt-9 ">
                    Advanced
                    <Link to = "/urlshortner">
                    <span className="flex relative text-[#0065FE] gap-2">
                      URL Shortening
                      <img
                        src={slashvector}
                        alt="vec"
                        className="absolute top-full"
                      />
                    </span>
                    </Link>
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
      </div>

      {/* <Button label="" /> */}
      {/* ----features section----- */}
 

    <div className="features-section" id="features">
      <div className="flex gap-32 justify-center p-7 mb-9 border bg-[#F9FBFD]">
        <div className="capitalize flex flex-col text-[#141414] text-5xl font-bold">
          one stop.{" "}
          <span>
            four <span className="text-[#005AE2]">possibilities</span>
          </span>
        </div>
        <div className=" flex gap-20 capitalize ">
          <div>
            <h1 className="font-bold  "> 3M</h1>
            <p>Acive Users</p>
          </div>
          <div>
            <h1 className="font-bold">60M</h1>
            <p>Links & QR codes created</p>
          </div>
          <div>
            <h1 className="font-bold">1B</h1>
            <p>Clicked & Scanned connections</p>
          </div>
          <div>
            <h1 className="font-bold">300k</h1>
            <p>App Integrations</p>
          </div>
        </div>
      </div>
      <div className="flex mt-16 p-9 ">
        <div className="flex justify-center">
        <div className="whychoosescissors w-1/2 ">
          <h1 className=" flex font-bold gap-1">
            {" "}
            <img src={Vectorsphere} alt="" /> Why choose{" "}
            <span className="text-blue-700">Scissors</span>
          </h1>
          <p>
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.{" "}
          </p>
        </div>
        </div>
        <div className=" flex flex-col gap-20">
        <div className="flex gap-12 ">
          <div>
            <Link to="/shortenedUrl">
            <div className="border border-black bg-[#3284ff64] h-8 w-8 rounded-full p-2 flex justify-center">
              <img src={seamlink} alt="Slink" />
            </div>
            </Link>
            <div>
              <h1 className="font-bold mt-4 mb-4">URL Shortening</h1>
              <p>
                Scissor allows you to shorten URLs of your business, events.
                Shorten your URL at scale, URL redirects.
              </p>
            </div>
          </div>
          <div>
          <Link to="/custom">
            <div className="border border-black bg-[#3284ff64] h-8 w-8 rounded-full p-2 flex justify-center">
              <img src={edit} alt="edit.svg" />
            </div>
            </Link>
            <div>
              <h1 className="font-bold mt-4 mb-4"> Custom URLs</h1>
              <p>
                With Scissor, you can create custom URLs, with the length you
                want! A solution for socials and businesses.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-12 ">
          <div>
          <Link to="/qrpage">
            <div className="border border-black bg-[#3284ff64] h-8 w-8 rounded-full p-2 flex justify-center">
              <img src={grid} alt="grid" />
            </div>
            </Link>
            <div>
              <h1 className="font-bold mt-4 mb-4">QR Codes</h1>
              <p>
                Generate QR codes to your business, events. Bring your audience
                and customers to your doorstep with this scan and go solution.
              </p>
            </div>
          </div>
          <div>
          <Link to="/analysis">
            <div className="border border-black bg-[#3284ff64]  h-8 w-8 rounded-full p-2 flex justify-center">
              <img src={activity} alt="activity" />
            </div>
            </Link>
            <div>
              <h1 className="font-bold mt-4 mb-4"> Data Analytics</h1>
              <p>
                Receive data on the usage of either your shortened URL, custom
                URLs or generated QR codes. Embedded to monitor progress.s.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
   
      <PriceSection />
      {/* <UrlSection /> */}
      <FaqSection />
      <LastSection />
      <Footer />
    </div>
  );
};

export default OnBoarding;
