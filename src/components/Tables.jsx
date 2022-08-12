import React from 'react';

import TableItem from './TableItem'

import { Table } from "./StyledComponents/TableItem";



class Tables extends React.Component {
    constructor(props) {
    super(props);
    // this.state = {
    //     filteredData: []
    // }
    //console.log(this);
    // this.props.data.map((item, index) => (   
    //     console.log(item, index)
    // ))
    
}

// deleteItem (itemIndex) {
//     //this.setState({ filteredData: this.props.data.filter((item, index) => index !== itemIndex)})
//     console.log(itemIndex)
// }



render() {
    return (
        <div className="Tables">
            <Table>
                <tbody>
                <tr>
                    <th>NAME</th>
                    <th>HEIGHT</th>
                    <th>GENDER</th>
                </tr>
                    {this.props.data.map((item, index) => (                        
                        <TableItem  key1={index} item={item} />
                        // <tr key={index}>
                        //     <td>{item.name}</td>
                        //     <td>{item.height}</td>
                        //     <td>{item.gender}</td>
                        //     <td><LogoutButton onClick={() => this.deleteItem(index)}>Delete</LogoutButton></td>
                        // </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
    }
}



export default Tables;