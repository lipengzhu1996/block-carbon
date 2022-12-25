import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CardActionArea from "@mui/material/CardActionArea";

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
  link: string;
};

export default function ProjectGalleryCard({
  image,
  title,
  description,
  link,
}: Props) {
  return (
    <Container maxWidth="lg" sx={styles.root}>
      <CardActionArea href={link}>
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
      </CardActionArea>
    </Container>
  );
}
