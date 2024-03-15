import * as React from "react";
import Sline from "../assets/images/Sline.svg";
import Vectorhead from "../assets/images/Vectorhead.svg";
import QRCode from "qrcode.react";
import { useRef } from "react";
import { auth } from "../config/firebaseConfig";
import qrcodesolid from "../assets/images/qrcodesolid.svg";
import download from "../assets/images/download.svg";
import send from "../assets/images/send.svg";

interface IQrPagePops {}

const QrPage: React.FunctionComponent<IQrPagePops> = () => {
  const qrCodeRef = useRef<HTMLDivElement>(null);
  const [qrCodeCopied, setQrCodeCopied] = React.useState(false);
  const [fullUrl, setFullUrl] = React.useState("");
  const [displayQrCode, setDisplayQrCode] = React.useState(false);

  const toggleQrCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (fullUrl.trim() === "") {
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

        <div className="flex justify-center items-center ">
          <p className="message  text-[18px] text-white">
            Welcome, {auth.currentUser?.email || "anonymous"}
          </p>
          <div>
            <button className="border bg-white rounded-md py-2 px-4 items-center">
              Log out
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-slate-500 h-[100vh] py-5">
        <h2 className="text-[24px] text-center text-white ">Genrate Qr code here</h2>

        <form
          action=""
          id="form"
          className="flex p-6 flex-col gap-10 w-full justify-center"
        >
          <div className=" mx-auto flex gap-5 items-center">
            {" "}
            <input
              type="url"
              required
              placeholder="Enter your link here"
              className={`border rounded-md p-3 h-[50px] w-[672px]`}
              value={fullUrl}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFullUrl(e.target.value)
              }
            />
            <button
              onClick={toggleQrCode}
              title="Generate Qr code"
              className={`qrcode- flex items-center justify-center bg-white cursor-pointer hover:bg-slate-500 h-[40px] w-[40px]   rounded-md 
                ${fullUrl.trim() === "" ? "cursor-not-allowed" : ""}`}
              disabled={fullUrl.trim() === ""}
            >
              <img src={qrcodesolid} alt="qrcode" className="w-[20px]" />
            </button>
          </div>
        </form>

        <div className="qrcode">
          {displayQrCode && (
            <div className=" flex flex-col gap-3 items-center">
              <div className="flex gap-10 items-center">
                <div className="qr-container__qr-code" ref={qrCodeRef}>
                  {" "}
                  <QRCode
                    value={fullUrl}
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
                    {qrCodeCopied && "copied"}
                    {/* {qrCodeCopied} */}
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
