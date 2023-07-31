import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import trust from "../../assets/images/trust.png";
import diagram1 from "../../assets/images/Diagram 01.png";
import diagram2 from "../../assets/images/Diagram 02.png";

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
  borderColor: "#FFFFFF",
  width: "285px",
  height: "54px",
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
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export default function Landing() {
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
          <ExploreButton>
            Explore More <ArrowOutwardIcon />
          </ExploreButton>
          <div className="landing-frame2-description">
            <div className="landing-frame2-description-container">
              <p className="landing-frame2-description-text">
                <span style={{ fontWeight: "700" }}>BlockCarbon</span> is a
                technology-driven platform to support the development of
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
              <p className="landing-frame5-left-content-p1-text">
                NbS can provide{" "}
                <span className="landing-frame5-left-content-p1-gradient-text">
                  37%
                </span>{" "}
                of the mitigation needed until 2030 to achieve the targets of
                the Paris Agreement.
              </p>
              <p className="landing-frame5-left-content-p2-text">
                NbS address the climate and{" "}
                <span className="landing-frame5-left-content-p2-gradient-text">
                  biodiversity
                </span>{" "}
                crises in a synergetic and cost-effective manner.
              </p>
              <p className="landing-frame5-left-content-p2-text">
                NbS save developing countries{" "}
                <span className="landing-frame5-left-content-p2-gradient-text">
                  $393
                </span>{" "}
                bln against the economic cost of climate change by 2050.
              </p>
            </div>
            <div className="landing-frame5-right-content">
              <div className="landing-frame5-right-content-card-container">
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
              <div className="landing-frame5-right-content-card-container">
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
              <div className="landing-frame5-right-content-card-container">
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
            <p className="landing-frame5-left-content-p1-text">
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
      </div>
    </div>
  );
}
