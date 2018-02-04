import React, { Component } from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import Swiper from 'react-id-swiper';

const styles = {
  root: {
    margin: "0 10%",
  },
}

const params = {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  spaceBetween: 30
}

const ReactIdSwiper = ({ classes }) => (
  <div className={classes.root}>
    <h2>ReactIdSwiper</h2>

    <Swiper {...params}>
      <div><img src='http://placekitten.com/g/400/200' /></div>
      <div><img src='http://placekitten.com/g/400/200' /></div>
      <div><img src='http://placekitten.com/g/400/200' /></div>
      <div><img src='http://placekitten.com/g/400/200' /></div>
      <div><img src='http://placekitten.com/g/400/200' /></div>
    </Swiper>

  </div>
)


export default withStyles(styles)(ReactIdSwiper);
