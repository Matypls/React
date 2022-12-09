import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'

function CartWidgets() {
  const miContext = useContext(cartContext)

  return (
    <div>
      <a className='CarroItem' href='#'>🛒</a>
        <span>{miContext.itemsEnElCarro()}</span>
    </div>
  )
}

export default CartWidgets