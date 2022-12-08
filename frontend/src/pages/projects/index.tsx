import { useRef, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Map, NavigationControl } from "maplibre-gl";

import ProjectPreviewCard from "../../components/Card/ProjectPreviewCard";

const styles = {
  root: {
    display: "flex",
    padding: "2vw",
  },
  listWrapper: {
    width: "50vw",
    height: "80vh",
    overflow: "auto",
  },
  title: {
    color: "#fff",
  },
  text: {
    marginTop: "2vh",
    marginBottom: "2vh",
    color: "#fff",
  },
  card: {
    display: "flex",
    background: "rgba(0,0,0,0.5)",
  },
  img: {
    height: "20vh",
  },
};

export default function Projects() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (mapContainerRef.current != null) {
      const map = new Map({
        container: mapContainerRef.current,
        style:
          "https://api.maptiler.com/maps/hybrid/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
        zoom: 9,
        center: [137.9150899566626, 36.25956997955441],
      });
      map.addControl(new NavigationControl({}));
    }
  });
  return (
    <Container maxWidth="lg" sx={styles.root}>
      <Box sx={styles.listWrapper}>
        <Typography variant="h2" sx={styles.title}>
          Projects
        </Typography>
        <Typography variant="body2" sx={styles.text}>
          Pachama has evaluated over 150 forest carbon projects across 14
          countries to help you identify the highest quality projects. Here,
          you'll find projects with credits currently available for purchase.
          Each project is carefully vetted by Pachama's technology and forest
          scientists to make sure your investment reduces carbon, protects
          wildlife and supports local communities.
        </Typography>
        <ProjectPreviewCard
          img={"https://images.unsplash.com/photo-1518756131217-31eb79b20e8f"}
          country={"United States"}
          location={"King Country Park"}
          description={"Improved Forest Management"}
          area={"514 hectares"}
          id={"VM0012"}
        />
        <ProjectPreviewCard
          img={"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"}
          country={"Indonesia"}
          location={"Central Peatlands"}
          description={"REDD"}
          area={"5142 hectares"}
          id={"VM0012"}
        />
      </Box>
      <div
        ref={mapContainerRef}
        style={{
          width: "40vw",
          height: "80vh",
        }}
      />
    </Container>
  );
}
