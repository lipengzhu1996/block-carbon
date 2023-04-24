import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Map, NavigationControl } from "maplibre-gl";

import { gql } from "../../__generated__/gql";
import "./styles.css";

const styles = {
  root: {
    width: "100%",
    height: "90vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardWrapper: {
    width: "95%",
    height: "95%",
    borderRadius: "25px",
    boxShadow: "0 0 10px black",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "row",
  } as React.CSSProperties,
  mapWrapper: {
    width: "75%",
    height: "100%",
    borderRadius: "25px",
  },
  textWrapper: {
    textAlign: "start",
    padding: "4vw",
    text: {
      color: "#fff",
    },
  },
};

const PROJECT_QUERY = gql(`
  query Project($id: String!) {
    project(id: $id) {
      id
      title
      description
      startTime
      createTime
      polygon {
        type
        coordinates
      }
    }
  }
`);

export default function ProjectView() {
  const [forestChecked, setForestChecked] = useState(true);
  const { id } = useParams();
  if (id == null) {
    throw new Error("id should not be null!");
  }
  const { data } = useQuery(PROJECT_QUERY, {
    variables: { id },
  });
  const project = data?.project;

  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project != null && mapContainerRef.current != null) {
      const map = new Map({
        container: mapContainerRef.current,
        style:
          "https://api.maptiler.com/maps/hybrid/style.json?key=hXf8MjGjf0lT2pverypj",
        zoom: 11,
        center: [140.32271309522912, 35.992799688444215],
      });
      map.addControl(new NavigationControl({}));
      map.on("load", function () {
        map.addSource("maine", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: project?.polygon.coordinates,
            },
          },
        });
        map.addLayer({
          id: "maine",
          type: "fill",
          source: "maine",
          layout: {},
          paint: {
            "fill-color": "#088",
            "fill-opacity": 0.8,
          },
        });
      });
    }
  }, [project]);

  return (
    <div style={styles.root}>
      <div style={styles.cardWrapper}>
        <div ref={mapContainerRef} style={styles.mapWrapper}>
          <div className="infobox">
            <FormGroup sx={{ margin: "3vh" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={forestChecked}
                    onChange={(event, checked) => {
                      setForestChecked(checked);
                    }}
                  />
                }
                label={
                  <Typography variant="body2" sx={{ color: "#ffffff" }}>
                    Forest
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography variant="body2" sx={{ color: "#ffffff" }}>
                    Time Series
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography variant="body2" sx={{ color: "#ffffff" }}>
                    Carbon
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography variant="body2" sx={{ color: "#ffffff" }}>
                    Age
                  </Typography>
                }
              />
            </FormGroup>
          </div>
        </div>
        <div style={{ width: "20%", margin: "1vw" }}>
          <div className="view-card-wrapper">
            <div className="view-scrollable-wrapper">
              <Typography variant="body2" sx={{ color: "#34eb92" }}>
                Indonesia
              </Typography>
              <Typography variant="h4" sx={{ color: "#fff" }}>
                {project?.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                REDD
              </Typography>
              {forestChecked ? (
                <div>
                  <Typography
                    variant="body2"
                    sx={{ color: "#fff", marginTop: "4vh", fontWeight: "bold" }}
                  >
                    WHY WE LOVE THIS PROJECT?
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    {project?.description}
                  </Typography>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
