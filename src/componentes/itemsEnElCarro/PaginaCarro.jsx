import React, {useContext} from 'react'
import { cartContext } from '../../context/cartContext'
import Boton from '../tarjetas/Boton'
import { crearOrden } from '../../services/firestore'
import { useNavigate } from 'react-router-dom'
import Formulario from './Formulario'
import "./carro.css"

function PaginaCarro() {
  const {cart, sacarItem, vaciarCarro, precioTotalCarro} = useContext(cartContext)
  let navigate = useNavigate()

  if (cart.length === 0) return <h1>Más vacio que mi cuenta bancaria</h1>

  async function handleCheckout(evt, data) {
    const ordenDeCompra = {
      buyer: data,
      items: cart,
      total: 0,
      fecha:new Date()
    }

    const ordenId = await crearOrden(ordenDeCompra)
    navigate(`/CompraFinalizada/${ordenId}`) 
  }
  
  return (
    <div className='Carro'>
      {cart.map((product) => (
      <div className='TarjetaCarro' key={product.id}>
          <img src={product.imagen} alt={product.nombre} />
          <h2>{product.nombre}</h2>
          <h4>Precio unitario: ${product.importe}</h4>
          <h4>Unidades: {product.count}</h4>
          <h4>Subtotal: ${product.importe * product.count}</h4>
          <Boton onClick={() => sacarItem(product.id)}color="red">Eliminar</Boton>
      </div>
      ))}
      <Formulario onSubmit={handleCheckout}></Formulario>
      <h3>Total: ${precioTotalCarro()}</h3>
      <Boton onClick={vaciarCarro}>Vaciar Carro</Boton>
    </div>
  )
}

export default PaginaCarro