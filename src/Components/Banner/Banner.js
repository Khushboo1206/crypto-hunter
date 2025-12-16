import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import Carousel from './Carousel';


const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: "url(./banner2.jpg)",
    position: "relative",
    overflow: "hidden",
    },

    overlay: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
  },

    bannerContent:{
        height: 420,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
        position:"relative",
        zIndex: 2,
    },
    tagline:{
        display:"flex",
        height: "40%",
        flexDirection:"column",
        paddingTop:25,
        // justifyContent:"center",
        alignItems: "flex start",
        textAlign:"left",
    },
      title: {
    fontWeight: 700,
    fontFamily: "Montserrat",
    color: "#ffffff",
    marginBottom: 12,
    letterSpacing:0.5,
  },

  subtitle: {
    color: "#b0b3c6",
    fontFamily: "Montserrat",
    fontSize: 14,
    maxWidth: 500,
  },
}));

const Banner=() =>{
    const classes = useStyles();
  return (
    <div className={classes.banner}>
        <div className={classes.overlay}/>
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
                <Typography
                variant='h2' className={classes.title}
                style={{
                    fontWeight: "bold",
                    marginBottom: 15,
                    fontFamily: "Montserrat",
                }}>
                    Crypto Hunter
                </Typography>
                <Typography
                variant='subtitle2' className={classes.subtitle}
                style={{
                    color:"darkgray",
                    textTransform:"capitalize",
                    fontFamily:"Montserrat"
                }}>
                    {/* Get all the info regarding your favourite crypto currancy */}
                    Live crypto prices, market trends & insights

                </Typography>
            </div>
            <Carousel/>
        </Container>
    </div>
  )
};

export default Banner;