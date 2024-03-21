import * as React from "react";
import axios from "axios";
import customize from "../assets/images/customize.svg";
import { useState } from "react";
import { HeaderPg } from "../components";

interface ICustompgProps {}
const Custompg: React.FunctionComponent<ICustompgProps> = () => {
  const [originalURL, setOriginalURL] = React.useState<string>("");
  const [shortenedURL, setShortenedURL] = React.useState<string>("");
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [copyButtonText, setCopyButtonText] = React.useState<string>("");
  const [customAlias, setCustomAlias] = React.useState<string>("   ");
  const [displayCustomize, setDisplayCustomize] = useState(false);


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
  const toggleCustomize = () => {
    setDisplayCustomize((prev) => !prev);
  };
  const customizeAlias = async () => {
    try {
      if (!shortenedURL || !customAlias) {
        console.error(
          "Cannot customize alias for an empty URL or without a custom alias."
        );
        return;
      }

      const response = await axios.patch(
        `https://api-ssl.bitly.com/v4/shorten/${shortenedURL}`,
        {
          custom_alias: customAlias,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 0c524e39803d2ddaf890a01e291a3f403ecec9de ",
            // dc7e5411295788b69a48ff92395646a83f9fd143 to the bit.ly token that was there before i put my own access token
          },
        }
      );

      setShortenedURL(response.data.id);
    } catch (error) {
      console.error("Error customizing alias:", error);
      setErrorMessage("Error customizing alias. Please try again.");
    }
  };

  return (
    <>
    <div className="">
        <div className="">
        < HeaderPg />
        </div>
      <div className=" flex flex-col  items-center h-[100vh] pt-[100px]  bg-slate-400">
        <div className="  form-section flex flex-col justify-center items-center ">
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
                <button
                  onClick={toggleCustomize}
                  title="Customize"
                  className="customize-btn flex items-center justify-center bg-white cursor-pointer w-[40px] h-[40px] hover:bg-slate-500   rounded-md"
                >
                  <img src={customize} alt="customize" className=" w-[20px]" />
                </button>
              </div>
            </div>
          )}
          <div className=" displaycustomize flex flex-col gap-8">
            {displayCustomize && (
              <div className="customize-section flex items-center gap-5 text-xl">
                <label htmlFor="customAlias">Customize Alias:</label>
                <input
                  type="text"
                  value={customAlias}
                  onChange={(e) => setCustomAlias(e.target.value)}
                  id="customAlias"
                  placeholder="Enter custom alias"
                  className="px-6 py-1.5 rounded-md"
                />
                <button
                  onClick={customizeAlias}
                  title="customize"
                  className="customize-btn flex items-center justify-center bg-white cursor-pointer hover:bg-slate-500 h-[40px] w-[40px]  rounded-md"
                >
                  <img src={customize} alt="customize" className="w-[20px]" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Custompg;
