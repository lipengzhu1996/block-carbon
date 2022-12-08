import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const styles = {
  card: {
    display: "flex",
    background: "rgba(0,0,0,0.5)",
  },
  img: {
    height: "36vh",
    width: "22vw",
  },
  textWrapper: {
    textAlign: "start",
    padding: "2vh",
    width: "24vw",
  },
};

type Props = {
  img: string;
  country: string;
  location: string;
  description: string;
  area: string;
  id: string;
};

export default function ProjectPreviewCard({
  img,
  country,
  location,
  description,
  area,
  id,
}: Props) {
  return (
    <IconButton>
      <Paper sx={styles.card} elevation={4}>
        <img src={img} alt={"img"} loading="lazy" style={styles.img} />
        <Box sx={styles.textWrapper}>
          <Typography variant="body2" sx={{ color: "#34eb92" }}>
            {country}
          </Typography>
          <Typography variant="h4" sx={{ color: "#fff" }}>
            {location}
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff", marginTop: "8vh" }}>
            {description}
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            {area}
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            {id}
          </Typography>
        </Box>
      </Paper>
    </IconButton>
  );
}
