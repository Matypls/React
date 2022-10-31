import React from 'react';
import CartWidgets from './CartWidgets';
import './navBar.css'

function ListaNav(props) {
  return (
    <nav>
      <ul>        
        <li>
          <a href="#">{props.text}</a>          
        </li>
        <li>
          <a href="#">{props.text1}</a>          
        </li>
        <li>
          <a href="#">{props.text2}</a>          
        </li>
        <CartWidgets/>
      </ul>
    </nav>
  )
}

export default ListaNav