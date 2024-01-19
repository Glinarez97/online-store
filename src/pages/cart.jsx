import { useEffect, useState } from 'react';
import "./cart.css";
import DataService from '../services/dataService'

function Cart(){
    const [cart, setCart] = useState([]);


    // when the page loads
    useEffect(function () {
        let service = new DataService();
        let products = service.readCart();
        console.log(products);
        setCart(products);
}, []);


    return (
        <div className="cart">
            <h1>Ready to check out?</h1>
            <h3>We have{cart.length} ready for you!</h3>

    {cart.map((prod) => (
        <div className="prod-cart">
        <img src={"/img/" + prod.image} alt=""></img>
        <h5>{prod.title}</h5>
        <h6>{prod.price}</h6>
        </div>
    ))}

    </div>

    )

}

export default Cart;
