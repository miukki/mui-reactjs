import React, { Component } from 'react';
import './App.scss';
import {  Button,
          CssBaseline,
          MuiThemeProvider,
          withStyles   
} from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';
import Types from './components/Types';
import theme from './themeMUI.js';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  icon: {
    marginRight: theme.spacing.unit * 50 ,
  },
});

class Index extends Component {

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>

        <CssBaseline />
        {/* CssBaseline is normalization for styles */}

        <Header></Header>
        
        <div className={classes.root}>
      
          <div>
            <Button variant="contained" className={classes.button}>
              Default
            </Button>
            <Button variant="contained" color="primary" className={classes.button}>
              Primary
            </Button>
            <Button variant="contained" color="secondary" className={classes.button}>
              Secondary
            </Button>
            <Button variant="contained" disabled className={classes.button}>
              Disabled
            </Button>
          </div>

          <Types></Types>
        
         
         
          {/* <Button variant="contained" color="secondary" onClick={this.handleClick}>
            <Icon className={classes.icon}>email</Icon>
            email
          </Button> */}

          <Footer></Footer>
        </div>

    </MuiThemeProvider>

    );
  }
}

const App = withStyles(styles)(Index);
export default App;
