import React from 'react';
import CartWidgets from './CartWidgets';
import './navBar.css';
import {Link} from 'react-router-dom';

function ListaNav(props) {
  return (
    <div>
      <nav className="App-header">
        <Link to="/">
          <h1 className="Titulo"> Tienda Yogachaiser</h1>      
        </Link>  
        <ul>        
          <li>
            <Link to="/category/Servicios">{props.text}</Link >          
          </li>
          <li>
            <Link to="/category/Electrónica">{props.text1}</Link >          
          </li>
          <li>
            <Link to="/category/Gaming">{props.text2}</Link >          
          </li>
          <CartWidgets/>
        </ul>
      </nav>
    </div>
  )
}

export default ListaNav