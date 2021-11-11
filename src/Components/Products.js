import React, { useState } from "react";
import '../Styles/Products.css';

function Products(){
    const [selected, setSelected] = useState(0)
    const handleClick = e =>{
        setSelected(e.target.id)}
    return(
        <div>
            <div className="bar">
                <ul>
                    <li id={1} className = {selected === '1' && "active"} onClick={e=>handleClick(e)}>BEBIDAS</li>
                    <li id={2} className = {selected === '2' && "active"} onClick={e=>handleClick(e)}>COMIDAS</li>
                    <li id={3} className = {selected === '3' && "active"} onClick={e=>handleClick(e)}>REPOSTERIA Y PANADERIA</li>
                    <li id={4} className = {selected === '4' && "active"} onClick={e=>handleClick(e)}>REFRIGERADOS</li>
                </ul>
            </div>
       <div className="grid">
           <div className="item">1</div>
           <div className="item">2</div>  
           <div className="item">3</div>  
           <div className="item">4</div> 
           <div className="item">5</div>
           <div className="item">6</div>
           <div className="item">7</div>
           <div className="item">volver</div>   
       </div>
       </div>
    )
};

export default Products;