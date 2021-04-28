import React from "react";
import TextField from '@material-ui/core/TextField';

export default function InputItem(props: any) {
    return (
        <div className="inputContainer">
            <label>{props.title}</label>
            <TextField onChange={({ target: { value } }) => props.onChange(value)} id={props.id} type={props.type} placeholder={props.placeholder} label="Enter item" className="full-width" variant="outlined" />
        </div>
    );
  }