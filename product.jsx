import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";

function Product(props) {
  //this is like the init function but only for an specfic code
  useEffect(function () {
    //when the component is loaded,
    console.log("hello Im a product");
  }, []);

  return (
    <div className="product">
      {/* they key is concatenate */}
      <img src={"/images/" + props.data.image} alt=""></img>
      <h5>{props.data.title}</h5>
      <div className="prices">
        <label>Price {props.data.price}</label>
        <label>Total</label>
      </div>
      <QuantityPicker />
    </div>
  );
}

export default Product;
