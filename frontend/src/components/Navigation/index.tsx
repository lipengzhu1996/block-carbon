import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

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

const LoginMenu = ["Landowners", "Carbon Buyers"];

export default function Navigation() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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

          <div style={{ justifyContent: "center" }}>
            <Button id="composition-button" href="/">
              <Typography
                variant="body1"
                noWrap
                component="a"
                sx={styles.buttonText}
              >
                Technologies
              </Typography>
            </Button>
            <Button id="composition-button" href="/">
              <Typography
                variant="body1"
                noWrap
                component="a"
                sx={styles.buttonText}
              >
                Dashboard
              </Typography>
            </Button>
            <Button id="composition-button" onClick={handleOpenUserMenu}>
              <Typography
                variant="body1"
                noWrap
                component="a"
                sx={styles.buttonText}
              >
                Login
              </Typography>
            </Button>
            <Menu
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
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
