import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Card.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Korean Food"
          height="140"
          image="https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610863_960_720.jpg"
          title="Korean Dish"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bibimpab - 2500 KZT
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bibimbap simply translates to “mixed rice with meat and assorted vegetables“. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
