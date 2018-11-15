import { createMuiTheme } from '@material-ui/core';


// $black: #000000;
// $greyish-brown: #4a4a4a;
// $white: #ffffff;
// $squash: #f5a623;
// $tan: #e1b263;
// $white-three: #fafafa;


const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    palette: {
      primary: {
        main: '#000000',
        // dark: '#4a4a4a',
        // light: '#dddddd',
        contrastText: '#fff'
      },
      secondary: {
        main: '#f5a623',
        // light: '#e1b263',
        // dark: '#fafafa',
        contrastText: '#fff'
      },
      error: {
        main: '#f44336',
        // light: '#e57373',
        // dark: '#d32f2f', 
        contrastText: '#fff',   
      }
    },
  });
  
  export default theme;