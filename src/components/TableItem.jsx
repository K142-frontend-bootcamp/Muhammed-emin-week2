import { LogoutButton } from "./StyledComponents/ScHome";
import React, {useEffect, useState} from 'react';




const TableItem = ({ item, key1 }) => {


    const deleteItem = (itemIndex) => {
        console.log(itemIndex)
        // const filteredData = item.filter((item, index) => index !== itemIndex);
        // setItems(filteredData);

    }
    

    return (
        <>
        <tr >
            <td>{item.name}</td>
            <td>{item.height}</td>
            <td>{item.gender}</td>
            <td><LogoutButton onClick={() => deleteItem(key1)}>Delete</LogoutButton></td>
        </tr>
        </>
        
    );
};


export default TableItem;