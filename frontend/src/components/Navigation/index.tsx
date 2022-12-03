import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

const styles = {
  root: {
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
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
  //   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //     null
  //   );
  //   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //     setAnchorElUser(event.currentTarget);
  //   };
  //   const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  //   };

  return (
    <div style={styles.root} id="header">
      <AppBar style={styles.appbar} elevation={0}>
        <Toolbar disableGutters style={styles.appbarWrapper}>
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
                  <Link href="#">
                    <Typography color="#ffffff" component="p" variant="body2">
                      Technologies
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs="auto">
                  <Link href="#">
                    <Typography color="#ffffff" component="p" variant="body2">
                      Dashboard
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs="auto">
                  <Link href="/login">
                    <Typography color="#ffffff" component="p" variant="body2">
                      Login
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Box>

            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {LoginMenu.map((page) => (
                <MenuItem key={page} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
