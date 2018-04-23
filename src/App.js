import React, { Component } from 'react';
import { Grid, Jumbotron, Well } from 'react-bootstrap';

import './App.css';
import Cards from './cards';

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Jumbotron componentClass='header'>
          <h1><strong>NPR Politics Podcast</strong></h1>
          <h2>Hosts and Contributors</h2>
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
