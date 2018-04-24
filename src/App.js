import React, { Component } from 'react';

import './App.css';

import { Grid, Image, Jumbotron, Well } from 'react-bootstrap';

import Cards from './cards';

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Jumbotron componentClass="header">
          <Image
            src="//media.npr.org/assets/img/2015/11/13/nprpolitics_red1400px_sq-6bc03b536409ec88fd8d3abb637b560e93865bad-s700-c85.png"
            className="jumbotron-logo"
            responsive
          />
          <div>
            <h1><strong>NPR Politics Podcast</strong></h1>
            <h2>Hosts and Contributors</h2>
          </div>
        </Jumbotron>
        <Cards/>
        <Well>
          <p className="lead">A work in progress.</p>
          <strong>Note:</strong> Excludes individuals who were guest contributors or occasional subject area experts.
        </Well>
      </Grid>
  );
  }
}

export default App;
