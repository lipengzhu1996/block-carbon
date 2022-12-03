import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardWrapper: {
    width: "45vw",
    background: "rgba(0,0,0,0.5)",
  },
  media: {
    height: "60vh",
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
};

type Props = {
  image: string;
  title: string;
  description: string;
};

export default function ProjectBriefCard({ image, title, description }: Props) {
  return (
    <Container maxWidth="lg" sx={styles.root}>
      <Card sx={styles.cardWrapper}>
        <CardMedia sx={styles.media} image={image} title="Image" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            sx={styles.title}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            sx={styles.desc}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
