import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

function CartWidgets() {

  const { cart, itemsEnElCarro } = useContext(cartContext);

    if (cart.length === 0) {
      return (
        <Link to="/cart">🛒</Link>
      )
    }  
    
    return (
      <div>
        <Link to="/cart"> 
          🛒<span>{itemsEnElCarro()}</span>
        </Link>
      </div>
    );
}

export default CartWidgets