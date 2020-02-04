import React, {useEffect, useState, useContext} from "react";
import {SourceContext} from "../../contexts/source-conext";
import Axios from "../../Axios"; 
import Chart from "./Chart";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const HistoricalRates = () => {
    const context = useContext(SourceContext);
    const [historyData, setHistoryData] = useState();
    const [selectedHistory, setSelectedHistory] = useState(0);
    // map the tab value to months
    const tabToMonths = {
        0 : 1,
        1 : 3,
        2 : 6,
        3 : 12
    };

    // formats date to "yyyy-mm-dd"
    function formatDate(date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    }

    useEffect(() => {
      const getRates = () => {
      // calculate the date
      let startDate = new Date();
      startDate.setMonth(startDate.getMonth() - tabToMonths[selectedHistory]);

      // format the date for the API
      let start = formatDate(startDate);
      let end = formatDate(new Date());
      try {
        Axios.get("/history?start_at=" + start + "&end_at=" + end + "&base=" + context.sourceCurrency)
            .then(res => {
            
            // destructure the data
            let data = Object.keys(res.data.rates).map(r => 
                { return {date : r, value : res.data.rates[r][context.targetCurrency].toFixed(4)}});
            // sort by dates
            data.sort((a, b) => new Date(a.date) - new Date(b.date));
            
            setHistoryData(data);
          
        });
        } catch (error) {
          console.error(error);
        }};
       
        getRates();
        
      }, [selectedHistory]);


    return (
        <React.Fragment>
            <Tabs
                value={selectedHistory}
                indicatorColor="primary"
                textColor="primary"
                onChange={(event, newValue) => setSelectedHistory(newValue)}>
                <Tab label="Last Month" />
                <Tab label="Last 3 Months" />
                <Tab label="Last 6 Months" />
                <Tab label="Last 12 Months" />
            </Tabs>
            {context.sourceCurrency + " vs " + context.targetCurrency}
            <Chart data={historyData}/>
        </React.Fragment>  
    ) ;
  }
  
export default HistoricalRates;
  