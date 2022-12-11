import React, {useContext} from 'react'
import { cartContext } from '../../context/cartContext'
import Boton from '../tarjetas/Boton'


function PaginaCarro() {
     const {cart, sacarproduct, vaciarCarro, precioTotalCarro} = useContext(cartContext)

     if (cart.length === 0) return <h1>Más vacio que mi cuenta bancaria</h1>
  return (
    <div>
        {cart.map((product) => (
        <div>
            <img src={product.imagen} alt={product.nombre} />
            <h2>{product.nombre}</h2>
            <h4>{product.importe}</h4>
            <h4>unidades: {product.count}</h4>
            <Boton onClick={() => sacarproduct(product.id)} color="red">Eliminar</Boton>
        </div>
        ))}
        <Boton onClick={() => vaciarCarro}>Vaciar Carro</Boton>
    </div>
  )
}

export default PaginaCarro