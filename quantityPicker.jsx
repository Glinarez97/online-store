import "./quantityPicker.css";
import { useState } from "react";

function QuantityPicker()
{
    const[quantity,setQuantity] = useState (1);
  
    function decrease(){
      
        console.log("Decreasing quantity");
        if (quantity === 1) return;
        let value = quantity - 1;
        setQuantity(value);
    }

    function increase(){
        console.log("Increasing quantity");
        setQuantity(quantity+1);
    }
//create the function to increment quantity.

    return (
        <div className="qty-Picker">
            <button className="btn btn-sm btn-dark" disabled={quantity === 1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-dark" onClick={increase}>+</button>
            
        </div>

    );
}

export default QuantityPicker;
