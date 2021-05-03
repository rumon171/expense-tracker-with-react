import React from "react";
  export interface ListItem {
    expense: string;
    amount: number;
  }
  
  interface ListItemsArray { // renamed from ITrueFalse
    listItems: Array<ListItem>;
  }

  const DynamicList: React.FC<ListItemsArray> = ({listItems}: ListItemsArray) =>{
    return (
        <>
            <ul>
                {listItems.map(item => (<li key={Math.random()}>{item.amount}</li>))} 
            </ul>
        </>
      );
  }
  
export default DynamicList;
