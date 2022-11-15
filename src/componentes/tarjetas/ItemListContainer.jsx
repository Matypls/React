import { useState, useEffect } from "react";

import React from 'react'
import "./tarjeta.css"
import Item from './Item'
import productos from '../../data/productos'
import getItems from "../services/mockServices"


function ItemListContainer() {
  const [productos, setProducts] = useState([])

  useEffect(() => {
    getItems().then((respuestaDatos) => {
      setProducts(respuestaDatos)
    })
  }, []);

  return (
    <div className='Contenedor'>
        {productos.map((product) => {
        return (
          <Item key={product.id}
            imagen={product.imagen}
            nombre={product.nombre}
            importe={product.importe}
          />
        );}
      )}
    </div>
  );
}

export default ItemListContainer