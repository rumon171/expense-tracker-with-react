export default function AddButton(props: any) {
    return (
            <button id="addExpenseButton" className="btn" onClick={props.onClick}>{props.content}</button>
        );
    }