import React, { CSSProperties } from "react";

import background from "../../assets/images/homepage-background.jpg";

const rootStyles: CSSProperties = {
  minHeight: "200vh",
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "fixed",
  top: 0,
  width: "100%",
};

export default function Landing() {
  return <div style={rootStyles}></div>;
}
