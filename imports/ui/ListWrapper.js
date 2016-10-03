import React from 'react';
import { List, ListItem } from 'material-ui/List';
// import { _ } from 'lodash';

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
      orderTypes: ['Machete', 'Story']
    };
    // console.log(this.props.data);

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    let machete = _.sortBy(this.props.data, (obj) => {
      if (obj.position.machete != undefined) {
        return obj.position.machete;
      }
    });

    machete = machete.filter((obj) => {
      return obj.position.machete !== null
    });

    let story = _.sortBy(this.props.data, (obj) => {
      if (obj.position.story != undefined) {
        return obj.position.story;
      }
    });

    story = story.filter((obj) => {
      return obj.position.story !== null
    });

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
              primaryTogglesNestedList={true}
              nestedItems={machete.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    primaryText={item.imdbId}
                    leftIcon={<AvMovie />}
                  />
                )
              })}
            /> :
            <ListItem
              primaryText="Order of Viewing"
              leftIcon={<ImageMovieFilter />}
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedItems={story.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    primaryText="index"
                    leftIcon={<AvMovie />}
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
