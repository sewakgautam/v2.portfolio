import { useEffect, useState } from "react";
import "./App.css";

import {
  GithubFilled,
  CodepenCircleFilled,
  LinkedinFilled,
} from "@ant-design/icons";
function App() {
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setGlowPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="leftPanel">
          <div className="upperLeftPanel">
            <p className="title">Sewak Gautam</p>
            <p className="designation">Full Stack Developer</p>
            <p className="subtitle">
              Curious about what's happening? <br />
              By the way, he’s not yet a full stack developer. Let him complete
              this first, and then we can consider it.
            </p>
            <p className="subtitle">
              A new year brings a new place and a new version, with exciting
              development underway !!!
            </p>
          </div>
          <div className="lowerLeftPanel">
            <p className="subtitle">
              Ignore these icons; they are not going to work! !!!
            </p>
            <a>
              <GithubFilled />
              <LinkedinFilled />
              <CodepenCircleFilled />
            </a>
          </div>
        </div>
        <div className="rightPanel">
          <p>
            Wanna go back to Previous Version ?{" "}
            <a href="https://v2.sewakgautam.com.np" target="_blank">
              version 1.0
            </a>
          </p>
        </div>
      </div>
      <div
        className="glow"
        style={{
          top: `${glowPosition.y}px`,
          left: `${glowPosition.x}px`,
        }}
      ></div>
    </>
  );
}

export default App;
