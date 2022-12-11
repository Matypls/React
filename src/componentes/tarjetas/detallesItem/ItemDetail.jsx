import React from 'react';
import ItemCount from '../ItemCount';
import "../tarjeta.css";
import { useContext, useState } from "react";
import { cartContext } from "../../../context/cartContext"
import Boton from "../Boton"
import {Link} from 'react-router-dom'



function ItemDetail({producto}) {
    const [isInCart, setIsInCart] = useState(false)
    const { agregarAlCarro } = useContext(cartContext)
    
    function onAddToCart (count){
        alert(`agregaste ${count} items al carrito`) 
        setIsInCart(count)
        agregarAlCarro(producto,count)
        /* aca puedo agregar alerta de JS */
    }

    return (
        <div className='TarjetaDetalle'>
            <img className='ImagenItem' src={producto.imagen} alt="Imagen del producto" />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <h4>{producto.importe}</h4>            
            {isInCart ? (
                <Link to="/cart">
                    <Boton>Ir al Carro</Boton>
                </Link> ) : <ItemCount onAddToCart={onAddToCart} stock={producto.stock}/> }           
        </div>           
    );
}

export default ItemDetail