import React, { useState, useEffect } from "react";
import Logo from "./logo.svg";
import India from "./india.png";

let globalLink = "https://play.google.com/store/apps/details?id=co.iron.nobtg";

const App = () => {
  const [qrValue, setQrValue] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");

  useEffect(() => {
    setQrValue(globalLink);
  }, []);

  const handleCopyText = () => {
    navigator.clipboard
      .writeText(globalLink)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const handleShare = (e) => {
    e.preventDefault();
    if (whatsappNumber) {
      const message = encodeURIComponent(globalLink);
      const url = `https://wa.me/${whatsappNumber}?text=${message}`;
      window.open(url, "_blank");
    } else {
      alert("Please enter a WhatsApp number.");
    }
  };

  return (
    <>
      <div className="wrapper">
        {/* Header */}
        <div className="header">
          <a href={globalLink} className="logo-link">
            <img className="logo" src={Logo} alt="logo" />
            <h1 className="head">Nk's Education Share</h1>
          </a>
        </div>

        {/* QR-Code */}
        <p className="qr-text">Scan Below QR To Download Application</p>
        {qrValue && (
          <div className="qr-code">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`}
              alt="QR code"
            />
          </div>
        )}

        {/* Download Link */}
        <div className="download-div">
          <p className="download-text">
            Download Application :
            <a href={globalLink} className="link">
              &nbsp;NK's Education
            </a>
          </p>
        </div>

        {/* Copy Link */}
        <div className="copy" onClick={handleCopyText}>
          <p className="copy-text">
            {globalLink} &nbsp;&nbsp;
            <i className="fa fa-copy" aria-hidden="true"></i>
          </p>
        </div>

        {/* WhatsApp Share */}
        <div className="form-div">
          <form onSubmit={handleShare}>
            <span className="flag">
              <img src={India} alt="logo" className="flag-logo" />
              &nbsp;+91
            </span>
            <input
              className="phone"
              type="number"
              placeholder="WhatsApp Number"
              maxLength={10}
              minLength={10}
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              max={500}
              min={400}
            />
            <button className="btn" type="submit">
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
              &nbsp;Share
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export const updateglobalLink = (newText) => {
  globalLink = newText;
};

export default App;
