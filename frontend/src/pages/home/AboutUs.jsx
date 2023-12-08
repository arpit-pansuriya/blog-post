import React from "react";
import MainLayout from "../../components/MainLayout";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  media: {
    height: 300,
  },
  cardContent: {
    textAlign: "justify",
  },
  heading: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
    color: "#673ab7",
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <MainLayout>
      <Container className={classes.container}>
        <Typography variant="h2" className={classes.heading}>
          About Us
        </Typography>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                title="Image 1"
              />
              <CardContent className={classes.cardContent}>
                <Typography paragraph>
                  Welcome to our platform where you can explore and engage with
                  a diverse range of topics including government, politics,
                  education, health, the environment, economy, business,
                  fashion, and more.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                title="Image 2"
              />
              <CardContent className={classes.cardContent}>
                <Typography paragraph>
                  Our mission is to provide valuable and insightful information
                  on various subjects that matter to you. Whether you are
                  interested in staying informed about current events, exploring
                  educational content, or getting inspired by the latest fashion
                  trends, we've got you covered.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/207681/pexels-photo-207681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                title="Image 3"
              />
              <CardContent className={classes.cardContent}>
                <Typography paragraph>
                  Feel free to browse through our blog posts and discover a
                  wealth of knowledge and perspectives. We believe in the power
                  of information to empower individuals and contribute to a
                  well-informed society.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default AboutUs;
