import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 275,
    margin: 10,
  },
  root: {
    paddingLeft: "40%",
  },
  image: {
    height: 50,
  },
  text: {
    float: "left",
  },
}));
export default function Content(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((results) => results.json())
      .then((data) => {
        setData(data);
      });
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {data.map((value, index) => (
        <Card className={classes.card}>
          <CardContent>
            <CardMedia
              image="https://picsum.photos/50"
              className={classes.image}
            />
            <Typography gutterBottom variant="h5" component="h2">
              {value.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {value.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
