import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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
  tabWrapper: {
    width: "75%",
  },
};

const PROJECT_QUERY = gql(`
  query Project($id: String!) {
    project(id: $id) {
      id
      title
      description
      tifLinks
    }
  }
`);

export default function ProjectView() {
  const [year, setYear] = useState(2009);
  const [forestChecked, setForestChecked] = useState(true);
  const [panelSelected, setPanelSelected] = useState(0);
  const mapContainer = useRef(null);

  const { id } = useParams();
  if (id == null) {
    throw new Error("id should not be null!");
  }
  const { data } = useQuery(PROJECT_QUERY, {
    variables: { id },
  });
  const project = data?.project;

  // const { title, description, tifLinks } = project;
  const title = "asd";
  const description = "test";

  // const tifLinksObj = JSON.parse(tifLinks.replaceAll("'", '"'));

  useEffect(() => {
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
          url: "mapbox://blockcarbon.8ccsmaef",
        });

        map.addLayer({
          id: "portland",
          source: "portland",
          type: "raster",
        });
      });

      return () => map.remove();
    }
  }, []);

  return (
    <div style={styles.root}>
      <div style={styles.mapCardRoot}>
        <div style={styles.mapCardWrapper}>
          <div ref={mapContainer} style={styles.mapWrapper}>
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
            <div className="timeline">
              <Slider
                aria-label="Timeline"
                value={year}
                onChange={(_, value) => {
                  setYear(value as number);
                }}
                onChangeCommitted={(_, value) => {
                  //TODO: send the query
                }}
                defaultValue={2009}
                valueLabelDisplay="on"
                step={1}
                marks
                min={2009}
                max={2020}
              />
            </div>
          </div>
          <div style={{ width: "20%", margin: "1vw" }}>
            <div className="view-card-wrapper">
              <div className="view-scrollable-wrapper">
                <Typography variant="body2" sx={{ color: "#34eb92" }}>
                  Indonesia
                </Typography>
                <Typography variant="h4" sx={{ color: "#fff" }}>
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  REDD
                </Typography>
                {forestChecked ? (
                  <div>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#fff",
                        marginTop: "4vh",
                        fontWeight: "bold",
                      }}
                    >
                      WHY WE LOVE THIS PROJECT?
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#fff" }}>
                      {description}
                    </Typography>
                  </div>
                ) : null}
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
          <Tab label="Info" style={{ minWidth: "25%" }} />
          <Tab label="Images" style={{ minWidth: "25%" }} />
          <Tab label="Database" style={{ minWidth: "25%" }} />
        </Tabs>
        <ProjectViewTabPanel value={panelSelected} index={0}>
          <div>
            <Typography variant="body2" sx={{ color: "#34eb92" }}>
              Indonesia
            </Typography>
            <Typography variant="h4" sx={{ color: "#fff" }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              REDD
            </Typography>
          </div>
        </ProjectViewTabPanel>
        <ProjectViewTabPanel value={panelSelected} index={1}>
          <div>Item Two</div>
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
