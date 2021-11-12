import React, { useContext, useState } from "react";
import "../Styles/Table.css";
import "../Components/TableColumn.js";
import AppContext from "../AppContext";
import thrashIcon from "../images/thrash.jpeg"
function Table() {
    const value = useContext(AppContext);
    const { setCart } = value;
    const { cart } = value.state;
  
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
      <div className="tab">
        {cart?.map((p) => {
            let quantity = 0;
            let total = 0
            cart.forEach(prod => {
                if (p.id === prod.id) {
                    quantity++
                    total = total + prod.price
                }
            })
          return (
            <div className="bar">
              {" "}
              <label>{quantity} </label>
                  <label>{p.name} </label>{" "}
                  <label>{total} </label>
                  <img src={thrashIcon} /> 
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Table;
