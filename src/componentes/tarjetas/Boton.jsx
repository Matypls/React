import React from 'react'

function Boton(props) {
  return (
    <button className='BotonDetalle' onClick={props.onClick}>{props.children}</button>
  )
}

export default Boton