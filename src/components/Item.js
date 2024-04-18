import React, { useState } from "react";

function Item({ name, category }) {
  const [ cart, setCart ]= useState(true)
  function cartHandler (){
    setCart(!cart)
  }
    const buttonText = cart ? "Add to Cart" : "Remove From Cart"
    const cartClass = cart ? "" : "in-cart"
   
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick= {cartHandler} className="add">{buttonText}</button>
    </li>
  );
}

// function Item({ name, category }) {

//   const [ cart, cartSetter ] = useState(true)
//   function cartHandler (){
//     cartSetter(!cart)

//   }
//   const buttContext = cart ? "Add to Cart" : "Remove From Cart"
//   const cartClass = cart ? "" : "in-cart"
 
//   return (
//     <li className={cartClass}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button onClick={cartHandler}className="add">{buttContext}</button>
//     </li>
//   );
// }


export default Item;
