import React, { useContext } from 'react';
import '../Styles/Payments.css';
import cashImage from '../images/cash.jpeg';
import visaImage from '../images/visa.jpeg';
import masterImage from '../images/mastercard.jpeg';
import uberImage from '../images/ubereats.jpeg';
import tarjetaImage from '../images/tarjeta.jpeg';
import singImage from '../images/mas.jpeg';
import AppContext from '../AppContext';

function Payments() {
    const value = useContext(AppContext);
    const { setCart } = value;
    
    return (
        <div style={{width: "97%"}}>
        <div className="pay">
           <div className="item-pay"><img src={cashImage}/></div>
           <div className="item-pay"><img src={visaImage}/></div>  
           <div className="item-pay"><img src={masterImage}/></div>  
           <div className="item-pay"><img src={uberImage}/></div> 
           <div className="item-pay"><img src={tarjetaImage}/></div>
           <div className="item-pay"><img src={singImage}/></div>
           <div className="item-payout item-pay" onClick={() => setCart([])}><h1>PAGAR</h1></div>
            </div>
            </div>
    )
}

export default Payments;
