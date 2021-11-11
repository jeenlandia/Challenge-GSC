import React from 'react';
import '../Styles/Table.css';
import '../Components/TableColumn.js'

function Table() {
    return (
        <div className="tab">
        <div className="bar">
            <div className="tab-col">
                <li>CANTIDAD</li>
            </div> 

            <div className="tab-col">
                <li>PRODUCTO</li>
            </div>

            <div className="tab-col">
                <li>TAX</li>
            </div>

            <div className="tab-col">
                <li>TOTAL</li>
            </div>    
        </div>
        </div>
    )
}
export default Table;
