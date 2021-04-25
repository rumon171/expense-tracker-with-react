function AddButton(props: any) {
    return (
            <button id="addExpenseButton" className="btn">{props.content}</button>
        );
}

export default AddButton;