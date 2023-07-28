import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import useUser from "../../hooks/useUser";
import logo from "../../assets/images/logo-black.png";
import "./styles.css";

const BuyCreditsButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  color: "#FFFFFF",
  fontFamily: "Inter",
  fontWeight: "bold",
  borderRadius: "100px",
  background: "#000000",
  "&:hover": {
    backgroundColor: "#000000",
    borderColor: "#000000",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#000000",
    borderColor: "#000000",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const LoginButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  color: "#FFFFFF",
  fontFamily: "Inter",
  fontWeight: "bold",
  borderRadius: "100px",
  background:
    "var(--gradient-1, linear-gradient(128deg, #2A3BFB 0%, #8B36E8 100%))",
});

export default function Navigation() {
  const user = useUser();

  return (
    <div className="navigation-container">
      <div className="navigation-navbar">
        <a href="/home">
          <img
            src={`${logo}`}
            alt={"logo"}
            loading="lazy"
            className="navigation-logo"
          />
        </a>
        <div className="navigation-menu">
          <div>
            <Link href="/projects">
              <p className="navigation-menu-text">How It Works</p>
            </Link>
          </div>
          <div>
            <Link href="/projects">
              <p className="navigation-menu-text">Solutions</p>
            </Link>
          </div>
          <div>
            <Link href="/projects">
              <p className="navigation-menu-text">Use Cases</p>
            </Link>
          </div>
          <div>
            <Link href="/projects">
              <p className="navigation-menu-text">About Us</p>
            </Link>
          </div>
          <div>
            <Link href="/projects">
              <p className="navigation-menu-text">Resources</p>
            </Link>
          </div>
        </div>
        <div className="navigation-button-menu">
          <BuyCreditsButton variant="contained" disableRipple href="/login">
            Buy Credits <ArrowOutwardIcon />
          </BuyCreditsButton>
          {user != null ? (
            <LoginButton variant="contained" disableRipple href="/dashboard">
              Account
            </LoginButton>
          ) : (
            <LoginButton variant="contained" disableRipple href="/login">
              Log In <ArrowOutwardIcon />
            </LoginButton>
          )}
        </div>
      </div>
    </div>
  );
}
