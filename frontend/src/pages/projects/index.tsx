import { useRef, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { LngLatLike, Map, Marker, NavigationControl } from "maplibre-gl";
import ReactDOM from "react-dom";

import "./styles.css";

import ProjectPreviewCard from "../../components/Card/ProjectPreviewCard";
import DropletMarker from "../../components/DropletMarker";

const styles = {
  root: {
    display: "flex",
    padding: "2vw",
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
  mapWrapper: {
    width: "50vw",
    height: "80vh",
    borderRadius: "25px",
    boxShadow: "0 0 10px black",
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
      map.addControl(new NavigationControl({}), "top-right");
      [
        [137.8, 36.3],
        [137.9150899566626, 36.25956997955441],
      ].forEach((location) => {
        const markerEl = document.createElement("div");
        ReactDOM.render(
          <DropletMarker
            onClick={() => {
              const divToScrollTo = document.getElementById("project-2");
              if (divToScrollTo) {
                divToScrollTo.scrollIntoView();
              }
            }}
          />,
          markerEl
        );
        new Marker(markerEl).setLngLat(location as LngLatLike).addTo(map);
      });
    }
  });
  return (
    <div style={styles.root}>
      <div className="list-wrapper">
        <div className="scrollable-wrapper">
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
          <div id="project-1">
            <ProjectPreviewCard
              img={
                "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f"
              }
              country={"United States"}
              location={"King Country Park"}
              description={"Improved Forest Management"}
              area={"514 hectares"}
              id={"VM0012"}
              href={"./project"}
            />
          </div>
          <div id="project-2">
            <ProjectPreviewCard
              img={
                "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"
              }
              country={"Indonesia"}
              location={"Central Peatlands"}
              description={"REDD"}
              area={"5142 hectares"}
              id={"VM0012"}
              href={"./project"}
            />
          </div>
        </div>
      </div>
      <div ref={mapContainerRef} style={styles.mapWrapper} />
    </div>
  );
}
