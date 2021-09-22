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
                <a href={tempLink} target="_blank" rel="noreferrer">
                  <div className="angellist"></div>
                </a>
                <a
                  href={"https://www.linkedin.com/in/cwingng/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="linkedin"></div>
                </a>
                <a href={tempLink} target="_blank" rel="noreferrer">
                  <div className="portfolio"></div>
                </a>
              </div>

              <h1 className="team-names">Winnie</h1>
              <h2 className="team-roles team-roles-winnie">Frontend</h2>
              <p className="team-descriptions">
                Nunc lobortis sed tortor vel imperdiet. Nunc velit ipsum,
                scelerisque et nibh eu, iaculis placerat lacus.
              </p>
            </div>
          </div>
          <div className="circle circle-right">
            <div className="circle-inner">
              <div className="networking-links">
                <a href={tempLink} target="_blank" rel="noreferrer">
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

              <h1 className="team-names">Julian</h1>
              <h2 className="team-roles team-roles-julian">
                Team Lead / Backend
              </h2>
              <p className="team-descriptions">
                Donec massa quam, porta non nisl vel, imperdiet faucibus arcu.
                Proin ut tortor at neque fermentum rhoncus. Duis tellus nulla,
                congue sed urna eu, tempus vehicula libero.
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
                lkajhf ladjlhe iweu iw eauie iweuadk adkljhkjf
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
                <a href={tempLink} target="_blank" rel="noreferrer">
                  <div className="portfolio"></div>
                </a>
              </div>
              <h1 className="team-names">Kira</h1>
              <h2 className="team-roles team-roles-kira">Frontend</h2>
              <p className="team-descriptions">
                Mauris sollicitudin tellus sem. Mauris sed libero eleifend nisl
                finibus malesuada at eleifend elit. Maecenas laoreet dictum
                felis volutpat pretium. Suspendisse potenti. Donec ullamcorper
                eros et lacinia congue. Nunc in odio diam. Proin tempus dui
                nibh, sed placerat nisi dapibus vitae. Sed non placerat nulla.
                Vivamus luctus et urna ut vestibulum. Sed efficitur neque
                venenatis consectetur ullamcorper. Sed id congue nibh.
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
