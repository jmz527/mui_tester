import React, { Component } from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    margin: "0 10%",
  },
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match, classes }) => (
  <div className={classes.root}>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)


export default withStyles(styles, { withTheme: true })(withRouter(Topics));