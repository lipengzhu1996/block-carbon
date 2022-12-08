import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
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
    minHeight: "400px",
  },
  inputCard: {
    position: "relative",
    top: "20vh",
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
const PasswordFormControl = styled(FormControl)(styles.textField);

export default function Login() {
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
          <Box sx={styles.buttonGroup}>
            <Button
              variant="outlined"
              size="large"
              sx={{ width: "40%" }}
              href={"/signup"}
            >
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
