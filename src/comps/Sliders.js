import React, { Component } from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import ReactSlick from "./sliders/ReactSlick";
import ReactIdSwiper from "./sliders/ReactIdSwiper";

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


const Sliders = ({ match, classes }) => (
  <div className={classes.root}>
    <h2>Sliders</h2>
    <ul>
      <li>
        <Link to={`${match.url}/react-slick`}>react-slick</Link>
      </li>
      <li>
        <Link to={`${match.url}/react-id-swiper`}>react-id-swiper</Link>
      </li>
    </ul>

    <Route path={`${match.url}/react-slick`} component={ReactSlick}/>
    <Route path={`${match.url}/react-id-swiper`} component={ReactIdSwiper}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)


export default withStyles(styles, { withTheme: true })(withRouter(Sliders));