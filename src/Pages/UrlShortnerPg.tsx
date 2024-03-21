import { useState } from "react";
import axios from "axios";
import download from "../assets/images/download.svg";
import send from "../assets/images/send.svg";
import qrcodesolid from "../assets/images/qrcodesolid.svg";
import customize from "../assets/images/customize.svg";
import QRCode from "qrcode.react";
import { useRef } from "react";
import { db } from "../config/firebaseConfig";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { HeaderPg } from "../components";

const ShortenURLForm = () => {
  const [originalURL, setOriginalURL] = useState("");
  const [shortenedURL, setShortenedURL] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [copyButtonText, setCopyButtonText] = useState("Copy");
  const [customAlias, setCustomAlias] = useState("");
  const [displayCustomize, setDisplayCustomize] = useState(false);
  const [displayQrCode, setDisplayQrCode] = useState(false);
  const qrCodeRef = useRef<HTMLDivElement>(null);
  const [qrCodeCopied, setQrCodeCopied] = useState(false);

  const [count, setCount] = useState({});

  const docRef = doc(db, "clicks", "Xg8edvpQwtdX0Y3V0Iv0");
  onSnapshot(docRef, (docSnap) => {
    const previousData: any = docSnap.data();

    const newData: any = {
      total: previousData.total + 1,
    };

    setCount(newData);
  });

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
    } catch (error) {
      console.error("Error shortening URL:", error);
      setErrorMessage("Error shortening URL. Please try again.");
      console.log(errorMessage)
    }

    updateDoc(docRef, count)
      .then(() => {
        count;
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
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
  const toggleQrCode = () => {
    setDisplayQrCode((prev) => !prev);
  };
  const generateQrCode = (evt: React.FormEvent) => {
    evt.preventDefault();
    const canvas = qrCodeRef.current?.querySelector("canvas");

    if (canvas) {
      const image = canvas.toDataURL("image/png");
      const anchor = document.createElement("a");
      anchor.href = image;
      anchor.download = `qr-code.png`;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      setQrCodeCopied(true);
      setTimeout(() => setQrCodeCopied(false), 2000);
    }
  };

  const share = async () => {
    if (navigator.share) {
      const qrCodeElement = document.querySelector(".qr-container__qr-code");
      if (qrCodeElement) {
        const qrCodeText = qrCodeElement.innerHTML;
        try {
          await navigator.share({
            title: "QR Code",
            text: "Check out this QR Code!",
            url: qrCodeText,
          });
        } catch (error) {
          console.error("Error sharing:", error);
        }
      }
    } else {
      console.log("Web Share API not supported");
    }
  };

  return (
    <>
      <div>
        <HeaderPg />
      </div>
    <div className=" flex flex-col  items-center h-[100vh] pt-[100px] bg-slate-400">
      <div className="  form-section flex flex-col justify-center mt-10   items-center ">
        <h1 className="header uppercase text-3xl mb-5">
          Shorten Your Long <strong style={{ color: "blue" }}>URL</strong> Here
        </h1>
        <p className=" text-xl">
          Scissor makes it easy to shorten Urls , paste your Urls into the input
          below to shorten.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="form flex p-6 flex-col gap-10 w-full justify-center "
        >
          <div className="url-section  mx-auto flex gap-5">
            <input
              type="text"
              value={originalURL}
              onChange={(e) => setOriginalURL(e.target.value)}
              placeholder="Enter your URL here"
              className="url-input border rounded-md p-4 h-[50px] w-[672px]"
            />
            <button
              onClick={shortenURL}
              className="shorten-button flex items-center justify-center bg-slate-700 text-white cursor-pointer border border-transparent px-6 py-2 rounded-md  hover:bg-slate-500 hover:transition-all 5s ease-in-out"
            >
              Shorten
            </button>
          </div>
        </form>
      </div>

      <div className=" shortened-url flex flex-col gap-8  border border-transparent">
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

              <button
                onClick={toggleQrCode}
                title="Generate Qr code"
                className="qrcode- flex items-center justify-center bg-white cursor-pointer hover:bg-slate-500 h-[40px] w-[40px]   rounded-md"
              >
                <img src={qrcodesolid} alt="qrcode" className="w-[20px]" />
              </button>
            </div>
          )}
          <div className="qrcode">
            {displayQrCode && (
              <div className=" flex flex-col gap-3">
                <h2 className="text-[22px] capitalize">generate Qr code</h2>
                <div className="flex gap-10 items-center">
                  <div className="qr-container__qr-code" ref={qrCodeRef}>
                    {" "}
                    <QRCode
                      value={shortenedURL}
                      size={200}
                      fgColor="black"
                      bgColor="white"
                      level="H"
                    />
                  </div>
                  <div className="copy&share-btn flex flex-col gap-7 my-auto">
                    <button
                      onClick={generateQrCode}
                      className="px-7 py-2.5 text-[18px] flex gap-4 text-center text-white border border-transparent rounded-md bg-slate-700 hover:bg-slate-500 hover:transition-all 5s ease-in-out"
                    >
                      {/* {qrCodeCopied && "copied"} */}
                      {qrCodeCopied}
                      <img src={download} alt="download" className="w-[25px]" />
                      Download
                    </button>
                    <button
                      onClick={share}
                      className="px-7 py-2.5 text-[18px] flex gap-4  text-center text-white border border-transparent rounded-md bg-slate-700 hover:bg-slate-500 hover:transition-all 5s ease-in-out"
                    >
                      <img src={send} alt="share" className="w-[25px]" /> Share
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ShortenURLForm;
