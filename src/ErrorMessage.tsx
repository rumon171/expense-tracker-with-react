function ErrorMessage(props: any) {
    return (
        <div id={props.id} className={props.className}>
            Please enter a title for the expense and amount of money spent for it
        </div>
    );
  }
  
export default ErrorMessage;
  