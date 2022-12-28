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
import Link from "@mui/material/Link";

import PasswordInputField from "../../components/PasswordInputField";
import { gql } from "../../__generated__/gql";
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
    minHeight: "600px",
  },
  inputCard: {
    position: "relative",
    top: "4vh",
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
    marginTop: "4vh",
  },
  signinText: {
    marginTop: "4vh",
  },
  errorText: {
    height: "4vh",
    marginTop: "4vh",
  },
};

const NameTextField = styled(TextField)(styles.textField);
const EmailTextField = styled(TextField)(styles.textField);
const PasswordFormControl = styled(FormControl)(styles.textField);

const REGISTER_MUTATION = gql(`
  mutation Register($email: String!, $username: String!, $password1: String!, $password2: String!) {
    register(email: $email, username: $username, password1: $password1, password2: $password2) {
      success
      errors
      token
      refreshToken
    }
  }
`);

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");

  const [, setToken] = useToken();

  const [register] = useMutation(REGISTER_MUTATION, {
    onCompleted(data) {
      const register = data?.register;
      if (register != null) {
        const { success, token } = register;
        if (success === true && token != null) {
          setToken(token);
          window.location.href = "/home";
        } else {
          // TODO: Add error message
          setError("Please try again");
        }
      } else {
        setError("Please try again");
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
          <NameTextField
            label="Username"
            id="username-input"
            margin="normal"
            variant="standard"
            value={username}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(event.target.value);
            }}
          />
          <EmailTextField
            label="Email"
            id="email-input"
            margin="normal"
            variant="standard"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
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
          <Box sx={styles.errorText}>
            <Typography variant="body2" sx={{ color: "#fc0352" }}>
              {error}
            </Typography>
          </Box>
          <Box sx={styles.button}>
            <Button
              variant="contained"
              size="large"
              sx={{ width: "100%" }}
              onClick={() => {
                if (confirmedPassword !== password) {
                  setError("Password and confirm password does not match");
                } else {
                  register({
                    variables: {
                      email: email,
                      username: username,
                      password1: password,
                      password2: confirmedPassword,
                    },
                  });
                }
              }}
            >
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
