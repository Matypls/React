import { useState, useEffect } from "react";
import React from 'react'
import ItemList from "./ItemList";
import getItems, { getItemsByCategory }  from "../../services/firestore"
import {useParams} from 'react-router-dom'
import Cargando from "../carga/Cargando";

function ItemListContainer() {
  const [productos, setProductos] = useState(null);
  const { idCategory } = useParams()
  
  async function getItemsAsync() {
    if( !idCategory ){
      let respuesta = await getItems(idCategory);
      setProductos(respuesta);
    } else {
      let respuesta = await getItemsByCategory(idCategory)
      setProductos(respuesta)
    }
  }

  useEffect(() => {
    getItemsAsync();
  },[idCategory])

  return <>
  { productos ? <ItemList products={productos}/> : <Cargando/> }
  </> 
  
}

export default ItemListContainer