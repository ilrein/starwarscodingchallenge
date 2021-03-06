import { HTTP } from 'meteor/http';
import React, { Component } from 'react';

import Loading from './Loading';
import ListWrapper from './ListWrapper';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      API: 'https://mysterious-peak-27876.herokuapp.com/',
      data: {}
    };
  }

  componentDidMount() {
    HTTP.get(this.state.API, (err, res) => {
      if (!err) {
        this.setState({
          data: res.data,
          loaded: true
        }, () => {
          // console.log(this.state.data)
        });
      }
    })
  }

  render() {
    return (
      <section>
        {
          this.state.loaded ?
          <div>
            <ListWrapper
              data={this.state.data}
            />
          </div> :
          <Loading />
        }
      </section>
    )
  }
}

// HTTP.get(`${this.state.API}${this.props.params.id}`, (err, res) => {
//   if (!err) {
//     this.setState({
//       data: res,
//       loaded: true
//     }, () => {
//       console.log(this.state.data);
//     });
//   }
// })
