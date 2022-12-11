import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ProjectPreviewCard from "../../components/Card/ProjectPreviewCard";
import ProjectEditDialog from "../../components/Dialog/ProjectEditDialog";

const styles = {
  root: {
    display: "flex",
    padding: "2vw",
    flexDirection: "column",
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

export default function CarbonOwnerDashboard() {
  const [openProjectDialog, setOpenProjectDialog] = useState(false);
  const [projectShwonInDialog, setProjectShownInDialog] = useState("");

  return (
    <div>
      <ProjectEditDialog
        open={openProjectDialog}
        onClose={() => {
          setOpenProjectDialog(false);
        }}
        onSave={() => {
          setOpenProjectDialog(false);
        }}
        project={projectShwonInDialog}
      />
      <div
        style={{
          display: "flex",
          padding: "2vw",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2" sx={styles.title}>
          Your Projects
        </Typography>
        <Typography variant="body2" sx={{ color: "#fff" }}>
          Create new project and manage your existing porjects
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ width: "10vw", margin: "10px" }}
          onClick={() => {
            setProjectShownInDialog("");
            setOpenProjectDialog(true);
          }}
        >
          Create
        </Button>
        <div id="project-1">
          <ProjectPreviewCard
            img={"https://images.unsplash.com/photo-1518756131217-31eb79b20e8f"}
            country={"United States"}
            location={"King Country Park"}
            description={"Improved Forest Management"}
            area={"514 hectares"}
            id={"VM0012"}
            onClick={() => {
              setProjectShownInDialog("test");
              setOpenProjectDialog(true);
            }}
          />
        </div>
        <div id="project-2">
          <ProjectPreviewCard
            img={"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1"}
            country={"Indonesia"}
            location={"Central Peatlands"}
            description={"REDD"}
            area={"5142 hectares"}
            id={"VM0012"}
          />
        </div>
      </div>
    </div>
  );
}
