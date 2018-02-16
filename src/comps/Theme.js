import React, { Component } from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';

import ThemeDefault from "./ThemeDefault";

import Palette from "./theme/Palette";
import DarkTheme from "./theme/DarkTheme";
import TypographyTheme from "./theme/TypographyTheme";
import FontSizeTheme from "./theme/FontSizeTheme";
import CustomStyles from "./theme/CustomStyles";
import OverridesTheme from "./theme/OverridesTheme";
import WithTheme from "./theme/WithTheme";
import Nested from "./theme/Nested";

import CssInJs from "./theme/CssInJs";
import JssRegistry from "./theme/JssRegistry";
import RenderProps from "./theme/RenderProps";
import StyledComponents from "./theme/StyledComponents";
import Colors from "./theme/Colors";

const styles = theme => ({
  root: {
    margin: "0 10%",
  },
  button: {
    margin: "0 8px 8px 0",
  },
});

class Theme extends Component {
  render() {
    const { classes, match } = this.props;

    const toolBar = (
      <div>
        <Button raised className={classes.button} component={props => <Link to={`${match.url}/default`} {...props} />}>Default Theme</Button>
        <Button raised className={classes.button} component={props => <Link to={`${match.url}/customization`} {...props} />}>Customization</Button>
        <Button raised className={classes.button} component={props => <Link to={`${match.url}/cssinjs`} {...props} />}>CSS in JS</Button>
        <Button raised className={classes.button} component={props => <Link to={`${match.url}/colors`} {...props} />}>Colors</Button>
      </div>
    )


    return (
      <div className={classes.root}>
        <h1>MUI Theme</h1>

        { toolBar }

        <Route path={`${match.url}/default`} component={ThemeDefault}/>
        <Route path={`${match.url}/customization`} component={Customiz}/>
        <Route path={`${match.url}/cssinjs`} component={CSSINJS}/>
        <Route path={`${match.url}/colors`} component={Colors}/>

        <Route exact path={match.url} render={() => (
          <h3>Please select a topic.</h3>
        )}/>
      </div>
    )
  }
}

const Customiz = () => (
  <div>
    <hr/>
    <Palette/>
    <hr/>
    <DarkTheme/>
    <hr/>
    <TypographyTheme/>
    <hr/>
    <FontSizeTheme/>
    <hr/>
    <CustomStyles/>
    <hr/>
    <OverridesTheme/>
    <hr/>
    <WithTheme/>
    <hr/>
    <Nested/>
    <hr/>
  </div>
);

const CSSINJS = () => (
  <div>
    <hr/>
    <CssInJs/>
    <hr/>
    <JssRegistry/>
    <hr/>
    <RenderProps/>
    <hr/>
    <StyledComponents/>
    <hr/>
  </div>
);

export default withStyles(styles, { withTheme: true })(withRouter(Theme));