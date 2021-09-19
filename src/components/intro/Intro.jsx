import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer"],
    });
  }, []);
  

  return (
    <div className="intro" id="intro" style={{marginTop:150}}>
      <div className="main">
      <div className="right">
        <div className="wrapper">
          <h2>Hi! there, I'm</h2>
          <h1>Tim Rogers</h1>
          <h3>
            React JS <span ref={textRef}></span>
          </h3>
        <div className="social" style={{}}>
          <img src="https://gautham-portfolio.netlify.app/static/media/github.b2294bcc.svg" alt="" onClick={() => window.open(`https://github.com/TimRogers1`)}/>
          <img src="https://gautham-portfolio.netlify.app/static/media/linkedin.c304a414.svg" alt="" onClick={() => window.open(`https://www.linkedin.com/in/tim-rogers-2b98b31a7/`)}/>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}




