import React, {useState, useContext, useEffect} from 'react';
import {SourceContext} from "../../contexts/source-conext";
import {ErrorContext} from "../../contexts/error-context";
import Axios from "../../Axios";
import Select from "../../UI/Select/Select";

// mui imports
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const Converter = () => {
    const appContext = useContext(SourceContext);
    const errorContext = useContext(ErrorContext);
    const [sourceAmount, setSourceAmount] = useState(100.00);
    const [currencies, setCurrencies] = useState();

    // get the rates on mount and evety time when source currency changes
    useEffect(() => {
        const getRates = () => {
          try {
            Axios.get("/latest?base=" + appContext.sourceCurrency).then(res => {
                let newRates = res.data.rates;

                // when the base is EUR the API does not return it on the list
                // so i push it to prevent issues
                if (appContext.sourceCurrency === "EUR")  { 
                    newRates["EUR"] = 1;
                }

                setCurrencies(newRates);
            });
          } catch (error) {
            console.error(error);
            errorContext.errorOccured();
          }
        };
        getRates();
        
      }, [appContext.sourceCurrency]);

    const handleAmountChange = event => {
        setSourceAmount(event.target.value);
      };

    const handleSourceChange = event => {
        appContext.changeSource(event.target.value);
    }

    const handleTargetChange = event => {
        appContext.changeTarget(event.target.value);
    }

    return (currencies ? 
        <div style={{ height : "100%" , 
                      display: "flex" , 
                      flexDirection: "column", 
                      justifyContent : "space-around"}}>
            <Grid container spacing={2}> 
                <Grid item xs={4}>
                    <TextField id="standard-number"
                            label="From"
                            type="number"
                            onChange={handleAmountChange}
                            value={sourceAmount}/>
                </Grid>
                <Grid item xs={8}>
                    <Select value={appContext.sourceCurrency}
                            onChange={handleSourceChange}
                            options={Object.keys(currencies)}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField id="standard-number"
                               label="To"
                               type="number"
                               disabled = {true}
                               value={(Math.ceil(sourceAmount 
                               * currencies[appContext.targetCurrency]*20)/20).toFixed(2)}/>
                </Grid>
                <Grid item xs={8}>
                <Select value={appContext.targetCurrency}
                        onChange={handleTargetChange}
                        options={Object.keys(currencies)}/>
                </Grid>
            </Grid>
          
            <Grid container display= 'flex' direction='column' justify='flex-end'>
                <Typography>
                    Your Rate
                </Typography>
                <Typography variant={"h6"}>
                    {"1 " + appContext.sourceCurrency + " = " + 
                    currencies[appContext.targetCurrency].toFixed(4) + " " + appContext.targetCurrency}
                </Typography>
            </Grid>
        </div> : null
    );

}

export default Converter;