import React, { useState, useEffect, useContext } from "react";
import Axios from "../Axios";
import List from '@material-ui/core/List';
import RateItem from "./RateItem";
import {SourceContext} from "../contexts/source-conext";
import Header from "../UI/Header/Header";
import { Grid, Typography } from "@material-ui/core";


const TodaysRate = () => {
    const defaultRates = ['EUR', 'GBP', 'CAD', 'MXN', 'JPY'];
    const context = useContext(SourceContext);
    const [rates, setRates] = useState();
    const [ratesToDisplay, setRatesToDisplay] = 
      useState(['EUR', 'GBP', 'CAD', 'MXN', 'JPY']); 

    // Updates to rates on mount and when the source changes
    useEffect(() => {
      const getRates = () => {
        try {
          Axios.get("/latest?base=" + context.sourceCurrency).then(res => {
            setRates(res.data.rates);
          });
        } catch (error) {
          console.error(error);
        }
      };

      getRates();
      setRatesToDisplay(ratesForDisplay);
    }, [context.sourceCurrency]);

    // Updates the currencies when the targer changes
    useEffect(() => {
      setRatesToDisplay(ratesForDisplay());
    }, [context.targetCurrency]);

    // Returns the rates that should be displayes
    const ratesForDisplay = () => {
      let tempDisplayRates = [...defaultRates];

      if (context.sourceCurrency !== "ILS" && context.targetCurrency !== "ILS" ) {
        // Put ILS in the top of the list and delete the last entry
        tempDisplayRates = ["ILS", ...tempDisplayRates];
        tempDisplayRates.pop();
      }
      
      if (defaultRates.includes(context.sourceCurrency)) {
        // Delete the source curreny from the display and show USD instead
        tempDisplayRates[tempDisplayRates.indexOf(context.sourceCurrency)] = "USD";
      }

      return tempDisplayRates;
    }

   
    return rates ?(
    <div>
      <Header>
        <Grid container
              direction="row"
              justify="space-between"
              alignItems="center">
          <Grid item>
            <Typography>
              Today`s Rates 
            </Typography> 
          </Grid>
          <Grid item>
            <Typography>
              1 {context.sourceCurrency} =
            </Typography> 
          </Grid>
        </Grid>
      </Header>
      <List dense>
        {ratesToDisplay.map(r => 
            <RateItem key={r} currencyName={r} currencyRate={rates[r]} />
        )}
      </List>
    </div>
    ) : null;
  };
  
  export default TodaysRate;
  