import React  from 'react';
import TextField from '@material-ui/core/TextField';

// wraps material UI select/dropdown
const Select = (props) => {
    return (
            <TextField
                select
                fullWidth
                value={props.value}
                onChange={props.onChange}
                SelectProps={{
                    native: true,
                }}  
                variant="outlined"
            >
                {props.options.map(option => (
                    <option key={option} value={option}>
                    {option}
                    </option>
                ))}
            </TextField>
    );
}

export default Select;