// import React from 'react'
import Vectorsphere from "../assets/images/Vectorsphere.svg";
import minus from "../assets/images/minus.jpg";
import plus from "../assets/images/plus.jpg";

function FaqSection() {
  return (
    <div className="mt-9 text-center" id="faQs">
      <div className="mb-9">
        <h1 className="flex justify-center gap-2 font-bold text-3xl">
          <img src={Vectorsphere} alt="sline" /> FAQs
        </h1>
      </div>
      <div className=" flex justify-center mt-9">
        <div className="flex flex-col w-1/2 gap-9">
          <div className=" flex flex-col text-start gap-5">
            <p>
              How does URL shortening work?{" "}
              <span className="float-right">
                <img src={minus} alt="minus" />
              </span>
            </p>
            <p>
              URL shortening works by taking a long URL and creating a shorter,
              condensed version that redirects to the original URL. When a user
              clicks on the shortened link, they are redirected to the intended
              destination.
            </p>
          </div>
          <div className="">
            <p className="text-start">
              Is it necessary to create an account to use the URL shortening
              service?{" "}
              <span className="float-right">
                {" "}
                <img src={plus} alt="plus" />{" "}
              </span>
            </p>
          </div>
          <div>
            <p className="text-start">
              Are the shortened links permanent? Will they expire?{" "}
              <span className="float-right">
                {" "}
                <img src={plus} alt="plus" />{" "}
              </span>
            </p>
          </div>
          <div>
            <p className="text-start">
              Are there any limitations on the number of URLs I can shorten?{" "}
              <span className="float-right">
                {" "}
                <img src={plus} alt="plus" />{" "}
              </span>{" "}
            </p>
          </div>
          <div>
            <p className="text-start">
              {" "}
              Can I customize the shortened URLs to reflect my brand or content?{" "}
              <span className="float-right">
                {" "}
                <img src={plus} alt="plus" />{" "}
              </span>{" "}
            </p>
          </div>
          <div>
            <p className="text-start">
              Can I track the performance of my shortened URLs?{" "}
              <span className="float-right">
                {" "}
                <img src={plus} alt="plus" />{" "}
              </span>
            </p>
          </div>
          <div>
            <p className="text-start ">
              How secure is the URL shortening service? Are the shortened links
              protected against spam or malicious activity?{" "}
              <span className="float-right">
                {" "}
                <img src={plus} alt="plus" />{" "}
              </span>
            </p>
          </div>
          <div>
            <p className="text-start">
              What is a QR code and what can it do?{" "}
              <span className="float-right">
                {" "}
                <img src={plus} alt="plus" />{" "}
              </span>
            </p>
          </div>
          <div>
            <p className="text-start">
              Is there an API available for integrating the URL shortening
              service into my own applications or websites?{" "}
              <span className="float-right">
                {" "}
                <img src={plus} alt="plus" />{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
