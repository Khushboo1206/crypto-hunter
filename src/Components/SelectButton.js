import { makeStyles } from '@material-ui/core'
import React, { use } from 'react'

const SelectButton = ({children, selected, onClick}) => {
    const useStyles = makeStyles({
        selectButton: {
      border: "1px solid gold",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
        backgroundColor: (props) => (props.selected ? "gold" : "transparent"),
    color: (props) => (props.selected ? "black" : "gold"),
    fontWeight: (props) => (props.selected ? 700 : 500),
      "&:hover": {
        backgroundColor: "gold",
        color: "black",
      },
      width: "22%",
      margin: 5,
    },
    });

    const classes= useStyles({selected});
  return (
    <span 
    onClick={onClick} className={classes.selectButton}>
        {children}
    </span>
  );
  };

export default SelectButton