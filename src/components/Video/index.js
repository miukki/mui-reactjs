import React, { Component } from 'react';
import './Video.scss';
import { withStyles } from '@material-ui/core';
import ContainerDimensions  from 'react-container-dimensions'

const styles = theme => ({
  root: {
  },
});

class Video extends Component {
  render() {
    return (

        <div className={'videoWrapper'}>
            <ContainerDimensions>
            {({ width: widthSource }) => {

                const width = widthSource < 1480 ? 1480 : widthSource
                const height = 600 * (width / 1480)
                const marginLeft = widthSource < 740 ? - 1480 / 2 + widthSource / 2 : -40
                const title = 'Honey'
                return (
                <iframe
                    frameBorder={'0'}
                    title={title}
                    width={width}
                    height={height}
                    src='https://www.youtube.com/embed/2fkCsrI-Rz4?autoplay=1&showinfo=0&controls=0&&mute=1&loop=1&playlist=2fkCsrI-Rz4'
                    style={{ marginLeft }} />
                )
            }}
            </ContainerDimensions>
        </div>        
    );
  }
}

export default withStyles(styles)(Video);
