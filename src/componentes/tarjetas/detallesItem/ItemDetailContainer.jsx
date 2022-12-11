import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import React from 'react'
import { getSingleItem } from "../../services/mockServices";
import { useParams } from 'react-router-dom' 
import Cargando from "../../carga/Cargando";

function ItemDetailContainer() {
  const [producto, setProducto] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  async function getSingleItemAsync() {
    let respuesta = await getSingleItem(id).then( respuesta => {
      setProducto(respuesta);
      setIsLoading(false)
    });
  }

  useEffect(() => {
    getSingleItemAsync()
  }, []) 

  if(isLoading)
    return (<Cargando/>)

  return (
    <ItemDetail producto={producto}/>
  );
}

export default ItemDetailContainer