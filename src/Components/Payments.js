import React from 'react'
import '../Styles/Payments.css'

function Payments() {
    return (
        <div className="pay">
           <div className="item-pay">$</div>
           <div className="item-pay">VISA</div>  
           <div className="item-pay">MASTER</div>  
           <div className="item-pay">UBER</div> 
           <div className="item-pay">DEBITO</div>
           <div className="item-pay">+</div>
           <div className="item-payout item-pay">PAGAR</div>
        </div>
    )
}

export default Payments;
