import { useRef, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Map, NavigationControl } from "maplibre-gl";
import "./styles.css";

const styles = {
  root: {
    width: "100%",
    height: "90vh",
    overflow: "hidden",
  },
  mapWrapper: {
    width: "100%",
    height: "100%",
  },
  cardWrapper: {
    position: "absolute",
    zIndex: "1",
    width: "40vw",
    height: "90vh",
    background: "rgba(0,0,0,0.5)",
  } as React.CSSProperties,
  textWrapper: {
    textAlign: "start",
    padding: "4vw",
    text: {
      color: "#fff",
    },
  },
};

export default function Project() {
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
    <div style={styles.root}>
      <div ref={mapContainerRef} style={styles.mapWrapper}>
        <div className="card-wrapper">
          <div className="scrollable-wrapper">
            <div style={{ margin: "4vw" }}>
              <Typography variant="body2" sx={{ color: "#34eb92" }}>
                Indonesia
              </Typography>
              <Typography variant="h4" sx={{ color: "#fff" }}>
                Mountain Peak Ave
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                REDD
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#fff", marginTop: "4vh", fontWeight: "bold" }}
              >
                WHY WE LOVE THIS PROJECT?
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                Pachama has evaluated over 150 forest carbon projects across 14
                countries to help you identify the highest quality projects.
                Here, you'll find projects with credits currently available for
                purchase. Each project is carefully vetted by Pachama's
                technology and forest scientists to make sure your investment
                reduces carbon, protects wildlife and supports local
                communities.
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                Pachama has evaluated over 150 forest carbon projects across 14
                countries to help you identify the highest quality projects.
                Here, you'll find projects with credits currently available for
                purchase. Each project is carefully vetted by Pachama's
                technology and forest scientists to make sure your investment
                reduces carbon, protects wildlife and supports local
                communities.
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                Pachama has evaluated over 150 forest carbon projects across 14
                countries to help you identify the highest quality projects.
                Here, you'll find projects with credits currently available for
                purchase. Each project is carefully vetted by Pachama's
                technology and forest scientists to make sure your investment
                reduces carbon, protects wildlife and supports local
                communities.
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                Pachama has evaluated over 150 forest carbon projects across 14
                countries to help you identify the highest quality projects.
                Here, you'll find projects with credits currently available for
                purchase. Each project is carefully vetted by Pachama's
                technology and forest scientists to make sure your investment
                reduces carbon, protects wildlife and supports local
                communities.
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                Pachama has evaluated over 150 forest carbon projects across 14
                countries to help you identify the highest quality projects.
                Here, you'll find projects with credits currently available for
                purchase. Each project is carefully vetted by Pachama's
                technology and forest scientists to make sure your investment
                reduces carbon, protects wildlife and supports local
                communities.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
