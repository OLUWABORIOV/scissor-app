import Vectorsphere from "../assets/images/Vectorsphere.svg";
import seamlink from "../assets/images/seamlink.svg";
import edit from "../assets/images/edit.svg";
import grid from "../assets/images/grid.svg";
import activity from "../assets/images/activity.png";
import { Link } from "react-router-dom"


function FeaturesSection() {
  return (
    <>
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
          <Link to="/Login">
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
          <Link to="/Login">
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
          <Link to="/Login">
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
    </>
  );
}

export default FeaturesSection;
