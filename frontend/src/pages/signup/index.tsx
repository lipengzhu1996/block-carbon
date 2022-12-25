import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import PasswordInputField from "../../components/PasswordInputField";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputCardWrapeer: {
    width: "40vw",
    height: "100vh",
    minHeight: "600px",
  },
  inputCard: {
    position: "relative",
    top: "10vh",
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
  button: {
    marginTop: "10vh",
  },
  signinText: {
    marginTop: "4vh",
  },
};

const NameTextField = styled(TextField)(styles.textField);
const EmailTextField = styled(TextField)(styles.textField);
const PasswordFormControl = styled(FormControl)(styles.textField);

export default function Signup() {
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  return (
    <Container maxWidth="lg" sx={styles.root}>
      <Box sx={styles.inputCardWrapeer}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={styles.inputCard}
        >
          <NameTextField
            label="Name"
            id="name-input"
            margin="normal"
            variant="standard"
          />
          <EmailTextField
            label="Email"
            id="email-input"
            margin="normal"
            variant="standard"
          />
          <PasswordFormControl
            id="password-input"
            variant="standard"
            margin="normal"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <PasswordInputField value={password} onChange={setPassword} />
          </PasswordFormControl>
          <PasswordFormControl
            id="confirmed-password-input"
            variant="standard"
            margin="normal"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Confirmed Password
            </InputLabel>
            <PasswordInputField
              value={confirmedPassword}
              onChange={setConfirmedPassword}
            />
          </PasswordFormControl>
          <Box sx={styles.button}>
            <Button variant="contained" size="large" sx={{ width: "100%" }}>
              Create Account
            </Button>
          </Box>
          <Box sx={styles.signinText}>
            <Typography gutterBottom variant="body2" sx={{ color: "#fff" }}>
              Already have an account?{" "}
              <Link href="/login" color="inherit">
                Sign in
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
