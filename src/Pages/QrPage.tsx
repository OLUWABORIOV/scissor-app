import * as React from "react";
import QRCode from "qrcode.react";
import { useRef } from "react";
import qrcodesolid from "../assets/images/qrcodesolid.svg";
import download from "../assets/images/download.svg";
import send from "../assets/images/send.svg";
import { HeaderPg } from "../components";
import axios from "axios";

interface IQrPagePops {}

const QrPage: React.FunctionComponent<IQrPagePops> = () => {
  const qrCodeRef = useRef<HTMLDivElement>(null);
  const [qrCodeCopied, setQrCodeCopied] = React.useState(false);
  const [originalURL, setOriginalURL] = React.useState("");
  const [displayQrCode, setDisplayQrCode] = React.useState(false);
  const [shortenedURL, setShortenedURL] = React.useState("");
  const [copyButtonText, setCopyButtonText] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

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
      setCopyButtonText("Copied");
      setErrorMessage("");
    } catch (error) {
      console.error("Error shortening URL:", error);
      setErrorMessage("Error shortening URL. Please try again.");
    }
  };
  

  const toggleQrCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (originalURL.trim() === "") {
      alert("Please input your URL before generating the QR code.");
      return;
    }
    setDisplayQrCode(true);
  };

  const copyToClipboard = (evt: React.FormEvent) => {
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
    <div>
      <HeaderPg />
      <div className="bg-slate-500 h-[100vh] py-5">
        <h2 className="text-[24px] text-center text-white">
          Generate QR code here
        </h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          id="form"
          className="flex p-6 flex-col gap-10 w-full justify-center"
        >
          <div className="mx-auto flex gap-5">
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
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div>
          {shortenedURL && (
            <div className="url-result border border-transparent  flex gap-16 items-center">
              <div className="flex gap-10 items-center">
                <p className="text-2xl">Shortened URL: </p>
                <p className="text-white">
                  <a
                    href={shortenedURL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
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
                onClick={toggleQrCode}
                title="Generate Qr code"
                className="qrcode- flex items-center justify-center bg-white cursor-pointer hover:bg-slate-500 h-[40px] w-[40px]   rounded-md"
              >
                <img src={qrcodesolid} alt="qrcode" className="w-[20px]" />
              </button>
              </div>
            </div>
          )}
        </div>
        <div className="qrcode">
          {displayQrCode && (
            <div className="flex flex-col gap-3 items-center">
              <div className="flex gap-10 items-center">
                <div className="qr-container__qr-code" ref={qrCodeRef}>
                  <QRCode
                    value={originalURL}
                    size={200}
                    fgColor="black"
                    bgColor="white"
                    level="H"
                  />
                </div>
                <div className="copy&share-btn flex flex-col gap-7 my-auto">
                  <button
                    onClick={copyToClipboard}
                    className="px-7 py-2.5 text-[18px] flex gap-4 text-center text-white border border-transparent rounded-md bg-slate-700 hover:border- hover:bg-slate-500 hover:transition-all 5s ease-in-out"
                  >
                    {qrCodeCopied && "Copied"}
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
  );
};

export default QrPage;
