import React from 'react'
import { useParams } from 'react-router-dom'

function CompraFinalizada() {
    const {ordenId} = useParams()

    return (
    <div>
        <h1>Gracias por tu compra</h1>
        <h2>Tu codigo de compra es: {ordenId}</h2>
    </div>
  )
}

export default CompraFinalizada