import * as React from "react";
import Sline from "../assets/images/Sline.svg";
import Vectorhead from "../assets/images/Vectorhead.svg";
import axios from "axios";
import { Link } from "react-router-dom";

interface IFreeTrialProps {}

const FreeTrial: React.FunctionComponent<IFreeTrialProps> = () => {
  const [originalURL, setOriginalURL] = React.useState<string>("");
  const [shortenedURL, setShortenedURL] = React.useState<string>("");
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [copyButtonText, setCopyButtonText] = React.useState<string>("");

  const shortenURL = async () => {
    try {
      const response = await axios.post(
        "https://api-ssl.bitly.com/v4/shorten",
        {
          long_url: originalURL,
          domain: "bit.ly",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 45cf21c27262bb12567d02f17fa7a7ffc5a667c9",
          },
        }
      );

      setShortenedURL(response.data.id);
      setCopyButtonText("Copy");
    } catch (error) {
      console.error("Error shortening URL:", error);
      setErrorMessage("Error shortening URL. Please try again.");
      console.log(errorMessage)
    }
  };
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(shortenedURL)
      .then(() => {
        setCopyButtonText("Copied!");

        setTimeout(() => {
          setCopyButtonText("Copy");
        }, 2000);
      })
      .catch((error) => {
        console.error("Copy failed:", error);
        setErrorMessage("Copy failed. Please try again.");
      });
  };
  return (
    <>
      <div className=" flex flex-col  items-center h-[100vh] bg-slate-400">
        <div className="header flex justify-evenly h-[80px] items-center w-full bg-slate-700 px-9 z-auto  ">
          <div className="logo flex  justify-center items-center ">
            <img src={Sline} alt="S-Line" />
            <img src={Vectorhead} alt="line" />
            <h1 className="text-[#0065FE] font-bold text-3xl">SCISSOR</h1>
          </div>

        </div>
        <div className="  form-section flex flex-col justify-center mt-10 items-center ">
          <p className="uppercase text-2xl">
            shorten and customize your long url here
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            id="form"
            className="flex p-6 flex-col gap-10 w-full justify-center"
          >
            <div className=" mx-auto flex gap-5">
              {" "}
              <input
                type="url"
                required
                placeholder="Enter your link here"
                className={`border rounded-md p-3 h-[50px] w-[672px]`}
                value={originalURL}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setOriginalURL(e.target.value)
                }
              />
              <button
                type="submit"
                onClick={shortenURL}
                className="flex items-center justify-center bg-slate-700 hover:bg-slate-500 cursor-pointer text-white  px-6 py-2 rounded-md "
              >
                Shorten
              </button>
            </div>
          </form>
        </div>
        <div>
          {shortenedURL && (
            <div className="flex  flex-col">
            <div className="url-result border border-transparent  flex gap-16 items-center">
              <div className="flex gap-10 items-center">
                <p className="text-2xl ">Shortened URL: </p>
                <p className="text-white">
                  <a href={shortenedURL} target="_blank" rel="noreferrer">
                    {shortenedURL}
                  </a>
                </p>
              </div>
              <div className="flex gap-8">
                <button
                  onClick={copyToClipboard}
                  className="copy-btn flex items-center bg-slate-700 text-white cursor-pointer  px-6 py-2 rounded-md hover:bg-slate-500 hover:transition-all 5s ease-in-out "
                >
                  {copyButtonText}
                </button>
              </div>
              </div>
              <div className="flex flex-col gap-7">
                <p className="mt-[60px] text-white text-[22px] text-center">
                  {" "}
                  Sign up to enjoy more functionalities
                </p>
                <div className="flex justify-center gap-6 items-center ">
                  <Link to="/signup">
                    <button className="bg-slate-700 hover:bg-slate-500 text-white capitalize rounded-md py-2 px-6 items-center">
                      sign up
                    </button>
                  </Link>
                  <div>
                    <Link to="/Home">
                      <button className="capitalize bg-slate-700 hover:bg-slate-500 text-white  rounded-md py-2 px-6 items-center">
                        back
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FreeTrial;
