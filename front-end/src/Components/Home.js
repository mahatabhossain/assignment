import React from "react";
import "../Styles/home.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid gap={15} container spacing={1} py={8}>
        <Grid xs={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/download.jpeg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Explore Movies
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can explore movies section by click on the button.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link to="/">Explore movies</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/game.jpeg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Explore Web series
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can explore web series section by click on the button.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link to="/">Explore Web series</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/lio.jpeg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Explore Actors
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can explore actors section by click on the button.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link to="/users">Explore Actors</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
