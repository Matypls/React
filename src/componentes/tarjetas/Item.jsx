import React from 'react'
import "./tarjeta.css"
import Boton from './Boton'

function Item(props) {
  return (
    <div className='TarjetaContainer'>
        <img className='ImagenItem' src={props.imagen} alt="Imagen Producto" />
        <h3>{props.nombre}</h3>
        <p>{props.importe}</p>
        <Boton/>
    </div>
  )
}

export default Item