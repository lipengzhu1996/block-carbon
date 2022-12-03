import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputCardWrapeer: {
    width: "40vw",
    height: "100vh",
  },
  inputCard: {
    position: "relative",
    top: "30vh",
  },
  textField: {
    width: "100%",
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
  },
  buttonGroup: {
    marginTop: "10vh",
    display: "flex",
    justifyContent: "space-between",
  },
};

const EmailTextField = styled(TextField)(styles.textField);
const PasswordTextField = styled(FormControl)(styles.textField);

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  return (
    <Container maxWidth="lg" sx={styles.root}>
      <Box sx={styles.inputCardWrapeer}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={styles.inputCard}
        >
          <EmailTextField
            label="Email"
            id="email-input"
            margin="normal"
            variant="standard"
          />
          <PasswordTextField
            id="password-input"
            variant="standard"
            margin="normal"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    onMouseDown={(
                      event: React.MouseEvent<HTMLButtonElement>
                    ) => {
                      event.preventDefault();
                    }}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOff sx={{ color: "#ffffff" }} />
                    ) : (
                      <Visibility sx={{ color: "#ffffff" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </PasswordTextField>
          <Box sx={styles.buttonGroup}>
            <Button variant="outlined" size="large" sx={{ width: "40%" }}>
              Sign up
            </Button>
            <Button variant="contained" size="large" sx={{ width: "40%" }}>
              Log in
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
