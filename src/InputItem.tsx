import React from "react";
import TextField from '@material-ui/core/TextField';

export default function InputItem(props: any) {
    return (
        <div className="inputContainer">
            <label>{props.title}</label>
            <TextField onChange={props.onChange} id={props.id} type={props.type} placeholder={props.placeholder} label="Enter item" className="full-width" variant="outlined" />
        </div>
    );
  }