import React, { useEffect, useState } from 'react';
import Cosmetic from './Shop/Cosmetic';

 const Cosmetics =()=>{

    const [cosmetics,setCosmetics]=useState([])
    useEffect(()=>{
     fetch('data.json')
     .then(res=>res.json())
     .then(data=>setCosmetics(data))
    },[])
    return (
        
        <>
            <h1>Welcome to my Shop</h1>
            {
                cosmetics.map(cosmetic=> <Cosmetic
                cosmetic={cosmetic}
                key={cosmetic.id}></Cosmetic>)
            }
        </>
    );
};

export default Cosmetics;