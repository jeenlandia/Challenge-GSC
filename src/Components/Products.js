import React, { useContext, useState } from "react";
import "../Styles/Products.css";
import products from "../mock/product.json";
import AppContext from "../AppContext";
import returnIcon from "../images/return.jpeg"
function Products() {
  const [selected, setSelected] = useState(0);
  const value = useContext(AppContext);
  const { setCart } = value;
  const { cart } = value.state;
  const handleClick = (e) => {
    setSelected(e.target.id);
  };

  const handleAdder = (e) => {
    const product = products.find((p) => p.id === e.target.id);
     setCart([...cart, {...product, quantity: 0}]) 
  };
  
  return (
    <div style={{ width: "97%", background: "white" }}>
      <div className="bar">
        <ul>
          <li
            id={1}
            className={selected === "1" && "active"}
            onClick={(e) => handleClick(e)}
          >
            BEBIDAS
          </li>
          <li
            id={2}
            className={selected === "2" && "active"}
            onClick={(e) => handleClick(e)}
          >
            COMIDAS
          </li>
          <li
            id={3}
            className={selected === "3" && "active"}
            onClick={(e) => handleClick(e)}
          >
            REPOSTERIA Y PANADERIA
          </li>
          <li
            id={4}
            className={selected === "4" && "active"}
            onClick={(e) => handleClick(e)}
          >
            REFRIGERADOS
          </li>
        </ul>
      </div>
      <div className="grid">
        {products?.map((p) => (
          <div className="item">
            {" "}
            <img src={p.image} id={p.id} onClick={(e) => handleAdder(e)} />
            <label id="p-name">{p.name} </label>
            <label id="p-price">{p.price} </label>{" "}
          </div>
        ))}
         <div className="item"><img src={returnIcon}></img> </div>
      </div>
    </div>
  );
}

export default Products;
