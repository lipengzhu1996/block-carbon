import { Link, Element } from "react-scroll";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ProjectBriefCard from "../../components/Card/ProjectBriefCard";

import island3 from "../../assets/images/island3.jpg";
import island2 from "../../assets/images/island2.jpg";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  titleWrapper: {
    width: "40vw",
    height: "50vh",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "60vw",
    height: "30vh",
  },
  expandWrapper: {
    height: "20vh",
  },
  briefWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    position: "relative",
    top: "30vh",
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".1rem",
    color: "#ffffff",
    textDecoration: "none",
  },
};

export default function Landing() {
  return (
    <Container maxWidth="lg" sx={styles.root}>
      <Box sx={styles.titleWrapper}>
        <Typography variant="h1" noWrap component="a" sx={styles.title}>
          The Most Popular <br /> Carbon Market
        </Typography>
      </Box>
      <Box sx={styles.buttonWrapper}>
        <Button variant="outlined" size="large" sx={{ width: "40%" }}>
          Landowners
        </Button>
        <Button variant="outlined" size="large" sx={{ width: "40%" }}>
          Carbon Buyers
        </Button>
      </Box>
      <Box sx={styles.expandWrapper}>
        <Link
          activeClass="active"
          to="project-briefs"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <IconButton>
            <ExpandMoreIcon sx={{ color: "#ffffff", fontSize: 60 }} />
          </IconButton>
        </Link>
      </Box>
      <Element name="project-briefs">
        <Box sx={styles.briefWrapper}>
          <ProjectBriefCard
            image={island3}
            title={"Mangrove in Bangladesh"}
            description={
              "We filter out area of interest (AOI) by leveraing AI to read terabyte btypes of satellite images. In this project, we identify locations that found to have mangrove growth between year 1999 and 2019."
            }
          />
          <ProjectBriefCard
            image={island2}
            title={"Mango in Honolulu"}
            description={
              "We filter out area of interest (AOI) by leveraing AI to read terabyte btypes of satellite images. In this project, we identify locations that found to have mangrove growth between year 1999 and 2019."
            }
          />
        </Box>
      </Element>
    </Container>
  );
}
