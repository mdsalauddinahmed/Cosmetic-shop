import React, { useEffect, useState } from 'react';
import Cosmetic from './Shop/Cosmetic';
import { getTotalPrice } from './utilities/fakadb';

 const Cosmetics =()=>{

    const [cosmetics,setCosmetics]=useState([])
    useEffect(()=>{
     fetch('data.json')
     .then(res=>res.json())
     .then(data=>setCosmetics(data))
    },[])
    const total =getTotalPrice(cosmetics)
    return (
        
        <>
            <h1>Welcome to my Shop</h1>
            <h3>Money needed:{total}</h3>
            {
                cosmetics.map(cosmetic=> <Cosmetic
                cosmetic={cosmetic}
                key={cosmetic.id}></Cosmetic>)
            }
        </>
    );
};

export default Cosmetics;