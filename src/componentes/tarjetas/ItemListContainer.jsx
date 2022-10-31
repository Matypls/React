import React from 'react'
import "./tarjeta.css"

function ItemListContainer(props) {
  return (
    <div className='TarjetaContainer'>
        <img className='ImagenTarjeta' src={props.imagen} alt="Imagen de prueba" />
        <h2>{props.greeting}</h2>
    </div>
  )
}

export default ItemListContainer