import React from 'react';
import {addToDb,removeDb, removeShoppingCart} from '../utilities/fakadb';

function Cosmetic(props) {
    // console.log(props)
    const { name, price, id } = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id);
    };
    const removeFromCart = id => {
         removeDb(id)

    };
    const removeAllCart=()=>{
        removeShoppingCart()
    }
    //  const addToCartWithParam =()=>{
    //     addToCart(id)
    //  }
    return (
        <div>
            <h2>Category: {name}</h2>
            <p>Only for: {price}</p>
            <p><small>product id : {id}</small></p>
            {/* <button onClick={addToCartWithParam}>Add to cart</button> */}
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
            <button onClick={()=>removeAllCart()}>Remove all items</button>
        </div>
    );
}

export default Cosmetic;