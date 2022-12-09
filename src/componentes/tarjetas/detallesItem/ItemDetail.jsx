import React from 'react';
import ItemCount from '../ItemCount';
import "../tarjeta.css";
import {useContext} from "react";
import {cartContext} from "../../../context/cartContext"


function ItemDetail({producto}) {
    const { agregarAlCarro } = useContext(cartContext)
    
    function onAddToCart (count){
        alert(`agregaste ${count} items al carrito`)

        agregarAlCarro(producto,count)
        /* aca puedo agregar alerta de JS */
    }

    return (
        <div className='TarjetaDetalle'>
            <img className='ImagenItem' src={producto.imagen} alt="Imagen del producto" />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <h4>{producto.importe}</h4>
            <ItemCount stock={producto.stock} onAddToCart={onAddToCart}/>
        </div>
    );
}

export default ItemDetail