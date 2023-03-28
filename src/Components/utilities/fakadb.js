// use local storage to  manage cart data
const addToDb =(id)=>{
   let shoppingCart={} ;


//    get the shopping cart

 const storedCart =localStorage.getItem('shopping-Cart')
 if(storedCart){
    // console.log( typeof storedCart)
     shoppingCart=JSON.parse(storedCart)
 } 

// add quantity
  const quantity = shoppingCart[id];
  if(quantity){
    console.log('already exists')
    const newQuantity =parseInt (quantity)+1;
    shoppingCart[id]=newQuantity;
    // localStorage.setItem(id,newQuantity)
  }else{
    shoppingCart[id]=1;
    // localStorage.setItem(id,1);

  }
  localStorage.setItem('shopping-Cart',JSON.stringify(shoppingCart))

    
}
const removeDb =id=>{
    const storedCart =localStorage.getItem('shopping-Cart')
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart)
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('shopping-Cart',JSON.stringify(shoppingCart))
        }
    }
}
const removeShoppingCart=()=>{
    localStorage.removeItem('shopping-Cart')
}
 
export {
    addToDb,
    removeDb,
removeShoppingCart};