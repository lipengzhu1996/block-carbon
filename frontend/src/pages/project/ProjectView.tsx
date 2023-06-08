import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Typography from "@mui/material/Typography";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import mapboxgl from "mapbox-gl";

import { gql } from "../../__generated__/gql";
import "./styles.css";
import ProjectViewTabPanel from "../../components/Card/ProjectViewTabPanel";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmxvY2tjYXJib24iLCJhIjoiY2xiYnE3OHdzMGtjcjNwbG01ang4amZhNiJ9.us2VY_MsxGc2N8VaO2kYPQ";

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  } as React.CSSProperties,
  mapCardRoot: {
    width: "100%",
    height: "90vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  } as React.CSSProperties,
  mapCardWrapper: {
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
  tabRoot: {
    width: "100%",
    height: "90vh",
  } as React.CSSProperties,
  tabWrapper: {
    width: "95%",
    height: "95%",
    borderRadius: "25px",
    boxShadow: "0 0 10px black",
    background: "rgba(0,0,0,0.5)",
  } as React.CSSProperties,
};

const PROJECT_QUERY = gql(`
  query Project($id: String!) {
    project(id: $id) {
      id
      title
      overview
      registry
      accuracyEvaluation
      additionalityEvaluation
      permanenceEvaluation
      tilesets
      story
    }
  }
`);

type Project = {
  id: string;
  title: string;
  overview: string;
  registry: string;
  accuracyEvaluation: string;
  additionalityEvaluation: string;
  permanenceEvaluation: string;
  tilesets: string;
  story: string;
};

export default function ProjectView() {
  const [year, setYear] = useState(2009);
  const [yearLabel, setYearLabel] = useState(2009);

  const [project, setProject] = useState<Project>();
  const [panelSelected, setPanelSelected] = useState(0);
  const mapContainer = useRef(null);

  const { id } = useParams();
  if (id == null) {
    throw new Error("id should not be null!");
  }

  const { data } = useQuery(PROJECT_QUERY, {
    variables: { id },
  });

  useEffect(() => {
    const project = data?.project;
    if (project != null) {
      setProject(project);

      const { tilesets } = project;
      const tilesetIDs = JSON.parse(tilesets.replaceAll("'", '"'));

      if (mapContainer.current != null) {
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/satellite-v9",
          center: [-67.588, -14.294],
          zoom: 11,
        });

        map.addControl(new mapboxgl.NavigationControl(), "top-right");

        map.on("load", () => {
          map.addSource("portland", {
            type: "raster",
            url: "mapbox://" + tilesetIDs[year],
          });

          map.addLayer({
            id: "portland",
            source: "portland",
            type: "raster",
          });
        });

        return () => map.remove();
      }
    }
  }, [data, year]);

  return (
    <div style={styles.root}>
      <div style={styles.mapCardRoot}>
        <div style={styles.mapCardWrapper}>
          <div ref={mapContainer} style={styles.mapWrapper}>
            {/* <div className="view-mapbox-infobox">
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
            </div> */}
            <div className="view-mapbox-timeline">
              <Slider
                aria-label="Timeline"
                value={yearLabel}
                onChange={(_, value) => {
                  setYearLabel(value as number);
                }}
                onChangeCommitted={(_, value) => {
                  setYear(value as number);
                }}
                defaultValue={yearLabel}
                valueLabelDisplay="on"
                step={1}
                marks
                min={2009}
                max={2021}
              />
            </div>
          </div>
          <div style={{ width: "15%", margin: "1vw" }}>
            <div className="view-card-wrapper">
              <div className="view-scrollable-wrapper">
                <Typography variant="h4" sx={{ color: "#fff" }}>
                  {project?.title}
                </Typography>
                <div>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#fff",
                      marginTop: "4vh",
                      fontWeight: "bold",
                    }}
                  >
                    Story
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    {project?.story}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.tabWrapper}>
        <Tabs
          value={panelSelected}
          onChange={(_, value) => {
            setPanelSelected(value);
          }}
          centered
          aria-label="panels"
        >
          <Tab label="Overview" style={{ minWidth: "25%" }} />
          <Tab label="Evaluation" style={{ minWidth: "25%" }} />
          <Tab label="Rating" style={{ minWidth: "25%" }} />
          <Tab label="Narratives" style={{ minWidth: "25%" }} />
        </Tabs>
        <ProjectViewTabPanel value={panelSelected} index={0}>
          <div>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              {project?.overview}
            </Typography>
          </div>
        </ProjectViewTabPanel>
        <ProjectViewTabPanel value={panelSelected} index={1}>
          <div>
            <Typography variant="h4" sx={{ color: "#fff" }}>
              Accuracy Evaluation
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              {project?.accuracyEvaluation}
            </Typography>
            <Typography variant="h4" sx={{ color: "#fff" }}>
              Additional Evaluation
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              {project?.additionalityEvaluation}
            </Typography>
            <Typography variant="h4" sx={{ color: "#fff" }}>
              Permanence Evaluation
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              {project?.permanenceEvaluation}
            </Typography>
          </div>
        </ProjectViewTabPanel>
        <ProjectViewTabPanel value={panelSelected} index={2}>
          <div>Item Three</div>
        </ProjectViewTabPanel>
        <ProjectViewTabPanel value={panelSelected} index={3}>
          <div>Item Four</div>
        </ProjectViewTabPanel>
      </div>
    </div>
  );
}
