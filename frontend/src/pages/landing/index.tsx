import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import trust from "../../assets/images/trust.png";
import diagram1 from "../../assets/images/Diagram 01.png";
import diagram2 from "../../assets/images/Diagram 02.png";

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
    <div className="landing-container">
      <div className="landing-frame1">
        <div className="landing-title-container">
          <p className="landing-title-text">Unlock</p>
          <p className="landing-title-gradient-text">Global Market</p>
          <p className="landing-title-text">For Asia</p>
          <p className="landing-title-gradient-text">Climate Assets</p>
        </div>
        <div className="landing-subtitle-container">
          <p className="landing-subtitle-text">
            BlockCarbon is a technology-driven platform to support the
            development of high-quality carbon credits and bridge them with the
            global market.
          </p>
        </div>
      </div>
      <div className="landing-frame2">
        <ExploreButton>
          Explore More <ArrowOutwardIcon />
        </ExploreButton>
      </div>
      <div className="landing-frame3">
        <p className="landing-subtitle-text">Trusted By</p>
        <img src={`${trust}`} alt={"trust"} loading="lazy" />
      </div>
      <div className="landing-frame4">
        <div className="landing-frame4-text-container">
          <p className="landing-heading1-gradient-text">
            Why Climate Change Has Been Such Important and Urgent?
          </p>
        </div>
        <div className="landing-frame4-diagram-container">
          <img src={`${diagram1}`} alt={"diagram"} loading="lazy" />
        </div>
      </div>
      <div className="landing-frame4">
        <div className="landing-frame4-text-container">
          <p className="landing-heading1-gradient-text">
            Why Climate Change Has Been Such Important and Urgent?
          </p>
        </div>
        <div className="landing-frame4-diagram-container">
          <img src={`${diagram2}`} alt={"diagram"} loading="lazy" />
        </div>
      </div>
      <div className="landing-frame5">
        <div className="landing-frame5-title">
          <p className="landing-frame5-title-gradient-text">
            Nature-based Solutions (NbS) offer integrative strategies to reduce
            climate risks, while providing a range of other benefits
          </p>
        </div>
        <div className="landing-frame5-content">
          <div className="landing-frame5-left-content">
            <p className="landing-frame5-left-content-heading-gradient-text">
              NbS can provide 37% of the mitigation needed until 2030 to achieve
              the targets of the Paris Agreement.
            </p>
            <p className="landing-frame5-left-content-gradient-text">
              NbS address the climate and biodiversity crises in a synergetic
              and cost-effective manner.
            </p>
            <p className="landing-frame5-left-content-gradient-text">
              NbS save developing countries $393 bln against the economic cost
              of climate change by 2050.
            </p>
          </div>
          <div className="landing-frame5-right-content">
            <div className="landing-frame5-right-content-card-container">
              <p className="landing-frame5-right-content-card-heading-text">
                Afforestation & Reforestation
              </p>
              <p className="landing-frame5-right-content-card-text">
                Planting trees or allowing trees to regrow
              </p>
            </div>
            <div className="landing-frame5-right-content-card-container">
              <p className="landing-frame5-right-content-card-heading-text">
                Agricultural Soil Carbon Sequestration
              </p>
              <p className="landing-frame5-right-content-card-text">
                Use best practices that are known to hold carbon in the soil
              </p>
            </div>
            <div className="landing-frame5-right-content-card-container">
              <p className="landing-frame5-right-content-card-heading-text">
                Mangrove Blue Carbon
              </p>
              <p className="landing-frame5-right-content-card-text">
                Build up large stocks of organic carbon in the coastal zone
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
