import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
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
    margin: "0 auto",
  },
};

const Item = styled(Paper)(({ theme }) => ({
  background: "none",
  padding: theme.spacing(1),
  textAlign: "center",
}));

export default function Footer() {
  return (
    <Container maxWidth="lg">
      <Toolbar disableGutters style={styles.footerWrapper}>
        <Typography
          color="textSecondary"
          component="p"
          variant="caption"
          gutterBottom={false}
        >
          © 2022 BlockCarbon All rights reserved.
        </Typography>
        <Box>
          <Grid container spacing={0}>
            <Grid item xs="auto">
              <Item elevation={0}>
                <IconButton aria-label="Example">
                  <EmailIcon />
                </IconButton>
              </Item>
            </Grid>
            <Grid item xs="auto">
              <Item elevation={0}>
                <IconButton aria-label="Example">
                  <FacebookIcon />
                </IconButton>
              </Item>
            </Grid>
            <Grid item xs="auto">
              <Item elevation={0}>
                <IconButton aria-label="Example">
                  <InstagramIcon />
                </IconButton>
              </Item>
            </Grid>
            <Grid item xs="auto">
              <Item elevation={0}>
                <IconButton aria-label="Example">
                  <GitHubIcon />
                </IconButton>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </Container>
  );
}
