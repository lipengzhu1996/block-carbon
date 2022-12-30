//@ts-nocheck This is required to disable type check for MapboxDraw
import { useRef, useEffect, useState } from "react";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import { Map, NavigationControl } from "maplibre-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as turf from "@turf/turf";

import "./styles.css";
import { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
  textIconAlign: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  textField: {
    input: {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    label: {
      color: "white",
    },
    underline: {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
};

const CustomizedTextField = styled(TextField)(styles.textField);

export default function ProjectCreate() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [area, setArea] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [country, setCountry] = useState("");

  const [stepOneFinished, setStepOneFinished] = useState(false);
  const [stepTwoFinished, setStepTwoFinished] = useState(false);
  const [stepThreeFinished, setStepThreeFinished] = useState(false);

  const updateDraw = (data: FeatureCollection<Geometry, GeoJsonProperties>) => {
    let area = 0;
    if (data.features.length > 0) {
      area = Math.round(turf.area(data) * 100) / 100;
    }
    setArea(area);
  };

  useEffect(() => {
    if (area > 0) {
      setStepOneFinished(true);
    } else {
      setStepOneFinished(false);
    }
  }, [area]);

  useEffect(() => {
    if (title !== "" && description !== "" && type !== "" && country !== "") {
      setStepTwoFinished(true);
    } else {
      setStepTwoFinished(false);
    }
  }, [title, description, type, country]);

  useEffect(() => {
    if (mapContainerRef.current != null) {
      const map = new Map({
        container: mapContainerRef.current,
        style:
          "https://api.maptiler.com/maps/hybrid/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
        zoom: 11,
        center: [137.9150899566626, 36.25956997955441],
      });
      map.addControl(new NavigationControl({}));
      const draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
          polygon: true,
          trash: true,
        },
      });
      map.addControl(draw);
      map.on("draw.create", () => {
        updateDraw(draw.getAll());
      });
      map.on("draw.delete", () => {
        updateDraw(draw.getAll());
      });
      map.on("draw.update", () => {
        updateDraw(draw.getAll());
      });
    }
  }, []);

  return (
    <div style={styles.root}>
      <div style={styles.cardWrapper}>
        <div ref={mapContainerRef} style={styles.mapWrapper} />
        <div style={{ margin: "1vw" }}>
          <div className="create-card-wrapper">
            <div className="create-scrollable-wrapper">
              <Typography variant="h4" sx={{ color: "#fff" }}>
                Create a new project
              </Typography>
              <div style={{ marginTop: "30px" }}>
                <div className="text-icon-align">
                  <Typography
                    variant="h6"
                    sx={{ color: stepOneFinished ? "#34eb92" : "#fff" }}
                  >
                    Step1: Outline the area on map
                  </Typography>
                  {stepOneFinished ? (
                    <CheckIcon sx={{ color: "#34eb92" }} />
                  ) : null}
                </div>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  Total area: {area} square meters
                </Typography>
              </div>
              {stepOneFinished ? (
                <div style={{ marginTop: "30px" }}>
                  <div className="text-icon-align">
                    <Typography
                      variant="h6"
                      sx={{ color: stepTwoFinished ? "#34eb92" : "#fff" }}
                    >
                      Step2: Provide project information
                    </Typography>
                    {stepTwoFinished ? (
                      <CheckIcon sx={{ color: "#34eb92" }} />
                    ) : null}
                  </div>
                  <div className="stack">
                    <CustomizedTextField
                      required
                      id="outlined-required"
                      label="Title"
                      autoComplete="off"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <CustomizedTextField
                      required
                      id="outlined-required2"
                      label="Description"
                      autoComplete="off"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                    <CustomizedTextField
                      required
                      id="outlined-required3"
                      label="Type"
                      autoComplete="off"
                      value={type}
                      onChange={(e) => {
                        setType(e.target.value);
                      }}
                    />
                    <CustomizedTextField
                      required
                      id="outlined-required4"
                      label="Country"
                      autoComplete="off"
                      value={country}
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                    />
                  </div>
                </div>
              ) : null}
              {stepTwoFinished ? (
                <div style={{ marginTop: "30px" }}>
                  <div className="text-icon-align">
                    <Typography
                      variant="h6"
                      sx={{ color: stepThreeFinished ? "#34eb92" : "#fff" }}
                    >
                      Step3: Upload files
                    </Typography>
                    {stepThreeFinished ? (
                      <CheckIcon sx={{ color: "#34eb92" }} />
                    ) : null}
                  </div>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ marginTop: "20px" }}
                    onClick={() => {
                      setStepThreeFinished(true);
                    }}
                  >
                    Upload
                  </Button>
                </div>
              ) : null}
              {stepThreeFinished ? (
                <Button
                  variant="contained"
                  size="large"
                  sx={{ marginTop: "40px", width: "20vw" }}
                  onClick={() => {}}
                >
                  Create
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
