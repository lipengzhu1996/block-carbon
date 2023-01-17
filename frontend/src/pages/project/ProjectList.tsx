import { useRef, useEffect } from "react";
import { useQuery } from "@apollo/client";
import Typography from "@mui/material/Typography";
import { LngLatLike, Map, Marker, NavigationControl } from "maplibre-gl";
import ReactDOM from "react-dom";
import ProjectPreviewCard from "../../components/Card/ProjectPreviewCard";
import DropletMarker from "../../components/DropletMarker";

import { gql } from "../../__generated__/gql";
import "./styles.css";

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

const PROJECTS_QUERY = gql(`
  query Projects {
    projects {
      id
      title
    }
  }
`);

export default function ProjectList() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const { data } = useQuery(PROJECTS_QUERY);
  const projects = data?.projects;

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
      <div className="list-card-wrapper">
        <div className="list-scrollable-wrapper">
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
          {projects?.map((project) => (
            <div key={project?.id}>
              <ProjectPreviewCard
                img={
                  "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"
                }
                location={project?.title ?? ""}
                country={"Indonesia"}
                description={"REDD"}
                area={"5142 hectares"}
                id={"VM0012"}
                href={"./project/" + project?.id}
              />
            </div>
          ))}
        </div>
      </div>
      <div ref={mapContainerRef} style={styles.mapWrapper} />
    </div>
  );
}
