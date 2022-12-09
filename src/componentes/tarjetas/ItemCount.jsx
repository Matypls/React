import React, {useState} from 'react'
import Boton from './Boton'

function ItemCount({stock, onAddToCart}) {
  const [count, setCount] = useState(1)

  function sumarArticulo(evt) {
    if (count < stock) setCount(count + 1)
  }

  function restarArticulo(evt) {
    if (count > 1) setCount(count - 1)
  }

  return (
    <div>
      <div>
        <Boton onClick={restarArticulo}>
          -
        </Boton>        
        <span>{count}</span>
        <Boton onClick={sumarArticulo}>
          +
        </Boton>
      </div>
      <div>
        <button onClick={() => onAddToCart(count)}>Agregar {count} articulo/s al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount