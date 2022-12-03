import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const styles = {
  footerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    height: "10vh",
    margin: "0 auto",
  },
};

export default function Footer() {
  return (
    <Container maxWidth="lg">
      <Toolbar disableGutters style={styles.footerWrapper}>
        <Typography
          color="#ffffff"
          component="p"
          variant="caption"
          gutterBottom={false}
        >
          © 2022 BlockCarbon All rights reserved.
        </Typography>
        <Box>
          <Grid container spacing={0}>
            <Grid item xs="auto">
              <IconButton aria-label="Example">
                <EmailIcon sx={{ color: "#ffffff" }} />
              </IconButton>
            </Grid>
            <Grid item xs="auto">
              <IconButton aria-label="Example">
                <FacebookIcon sx={{ color: "#ffffff" }} />
              </IconButton>
            </Grid>
            <Grid item xs="auto">
              <IconButton aria-label="Example">
                <InstagramIcon sx={{ color: "#ffffff" }} />
              </IconButton>
            </Grid>
            <Grid item xs="auto">
              <IconButton aria-label="Example">
                <GitHubIcon sx={{ color: "#ffffff" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </Container>
  );
}
