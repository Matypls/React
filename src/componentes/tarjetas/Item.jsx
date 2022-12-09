import React from 'react'
import "./tarjeta.css"
import Boton from './Boton'
import {Link} from 'react-router-dom'

function Item(product) {

  const urlItem = `/item/${product.id}`
  return (
    <div className='TarjetaContainer'>
        <img className='ImagenItem' src={product.imagen} alt="Imagen Producto" />
        <h3>{product.nombre}</h3>
        <p>{product.importe}</p>
        <Link to={urlItem}>
          <Boton children="detalle"/>
        </Link>
    </div>
  )
}

export default Item