function InputItem(props: any) {
    return (
        <div>
            <label>{props.title}</label>
            <input id={props.id} className={props.className}  type={props.type} placeholder={props.placeholder} />
        </div>
    );
  }
  
export default InputItem;
