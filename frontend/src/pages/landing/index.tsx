import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import trust from "../../assets/images/trust.png";
import diagram1 from "../../assets/images/Diagram 01.png";
import diagram2 from "../../assets/images/Diagram 02.png";
import solutions from "../../assets/images/solutions.png";
import usecase1 from "../../assets/images/usecase1.png";
import usecase2 from "../../assets/images/usecase2.png";
import usecase3 from "../../assets/images/usecase3.png";

import landing from "../../assets/videos/landing.webm";

import "./styles.css";

const ExploreButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  color: "#FFFFFF",
  fontFamily: "Inter",
  fontWeight: "bold",
  borderRadius: "100px",
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  background: "#000000",
  borderColor: "#000000",
  width: "216px",
  height: "42px",
  "&:hover": {
    backgroundColor: "#000000",
    borderColor: "#FFFFFF",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#000000",
    borderColor: "#FFFFFF",
  },
  "&:focus": {
    borderColor: "#FFFFFF",
  },
});

export default function Landing() {
  const [selectedCard, setSelectedCard] = useState(1);
  const [selectedTab, setSelectedTab] = useState(1);

  const getSelectedTab = (selectedTab: number) => {
    switch (selectedTab) {
      case 1:
      default:
        return (
          <div className="landing-frame9-content-container">
            <div className="landing-frame9-content-text-container">
              <p className="landing-frame9-title-text">
                Identification and Verification of Mangrove in Bangladesh
              </p>
              <p className="landing-frame9-description-text">
                Identification of 1200+ locations of mangrove-based sites in
                Bangladesh. And for a given identified location, the time frame
                of the plantings will be extrapolated by the AI algorithm. The
                information will greatly help customer to determine which
                forestlands are most suitable to be developed into carbon
                credits.
              </p>
            </div>
            <div className="landing-frame9-content-image-container">
              <img
                src={`${usecase1}`}
                alt={"diagram"}
                loading="lazy"
                className="landing-frame9-image"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="landing-frame9-content-container">
            <div className="landing-frame9-content-text-container">
              <p className="landing-frame9-title-text">
                Identification and Verification of Carbon Credit Assets -
                Avoided Conversion
              </p>
              <p className="landing-frame9-description-text">
                Al algorithm was trained to detect the risk of deforestation, an
                opportunity to turn it into an asset of carbon avoidance.
              </p>
            </div>
            <div className="landing-frame9-content-image-container">
              <img
                src={`${usecase2}`}
                alt={"diagram"}
                loading="lazy"
                className="landing-frame9-image"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="landing-frame9-content-container">
            <div className="landing-frame9-content-text-container">
              <p className="landing-frame9-title-text">
                Identification and Verification of Individual Tree in a Forestry
                Project
              </p>
              <p className="landing-frame9-description-text">
                Our algorithm is able to recognize crown for Individual tree in
                a forestry project, generate biomass information, and then
                calculate the amount of the carbon sink of the project.
              </p>
            </div>
            <div className="landing-frame9-content-image-container">
              <img
                src={`${usecase3}`}
                alt={"diagram"}
                loading="lazy"
                className="landing-frame9-image"
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="container">
      <div className="video-container">
        <video autoPlay loop muted id="video" className="video">
          <source src={landing} type="video/webm" />
        </video>
      </div>
      <div className="landing-container">
        <div className="landing-frame1">
          <div className="landing-title-container">
            <p className="landing-title-text">Unlock</p>
            <p className="landing-title-gradient-text">Global Market</p>
            <p className="landing-title-text">
              For <span className="landing-title-gradient-text">Asia</span>
            </p>
            <p className="landing-title-gradient-text">Climate Assets</p>
          </div>
        </div>
        <div className="landing-frame2">
          <div className="landing-frame2-description">
            <div className="landing-frame2-description-container">
              <p className="landing-frame2-description-text">
                <span className="landing-frame2-highlight-text">
                  BlockCarbon
                </span>{" "}
                is a technology-driven platform to support the development of
                high-quality carbon credits and bridge them with the global
                market.
              </p>
            </div>
            <div className="landing-frame2-source-container">
              <p className="landing-frame2-source-text">
                Source: Atmospheric Carbon Dioxide Tagged by Source
              </p>
              <p className="landing-frame2-source-text">
                https://svs.gsfc.nasa.gov/5110
              </p>
            </div>
          </div>
        </div>
        <div className="landing-frame3">
          <p className="landing-frame3-text">Trusted By</p>
          <img
            src={`${trust}`}
            alt={"trust"}
            loading="lazy"
            className="landing-frame3-image"
          />
        </div>
        {/* <div className="landing-frame7">
          <section id="sect1">
            <img
              src={`${diagram1}`}
              alt={"diagram"}
              loading="lazy"
              style={{ height: "100vh", padding: "20vh" }}
            />
          </section>
          <section id="sect2">
            <img
              src={`${diagram2}`}
              alt={"diagram"}
              loading="lazy"
              style={{ height: "100vh", padding: "20vh" }}
            />
          </section>
        </div> */}
        <div className="landing-frame4">
          <div className="landing-frame4-text-container">
            <p className="landing-frame4-heading1-text">
              Why{" "}
              <span className="landing-frame4-heading1-gradient-text">
                Climate Change
              </span>{" "}
              Has Been Such{" "}
              <span className="landing-frame4-heading1-gradient-text">
                Important and Urgent?
              </span>
            </p>
            <p className="landing-frame4-p1-text">
              400 gigatons is our carbon emission budget to limit the global
              warming to 1.5C
            </p>
            <p className="landing-frame4-p2-text">
              Most of the countries have pledged net-zero emission targets
            </p>
          </div>
          <div className="landing-frame4-diagram-container">
            <img src={`${diagram1}`} alt={"diagram"} loading="lazy" />
          </div>
        </div>
        <div className="landing-frame4">
          <div className="landing-frame4-text-container">
            <p className="landing-frame4-heading1-text">
              Why{" "}
              <span className="landing-frame4-heading1-gradient-text">
                Climate Change
              </span>{" "}
              Has Been Such{" "}
              <span className="landing-frame4-heading1-gradient-text">
                Important and Urgent?
              </span>
            </p>
            <p className="landing-frame4-p1-text">
              400 gigatons is our carbon emission budget to limit the global
              warming to 1.5C
            </p>
            <p className="landing-frame4-p2-text">
              Most of the countries have pledged net-zero emission targets
            </p>
          </div>
          <div className="landing-frame4-diagram-container">
            <img src={`${diagram2}`} alt={"diagram"} loading="lazy" />
          </div>
        </div>
        <div className="landing-frame5">
          <div className="landing-frame5-title">
            <p className="landing-frame5-title-text">
              <span className="landing-frame5-title-gradient-text">
                Nature-based Solutions (NbS)
              </span>{" "}
              offer integrative strategies to reduce climate risks, while
              providing a range of other benefits
            </p>
          </div>
          <div className="landing-frame5-content">
            <div className="landing-frame5-left-content">
              <p
                className={
                  selectedCard === 1
                    ? "landing-frame5-left-content-highlight-text"
                    : "landing-frame5-left-content-normal-text"
                }
              >
                NbS can provide{" "}
                <span className="landing-frame5-left-content-gradient-text">
                  37%
                </span>{" "}
                of the mitigation needed until 2030 to achieve the targets of
                the Paris Agreement.
              </p>
              <p
                className={
                  selectedCard === 2
                    ? "landing-frame5-left-content-highlight-text"
                    : "landing-frame5-left-content-normal-text"
                }
              >
                NbS address the climate and{" "}
                <span className="landing-frame5-left-content-gradient-text">
                  biodiversity
                </span>{" "}
                crises in a synergetic and cost-effective manner.
              </p>
              <p
                className={
                  selectedCard === 3
                    ? "landing-frame5-left-content-highlight-text"
                    : "landing-frame5-left-content-normal-text"
                }
              >
                NbS save developing countries{" "}
                <span className="landing-frame5-left-content-gradient-text">
                  $393
                </span>{" "}
                bln against the economic cost of climate change by 2050.
              </p>
            </div>
            <div className="landing-frame5-right-content">
              <div
                className="landing-frame5-right-content-card-container first"
                onMouseOver={() => {
                  setSelectedCard(1);
                }}
              >
                <p
                  className="landing-frame5-right-content-card-heading-text"
                  style={{ color: "#2a3bfb" }}
                >
                  Afforestation & Reforestation
                </p>
                <p className="landing-frame5-right-content-card-text">
                  Planting trees or allowing trees to regrow
                </p>
              </div>
              <div
                className="landing-frame5-right-content-card-container second"
                onMouseOver={() => {
                  setSelectedCard(2);
                }}
              >
                <p
                  className="landing-frame5-right-content-card-heading-text"
                  style={{ color: "#00F4FE" }}
                >
                  Agricultural Soil Carbon Sequestration
                </p>
                <p className="landing-frame5-right-content-card-text">
                  Use best practices that are known to hold carbon in the soil
                </p>
              </div>
              <div
                className="landing-frame5-right-content-card-container third"
                onMouseOver={() => {
                  setSelectedCard(3);
                }}
              >
                <p
                  className="landing-frame5-right-content-card-heading-text"
                  style={{ color: "#8B36E8" }}
                >
                  Mangrove Blue Carbon
                </p>
                <p className="landing-frame5-right-content-card-text">
                  Build up large stocks of organic carbon in the coastal zone
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-frame6">
          <div className="landing-frame6-left-content">
            <p className="landing-frame5-left-content-highlight-text">
              Asia lacks cutting-edge technical infrastructure to play its
            </p>
            <p className="landing-frame5-title-gradient-text">
              "Global manufacturer of carbon credits" role.
            </p>
          </div>
          <div className="landing-frame6-right-content">
            <div className="landing-frame6-right-content-card-container">
              <p className="landing-frame5-right-content-card-heading-text">
                · Lack of Data and Tools
              </p>
              <p className="landing-frame5-right-content-card-text">
                Developers reply on{" "}
                <span style={{ color: "#2A3BFB" }}>outdated methods</span> to
                identify, measure, report, and verify projects
              </p>
            </div>
            <div className="landing-frame6-right-content-card-container">
              <p className="landing-frame5-right-content-card-heading-text">
                · Lack of Access to Global Market
              </p>
              <p className="landing-frame5-right-content-card-text">
                There are{" "}
                <span style={{ color: "#00F4FE" }}>limited resources</span>{" "}
                supporting cross-boarder project development and{" "}
                <span style={{ color: "#00F4FE" }}>limited channels</span> to
                sell credits globally
              </p>
            </div>
            <div className="landing-frame6-right-content-card-container">
              <p className="landing-frame5-right-content-card-heading-text">
                · Lack of High-quality Credits
              </p>
              <p className="landing-frame5-right-content-card-text">
                Projects are developed into{" "}
                <span style={{ color: "#8B36E8" }}>
                  local credits or low-quality credits
                </span>{" "}
                (less traceable, hard to monitor, and ambiguous calculations)
              </p>
            </div>
          </div>
        </div>
        <div className="landing-frame8">
          <p className="landing-frame8-heading-text">BlockCarbon Solutions</p>
          <p className="landing-frame8-subtitle-text">
            Use data and technology to create a new narrative for Asia’s
            nature-based carbon credits projects
          </p>
          <img
            src={`${solutions}`}
            alt={"diagram"}
            loading="lazy"
            className="landing-frame8-image"
          />
          <div className="landing-frame8-cards-container">
            <div className="landing-frame5-right-content-card-container">
              <p className="landing-frame5-right-content-card-heading-text">
                <span style={{ color: "#2A3BFB" }}>Predict</span> Carbon Storage
                Capability
              </p>
              <p className="landing-frame5-right-content-card-text">
                Selecting projects that generate sufficient credit
              </p>
            </div>
            <div className="landing-frame5-right-content-card-container">
              <p className="landing-frame5-right-content-card-heading-text">
                <span style={{ color: "#ADF400" }}>Customized</span> Monitoring
              </p>
              <p className="landing-frame5-right-content-card-text">
                Providing monitoring and management during the lifecycle
              </p>
            </div>
            <div className="landing-frame5-right-content-card-container">
              <p className="landing-frame5-right-content-card-heading-text">
                Increase the <span style={{ color: "#00F4FE" }}>Liquidity</span>
              </p>
              <p className="landing-frame5-right-content-card-text">
                Fully exploiting the price advantage of carbon credits in Asia
              </p>
            </div>
            <div className="landing-frame5-right-content-card-container">
              <p className="landing-frame5-right-content-card-heading-text">
                Improve the <span style={{ color: "#8B36E8" }}>Quality</span> of
                the Credits
              </p>
              <p className="landing-frame5-right-content-card-text">
                Ensure all calculations are accurate and reliable, create a
                unique narrative for each project
              </p>
            </div>
          </div>
        </div>
        <div className="landing-frame9">
          <p className="landing-frame9-title-text">Use Cases</p>
          <div className="landing-frame9-button-container">
            <ExploreButton
              onClick={() => {
                setSelectedTab(1);
              }}
            >
              Blue Carbon
            </ExploreButton>
            <ExploreButton
              onClick={() => {
                setSelectedTab(2);
              }}
            >
              Avoided Conversion
            </ExploreButton>
            <ExploreButton
              onClick={() => {
                setSelectedTab(3);
              }}
            >
              Forestry
            </ExploreButton>
          </div>
          {getSelectedTab(selectedTab)}
        </div>
      </div>
    </div>
  );
}
