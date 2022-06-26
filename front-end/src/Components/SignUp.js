import * as React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { userSignUp } from "../api/index";

const theme = createTheme();

export default function SignUp() {
  // ******************** STATE AND HANDLERS ************************************
  const [firstName, setFirstName] = React.useState("");
  const firstNameHandler = (event) => setFirstName(event.target.value);

  const [lastName, setLastName] = React.useState("");
  const lastNameHandler = (event) => setLastName(event.target.value);

  const [email, setEmail] = React.useState("");
  const emailHandler = (event) => setEmail(event.target.value);

  const [password, setPassword] = React.useState("");
  const passwordHandler = (event) => setPassword(event.target.value);

  const [loading, setLoading] = React.useState(false);
  const [showSnakbar, setShowSnakebar] = React.useState(false);
  const [snakbarMessage, setSnakbarMessage] = React.useState("");

  const nav = useNavigate();
  // ******************** SIGN UP HANDLER *******************************
  const signUpData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };
  const signUpHandler = async (event) => {
    setLoading(true);
    event.preventDefault();
    // Calling sign up api
    await userSignUp(signUpData);
    setSnakbarMessage("Succesfully signed up");
    setShowSnakebar(true);
    setLoading(false);
    nav("/signin");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create account here
          </Typography>
          <Box
            component="form"
            noValidate
            // onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  value={firstName}
                  onChange={firstNameHandler}
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={lastNameHandler}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={emailHandler}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={passwordHandler}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I accept the Terms of Use & Privacy Policy."
                />
              </Grid>
            </Grid>
            <Button
              onClick={signUpHandler}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
            {showSnakbar ? (
              <Snackbar
                open={true}
                message={snakbarMessage}
                autoHideDuration={6000}
              />
            ) : (
              ""
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
