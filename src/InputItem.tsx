export default function InputItem(props: any) {
    return (
        <div>
            <label>{props.title}</label>
            <input  onClick={props.onClick}  id={props.id} className={props.className}  type={props.type} placeholder={props.placeholder} />
        </div>
    );
  }