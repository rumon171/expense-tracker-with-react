import React from "react";

function AddButton(props: any) {
    return (
            <button id="addExpenseButton" className="btn" onClick={props.onClick}>{props.content}</button>
        );
    }

export default AddButton;