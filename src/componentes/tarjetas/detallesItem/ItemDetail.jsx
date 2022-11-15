import React from 'react'
import "../tarjeta.css"

function ItemDetail({producto}) {
    return (
        <div className='TarjetaDetalle'>
            <img className='ImagenItem' src={producto.imagen} alt="Imagen del producto" />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <h4>{producto.importe}</h4>
        </div>
    );
}

export default ItemDetail