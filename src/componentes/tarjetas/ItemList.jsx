import React from 'react'
import Item from './Item';
import "./tarjeta.css"

function ItemList({products}) {
  return (
    <div className='Contenedor'>
      {products.map((product) => {
        return (
          <Item 
            key={product.id}
            id={product.id}
            imagen={product.imagen}
            nombre={product.nombre}
            importe={product.importe}
          />
        );}
      )}
    </div>
  )
}

export default ItemList