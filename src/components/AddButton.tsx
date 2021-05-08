import React from "react";
import Button from '@material-ui/core/Button';

interface Props {
    content: string;
    onClick: (value: any) => void;
  }

const AddButton: React.FC<Props> = ({content, onClick}: Props) => {
    return (
        <Button 
            className="full-width" 
            onClick={onClick} 
            variant="contained" 
            color="primary">
            {content}
        </Button>
        );
  }

export default AddButton;