import React from 'react'
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";
import { convertNumber } from '../../../Functions/convertNumber';

const LineChart = ({chartData, priceType, multiAxis}) => {
  const options={
    plugins:{
        legend:{
            display: multiAxis? true :false,
        },
    },
    responsive: true,
    interaction:{
        mode: "index",
        intersect: false,
    },
    scales:{
      y:{
        ticks:{
          callback:function(value, index, ticks){
            if(priceType == "prices") return "$" + value.toLocaleString();
            else{
              return "$" + convertNumber(value);
            }
          },
        },
      },
    },
  };
  return <Line data={chartData} options={options}/>;
}

export default LineChart
