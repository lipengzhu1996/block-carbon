import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useUser from "../../hooks/useUser";

const styles = {
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    height: "10vh",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  appbarBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginRight: "auto",
  },
  colorText: {
    color: "#5AFF3D",
  },
  buttonText: {
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".1rem",
    color: "#ffffff",
    textDecoration: "none",
  },
};

export default function Navigation() {
  const user = useUser();

  return (
    <Container maxWidth="lg">
      <Toolbar disableGutters sx={styles.appbarWrapper}>
        <Typography
          variant="h3"
          noWrap
          component="a"
          href="/"
          sx={styles.buttonText}
        >
          <span style={styles.colorText}>Block</span>Carbon
        </Typography>
        <Box>
          <Box sx={styles.appbarBox}>
            <Grid container spacing={4}>
              <Grid item xs="auto">
                <Link href="/projects">
                  <Typography color="#ffffff" component="p" variant="body2">
                    Insights
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs="auto">
                <Link href="/projects">
                  <Typography color="#ffffff" component="p" variant="body2">
                    Projects
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs="auto">
                {user != null ? (
                  <Link href="/dashboard">
                    <Typography color="#ffffff" component="p" variant="body2">
                      {user.username}
                    </Typography>
                  </Link>
                ) : (
                  <Link href="/login">
                    <Typography color="#ffffff" component="p" variant="body2">
                      Login
                    </Typography>
                  </Link>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Toolbar>
    </Container>
  );
}
