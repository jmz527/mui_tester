import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import OverridesClassNames from "./overrides/OverridesClassNames";
import OverridesClasses from "./overrides/OverridesClasses";
import OverridesInlineStyle from "./overrides/OverridesInlineStyle";
import OverridesComponent from "./overrides/OverridesComponent";

const styles = {
  root: {
    margin: "0 10%",
  },
}

class Overrides extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h1>MUI Overrides</h1>

        <hr/>
        <OverridesClassNames/>
        <hr/>
        <OverridesClasses/>
        <hr/>
        <OverridesInlineStyle/>
        <hr/>
        <OverridesComponent/>
        <hr/>


      </div>
    )
  }
}
export default withStyles(styles, { withTheme: true })(withRouter(Overrides));