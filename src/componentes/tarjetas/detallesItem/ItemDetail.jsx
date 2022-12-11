import React from 'react';
import ItemCount from '../ItemCount';
import "../tarjeta.css";
import { useContext, useState } from "react";
import { cartContext } from "../../../context/cartContext"
import Boton from "../Boton"
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemDetail({producto}) {
    const [isInCart, setIsInCart] = useState(false)
    const { agregarAlCarro } = useContext(cartContext)
    
    function onAddToCart (count){
        toast.success('Producto agregado al Carro')
        setIsInCart(count)
        agregarAlCarro(producto,count)
    }

    return (
        <div className='TarjetaDetalle'>
            <ToastContainer/>
            <img className='ImagenItem' src={producto.imagen} alt="Imagen del producto" />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <h4>${producto.importe}</h4>            
            {isInCart ? (
                <Link to="/cart">
                    <Boton>Ir al Carro</Boton>
                </Link> ) : <ItemCount onAddToCart={onAddToCart} stock={producto.stock}/> }           
        </div>           
    );
}

export default ItemDetail