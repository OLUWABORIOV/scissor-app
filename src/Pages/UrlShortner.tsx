import * as React from "react";
import Sline from "../assets/images/Sline.svg";
import Vectorhead from "../assets/images/Vectorhead.svg";
import axios from "axios";
import { auth } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";

interface IUrlShortnerProps {}

const UrlShortner: React.FunctionComponent<IUrlShortnerProps> = () => {
  const [originalURL, setOriginalURL] = React.useState<string>("");
  const [shortenedURL, setShortenedURL] = React.useState<string>("");
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [copyButtonText, setCopyButtonText] = React.useState<string>("");
  const navigate = useNavigate();

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
            Authorization: "Bearer 0c524e39803d2ddaf890a01e291a3f403ecec9de",
          },
        }
      );

      setShortenedURL(response.data.id);
      setCopyButtonText("Copy"); 
    } catch (error) {
      console.error("Error shortening URL:", error);
      setErrorMessage("Error shortening URL. Please try again.");
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
  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        console.log("User logged out successfully.");
        navigate("/Login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <>
      <div className=" flex flex-col  items-center h-[100vh] bg-slate-400">
        <div className="header flex justify-between h-[80px] items-center w-full bg-slate-700 px-9 z-auto  ">
          <div className="logo flex  justify-center items-center ">
            <img src={Sline} alt="S-Line" />
            <img src={Vectorhead} alt="line" />
            <h1 className="text-[#0065FE] font-bold text-3xl">SCISSOR</h1>
          </div>

          <div className="flex p-5 ">
            <ul className="flex gap-10 items-center capitalize text-white text-[17px]">
              <li className="my-urls ]">
                <a href="#url">my urls</a>
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

          <div className="flex justify-center items-center gap-5 ">
            <p className="message  text-[18px] text-white">
              Welcome,{auth.currentUser?.email || "anonymous"}
            </p>
            <div>
              <button  className="border bg-white text-slate-700 hover:bg-slate-200 rounded-md py-2 px-4 items-center"
              onClick={handleLogout}>
                Log out
              </button>
            </div>
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
                className="flex items-center justify-center text-white bg-slate-700 hover:bg-slate-500 cursor-pointer  px-6 py-2 rounded-md "
              >
                Shorten
              </button>
            </div>
          </form>
        </div>
        <div>
          {shortenedURL && (
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
          )}
        </div>
      </div>
    </>
  );
};

export default UrlShortner;
