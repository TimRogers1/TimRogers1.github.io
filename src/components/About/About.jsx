
import "./about.scss";


export default function Portfolio() {


  return (
        <div className="portfolio" id="portfolio">
          <h1 className="header">About</h1>
          <h4 className="text">
              I am a Frontend React JS developer who has 3+ years experience in making responsive websites. I have worked in multiple projects and have good expertise in frontend development.
              I have good knowledge with ES6 functions, Higher Order Components, Redux etc.,
              I am looking forward to solve challenging frontend problems.
          </h4>
          <div className="icons" style={{height: '200px'}}>
              <img src="https://gautham-portfolio.netlify.app/static/media/react.e248476c.svg" alt="react"/>
              <img src="https://gautham-portfolio.netlify.app/static/media/redux.0e4fb1c8.svg" alt="react"/>
              <img src="https://gautham-portfolio.netlify.app/static/media/javascript.19600440.svg" alt="react"/>
              <img src="https://gautham-portfolio.netlify.app/static/media/html-5.8ae3d4ad.svg" alt="react"/>
          </div>
        </div>
        
  );
}
