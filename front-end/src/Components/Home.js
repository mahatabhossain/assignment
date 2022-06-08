import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../Styles/weather.css";
import axios from "axios";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const [placeName, setPlaceName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loding, setLoading] = useState(false);

  const placeNameHandler = (event) => setPlaceName(event.target.value);

  const fetchCurrentWeather = () => {
    const params = {
      access_key: "31257d72f340924ac8deb657b701b013",
      query: `${placeName}`,
    };

    axios
      .get(`http://api.weatherstack.com/current`, { params })
      .then((res) => setWeatherData(res.data));
  };

  const fetchHistoricalWhether = () => {
    // const historical_params = {
    //   access_key: "31257d72f340924ac8deb657b701b013",
    //   query: "New York",
    //   historical_date: "2015 - 21 - 01",
    //   hourly: 1,
    // };

    axios
      .get(
        "http://api.weatherstack.com/historical?access_key=31257d72f340924ac8deb657b701b013&query=New York&historical_date = 2015-21-01"
      )
      .then((res) => console.log(res));
  };

  return (
    <div className="container">
      <h2>Weather data </h2>
      <div>
        <TextField
          fullWidth
          label="Search city name here...."
          id="fullWidth"
          onChange={placeNameHandler}
        />
        {/* <CircularProgress /> */}
      </div>
      <div className="button_container">
        <Button variant="contained" onClick={fetchCurrentWeather}>
          Current Weather
        </Button>
        &nbsp;&nbsp;
        <Button variant="contained" onClick={fetchHistoricalWhether}>
          Historical Weather
        </Button>
      </div>
      {console.log(weatherData)}
      {weatherData ? (
        <Card sx={{ maxWidth: 1200 }} className="card_container">
          <CardHeader
            title={weatherData?.request?.query}
            // subheader={weatherData?.location?.localtime}
          />
          <Typography
            className="card_container"
            variant="body2"
            color="text.secondary"
          >
            Date & Time:&nbsp;&nbsp;{weatherData?.location?.localtime}
          </Typography>
          <img
            className="weather_icon"
            src={
              weatherData?.current?.weather_icons?.length
                ? weatherData?.current?.weather_icons[0]
                : ""
            }
          />
          <CardContent>
            <Typography
              className="card_container"
              variant="body2"
              color="text.secondary"
            >
              {weatherData?.current?.weather_descriptions?.length
                ? weatherData?.current?.weather_descriptions[0]
                : ""}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography
              className="card_container"
              variant="body2"
              color="text.secondary"
            >
              Temperature:&nbsp;&nbsp;
              {weatherData?.current?.temperature}
            </Typography>
            <Typography
              className="card_container"
              variant="body2"
              color="text.secondary"
            >
              Humidity:&nbsp;&nbsp;
              {weatherData?.current?.humidity}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        ""
      )}
      ;
    </div>
  );
};

export default Home;
