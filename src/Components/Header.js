// import { AppBar, Container, MenuItem, Toolbar, Typography, Select} from '@material-ui/core/'
// import { makeStyles } from "@material-ui/core/styles";
// import React from 'react';
// import React, { useState } from "react";
// // import {useHistory} from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// const useStyles = makeStyles(() => ({
//     title:{
//         flex: 1,
//         color: "#FFD700",
//         fontFamily: "Montserrat",
//         fontWeight: "bold",
//         cursor: "pointer",
//     },
// }));

// const Header = () => {

//   const classes = useStyles();

//   const navigate = useNavigate()

//   return (
//     <AppBar color="transparent" position='static'>
//         <Container>
//           <Toolbar>
//             <Typography onClick={() => navigate("/")}  className={classes.title}> Crypto Hunter </Typography>

//             <Select variant='outlined'
//             style={{
//                 width: 100,
//                 height: 40,
//                 marginLeft: 15,
//             }}>
//             <MenuItem>USD</MenuItem>
//             <MenuItem>INR</MenuItem>
//             </Select>
//             </Toolbar>  
//         </Container>
//     </AppBar>
//   )
// }

// export default Header

import React, { useState } from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Toolbar,
  Typography,
  Select,
} from "@material-ui/core";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "#FFD700",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  // const [currency, setCurrency] = useState("USD");
  
  const {currency,setCurrency}= CryptoState();

  console.log(currency);

  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff"
      },
      type: "dark"
    },
  });
  

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography onClick={() => navigate("/")} className={classes.title}>
            Crypto Hunter
          </Typography>

          <Select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            variant="outlined"
            style={{
              width: 100,
              height: 40,
              marginLeft: 15,
              color: "white",
            }}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};

export default Header;
