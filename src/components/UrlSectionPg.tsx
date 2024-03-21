import { useState } from "react";
import magicwand from "../assets/images/magicwand.svg";
import qrcodesolid from "../assets/images/qrcodesolid.svg";
import axios from "axios";
import { Link } from "react-router-dom";


function UrlSection() {
  const [ originalURL, setOriginalURL ] = useState('');
  const [ shortenedURL, setShortenedURL ] = useState('');
  const [ copyButtonText, setCopyButtonText] = useState('');
  const [ errorMessage, setErrorMessage] = useState('');


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
     

  return (
    <>
      <div className="third-sec bg-[#1E3448] flex justify-center p-12" id="url">
        <div className="bg-white w-[576px] h-[355px] p-9 mx-auto">
          <form onSubmit={(e) => e.preventDefault()}
          id="form">
            <input
              type="url"
              placeholder="Paste URL here..."
              className="border border-black-100 p-1  w-full rounded-md"
              value={originalURL}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setOriginalURL(e.target.value)
              }
            />

            <div className="flex justify-between mt-8 ">
              <div className="">
                <label
                  htmlFor="domain"
                  className="block text-sm font-medium text-gray-700"
                >
                </label>
                <select
                  id="domain"
                  name="domain"
                  aria-placeholder="select domain"
                  className="border border-black-100 p-1 px-6 rounded-md"
                >
                  <option value="">Select Domain</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Type Alias here"
                  className="border border-black-100 p-1 px-6 text-blue-700 rounded-md"
                />
              </div>
            </div>
            <button className=" h-12 bg-blue-700 mt-9 mb-5 rounded-full w-full text-white text-xl flex items-center justify-center"
            onClick={shortenURL}
            type="submit"
            >
              Trim
              <img src={magicwand} alt="trim-want" />
            </button>
          <div>
          {shortenedURL && (
            <div className="url-result border border-transparent  flex gap-16 items-center">
              <div className="flex gap-10 items-center">
                <p className="text-sm ">Shortened URL: </p>
                <p className="text-sm">
                  <a href={shortenedURL} target="_blank" rel="noreferrer">
                    {shortenedURL}
                  </a>
                </p>
              </div>
              <div className="flex gap-8">
                <button
                  onClick={copyToClipboard}
                  className="copy-btn flex items-center bg-slate-700 text-white text-sm cursor-pointer  px-3 py-1 rounded-md hover:bg-slate-500 hover:transition-all 5s ease-in-out "
                >
                  {copyButtonText}
                </button>
                <Link to="/qrpage">
                <button
                title="Generate Qr code"
                className="qrcode- flex items-center justify-center bg-slate-700 cursor-pointer hover:bg-slate-500 h-[40px] w-[40px]   rounded-md"
              >
                <img src={qrcodesolid} alt="qrcode" className="w-[20px]" />
              </button>
              </Link>
        
              </div>
            </div>
          )}
        </div>
            <p className="text-blue-500 mt-5 text-sm">
              By clicking TrimURL, I agree to the{" "}
              <span className="font-bold">Terms of Service, Privacy Policy</span> and Use of Cookies.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default UrlSection;
