import { useState } from "react";
import cookieImage from "/fortune_cookie.png";
import cookieImage1 from "/cookie1.png";
import cookieImage2 from "/cookie2.png";
import cookieImage3 from "/cookie3.png";
import fortuneList from "./fortunes.json";
import slip from "/slip.png";
import home from "/home.png";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [imageSrc, setImageSrc] = useState(cookieImage);
  const [imageHome, setImageHome] = useState(home);

  const handleClick = () => {
    setCount((count) => {
      if (count < 4) {
        return count + 1;
      } else {
        return count;
      }
    });
    if (count + 1 == 1) {
      setImageSrc(cookieImage1);
    }
    if (count + 1 == 2) {
      setImageSrc(cookieImage2);
    }
    if (count + 1 == 3) {
      setImageSrc(cookieImage3);
    }
    if (count + 1 == 4) {
      setImageSrc(slip);
      setImageHome(home);
    } 
  };

  const homeClick = () => {
    setCount(0);
    setImageSrc(cookieImage);
  }

  const renderCookie = () => {
    if (count < 4) {
      return (
        <div>
          <img
            src={imageSrc}
            className="logo"
            alt="Fortune Cookie"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          />
        </div>
      );
    } else {
      let index = Math.floor(Math.random() * 99);
      return (
        <div style={{ position: "relative", display: "inline-block" }}>
          {/* Image */}
          <img src={imageSrc} className="slip" alt="Slip" />

          {/* Overlayed Text */}
          <h2
            style={{
              position: "absolute",
              top: "51%", // Center vertically
              left: "50%", // Center horizontally
              transform: "translate(-50%, -50%)", // Adjust for exact centering
              color: "white",
              fontFamily: "'Caveat'",
              backgroundColor: "rgba(255, 255, 255, 0)", // Semi-transparent background for readability
              padding: "10px",
              borderRadius: "5px",
              fontSize: "20px",
              fontWeight: "bold",
              width: "70%",
            }}
          >
            {fortuneList[index]}
          </h2>

          <img src={imageHome} className="button" onClick={homeClick} style={{ cursor: "pointer" }} alt="Home" />

        </div>
      );
    }
  };
  return (
    <>
      {renderCookie()}
      <p className="read-the-docs" style={{fontFamily: "'Caveat'"}}>Keep clicking to crack the fortune cookie</p>
    </>
  );
}

export default App;
