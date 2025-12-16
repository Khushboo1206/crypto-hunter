import React, {useEffect, useState} from 'react'
import { CryptoState} from "../CryptoContext"
import axios from 'axios';
import{HistoricalChart} from "../config/api";
import { createTheme, makeStyles, ThemeProvider, CircularProgress } from '@material-ui/core';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Legend } from 'chart.js';
import { chartDays } from '../config/data';
import SelectButton from './SelectButton';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const CoinInfo = ({coin}) => {
const[historicalData, setHistoricalData] = useState([]);
const[days, setDays] = useState(1);

const{ currency}=CryptoState();

const fetchHistoricalData = async () => {
    const{data} = await axios.get(HistoricalChart(coin.id, days, currency.toLowerCase()));
    setHistoricalData(data.prices);
};
useEffect(() => {
   fetchHistoricalData ();
},[currency, days]);
const darkTheme = createTheme({
    palette:{
        primary:{
            main:"#fff"
        },
        type:"dark",
    },
});
const useStyles = makeStyles((theme) => ({
    container:{
        width:"75%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        marginTop:25,
        padding:40,
        [theme.breakpoints.down("md")]:{
            width:"100%",
            marginTop:0,
            padding:20,
            paddingTop:0,
        },
    }
}));
const classes =useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
     <div className={classes.container}>
      {
        !historicalData?(
            <CircularProgress
            style={{color:"gold"}}
            size={250}
            thickness={1}
            />
        ):(
        <>
        <Line
        data={{
            labels: historicalData.map((coin) => {
            let date= new Date(coin[0]);
            let time =date.getHours() > 12
            ? `${date.getHours()- 12}:${date.getMinutes()} PM`
            : `${date.getHours()- 12}:${date.getMinutes()} AM`

            return days===1?time:date.toLocaleDateString();
            }),

            datasets:[{
                data:historicalData.map((coin)=>coin[1]),
                label: `Price(Past ${days} Days) in ${currency.label}`,
                borderColor:"gold",
         }]
        }}
        options={{
            elements:{
                point:{
                    radius:1,
                },
            },
        }}
        />
        <div
        style={{
            display:"flex",
            marginTop: 20,
            justifyContent:"space-around",
            gap:15,
            width:"100%"
        }} >
            {chartDays.map((day) =>(
                <SelectButton
                key={day.value}
                onClick={()=>setDays(day.value)}
                selected={day.value === days}
                >{day.label}
                </SelectButton>
            ))}
        </div>
        </>)
      }
     </div>
    </ThemeProvider>
  )
}

export default CoinInfo