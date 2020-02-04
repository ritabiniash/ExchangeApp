import React from "react";
import Converter from "./Converter/Converter";
import HistoricalRates from "./History/HistoricalRates";
import Header from "../UI/Header/Header";

// mui imports
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


const Wrapper = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, value) => {
        setValue(value);
    };

    return (
        <React.Fragment>
            <Header>
                <Tabs
                value={value}
                onChange={handleChange}>
                <Tab label="Currency Converter" />
                <Tab label="Rates History" />
                </Tabs>
            </Header>
            {value ? <HistoricalRates/> : <Converter/>}
        </React.Fragment>
      
    ) ;
  };
  
export default Wrapper;
  