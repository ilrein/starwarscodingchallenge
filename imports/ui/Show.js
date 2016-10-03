import { HTTP } from 'meteor/http';
import React, { Component } from 'react';

import Subheader from 'material-ui/Subheader';
import ShowView from './ShowView';
import Loading from './Loading';

export default class Show extends Component {
  constructor(props) {
    super(props);

    this.state = {
      API: 'http://www.omdbapi.com/?i=',
      loaded: false
    };
  }

  componentDidMount() {
    HTTP.get(`${this.state.API}${this.props.params.id}`, (err, res) => {
      if (!err) {
        this.setState({
          data: res,
          loaded: true
        }, () => {
          console.log(this.state.data);
        });
      }
    })
  }

  render() {
    return (
      <section>
        { this.state.loaded ? <ShowView movie={this.state.data} /> : <Loading /> }
      </section>
    );
  }
}
