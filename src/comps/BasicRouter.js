import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';

import MUI from "./MUI";
import Theme from "./Theme";
import Overrides from "./Overrides";
import Layout from "./Layout";
import Sliders from "./Sliders";
import Topics from "./Topics";


const styles = {
  root: {
    margin: "0 10%",
  },
  contentWrapper: {
    paddingTop: 80,
  },
}

class BasicRouter extends Component {
  handleBack() {
    if (!this.isRootPage()) {
      this.props.history.goBack()
    }
  }

  isRootPage() {
    return this.props.history.location.pathname === "/"
  }

  render() {
    const { classes } = this.props;

    const Home = () => (
      <div className={classes.root}>
        <h2>Home</h2>

        <p>This is a playground for Material-UI</p>

        <p><a href="https://material-ui-next.com/">material-ui-next.com</a></p>

        <p><a href="https://material.io/">material.io</a></p>
      </div>
    )

    const appBar = (
      <AppBar position="fixed" color="default" elevation={0}>
        <Toolbar disableGutters={true}>
          {!this.isRootPage() &&
            <IconButton className={classes.backButton} aria-label="Back" onClick={this.handleBack.bind(this)}>
              <ArrowBackIcon />
            </IconButton>
          }

          <Button component={props => <Link to="/" {...props} />}>Home</Button>
          <Button component={props => <Link to="/mui" {...props} />}>MUI</Button>
          <Button component={props => <Link to="/theme" {...props} />}>Theme</Button>
          <Button component={props => <Link to="/overrides" {...props} />}>Overrides</Button>
          <Button component={props => <Link to="/layout" {...props} />}>Layout</Button>
          <Button component={props => <Link to="/sliders" {...props} />}>Sliders</Button>
          <Button component={props => <Link to="/topics" {...props} />}>Topics</Button>
        </Toolbar>
      </AppBar>
    )

    return (
      <div className={classes.root}>
        <Router>
          <div>
            { appBar }
            <div className={classes.contentWrapper}>
              <div>
                <Route exact path="/" component={Home}/>
                <Route path="/mui" component={MUI}/>
                <Route path="/theme" component={Theme}/>
                <Route path="/overrides" component={Overrides}/>
                <Route path="/layout" component={Layout}/>
                <Route path="/sliders" component={Sliders}/>
                <Route path="/topics" component={Topics}/>
              </div>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(BasicRouter));