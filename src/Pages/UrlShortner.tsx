import * as React from "react";
import axios from "axios";
import { HeaderPg } from "../components";

interface IUrlShortnerProps {}

const UrlShortner: React.FunctionComponent<IUrlShortnerProps> = () => {
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
      setCopyButtonText("Copied");
      setErrorMessage("");
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

  return (
    <>
      <div className="">
        <HeaderPg />
      </div>
      <div className=" flex flex-col  items-center h-[100vh] pt-[100px] bg-slate-400">
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
