import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import GuttersGrid from "./layout/GuttersGrid";
import FullWidthGrid from "./layout/FullWidthGrid";
import CenteredGrid from "./layout/CenteredGrid";
import InteractiveGrid from "./layout/InteractiveGrid";
import AutoGrid from "./layout/AutoGrid";
import AutoGridNoWrap from "./layout/AutoGridNoWrap";

const styles = {
  root: {
    margin: "0 10%",
  },
}

class Layout extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h1>MUI Layout</h1>

          <hr/>
          <GuttersGrid/>
          <hr/>
          <FullWidthGrid/>
          <hr/>
          <CenteredGrid/>
          <hr/>
          <InteractiveGrid/>
          <hr/>
          <AutoGrid/>
          <hr/>
          <AutoGridNoWrap/>
          <hr/>

      </div>
    )
  }
}
export default withStyles(styles, { withTheme: true })(withRouter(Layout));