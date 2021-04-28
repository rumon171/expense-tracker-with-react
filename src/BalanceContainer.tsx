function BalanceContainer(props: any) {
    return (
        <h2 id={props.id} className={props.className}>
            Total Balance:
            <span id="balance"></span>
        </h2>
    );
  }
  
export default BalanceContainer;





