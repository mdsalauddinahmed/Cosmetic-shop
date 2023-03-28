import React from 'react';
import {addToDb,getTotalPrice,removeDb, removeShoppingCart} from '../utilities/fakadb';

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

    // const number =[23,24,56,67,89,90]
    // const sumReducer =(pre,current)=>pre+current;
    // const total = number.reduce(sumReducer,0)s
//      {id:1,name:'alta',price:100},
//      {id:2,name:'alta',price:200},
//      {id:3,name:'alta',price:300},
//      {id:3,name:'alta',price:400},
//      {id:4,name:'alta',price:500},
//   ]
//   const sumReducer =(pre,current)=>pre+current;
 

    return (
        <div>
            <h2>Category: {name}</h2>
            <p>Only for: {price}</p>
            <p><small>product id : {id}</small></p>
            <p><small>Grand Total:{()=>getTotalPrice(props.cosmetic.price)} </small></p>

            {/* <button onClick={addToCartWithParam}>Add to cart</button> */}
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
            <button onClick={()=>removeAllCart()}>Remove all items</button>
        </div>
    );
}

export default Cosmetic;