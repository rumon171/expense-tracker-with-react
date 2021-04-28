import React from "react";
import TextField from '@material-ui/core/TextField';

function InputItem(props: any) {
    return (
        <div className="inputContainer">
            <label>{props.title}</label>
            <TextField onChange={
                ({ target: { value } }) => props.onChange(value)} 
                id={props.id} type={props.type} 
                label={props.placeholder} 
                className="full-width" 
                variant="outlined" />
        </div>
    );
  }

export default InputItem;