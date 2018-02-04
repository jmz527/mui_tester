import React, { Component } from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import Slider from "react-slick";

const styles = {
  root: {
    margin: "0 10%",
  },
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};



const ReactSlick = ({ classes }) => (
  <div className={classes.root}>
    <h2>ReactSlick</h2>

    <Slider {...settings}>
      <div><img src='http://placekitten.com/g/400/200' /></div>
      <div><img src='http://placekitten.com/g/400/200' /></div>
      <div><img src='http://placekitten.com/g/400/200' /></div>
      <div><img src='http://placekitten.com/g/400/200' /></div>
    </Slider>

  </div>
)


export default withStyles(styles)(ReactSlick);
