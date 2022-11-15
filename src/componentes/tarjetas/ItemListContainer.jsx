import { useState, useEffect } from "react";
import React from 'react'
import ItemList from "./ItemList";
import getItems  from "../services/mockServices"
import {useParams} from 'react-router-dom'

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { idCategory } = useParams()
  
  
  async function getItemsAsync() {
    let respuesta = await getItems(idCategory);
    setProductos(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  },[idCategory])

  return (
    <ItemList products={productos}/>
  )
}

export default ItemListContainer