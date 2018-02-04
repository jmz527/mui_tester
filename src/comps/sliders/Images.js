import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    // margin: "0 10%",
  },
  pics: {
    position: "relative",
    // top: 300,
    left: 0,
    right: 0,
    width: "100%",
    height: "300px",
    maxWidth: "100% !important",
  },
  pic: {
    backgroundSize: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    maxWidth: "100% !important",
  }
}


const Images = ({ classes }) => (
  <div className={classes.root}>
    <h3>Images</h3>
      <div id="slideshow3" className={classes.pics}>
        <div style={{ backgroundColor: "teal", display: "inline-block", width: "25%", height: "100%", position: "relative" }}>
			<div className={classes.pic} style={{ backgroundPosition: "50% 100%", backgroundImage: "url(http://placekitten.com/g/400/200)" }}></div>
        </div>
        <div style={{ backgroundColor: "aqua", display: "inline-block", width: "25%", height: "100%", position: "relative" }}>
			<div className={classes.pic} style={{ backgroundPosition: "50% 25%", backgroundImage: "url(http://placekitten.com/g/400/200)" }}></div>
        </div>
        <div style={{ backgroundColor: "lightblue", display: "inline-block", width: "25%", height: "100%", position: "relative" }}>
			<div className={classes.pic} style={{ backgroundPosition: "50% 50%", backgroundImage: "url(http://placekitten.com/g/400/200)" }}></div>
        </div>
      </div>
  </div>
)

export default withStyles(styles)(Images);




