import React, { Component } from 'react';

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

export default class ShowView extends Component {

  render() {
    const movie = this.props.movie.data;
    console.log(movie)

    return (
      <div className="show-view-wrapper">
        <div className="show-view">
          <Card>
            <CardHeader
              title={movie.Title}
            />
            <CardMedia
              overlay={<CardTitle title={movie.Actors} subtitle={movie.Awards} />}
            >
              <img src={movie.Poster} />
            </CardMedia>
            <CardTitle title={`Directed by ${movie.Director}`} subtitle={movie.Year} />
            <CardText>
              {movie.Plot}
              <br />
              <br />
              <span>Rating: {movie.imdbRating}</span>
              <br />
              <span>{movie.imdbVotes} votes.</span>
              <br />
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}
