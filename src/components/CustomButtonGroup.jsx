import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Typography } from "@mui/material";


function CustomButtonGroup(props) {
    const [disabled, setDisabled] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    
    const handleDisable = () =>{
        setDisabled(!disabled);
    }

    const handleClick = () =>{
        setClickCount(clickCount + 1);
    }

    const handleClear = () =>{
        setClickCount(0);
    }

    return ( 
    <ButtonGroup 
        orientation="vertical" 
        variant="outlined"
        aria-label="vertical primary outlined button group"
    >
        <Button 
            disabled={disabled} 
            onClick={handleClick} 
        >
            <Typography variant="button" fontWeight="bold">
                CLICK: {clickCount}
            </Typography>
        </Button>
        <Button
            onClick={handleClear}
        >
            <Typography variant="button" fontWeight="bold">
                CLEAR
            </Typography>
        </Button>
        <Button onClick={handleDisable}>
            <Typography variant="button" fontWeight="bold">
            {disabled? "ENABLE": "DISABLE"}
            </Typography>
        </Button>
    </ButtonGroup> 
  );
}

export default CustomButtonGroup ;