import React from 'react'
import "./tarjeta.css"
import Boton from './Boton'
import {Link} from 'react-router-dom'

function Item(product) {

  const urlItem = `/item/${product.id}`
  const oferta = {color: product.descuento && "green"}

  return (
    <div className='TarjetaContainer'>
        <img className='ImagenItem' src={product.imagen} alt="Imagen Producto" />
        <h3>{product.nombre}</h3>
        {product.descuento && <small>Descuento: {product.descuento}</small>}
        <p style={oferta}>{product.importe}</p>
        <Link to={urlItem}>
          <Boton children="detalle"/>
        </Link>
    </div>
  )
}

export default Item