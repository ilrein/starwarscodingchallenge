import { HTTP } from 'meteor/http';
import React from 'react';
import { List, ListItem } from 'material-ui/List';

// Icons
import AvMovie from 'material-ui/svg-icons/av/movie';
import ImageMovieFilter from 'material-ui/svg-icons/image/movie-filter';

// UI components
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';


export default class ListWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      orderTypes: ['Machete', 'Story'],
      API: 'http://www.omdbapi.com/?i=',
      macheteOrder: [],
      macheteTitles: [],
      storyTitles: [],
      storyOrder: []
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  };

  componentDidMount() {
    // Organize by priority
    let machete = _.sortBy(this.props.data, (obj) => {
      if (obj.position.machete != undefined) {
        return obj.position.machete;
      }
    });

    // Filter out any movies not in the machete sequence
    machete = machete.filter((obj) => {
      return obj.position.machete !== null
    });

    // Get their titles
    machete.forEach((movie, index) => {
      HTTP.get(`${this.state.API}${movie.imdbId}`, (err, res) => {
        if (!err) {
          this.setState({
            macheteOrder: this.state.macheteOrder.concat([movie.imdbId]),
            macheteTitles: this.state.macheteTitles.concat([res.data.Title])
          }, () => {
            console.log(this.state)
          });
        }
      });
    });

    // Order by story
    const story = _.sortBy(this.props.data, (obj) => {
      if (obj.position.story != undefined) {
        return obj.position.story;
      }
    });

    // Get their titles
    story.forEach((movie, index) => {
      HTTP.get(`${this.state.API}${movie.imdbId}`, (err, res) => {
        if (!err) {
          this.setState({
            storyTitles: this.state.storyTitles.concat([res.data.Title]),
            storyOrder: this.state.storyOrder.concat([movie.imdbId])
          });
        }
      });
    });
  }

  render() {
    return (
      <div>
        <List>
          <Card>
            <Subheader>
              Star Wars Movies in
                <span className="significant"> { this.state.open ? this.state.orderTypes[0] : this.state.orderTypes[1] } </span>
              order
            </Subheader>
            <div className="toggle-wrapper">
              <Toggle
                toggled={this.state.open}
                onToggle={this.handleToggle}
                labelPosition="right"
                label={this.state.orderType}
              />
            </div>
          </Card>
          {
            this.state.open ?
            <ListItem
              primaryText="Order of Viewing"
              leftIcon={<ImageMovieFilter />}
              initiallyOpen={true}
              nestedItems={this.state.macheteTitles.map((title, index) => {
                return (
                  <ListItem
                    key={index}
                    primaryText={title}
                    leftIcon={<AvMovie />}
                    onTouchTap={() => { FlowRouter.go(`/movie/${this.state.macheteOrder[index]}`) }}
                  />
                )
              })}
            /> :
            <ListItem
              primaryText="Order of Viewing"
              leftIcon={<ImageMovieFilter />}
              initiallyOpen={true}
              nestedItems={this.state.storyTitles.map((title, index) => {
                return (
                  <ListItem
                    key={index}
                    primaryText={title}
                    leftIcon={<AvMovie />}
                    onTouchTap={() => { FlowRouter.go(`/movie/${this.state.storyOrder[index]}`) }}
                  />
                )
              })}
            />
          }
        </List>
      </div>
    );
  }
}

// return (
//   <ListItem
//     key={index}
//     primaryText={res.data.Title}
//     leftIcon={<AvMovie />}
//   />
// )
