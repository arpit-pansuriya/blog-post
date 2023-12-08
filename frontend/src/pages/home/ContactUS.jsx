import React from "react";
import MainLayout from "../../components/MainLayout";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    margin: "auto",
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    "&:hover": {
      backgroundColor: "#45a049",
    },
  },
  heading: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
  },
}));

const ContactUS = () => {
  const classes = useStyles();

  return (
    <MainLayout>
      <Container className={classes.container}>
        <Typography variant="h2" className={classes.heading}>
          Contact Us
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            label="Name"
            variant="outlined"
            className={classes.textField}
          />
          <TextField
            label="Email"
            variant="outlined"
            className={classes.textField}
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            className={classes.textField}
          />
          <Button variant="contained" className={classes.button}>
            Send Message
          </Button>
        </form>
      </Container>
    </MainLayout>
  );
};

export default ContactUS;
