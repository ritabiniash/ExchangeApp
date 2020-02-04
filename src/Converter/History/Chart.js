import React  from "react";
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import CustomizedAxisTick from "./CustomizedAxisTick";

const Chart = (props) => {
    return <React.Fragment>
        <ResponsiveContainer>
        <AreaChart margin={{ top: 10, right: 30, left: 20, bottom: 50 }} data={props.data}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="date" tick={<CustomizedAxisTick/>}/>
        <YAxis type="number" domain={['dataMin', 'dataMax']}/>
        <Tooltip/>
        <Area type='monotone' dataKey='value' stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
      </ResponsiveContainer>
      </React.Fragment>
  }
  
export default Chart;
  
