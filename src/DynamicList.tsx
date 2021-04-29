import React from "react";
//   interface Props {
//     listItems: Array<object>;
//    }

  interface ListItem {
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
                {listItems.map(item => (<li>{item.amount}</li>))} 
            </ul>
        </>
      );
  }
  
export default DynamicList;
