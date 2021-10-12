import React from "react";

class About extends React.Component {
  render() {
    const tempLink = "https://github.com/alexsaintlam/AdoptADog";

    return (
      <div className="about-container">
        <div id="repo-link">
          <a
            href="https://github.com/alexsaintlam/AdoptADog"
            target="_blank"
            rel="noreferrer"
          >
            Project GitHub Repo
          </a>
        </div>

        <div className="circle-container">
          <div className="circle circle-left">
            <div className="circle-inner">
              <div className="networking-links">
                <a
                  href={"https://github.com/WinnieNg3210"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="github"></div>
                </a>
                <a href={"https://angel.co/winnie-ng-2"} target="_blank" rel="noreferrer">
                  <div className="angellist"></div>
                </a>
                <a
                  href={"https://www.linkedin.com/in/cwingng/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="linkedin"></div>
                </a>
                <a href={"https://www.winnieng.dev/"} target="_blank" rel="noreferrer">
                  <div className="portfolio"></div>
                </a>
              </div>

              <h1 className="team-names">Winnie</h1>
              <h2 className="team-roles team-roles-winnie">Frontend</h2>
              <p className="team-descriptions">
                Hi! I'm a software engineer based in NYC. I am currently
                looking for a fullstack or frontend developer role either remote or NYC. 
                <br /><br />
                Coding aside, I love to draw, read and write during my spare time while enjoying an ice cold vanilla latte.
              </p>
            </div>
          </div>
          <div className="circle circle-right">
            <div className="circle-inner">
              <div className="networking-links">
                <a href={"https://github.com/Juka1031"} target="_blank" rel="noreferrer">
                  <div className="github"></div>
                </a>
                <a href={"https://angel.co/u/julian-kang-1"} target="_blank" rel="noreferrer">
                  <div className="angellist"></div>
                </a>
                <a href={"https://www.linkedin.com/in/julian-kang-09b561221/"} target="_blank" rel="noreferrer">
                  <div className="linkedin"></div>
                </a>
                <a href={"https://julian-kang.com/"} target="_blank" rel="noreferrer">
                  <div className="portfolio"></div>
                </a>
              </div>

              <h1 className="team-names">Julian</h1>
              <h2 className="team-roles team-roles-julian">
                Team Lead / Backend
              </h2>
              <p className="team-descriptions">
                How's it going! I'm a software engineer based in the NYC area. Currently looking for
                a position as a fullstack developer, frontend/backend engineer, or UI/UX designer.
                <br /><br />
                When I am not coding, I am either reading, hiking, or cooking.
              </p>
            </div>
          </div>
        </div>

        <div className="circle-container">
          <div className="circle circle-left">
            <div className="circle-inner">
              <div className="networking-links">
                <a
                  href={"https://github.com/alexsaintlam"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="github"></div>
                </a>
                <a href={tempLink} target="_blank" rel="noreferrer">
                  <div className="angellist"></div>
                </a>
                <a href={tempLink} target="_blank" rel="noreferrer">
                  <div className="linkedin"></div>
                </a>
                <a href={tempLink} target="_blank" rel="noreferrer">
                  <div className="portfolio"></div>
                </a>
              </div>
              <h1 className="team-names">Alex</h1>
              <h2 className="team-roles team-roles-alex">Backend / Flex</h2>
              <p className="team-descriptions">
                Hello! I'm a software engineer based in NYC.  I am currently
                looking for a developer role either remote or in NYC.
                <br/><br /> 
                Outside of coding, I love to travel, boulder, hike, and scuba dive!
              </p>
            </div>
          </div>

          <div className="circle circle-right">
            <div className="circle-inner">
              <div className="networking-links">
                <a
                  href={"https://github.com/kierxin"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="github"></div>
                </a>
                <a
                  href={"https://angel.co/u/keeruh"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="angellist"></div>
                </a>
                <a
                  href={"https://www.linkedin.com/in/kiraporter"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="linkedin"></div>
                </a>
                <a href={"https://kierxin.github.io/Kira-Porter-Portfolio/"} target="_blank" rel="noreferrer">
                  <div className="portfolio"></div>
                </a>
              </div>
              <h1 className="team-names">Kira</h1>
              <h2 className="team-roles team-roles-kira">Frontend</h2>
              <p className="team-descriptions">
                Hello! I'm a Boston-based engineer looking for a frontend or full-stack role in NYC, Boston, Philly, or the Bay Area.
                <br/><br /> 
                In addition to coding, I love dancing, hiking, creative writing, and food!
              </p>
            </div>
          </div>
        </div>
      </div>
      // </div>
      //   </div>
    );
  }
}

export default About;
