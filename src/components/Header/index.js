import React, { Component } from 'react';
import './Header.scss';
import { withStyles } from '@material-ui/core';
import { Button, Grid } from '@material-ui/core';
import Video from '../Video';


const styles = theme => ({
  root: {
    textAlign: 'center',
    height: '600px',
    padding: theme.spacing.unit * 5,

  },
  logoWrapper: {
    textAlign: 'left',
    paddingLeft: theme.spacing.unit * 5,
  },
});

class Header extends Component {
    state = {
        spacing: '40',
      };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    
    return (
        
        <div className={'header'}>

          <Video></Video>

          <div className={'textWrapper'}>

            <Grid 
              container 
              alignItems={'stretch'}
              direction={'row'}
              justify={'center'}
              className={classes.root} spacing={Number(spacing)}>
                
                <Grid item xs={12}>
                  <div className={classes.logoWrapper}>
                      <div className={'iconLogo'}></div>
                    </div>

                </Grid>

                <Grid item xs={12}>
                  <div className={'tagLine'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla massa vitae nisl scelerisque lobortis.
                  </div>

                </Grid>

                <Grid item xs={12}>
                  <Grid container justify="center" spacing={Number(spacing)}>
                      {['adopt', 'host', 'show', 'our story'].map((value, index) => (
                      <Grid key={index} item>
                        <Button variant="contained" className={'buttonHeader'}>
                          {value}
                        </Button>
                      </Grid>
                      ))}
                  </Grid>
                </Grid>

            </Grid>
            
          </div>


        </div>
        


            // <div className={classes.root}>
            //     <div className="header">
            //         content content content content
            //         content content content content
            //         content content content content
            //     </div>
            // </div>

      
    );
  }
}
export default withStyles(styles)(Header);
