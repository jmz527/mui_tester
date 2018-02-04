import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import ReactSlick from "./sliders/ReactSlick";
import ReactIdSwiper from "./sliders/ReactIdSwiper";
import Images from "./sliders/Images";

const styles = {
  root: {
    margin: "0 10%",
  },
}


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
      <li>
        <Link to={`${match.url}/imgs`}>images</Link>
      </li>
    </ul>

    <Route path={`${match.url}/react-slick`} component={ReactSlick}/>
    <Route path={`${match.url}/react-id-swiper`} component={ReactIdSwiper}/>
    <Route path={`${match.url}/imgs`} component={Images}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)


export default withStyles(styles, { withTheme: true })(withRouter(Sliders));