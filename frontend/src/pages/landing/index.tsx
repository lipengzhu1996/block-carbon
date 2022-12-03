import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from '@mui/material/Collapse';
import IconButton from "@mui/material/IconButton";
import Scroll from "@mui/material/Scroll";
import Visibility from "@mui/icons-material/Visibility";

const styles = {
  collapse:{
    textAlign: "center",
  }
}

export default function Landing() {
  return (
    <div>
      <Box
        sx={{
          width: 300,
          height: 1200,
          background: "none",
        }}
      />
    </div>
  );
}
