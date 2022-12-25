import { useState } from "react";
import { useMutation } from "@apollo/client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { gql } from "../../__generated__/gql";

import PasswordInputField from "../../components/PasswordInputField";
import useToken from "../../hooks/useToken";

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
    marginTop: "4vh",
    display: "flex",
    justifyContent: "space-between",
  },
  errorText: {
    height: "4vh",
    marginTop: "4vh",
  },
};

const EmailTextField = styled(TextField)(styles.textField);
const PasswordFormControl = styled(FormControl)(styles.textField);

const LOGIN_MUTATION = gql(`
  mutation Login ($password: String!, $email: String, $username: String) {
    tokenAuth(password: $password, email: $email, username: $username) {
      token
      errors
      success
    }
  }
`);

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [, setToken] = useToken();

  const [tokenAuth] = useMutation(LOGIN_MUTATION, {
    onCompleted(data) {
      const token = data?.tokenAuth?.token;
      if (token != null) {
        setToken(token);
        window.location.href = "/home";
      } else {
        // TODO: Add error message
        setError("Please check your username and password");
      }
    },
    onError(error) {
      setError(error.message);
    },
  });

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
            value={username}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(event.target.value);
            }}
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
          <Box sx={styles.errorText}>
            <Typography variant="body2" sx={{ color: "#ff0000" }}>
              {error}
            </Typography>
          </Box>
          <Box sx={styles.buttonGroup}>
            <Button
              variant="outlined"
              size="large"
              sx={{ width: "40%" }}
              href={"/signup"}
            >
              Sign up
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{ width: "40%" }}
              onClick={() => {
                tokenAuth({
                  variables: { username: username, password: password },
                });
              }}
            >
              Log in
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
