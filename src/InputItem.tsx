import React from "react";
import TextField from '@material-ui/core/TextField';

interface Props {
    title: string;
    onChange: (value: any) => void;
    type: string;
    placeholder: string;
    

}

const InputItem: React.FC<Props> = ({title, onChange, type, placeholder}: Props) => {
    return (
        <div className="inputContainer">
            <label>{title}</label>
            <TextField onChange={
                ({ target: { value } }) => onChange(value)} 
                type={type} 
                label={placeholder} 
                className="full-width" 
                variant="outlined" 
                required 
                />
        </div>
    );
  }

export default InputItem;