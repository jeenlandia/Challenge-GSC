import React from "react";
import "../Styles/Coupons.css";
import empleImage from "../images/empleados.jpeg";
import clientImage from "../images/view.jpeg";
import discountImage from "../images/descuento.jpeg";

function Coupons() {
  return (
    <div className="cop">
      <div className="item-cop">
        <img src={empleImage} />
        <h4>DESCUENTO EMPLEADOS </h4>
      </div>
      <div className="item-cop">
        <img src={clientImage} />
        <h4>VISTA CLIENTE </h4>
      </div>
      <div className="bottom-item item-cop">
        <img src={discountImage} />
        <h4>CÓDIGO PROMOCIONAL </h4>
      </div>
    </div>
  );
}
export default Coupons;
