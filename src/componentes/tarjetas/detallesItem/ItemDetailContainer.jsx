import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import React from 'react'
import { getSingleItem } from "../../services/mockServices";
import { useParams } from 'react-router-dom' 

function ItemDetailContainer() {
  const [producto, setProducto] = useState([])
  const { id } = useParams()

  async function getSingleItemAsync() {
    let respuesta = await getSingleItem(id);
    setProducto(respuesta);
  }

  useEffect(() => {
    getSingleItemAsync()
  }, []) 

  return (
    <ItemDetail producto={producto}/>
  );
}

export default ItemDetailContainer