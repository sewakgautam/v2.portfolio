import { useEffect, useState } from "react";
import "./App.css";
import melogo from "./assets/meSewak.png";

function App() {
  const [textIndex, setTextIndex] = useState(0);
  const textArray = [
    "Sewak",
    "gautam",
    "Node.Js",
    "React",
    "Python",
    "Javascript",
    "Figma",
    "Matlab",
    "Html",
    "Css",
    "ant.d",
    "Sql",
    "AWS",
    "AZURE",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [textArray.length]);

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="text-overlay">
            <h1 key={textArray[textIndex]} className="background-text">
              {textArray[textIndex]}
            </h1>
          </div>
          <div className="introContent">
            <img className="swk" src={melogo}></img>

            <div className="intro">{/* <h1>Sewak Gautam .</h1> */}</div>
          </div>
        </div>
        <p className="flirt">
          No worries at all, but just a heads-up—we’re in the middle of a major
          site upgrade right now. I promise it’ll be worth the wait! 😉 But if
          it’s super urgent, you know where to find me. I’m just a message away,
          ready to help in any way I can. Don’t be shy!
        </p>
        <a href="https://v2.sewakgautam.com.np">
          <p>
            By the way, you can always revisit the old site if you’re feeling
            nostalgic.
          </p>
        </a>{" "}
        <p>Go ahead and click above ☝️ , I promise it'll be worth it! 😉</p>
      </div>
    </>
  );
}

export default App;
