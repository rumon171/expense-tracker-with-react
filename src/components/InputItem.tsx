import React from "react";
import TextField from '@material-ui/core/TextField';

interface Props {
    title: string;
    onChange: (value: string) => void;
    type: string;
    placeholder: string;
    value: string;
}

const InputItem: React.FC<Props> = ({title, onChange, type, placeholder, value}: Props) => {
    return (
        <div className="inputContainer">
            <label>{title}</label>
            <TextField 
                onChange={({ target: { value } }) => onChange(value)} 
                type={type} 
                label={placeholder} 
                className="full-width" 
                variant="outlined" 
                required
                style={{margin: "10px 0 0"}}
                value={value}
                />
        </div>
    );
  }

export default InputItem;