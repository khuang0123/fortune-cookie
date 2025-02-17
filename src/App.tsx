import { useState } from "react";
import cookieImage from "/fortune_cookie.png";
import cookieImage1 from "/cookie1.png";
import cookieImage2 from "/cookie2.png";
import cookieImage3 from "/cookie3.png";
import fortuneList from "./fortunes.json";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [imageSrc, setImageSrc] = useState(cookieImage);

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
  };

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
      let index = Math.floor(Math.random()*15);
      return <h2>{fortuneList[index]}</h2>;
    } 
  };
  return (
    <>
      {renderCookie()}
      <p className="read-the-docs">Keep clicking to crack the fortune cookie</p>
    </>
  );
}

export default App;
