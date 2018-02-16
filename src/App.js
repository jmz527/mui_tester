import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import teal from 'material-ui/colors/teal';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';

import Reboot from 'material-ui/Reboot';

import BasicRouter from "./comps/BasicRouter.js";
// import MUI from "./comps/MUI.js";

// import logo from './logo.svg';
import './App.css';


// https://material-ui-next.com/customization/themes/
// const theme = createMuiTheme({
//   palette: {
//     primary: pink,
//     secondary: teal,
//     error: red,
//   },
//   typography: {
//     fontFamily: 'Varela Round, sans-serif'
//   }
// });


// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f1978c',
      main: '#e4605a',
      dark: '#d0112b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#7b9fc2',
      main: '#2e72a4',
      dark: '#004a87',
      contrastText: '#000',
    },
  },
});




class App extends Component {
  render() {
    const content = <BasicRouter />;

    return (
      <div>
        <Reboot />
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            {content}
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
