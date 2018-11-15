import React, { Component } from 'react';
import './Footer.scss';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    textAlign: 'left',
    // paddingTop: theme.spacing.unit * 20,
  },
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (

        <div className={classes.root}>
          Footer Footer Footer Footer Footer 
        </div>
      
    );
  }
}

export default withStyles(styles)(Footer);
